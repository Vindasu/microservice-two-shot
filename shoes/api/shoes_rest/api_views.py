from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
# Create your views here.

from common.json import ModelEncoder
from .models import Bin, 