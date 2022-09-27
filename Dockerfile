# syntax=docker/dockerfile:1

FROM node:18-alpine3.15 as builder

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

# Expose is NOT supported by Heroku
# $PORT is set by Heroku

CMD ["npm", "start"]
