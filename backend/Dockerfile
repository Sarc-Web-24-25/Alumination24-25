FROM python:3
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /backend/
RUN pip install --upgrade pip
RUN pip install poetry
RUN poetry config virtualenvs.create false
COPY pyproject.toml ./
COPY README.md ./
RUN poetry install --only main --no-root
COPY wsgi-entrypoint.sh ./
COPY . ./
CMD ["poetry", "run", "python", "manage.py", "runserver" , "0.0.0.0:8000"]