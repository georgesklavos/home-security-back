# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL

ARG SECRET_JWT
ENV SECRET_JWT $SECRET_JWT

RUN printenv

RUN npm run build

EXPOSE $PORT

CMD ["npm", "run", "start:prod"]