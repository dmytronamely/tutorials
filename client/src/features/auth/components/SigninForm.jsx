import React, { useEffect, useRef, useContext } from 'react';
import '../assets/style/signin_form.scss'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const  SigninForm = () => {
  const userNameRef = useRef(null)
  const { signIn, isLoggedIn } = useContext(AuthContext)
  
  useEffect(() => {
    userNameRef.current?.focus() 
  }, [])

  const onKeyUp = (event) => {
    if (event.keyCode != 13) return
    console.log(userNameRef.current.value)
    signIn({ userName: userNameRef.current.value })
    userNameRef.current.value = ''
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
