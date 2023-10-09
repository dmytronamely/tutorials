const PORT = 5002;
const express = require('express');
const cors = require('cors');
const { EventEmitter } = require('events');
const emitter = new EventEmitter();
const app = express();

app.use(cors({
  maxAge: '3600',
  origin: "*",
  methods: ["GET", "POST"],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));
app.use(express.json());

// Listener
app.get('/subscribe', (req, res) => {
  res.writeHead(200, {
    'Connection': 'keep-alilve',
    'Content-type': 'text/event-stream',
    'Cache-Control': 'no-cache'
  })

  emitter.on('newMessage', (message) => {
    res.write(`data: ${JSON.stringify(message)} \n\n`)
  })
})

// Broadcaster
app.post('/new-messages', (req, res) => {
  const message = req.body;
  // console.log('NEW:', message);
  // Send message to all listeners on 'newMessage'
  emitter.emit('newMessage', message);
  res.status(200).end();
})


app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
