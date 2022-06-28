from django.shortcuts import render
from django.shortcuts import redirect, render,HttpResponse
# from .models import contact


def home(request):
    return render(request,'home.html')
def contact(request):
    return render(request,'contact.html')
def applicationForm(request):
    return render(request,'applicationForm.html')
def compare(request):
    return render(request,'compare.html')
