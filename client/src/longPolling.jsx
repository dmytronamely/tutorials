import React, { useEffect, useRef, useState } from 'react';

function LongPolling() {
  const inputRef = useRef() 
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    focus()
  }, [])

  useEffect(() => {
    console.log(messages);
  }, [messages])

  const focus = () => inputRef.current?.focus()

  const sendMessage = async () => {
    const message = {
      id: Date.now(),
      message: value
    }
    
    setMessages(prev => [...prev, message])
    setValue('')
  }

  const onKeyUp = (event) => {
    if (event.keyCode === 13) sendMessage()
  }

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
