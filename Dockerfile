# syntax=docker/dockerfile:1
FROM node:18

# For more info about datadog visit: https://docs.datadoghq.com/agent/basic_agent_usage/heroku/#using-heroku-with-docker-images

# Set args
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
ARG api_payments_url
ARG api_payments_base_path
ARG token_secret
ARG dd_api_key

# Set env
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
ENV DD_API_KEY=${dd_api_key}
ENV DD_DYNO_HOST=false
ENV DD_APM_ENABLED=true
ENV DD_DOGSTATSD_NON_LOCAL_TRAFFIC=true

# Copy files
RUN mkdir /app
WORKDIR /app
COPY . /app
COPY datadog-config/ /etc/datadog-agent/

# Install GPG dependencies
RUN apt-get update \
 && apt-get install -y gnupg apt-transport-https gpg-agent curl ca-certificates

# Add Datadog repository and signing keys
ENV DATADOG_APT_KEYRING="/usr/share/keyrings/datadog-archive-keyring.gpg"
ENV DATADOG_APT_KEYS_URL="https://keys.datadoghq.com"
RUN sh -c "echo 'deb [signed-by=${DATADOG_APT_KEYRING}] https://apt.datadoghq.com/ stable 7' > /etc/apt/sources.list.d/datadog.list"
RUN touch ${DATADOG_APT_KEYRING}
RUN curl -o /tmp/DATADOG_APT_KEY_CURRENT.public "${DATADOG_APT_KEYS_URL}/DATADOG_APT_KEY_CURRENT.public" && \
    gpg --ignore-time-conflict --no-default-keyring --keyring ${DATADOG_APT_KEYRING} --import /tmp/DATADOG_APT_KEY_CURRENT.public
RUN curl -o /tmp/DATADOG_APT_KEY_F14F620E.public "${DATADOG_APT_KEYS_URL}/DATADOG_APT_KEY_F14F620E.public" && \
    gpg --ignore-time-conflict --no-default-keyring --keyring ${DATADOG_APT_KEYRING} --import /tmp/DATADOG_APT_KEY_F14F620E.public
RUN curl -o /tmp/DATADOG_APT_KEY_382E94DE.public "${DATADOG_APT_KEYS_URL}/DATADOG_APT_KEY_382E94DE.public" && \
    gpg --ignore-time-conflict --no-default-keyring --keyring ${DATADOG_APT_KEYRING} --import /tmp/DATADOG_APT_KEY_382E94DE.public

# Expose DogStatsD and trace-agent ports
EXPOSE 8125/udp 8126/tcp

# Install the Datadog Agent
RUN apt-get update && apt-get -y --force-yes install --reinstall datadog-agent

# Install dependencies
RUN npm install

# Build dependencies
RUN npm run build

CMD ["bash", "./scripts/entrypoint.sh"]
