# pull official base image
FROM python:3.8.0-alpine

# install dependencies
RUN apk update && \
  apk add --virtual build-deps gcc python-dev musl-dev && \
  apk add netcat-openbsd

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV FLASK_ENV production
ENV APP_SETTINGS project.config.ProductionConfig

COPY ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD python manage.py run -h 0.0.0.0