from django.urls import path
from registration import views


urlpatterns = [ path('accounts/', views.get_all_accounts, name='get_all_accounts'),
    path('signup/', views.signup, name='signup'),
    path('delete_account/<int:id>/', views.delete_account, name='delete_account'),
    path('update_profile/', views.update_profile, name='update_profile'),
    path('login/', views.login, name='login'),
    # path('verifyOTP/', views.verifyOTP, name='verifyOTP') 
    ]
