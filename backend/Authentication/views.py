from django.shortcuts import render, redirect
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
    send_mail(subject="Verify your email | Alumination 2024 | SARC IIT Bombay", userName="User", userEmail=username, isVerify=True, verificationToken=token)
    print(token)
    
    
def send_forgot_password_email(username):
    token = Token.objects.get_or_create(user=MyUser.objects.get(username=username))[0]
    send_mail(subject="Reset Password | Alumination 2024 | SARC IIT Bombay", userName="User", userEmail=username, isForgot=True, forgotToken=token)
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
    def get(self, request, key, format=None):  # Use 'key' instead of 'token'
        try:
            # Retrieve the token object using 'key' from the URL parameter
            token_object = Token.objects.get(key=key)  # Change 'token' to 'key'
            user = token_object.user
            if user.is_active:
                return redirect('http://localhost:3000/login')  # Redirect if already verified
            user.is_active = True
            user.save()
            return redirect('http://localhost:3000/login')  # Redirect after successful verification
        except Token.DoesNotExist:
            print("Error while verifying key: Token does not exist")
            return Response("No user found, please signup", status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print("Error while verifying key", e)
            return Response("An error occurred", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
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
                send_mail("Welcome to Alumination 2024", request.data['fullname'], user.username, True)
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

def send_mail(subject, userName, userEmail, isWelcome=False, isVerify=False, isForgot=False, verificationToken=None, forgotToken=None, isEvent=False, eventName=""):
    # Create the MIME message
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SMTP_USERNAME
    msg["To"] = userEmail
    proxy = 'http://127.0.0.1:8000/api/authenticate'
    
    eventmail = f'''
    <!DOCTYPE html>
<html>

<head>
    <title>{subject}</title>
</head>

<body
    style="font-family: Arial, sans-serif; line-height: 1.5; margin: 0; padding: 0; background: linear-gradient(to right, #cd7f32, #cf9e7a, #e8bb9e, #cd7f32); background-blend-mode: multiply; box-shadow: inset #532915 0 0 0 5px, inset #652a0e 0 0 0 1px, inset #80471c 0 0 0 10px, inset #9a7b4f 0 0 0 11px, inset #deb887 0 0 0 16px, inset #f5deb3 0 0 0 17px, inset #fff8dc 0 0 0 21px, inset #fef8e0 0 0 0 22px;">
    <div class="container"
        style="max-width: 600px; margin: 0 auto; padding: 40px;  background-size: cover; background-repeat: no-repeat;">
        <h1
            style="font-size: 24px; color: rgb(71, 28, 6); margin-top: 0; margin-bottom: 20px; font-family: 'Inknut Antiqua';">
            Successfully Registered</h1>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Dear {userName},</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            You have successfully registered for the {eventName}</p>
            <p
                style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
                If you have any questions or need further assistance, please contact our support team at
                alumination.sarc.iitb@gmail.com.</p>
        
        
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Regards,</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Aastha Patel | Prerna Agrawal</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Overall Co-ordinators</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Student Alumni Relations Cell</p>
    </div>
</body>

</html>
    '''
    
    
    forgotMail = f'''
        <!DOCTYPE html>
<html>

<head>
    <title>{subject}</title>
</head>

<body style="font-family: Arial, sans-serif; line-height: 1.5; margin: 0; padding: 0; background: linear-gradient(to right, #cd7f32, #cf9e7a, #e8bb9e, #cd7f32); background-blend-mode: multiply; box-shadow: inset #532915 0 0 0 5px, inset #652a0e 0 0 0 1px, inset #80471c 0 0 0 10px, inset #9a7b4f 0 0 0 11px, inset #deb887 0 0 0 16px, inset #f5deb3 0 0 0 17px, inset #fff8dc 0 0 0 21px, inset #fef8e0 0 0 0 22px;">
    <div class="container"
        style="max-width: 600px; margin: 0 auto; padding: 40px;  background-size: cover; background-repeat: no-repeat;">
        <h1
            style="font-size: 24px; color: rgb(71, 28, 6); margin-top: 0; margin-bottom: 20px; font-family: 'Inknut Antiqua';">
            Forgot Password</h1>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Dear User,</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Below is the link for reseting your password:</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            <a href="{proxy}/changePassword/{forgotToken}"
                style="text-decoration: none; background: linear-gradient(to bottom, #3c1a04, #a3643a 15%, #b0805f 25%, #a3643a 75%, #3c1a04 100%); color: #ffffff; padding: 10px 20px; border-radius: 5px; font-family: 'Inknut Antiqua'; font-size: 24px; display: inline-block;">Verify
                Email</a></p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            If you have any questions, please contact
            our support team at <a style="text-decoration: none; color: rgb(71, 28, 6);"
                href="mailto:alumination.sarc.iitb@gmail.com">alumination.sarc.iitb@gmail.com</a></p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Regards,</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Aastha Patel | Prerna Agrawal</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Overall Co-ordinators</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Student Alumni Relations Cell</p>
    </div>
</body>

</html>
    '''
    
    
    verificationMail = f'''
    <!DOCTYPE html>
<html>

<head>
    <title>Alumination 2024 | SARC IIT Bombay</title>
</head>

<body style="font-family: Arial, sans-serif; line-height: 1.5; margin: 0; padding: 0; background: linear-gradient(to right, #cd7f32, #cf9e7a, #e8bb9e, #cd7f32); background-blend-mode: multiply; box-shadow: inset #532915 0 0 0 5px, inset #652a0e 0 0 0 1px, inset #80471c 0 0 0 10px, inset #9a7b4f 0 0 0 11px, inset #deb887 0 0 0 16px, inset #f5deb3 0 0 0 17px, inset #fff8dc 0 0 0 21px, inset #fef8e0 0 0 0 22px;">
    <div class="container"
        style="max-width: 600px; margin: 0 auto; padding: 40px;  background-size: cover; background-repeat: no-repeat; ">
        <h1
            style="font-size: 24px; color: rgb(71, 28, 6); margin-top: 0; margin-bottom: 20px; font-family: 'Inknut Antiqua';">
            User Verification of Alumination 2024 | SARC IIT Bombay</h1>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Dear User,</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Thank you for signing up for Alumination. To complete your registration, please click the following link to
            verify your email address:</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            <a href="{proxy}/verify/{verificationToken}"
                style="text-decoration: none; background: linear-gradient(to bottom, #3c1a04, #a3643a 15%, #b0805f 25%, #a3643a 75%, #3c1a04 100%); color: #ffffff; padding: 10px 20px; border-radius: 5px; font-family: 'Inknut Antiqua'; font-size: 24px; display: inline-block;">Verify
                Email</a></p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            If you did not sign up for Alumination, please ignore this email. If you have any questions, please contact
            our support team at <a style="text-decoration: none; color: rgb(71, 28, 6);"
                href="mailto:alumination.sarc.iitb@gmail.com">alumination.sarc.iitb@gmail.com</a></p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Regards,</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Aniruddh Goyal</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Overall Co-ordinators</p>
        <p
            style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
            Student Alumni Relations Cell</p>
    </div>
</body>

</html>
    '''

    # Create the HTML email content
    welcomeMail = f'''
    <!DOCTYPE html>
<html>

<head>
    <title>{subject}</title>
</head>

<body style="font-family: Arial, sans-serif; line-height: 1.5; margin: 0; padding: 0; background: linear-gradient(to right, #cd7f32, #cf9e7a, #e8bb9e, #cd7f32); background-blend-mode: multiply;
box-shadow: inset #532915 0 0 0 5px, inset #652a0e 0 0 0 1px, inset #80471c 0 0 0 10px, inset #9a7b4f 0 0 0 11px, inset #deb887 0 0 0 16px, inset #f5deb3 0 0 0 17px, inset #fff8dc 0 0 0 21px, inset #fef8e0 0 0 0 22px;">
    <div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-size: cover; background-repeat: no-repeat;">
        <h1 style="font-size: 24px; color: rgb(71, 28, 6); margin-top: 0; margin-bottom: 20px; font-family: 'Inknut Antiqua';">Welcome to Alumination 2024 | SARC IIT Bombay</h1>
        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">Dear User,</p>
        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">We hope this message finds you well and filled with excitement for the upcoming Alumination 2024 event! As the organizing team, we are thrilled to invite you to this extraordinary two-day fest that promises to be an unforgettable experience.</p>
        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">
        
        <a href="{proxy}/events" style="text-decoration: none; background: linear-gradient(to bottom, #3c1a04, #a3643a 15%, #b0805f 25%, #a3643a 75%, #3c1a04 100%); color: #ffffff; padding: 10px 20px; border-radius: 5px; font-family: 'Inknut Antiqua'; font-size: 24px; display: inline-block;">Explore Events</a>
        
        </p>
        <p style="color: rgb(71, 28, 6); margin-bottom: 10px; font-family: 'Inknut Antiqua'; font-size: 20px; text-align: justify;">We look forward to welcoming you to Alumination 2024 and embarking on this enriching journey together. Get ready to Break The Ice, Learn from the Best, and Illuminate your path to success!</p>
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
        
    elif isVerify:
        msg.attach(MIMEText(verificationMail, "html"))
    
    elif isForgot:
        msg.attach(MIMEText(forgotMail, "html"))
        
    elif isEvent:
        msg.attach(MIMEText(eventmail, "html"))

    # Create an SMTP connection and send the email
    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(SMTP_USERNAME, SMTP_PASSWORD)
            smtp.sendmail(SMTP_USERNAME, userEmail, msg.as_string())
            print("Email sent successfully")
    except Exception as e:
        print("Error sending email", e)
        pass