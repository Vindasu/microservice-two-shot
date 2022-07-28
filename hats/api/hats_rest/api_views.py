from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .acls import get_photo
from common.json import ModelEncoder

from .models import Hat, LocationVO

# Create your views here.

class HatListEncoder(ModelEncoder):
    model = Hat
    properties = [
        "id",
        "fabric",
        "style_name",
        "color",
        "picture_url",
    ]

    def get_extra_data(self, o):
        return {"location": o.location.closet_name}

class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "id",
        "fabric",
        "style_name",
        "color",
        "picture_url",
    ]

    def get_extra_data(self, o):
        return {"location": o.location.closet_name}

@require_http_methods(["GET", "POST"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id is not None:
            hats = Hat.objects.filter(location=location_vo_id)
        else:
            hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            location = LocationVO.objects.get(import_href=content["location"])
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400,
            )
        # photo = get_photo(content["fabric"], content["style_name"])
        # content.update(photo)
        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatListEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_hat(request, pk):
    if request.method == "GET":
        try:
            hat = Hat.objects.get(id=pk)
            return JsonResponse(
                hat,
                encoder=HatDetailEncoder,
                safe=False,
            )
        except Hat.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            hat = Hat.objects.get(id=pk)
            hat.delete()
            return JsonResponse(
                hat,
                encoder=HatDetailEncoder,
                safe=False,
            )
        except Hat.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    # else: # PUT
    #     try:
    #         content = json.loads(request.body)
    #         hat = Hat.objects.get(id=pk)

    #         props = ["fabric", "style_name", "color"] # add pic / location props
    #         for prop in props:
    #             if prop in content:
    #                 setattr(hat, prop, content[prop])
    #         hat.save()
    #         return JsonResponse(
    #             hat,
    #             encoder=HatListEncoder,
    #             safe=False,
    #         )
    #     except Hat.DoesNotExist:
    #         response = JsonResponse({"message": "Does not exist"})
    #         response.status_code = 404
    #         return response