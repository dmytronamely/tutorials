import { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import '../assets/style/index.scss'

function EventSourcing() {
  const inputRef = useRef() 
  const messagesEndRef = useRef() 
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])
  const [subscribed, setSubscribed] = useState(false)
  const SUBSCRIBE_URL = 'http://localhost:5002/subscribe'
  const NEW_MEWSSAGES_URL = 'http://localhost:5002/new-messages'

  useEffect(() => {
    subscribe()
    focus()
  }, [])

  useEffect(() => { scrollToBottom() }, [messages])

  const subscribe = async () => {
    const eventSource = new EventSource(SUBSCRIBE_URL)

    eventSource.onopen = event => setSubscribed(true)
    // event.target.readyState 0, 1 (EventSource.OPEN), 2

    eventSource.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setMessages(prev => [...prev, message])
    }

    eventSource.onerror = event => setSubscribed(false)
  }
  
  // INFO: updated every render
  // Function, because need recalculate time every call it 
  const message = () => ({
    id: uuidv4(),
    time: moment().format('HH:mm A'),
    message: value,
  })
  
  const sendMessage = async () => {
    if (value.length > 0) {
      try {
        await axios.post(NEW_MEWSSAGES_URL, message())
        setValue('')
      } catch (e) {
        console.log(e.message)
      }
    }
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
                <div className='meta'>{mess.time}</div>
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

export default EventSourcing;
