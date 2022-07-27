from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder

from .models import Hat

# Create your views here.

class HatEncoder(ModelEncoder):
    model = Hat
    properties = ["fabric", "style_name", "color", "picture_url"]
    # add location into properties?


@require_http_methods(["GET", "POST"])
def api_list_hats(request):
    if request.method == "GET":
        hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatEncoder,
        )
    else:
        content = json.loads(request.body)
        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatEncoder,
            safe=False,
        )