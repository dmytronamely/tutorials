import { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import '../assets/style/index.scss'

const LongPolling = () => {
  const inputRef = useRef() 
  const messagesEndRef = useRef() 
  const subscribeRef = useRef(null)
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])
  const [subscribed, setSubscribed] = useState(false)
  const NEW_MEWSSAGES_URL = 'http://localhost:5001/new-messages'
  const GET_MEWSSAGES_URL = 'http://localhost:5001/get-messages'

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
    try {
      const { data } = await axios.get(GET_MEWSSAGES_URL)
      setSubscribed(true)
      setMessages(prev => [...prev, data])
      await subscribe()
    } catch (e) {
      setSubscribed(false)
      //TODO: Need to start reconnect
      subscribeRef.current = setTimeout(() => { subscribe()}, 2000)
    }
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

export default LongPolling;
