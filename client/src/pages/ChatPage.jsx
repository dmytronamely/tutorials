import React from 'react';
import { NavBar } from '../features/chat';

const ChatPage = ({ children }) => {
  return (
    <main className='page'>
      <section>
        <NavBar />
        <article>
          { children }
        </article>
      </section>
    </main>
  );
}

export default ChatPage;
