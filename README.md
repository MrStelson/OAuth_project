# OAuth_project

---
## Information about Frameworks:
- Django
- Social-auth-app-django
- i18next (JS)
---
### Start project
```
python -m venv venv
```
```
venv\Scripts\activate
```
```
pip install pip-tools
```
```
pip-sync
```
```
python manage.py runserver
```
---
### Form registration and authentication with value validation (regular expressions) and change language, supporting OAuth 2.0 protocol (VK and Google)

--- 

#### Before start project necessary create virtualenv ".env" with VK and Google tokens
- SOCIAL_AUTH_VK_OAUTH2_KEY = "<your VK key>"
- SOCIAL_AUTH_VK_OAUTH2_SECRET = "<your VK secret>"
- SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = "<your Google key>"
- SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = "<your Google secret>"

