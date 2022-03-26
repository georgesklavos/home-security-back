# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL

ARG SECRET_JWT
ENV SECRET_JWT $SECRET_JWT
EXPOSE $PORT

RUN npm run start:prod