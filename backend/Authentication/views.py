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
                data = get_tokens_for_user(user)
                data['is_alum'] = user.is_alum
                return Response(data,status=status.HTTP_200_OK)
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
                send_mail("Welcome to Alumination 2023", request.data['fullname'], user.username, True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
        else:
            serializer = ProfileSerializer(profile, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
        
        
        
        
        
        


import os
import csv
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Define your SMTP server and credentials
SMTP_SERVER = "smtp-auth.iitb.ac.in"
SMTP_PORT = 587
SMTP_USERNAME = "sarc@iitb.ac.in"
SMTP_PASSWORD = "87638c40a92a794bc81b6de03e5ae86c"  # Replace with your SMTP password

def send_mail(subject, userName, userEmail, isWelcome=False):
    # Create the MIME message
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SMTP_USERNAME
    msg["To"] = userEmail

    # Create the HTML email content
    welcomeMail = f'''
    <!DOCTYPE html>
<html>

<head>
    <title>{subject}</title>
</head>

<body style="font-family: Arial, sans-serif; line-height: 1.5; margin: 0; padding: 0; background-image: linear-gradient(to left top, #734f2f, #825c35, #91693b, #a07742, #ae8548, #b89152, #c39e5c, #cdab67, #d6b878, #dfc689, #e8d39b, #f1e1ad); background-size: cover; background-repeat: no-repeat;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">

        <h1 style="font-size: 24px; color: rgb(71, 28, 6); margin-top: 0; margin-bottom: 20px; font-family: 'Inknut Antiqua';">Welcome to Alumination 2023 | SARC IIT Bombay</h1>

        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">Dear {userName},</p>

        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">We hope this message finds you well and filled with excitement for the upcoming Alumination 2023 event! As the organizing team, we are thrilled to invite you to this extraordinary two-day fest that promises to be an unforgettable experience.</p>

        <p style="text-align: center; margin: 20px 0;">
            <a href="http://localhost:3000/events" style="text-decoration: none; background: linear-gradient(to bottom, #3c1a04, #a3643a 15%, #b0805f 25%, #a3643a 75%, #3c1a04 100%); color: #ffffff; padding: 10px 20px; border-radius: 5px; font-family: 'Inknut Antiqua'; font-size: 24px; display: inline-block;">Explore Events</a>
        </p>

        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">We look forward to welcoming you to Alumination 2023 and embarking on this enriching journey together. Get ready to Break The Ice, Learn from the Best, and Illuminate your path to success!</p>

        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">Regards,</p>

        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">Aastha Patel | Prerna Agrawal</p>

        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">Overall Co-ordinators</p>

        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">Student Alumni Relations Cell</p>

    </div>
</body>

</html>

    '''

    # Attach the HTML content
    if isWelcome:
        msg.attach(MIMEText(welcomeMail, "html"))

    # Create an SMTP connection and send the email
    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(SMTP_USERNAME, SMTP_PASSWORD)
            smtp.sendmail(SMTP_USERNAME, userEmail, msg.as_string())
    except:
        pass