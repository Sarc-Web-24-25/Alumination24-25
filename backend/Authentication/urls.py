
from django.urls import path, include
from .views import *

urlpatterns = [
    path('signup', UserSignupView.as_view(), name="signup"),
    path('login', UserLoginView.as_view(), name="login"),
    path('verify/<str:token>/', verify_email, name='verify_email'),
    path('profile', ProfileView.as_view(), name='profile-detail'),
]
