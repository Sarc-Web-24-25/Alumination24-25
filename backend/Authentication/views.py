from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from .models import MyUser
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken

def get_tokens_for_user(user):
    tokens = RefreshToken.for_user(user)

    return {
        'refresh': str(tokens),
        'access': str(tokens.access_token),
    }



def send_verification_email(username):
    token = Token.objects.get_or_create(user=MyUser.objects.get(username=username))[0]
    print(token)


class UserSignupView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
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



class UserLoginView(APIView):
    def post(self,request,format=None):
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