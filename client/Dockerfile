FROM node:20.7.0-alpine3.17 as rt-client-base

WORKDIR /app
COPY package*.json ./
RUN npm install

# Build APP
FROM rt-client-base as rt-client

COPY . .

CMD ["npm", "start"]
