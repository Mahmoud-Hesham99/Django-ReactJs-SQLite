from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from registration.models import User
from registration.serializers import UserSerializer
import random

# Create your views here.
@csrf_exempt
def get_all_accounts(request, id=0):
    if request.method=='GET':
        users = User.objects.filter(verified=True)
        users_serializer = UserSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)

@csrf_exempt
def signup(request, id=0):
    user_data = JSONParser().parse(request)
    if request.method=='POST':
        user_data['otp'] = str(random.randint(100000, 999999))  # Generate random 6-digit OTP
        user_data['verified'] = False
        # We should send an email to the user with the OTP or generate a token and send it
        # then we check if the OTP is correct
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Account registered Successfully!", safe=False)
        return JsonResponse("Something went wrong :(", safe=False)
    
@csrf_exempt
def update_profile(request,id=0):
    user_data = JSONParser().parse(request)
    if request.method=='PUT':
        user = User.objects.get(id=user_data['id'])
        user_serializer = UserSerializer(user, data=user_data, partial=True)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Account updated Successfully!", safe=False)
        return JsonResponse("Something went wrong :(", safe=False)

@csrf_exempt
def delete_account(request,id=0):
    if request.method=='DELETE':
        user = User.objects.get(id=id)
        user.delete()
        return JsonResponse("Account deleted Successfully!", safe=False)

# @csrf_exempt
# def verifyOTP(request, id=0):
    # # we can use the following part to verify the OTP
    # user_data = JSONParser().parse(request)
    # if request.method== 'PUT' and 'otp' in user_data:
    #     user = User.objects.get(email=user_data['email'])
    #     if user.otp == user_data['otp']:
    #         user_data['verified'] = True
    #         user_serializer = UserSerializer(user, data=user_data, partial=True)
    #         if user_serializer.is_valid():
    #             user_serializer.save()
    #         return JsonResponse("Account verified Successfully!", safe=False)
    #     return JsonResponse("Something went wrong :(", safe=False)
    # pass