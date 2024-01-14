from rest_framework import serializers
from registration.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password', 'verified', 'otp')

        extra_kwargs = {
            'name': {'required': True},
            'email': {'required': True},
            'password': {'required': True},
        }