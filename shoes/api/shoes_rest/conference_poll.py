import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "attendees_bc.settings")
django.setup()


from .models import BinVO


def get_conferences():
    response = requests.get("http://wardrobe-api:8000/")
    content = json.loads(response.content)
    for conference in content["conferences"]:
        BinVO.objects.update_or_create(
            import_href=conference["href"],
            defaults={"name": conference["name"]},
        )


def poll():
    while True:
        try:
            get_conferences()
        except Exception as e:
            print(e)
        time.sleep(5)


if __name__ == "__main__":
    poll()
