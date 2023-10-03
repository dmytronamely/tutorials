import { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

function LongPolling() {
  const inputRef = useRef() 
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    focus()
  }, [])

  // INFO: updated every render
  // Function, because need recalculate time every call it 
  const message = () => ({
    id: uuidv4(),
    time: moment().format('HH:mm A'),
    message: value,
  })
  
  const sendMessage = async () => {
    setMessages(prev => [...prev, message()])
    setValue('')
  }

  const focus = () => inputRef.current?.focus()
  const onKeyUp = (event) => { if (event.keyCode === 13) sendMessage() }

  return (
    <div className='chat'>
      <div className='messages'>
        {
          messages.map(mess => (
              <div className='message' key={mess.id}>
                { mess.message }
              </div>
            )
          )
        }
      </div>
      <div className='form'>
        <input
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
