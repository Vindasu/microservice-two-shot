from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import Hat

# Create your views here.

@require_http_methods(["GET", "POST"])
def api_list_hats(request):
    if request.method == "GET":
        hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            
        )