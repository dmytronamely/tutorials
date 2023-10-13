const PORT = 5003;
const { Server } = require('ws');

const wss = new Server({
  port: PORT
}, () => {
  console.log(`Server startded on ${PORT} port...`)
})

wss.on('connection', (ws) => {
  // console.log('WS ID:', ws.id)
  ws.on('message', (payload) => {
    let message = JSON.parse(payload);
    ws.id = '7777777'
    switch (message.event) {
      case 'connection':
        // ws.close(401)
        // TODO Connection Functional
      break;
      case 'message':
        // TODO Message Functional
      break;
    }
    wss.clients.forEach(client => {
      console.log('CLIENT ID:', client.id)
      if(client.id === '7777777') {
        client.send(JSON.stringify(message), 'SECURE ROOM ID')
      }
    })
  })
})
