# Django REST Framework and React CRUD
## Backend Django REST Framework

### Requirements:
- Python > 3.8

### Setup database

- Create the database on your computer with docker:

    ```shell
    make create-db
    ```

- Start the database:

    ```shell
    make start-db
    ```

### Steps:
1. Install Django with python3:
    ```
    pip3 install django
    ```
2. Create Django project with `django-admin` command
    ```
    django-admin startproject django_crud_api .
    ```
4. Run migrations.
    ```
    python3 manage.py migrate
    ```
4. Run the project.
    ```
    python3 manage.py runserver
    ```

5. Open http://127.0.0.1:8000/

### Create SuperUser

```
python3 manage.py createsuperuser
```
Example:

    user: admin
    admin: admin

### Install Django REST Framework

Run command:
```
$ pip install djangorestframework
$ pip install django-cors-headers
```
https://pypi.org/project/django-cors-headers/


### Structure

- *django_crud_api/setting.py*: The file where the whole project is configured
- *manage.py*: With this file we execute commands to communicate with django, example: run the server, make migrations or create databases

### How to add a new app?

1. To start an application we execute the following command, which will create a new `datos` folder:
    ```
    python manage.py startapp datos
    ```

2. Add application to project. Go to *django_crud_api/setting* and add `datos` at the end of `INSTALLED_APPS`.
    ```
    INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'datos',
    ]

    ```


### Create Models
```
$ python3 manage.py makemigrations datos
$ python3 manage.py migrate datos
```

## Client React

### Requirements:
- Node > v16.13.0

### Steps
1. The project has been created using the `vite` tool with the command: `$ npm create vite`

2. run: 
    ```
    $ npm install
    ```
3. run: 
    ```
    $ npm i react-router-dom react-h
    ot-toast axios react-hook-form
    ```
3. run: 
    ```
    $ npm run dev
    ```
4. open:  http://localhost:5173/