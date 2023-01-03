FROM node:12-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

COPY . .

EXPOSE 9000

CMD nodemon -L --watch . index.js