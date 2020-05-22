FROM node:12

WORKDIR /usr/src/eyes-please-server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]