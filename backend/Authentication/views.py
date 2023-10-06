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

@permission_classes([permissions.AllowAny])
class UserSignupView(APIView):
    def post(self, request):
        username = request.data["username"]
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
        user = MyUser.objects.filter(username=username)[0]
        if user.is_active:
            if user.check_password(password):
                return Response(get_tokens_for_user(user),status=status.HTTP_200_OK)
            else:
                return Response({"error":"Incorrect Password"},status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error":"User not verified"},status=status.HTTP_400_BAD_REQUEST)
        
        
        
def verify_email(request, token):
    try:
        token = Token.objects.get(key = token)
        user = token.user
        print(user)
        user.is_active = True
        user.save()
        token.delete()
        return Response(status=status.HTTP_200_OK)
    
    except user.DoesNotExist:
        return Response("invalid TOKEN",status=status.HTTP_400_BAD_REQUEST)
    



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
        print(request.data)
        if(Profile.objects.filter(user=request.user).exists()):
            print("exists")
            profile = Profile.objects.get(user=request.user)
            serializer = ProfileSerializer(profile, data=request.data)
        else:
            serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)