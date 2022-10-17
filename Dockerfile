# syntax=docker/dockerfile:1

FROM node:18-alpine3.15

# Copy repo

RUN mkdir /app
WORKDIR /app
COPY . /app

# Firebase env

ARG firebase_api_key
ENV FIREBASE_API_KEY=${firebase_api_key}

ARG firebase_auth_domain
ENV FIREBASE_AUTH_DOMAIN=${firebase_auth_domain}

ARG firebase_project_id
ENV FIREBASE_PROJECT_ID=${firebase_project_id}

ARG firebase_storage_bucket
ENV FIREBASE_STORAGE_BUCKET=${firebase_storage_bucket}

ARG firebase_messagind_sender_id
ENV FIREBASE_MESSAGING_SENDER_ID=${firebase_messagind_sender_id}

ARG firebase_measurement_id
ENV FIREBASE_MEASUREMENT_ID=${firebase_measurement_id}

# Microservices env

ARG api_users_url
ENV API_USERS_URL=${api_users_url}

ARG api_users_base_path
ENV API_USERS_BASE_PATH=${api_users_base_path}

# Hash token for passwords
ARG token_secret
ENV TOKEN_SECRET=${token_secret}

# Install and build

RUN npm install
RUN npm run build

# Expose is NOT supported by Heroku
# $PORT is set by Heroku

CMD ["npm", "start"]
