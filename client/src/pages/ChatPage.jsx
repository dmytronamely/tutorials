import React from 'react';
import { NavBar } from '../features/chat';

const ChatPage = ({ children }) => {
  return (
    <div className='page'>
      <header>
        <NavBar />
      </header>
      <main>
        { children }
      </main>
    </div>
  );
}

export default ChatPage;
