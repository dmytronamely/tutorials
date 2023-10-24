import React, { useEffect, useRef } from 'react';
import '../assets/style/signin_form.scss'

const  SigninForm = () => {
  const userNameRef = useRef(null)
  
  useEffect(() => {
    userNameRef.current?.focus() 
  }, [])

  const onKeyUp = (event) => {
    if (event.keyCode != 13) return
    console.log(userNameRef.current.value)
    // TODO: signIn()
    userNameRef.current.value = ''
  }

  return (
    <div className="signin-form">
      <input 
        placeholder="Your name..." 
        type="text"
        ref={userNameRef}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

export default SigninForm;
