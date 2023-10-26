import React from 'react';
import { SigninForm } from '../features/auth';

const SigninPage = () => {
  return (
    <main className='page'>
      <section>
        <h1>Sign in</h1>
        <article>
          <p>Enter your username for chatting...</p>
          <SigninForm />
        </article>
      </section>
    </main>
  );
}

export default SigninPage;
