FROM node:20.7.0-alpine3.17 as rt-server-base

WORKDIR /app
COPY package*.json ./
RUN npm install

# Build APP
FROM rt-server-base as rt-server

COPY . .

# CMD ["npm", "run", "lp"] => 5001
# CMD ["npm", "run", "es"] => 5002
# CMD ["npm", "run", "ws"] => 5003
