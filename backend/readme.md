# Backend - Django Python

## Model User:

### Attributes
-   id (primary_key)
-   name 
-   email (unique=True)
-   password
-   verified (Boolean)
-   otp (max_length=6)

### APIs

- accounts/ *Get all the verifited accounts.
- signup/ *Signup a new account having name, email , password as required fields and it generates a random OTP for that user
- update_profile/ *Updates the information of the user using his id
- delete_account/$id/ *Deletes an account with specified id
- verifyOTP/ *Commented but can be used to verify the account
- login/ *Used to login the user using his email and password *The pass SHOULD BE HASHED
- get_profile/ *Gets the name and email of the user using his id *A token should be generated to get his data along with the id

### Account confirmation via email - Not Implemented
- Send Confirmation Email:
1. After saving the user, generate a unique token for email verification.
2. Store this token in the database alongside the user in a new field called token.
3. Send a confirmation email to the user's provided email address containing a verification link that includes the token.

- Email Verification:
1. Create an endpoint that handles the verification link.
2. When the user clicks the link, validate the token from the link against the stored token in the database.
3. If the tokens match, update the user's verified field to True

### Password Reset - Not Implememted
-Request Password Reset:
1. Allow users to request a password reset via email using a button or something.
2. Generate a secure token for resetting the password.
3. Store the token in the database alongside the user.
3. Send an email to the user's email address containing a link with the reset token.

- Password Reset Endpoint:
1. Create an endpoint that handles the reset link.
2. Validate the token from the link against the stored token in the database.
3. If the tokens match, allow the user to reset their password.

### Database used is SQLite

### To be noted: 
> Passwords are not hashed which they should be for more security. 

> Tokens should be generated when user logs in for authentication.

## Prerequisites
- Python: 3.11.4

### Installation

- pip install django
- pip install djangorestframework
- pip install django-cors-headers


```bash
# Clone the repository
git clone https://github.com/Mahmoud-Hesham99/Django-ReactJs-SQLite

# Navigate to the project directory
cd backend

# Run backend
python manage.py runserver