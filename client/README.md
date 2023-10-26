#### Client

##### _Install:_
```bash
nvm install 20.7.0 && nvm use 20.7.0 && npm install
```

##### _Start:_
```bash
npm start
```
##### BUILD
```bash
docker build --rm -t realtime/client .
```

##### RUN
```bash
docker run --rm  -d --name rt-client -p 3000:3000 realtime/client
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
