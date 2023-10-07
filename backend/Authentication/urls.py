
from django.urls import path, include
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('signup', csrf_exempt(UserSignupView.as_view()), name="signup"),
    path('login', csrf_exempt(UserLoginView.as_view()), name="login"),
    path('verify/<str:key>/', VerifyEmailView.as_view(), name='verify_email'),
    path('profile', ProfileView.as_view(), name='profile-detail'),
    path('sendForgotPasswordLink', SendForgotPasswordLink.as_view(), name='forgot_password'),
    path('resetPassword/<str:key>/', ResetPasswordView.as_view(), name='reset_password'),
]
