# syntax=docker/dockerfile:1

FROM node:18-alpine3.15 as builder

ARG firebase_api_key
ARG firebase_auth_domain
ARG firebase_project_id
ARG firebase_storage_bucket
ARG firebase_messaging_sender_id
ARG firebase_measurement_id
ARG firebase_api_id
ARG api_users_url
ARG api_users_base_path
ARG api_trips_url
ARG api_trips_base_path
ARG token_secret

ENV FIREBASE_API_KEY=${firebase_api_key}
ENV FIREBASE_AUTH_DOMAIN=${firebase_auth_domain}
ENV FIREBASE_PROJECT_ID=${firebase_project_id}
ENV FIREBASE_STORAGE_BUCKET=${firebase_storage_bucket}
ENV FIREBASE_MESSAGING_SENDER_ID=${firebase_messaging_sender_id}
ENV FIREBASE_MEASUREMENT_ID=${firebase_measurement_id}
ENV FIREBASE_API_ID=${firebase_api_id}
ENV API_USERS_URL=${api_users_url}
ENV API_USERS_BASE_PATH=${api_users_base_path}
ENV API_TRIPS_URL=${api_trips_url}
ENV API_TRIPS_BASE_PATH=${api_trips_base_path}
ENV API_PAYMENTS_URL=${api_payments_url}
ENV API_PAYMENTS_BASE_PATH=${api_payments_base_path}
ENV TOKEN_SECRET=${token_secret}

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

RUN adduser -D myuser
USER myuser

CMD npm run start
