from django.shortcuts import render


def navigation(request):
    return render(request, 'navigation.html')
