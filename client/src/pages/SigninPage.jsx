import React from 'react';
import { SigninForm } from '../features/auth';

const SigninPage = () => {
  return (
    <div className='page'>
      <header>
        <h1>Sign in</h1>
      </header>
      <main>
        <SigninForm />
      </main>
    </div>
  );
}

export default SigninPage;
