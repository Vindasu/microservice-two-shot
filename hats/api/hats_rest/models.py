from django.db import models

# Create your models here.

class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100, null=True, blank=True)
    # section_number = models.PositiveSmallIntegerField()
    # shelf_number = models.PositiveSmallIntegerField()
    
class Hat(models.Model):
    fabric = models.CharField(max_length=200, null=True, blank=True)
    style_name = models.CharField(max_length=200, null=True, blank=True)
    color = models.CharField(max_length=200, null=True, blank=True)
    picture_url = models.URLField(null=True, blank=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )