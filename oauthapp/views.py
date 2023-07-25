from django.contrib.auth import logout
from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request, 'oauthapp/index.html')


def login(request):
    return render(request, 'oauthapp/login.html')


@login_required()
def profile(request):
    user = request.user
    return render(request, 'oauthapp/profile.html', {'user': user})


@login_required()
def logout_user(request):
    logout(request)
    return render(request, 'oauthapp/index.html')
