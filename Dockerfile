# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN printenv

RUN npm run build

EXPOSE $PORT

CMD ["npm", "run", "start:prod"]