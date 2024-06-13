FROM node:16

COPY package*.json ./

WORKDIR /opt/server/backend-test

COPY . .

RUN npm install
EXPOSE 8000
CMD [ "npm", "start" ]