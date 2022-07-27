from django.db import models

# Create your models here.

class LocationVO(models.Model):
    closet_name = models.CharField(max_length=200, null=True, blank=True)
    
    # def get_api_url(self):
    #     return reverse("api_show_location", kwargs={"pk": self.pk})

class Hat(models.Model):
    fabric = models.CharField(max_length=200, null=True, blank=True)
    style_name = models.CharField(max_length=200, null=True, blank=True)
    color = models.CharField(max_length=200, null=True, blank=True)
    picture_url = models.URLField(null=True, blank=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.CASCADE,
    )