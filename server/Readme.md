#### Server

##### _Install:_
```bash
nvm install 20.7.0 && nvm use 20.7.0 && npm install
```

##### _Start:_
```bash
npm start
```
##### _Got to:_
> http://localhost:5001


##### BUILD
```bash
docker build --rm -t realtime/server .
```

##### RUN
##### Long Polling
```bash
docker run --rm  -d --name rt-server-lp -p 5001:5001 realtime/server npm run lp
```
##### Event Sourcing
```bash
docker run --rm  -d --name rt-server-es -p 5002:5002 realtime/server npm run es
```

##### WebSockets 
```bash
docker run --rm  -d --name rt-server-ws -p 5003:5003 realtime/server npm run ws
```

##### Kill
```bash
docker kill rt-client
```

##### List of Docker Images
```bash
docker images
```

##### List of Docker Containers
```bash
docker ps
```
