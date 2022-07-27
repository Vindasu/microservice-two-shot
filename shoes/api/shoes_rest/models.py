from django.db import models

# Create your models here.
class Shoe(models.model):
    manufacturer = models.CharField(max_length=200, null=True, blank = True)
    model_name = models.CharField(max_length=200, null=True, blank = True)
    color = models.CharField(max_length=200, null=True, blank = True)
    picture_url = models.URLfield(null=True)
