FROM node:18
LABEL authors="ipastu"

WORKDIR /usr/src/app

COPY . .

RUN npm ci

VOLUME /usr/src/app

CMD ["npm", "run", "start:dev"]