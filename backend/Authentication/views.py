from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status,generics
from .serializers import UserSerializer,ProfileSerializer
from rest_framework.authtoken.models import Token
from .models import MyUser,Profile
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.views.decorators.csrf import csrf_exempt

def get_tokens_for_user(user):
    tokens = RefreshToken.for_user(user)

    return {
        'refresh': str(tokens),
        'access': str(tokens.access_token),
    }



def send_verification_email(username):
    token = Token.objects.get_or_create(user=MyUser.objects.get(username=username))[0]
    print(token)
    
    
def send_forgot_password_email(username):
    token = Token.objects.get_or_create(user=MyUser.objects.get(username=username))[0]
    print(token)

@permission_classes([permissions.AllowAny])
class UserSignupView(APIView):
    def post(self, request):
        username = request.data["username"]
        print(request.data)
        if MyUser.objects.filter(username=username).exists():
            user = MyUser.objects.filter(username=username)[0]
            if user.is_active:
                return Response(
                    {"error": "User already exists"}, status=status.HTTP_400_BAD_REQUEST
                )
            else:
                user.delete()
        print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_verification_email(username)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@permission_classes([permissions.AllowAny])
class UserLoginView(APIView):
    def post(self,request):
        username = request.data["username"]
        password = request.data["password"]
        try:
            user = MyUser.objects.get(username=username)
        except MyUser.DoesNotExist:
            print("user does not exist")
            return Response({"error":"User does not exist"},status=status.HTTP_400_BAD_REQUEST)
        if user.is_active:
            if user.check_password(password):
                return Response(get_tokens_for_user(user),status=status.HTTP_200_OK)
            else:
                return Response({"error":"Incorrect Password"},status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error":"User not verified"},status=status.HTTP_400_BAD_REQUEST)


@permission_classes([permissions.AllowAny])
class SendForgotPasswordLink(APIView):
    def post(self,request):
        username = request.data["username"]
        try:
            user = MyUser.objects.get(username=username)
        except MyUser.DoesNotExist:
            return Response({"error":"User does not exist"},status=status.HTTP_400_BAD_REQUEST)
        if user.is_active:
            send_forgot_password_email(username)
            return Response({"success":"Email sent"},status=status.HTTP_200_OK)
        else:
            return Response({"error":"User not verified"},status=status.HTTP_400_BAD_REQUEST)
       

@permission_classes([permissions.AllowAny]) 
class ResetPasswordView(APIView):
    def post(self,request,key):
        try:
            token = Token.objects.filter(key=key)
            if(len(token)==0):
                return Response("invalid TOKEN",status=status.HTTP_400_BAD_REQUEST)
        except MyUser.DoesNotExist:
            return Response("invalid TOKEN",status=status.HTTP_400_BAD_REQUEST)
        token = token[0]
        user = token.user
        print(user)
        user.set_password(request.data["password"])
        user.save()
        token.delete()
        return Response(status=status.HTTP_200_OK)
        
        
@permission_classes([permissions.AllowAny])
class VerifyEmailView(APIView):
    def post(self,request,key):
        try:
            token = Token.objects.filter(key=key)
            if(len(token)==0):
                return Response("invalid TOKEN",status=status.HTTP_400_BAD_REQUEST)
        except MyUser.DoesNotExist:
            return Response("invalid TOKEN",status=status.HTTP_400_BAD_REQUEST)
        token = token[0]
        user = token.user
        print(user)
        user.is_active = True
        user.save()
        token.delete()
        return Response(status=status.HTTP_200_OK)
    
    



from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProfileSerializer
from .models import Profile






from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ProfileView(APIView):
    def get(self, request, format=None):
        try:
            profile = request.user.profile
            serializer = ProfileSerializer(profile)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Profile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        try:
            profile = Profile.objects.get(user=request.user)
            serializer = ProfileSerializer(profile, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Profile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request, format=None):
        request.data._mutable = True
        print(request.data)
        try: 
            user = MyUser.objects.get(id=request.user.id)
            request.data["user"] = user.id
        except MyUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        if not user.is_active:
            print("user not verified")
            return Response({"error": "User not verified"}, status=status.HTTP_400_BAD_REQUEST)
        if user.is_alum:
            request.data["is_alumni"] = True
        try:
            profile = Profile.objects.get(user=request.user)
        except Profile.DoesNotExist:
            profile = None
            
        if profile is None:
            serializer = ProfileSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = ProfileSerializer(profile, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)