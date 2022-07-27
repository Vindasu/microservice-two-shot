from django.urls import path
from .api_views import api_list_shoes, api_show_shoes

urlpatterns = [
    path("/bins/<int:pk>/shoes/", api_list_shoes, name="api_list_shoes"),
    path("/bins/<int:pk>/shoes/<int:pk>", api_show_shoes, name="api_show_shoes")
]