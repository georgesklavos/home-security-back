# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ENV DATABASE_URL $DATABASE_URL
RUN printenv
# ENV SECRET_JWT $SECRET_JWT

RUN npm run build

EXPOSE $PORT

RUN npm run start:prod