# Generated by Django 5.0.1 on 2024-01-14 00:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='name', max_length=50)),
                ('email', models.CharField(default='email', max_length=50, unique=True)),
                ('password', models.CharField(default='password', max_length=50)),
            ],
        ),
    ]
