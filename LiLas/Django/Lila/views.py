from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def LasMain(req):
    print(req.GET['name'])
    return render(req,'index.html',{'NAME':req.GET['name']})