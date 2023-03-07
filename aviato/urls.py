from django.urls import path 
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render 
from django.core.serializers.json import DjangoJSONEncoder

from .forms import Geo
from .models import Applications

from loguru import logger 


class MyJsonResponse(JsonResponse):
    def __init__(self, data, encoder = DjangoJSONEncoder, safe = True, **kwargs):
        json_dumps_params = dict(ensure_ascii = False)
        super().__init__(data, encoder, safe, json_dumps_params, **kwargs)


def index(request):
    if request.method == 'POST':
        id_or_phone = request.POST.get('id_or_phone') 

        try:
            p = Applications.objects.filter(pk = id_or_phone)
            logger.success(p)

            if len(p) >= 1:
                return render(request, 'index.html',{
                    'form': Geo(),
                    'product': p
                })
        except:
            pass

        p = Applications.objects.filter(phone = id_or_phone)
        logger.success(p)

        if len(p) >= 1:
            return render(request, 'index.html', {
                'form': Geo(),
                'product': p
            })
        return render(request, 'index.html',{
                'form': Geo(),
                'product': 'Ничего не найдено'
        })
    
    return render(request, 'index.html',{
        'form': Geo
    })
