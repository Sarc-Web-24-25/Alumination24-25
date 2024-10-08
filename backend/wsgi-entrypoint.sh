#!/bin/bash

poetry run python manage.py makemigrations 
poetry run python manage.py makemigrations Authentication
poetry run python manage.py makemigrations Events
poetry run python manage.py migrate 

poetry run python manage.py collectstatic --noinput
poetry run python manage.py runserver 0.0.0.0:8000
