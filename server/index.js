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
app.get('/get-messages', (req, res) => {
  emitter.once('newMessage', (message) => {
    res.status(200).json(message);
  })
})

// Broadcaster
app.post('/new-messages', (req, res) => {
  const message = req.body;
  emitter.emit('newMessage', message);
  res.status(200).end();
})


app.listen(5001, () => console.log('Server started on 5001 port'));
