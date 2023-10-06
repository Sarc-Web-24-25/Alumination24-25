
from django.urls import path, include
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('signup', csrf_exempt(UserSignupView.as_view()), name="signup"),
    path('login', csrf_exempt(UserLoginView.as_view()), name="login"),
    path('verify/<str:token>/', verify_email, name='verify_email'),
    path('profile', ProfileView.as_view(), name='profile-detail'),
]
