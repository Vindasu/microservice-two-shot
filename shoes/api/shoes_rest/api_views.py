from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
# Create your views here.

from common.json import ModelEncoder
from .models import Bin, Shoe

class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = ["model_name", "href"]

class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = ["manufacturer", "model_name", "color", "picture_url"]




@require_http_methods(["GET", "POST"])
def api_list_shoes(request):
    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            bin = Bin.objects.get(id=content["bin"])
            content["bin"] = bin
        except Shoe.DoesNotExist:
            return JsonResponse(
                {"message":"Invalid Shoe ID"},
                status=400,
            )
        shoe = Shoe.objects.create(**content)
        return JsonResponse(
            shoe,
            encoder=ShoeEncoder,
            safe=False,
        )