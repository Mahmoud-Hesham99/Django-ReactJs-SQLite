from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default="name")
    email = models.EmailField(max_length=50, default="email", unique=True)
    password = models.CharField(max_length=50, default="password")
    verified = models.BooleanField(default=False)
    otp = models.CharField(max_length=6,)