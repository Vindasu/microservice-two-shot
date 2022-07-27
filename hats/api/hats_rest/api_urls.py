from django.urls import path

from .api_views import api_hats, api_hat

urlpatterns = [
    path("hats_rest/", api_hats, name="api_hats"),
    path("hats_rest/<int:pk>/", api_hat, name="api_hat"),
]