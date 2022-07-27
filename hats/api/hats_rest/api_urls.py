from django.urls import path

from .api_views import api_list_hats

urlpatterns = [
    path("hats_rest/", api_list_hats, name="api_list_attendees"),
]