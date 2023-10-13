import { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

function WebSock() {
  const socket = useRef()
  const inputRef = useRef() 
  const messagesEndRef = useRef() 
  const subscribeRef = useRef(null)
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])
  const [subscribed, setSubscribed] = useState(false)
  const SUBSCRIBE_URL = 'ws://localhost:5003'

  useEffect(() => {
    subscribe()
    focus()
    return  () => clearSubscriptionTimeout()
  }, [])

  useEffect(() => { scrollToBottom() }, [messages])

  const clearSubscriptionTimeout = () => {
    if(subscribeRef.current) {
      clearTimeout(subscribeRef.current)
    }
  }

  const subscribe = async () => {
    socket.current = new WebSocket(SUBSCRIBE_URL)

    socket.current.onopen = () => {
      setSubscribed(true)
      socket.current.send(JSON.stringify(message('connection')))
    }

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data)
      
      setMessages(prev => [...prev, message])
    } 

    socket.current.onclose = () => {
      setSubscribed(false)
      subscribeRef.current = setTimeout(() => { subscribe() }, 3000)
    }

    socket.current.onerror = () => console.log('Something wehn wrong')
  }
  
  // INFO: updated every render
  // Function, because need recalculate time every call it 
  const message = (eventName) => ({
    event: eventName,
    id: uuidv4(),
    time: moment().format('HH:mm A'),
    message: value,
  })
  
  const sendMessage = async () => {
    if (value.length > 0) {
      socket.current.send(
        JSON.stringify(
          message('message')
        )
      )
    }
    setValue('')
  }

  const focus = () => inputRef.current?.focus()
  const onKeyUp = (event) => { if (event.keyCode === 13) sendMessage() }
  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth"}) }

  return (
    <div className='chat'>
      <div className='messages'>
        {
          messages.map(mess => (
              <div className='message' key={mess.id}>
                <div className='meta'>{mess.time} [{mess.event}]</div>
                <div className='body'>{ mess.message }</div>
              </div>
            )
          )
        }
        <div ref={messagesEndRef} />
      </div>
      <div className='form'>
        <input
          className={ subscribed ? 'subscribed' : ''}
          placeholder='Input message...'
          onKeyUp={onKeyUp}
          onChange={e => setValue(e.target.value)} 
          value={value} 
          ref={inputRef}
          type="text"
        />
      </div>
    </div>
  )
}

export default WebSock;
