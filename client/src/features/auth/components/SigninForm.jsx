import React, { useEffect, useRef, useState } from 'react';
import '../assets/style/signin_form.scss'
import { Navigate } from 'react-router-dom';

const  SigninForm = () => {
  const userNameRef = useRef(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    userNameRef.current?.focus() 
  }, [])

  const onKeyUp = (event) => {
    if (event.keyCode != 13) return
    console.log(userNameRef.current.value)
    // TODO: signIn()
    userNameRef.current.value = ''
    setIsLoggedIn(true)
  }
  if (isLoggedIn) return (<Navigate to="/chat/long-polling" replace />)

  return (
    <div className="signin-form">
      <input 
        placeholder="Enter your name and press ENTER ..." 
        type="text"
        ref={userNameRef}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

export default SigninForm;
