import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='secondary'>
      <NavLink to="/chat/long-polling">Long Polling</NavLink>
      <NavLink to="/chat/event-sourcing">Event Sourcing</NavLink>
      <NavLink to="/chat/websockets">Websockets</NavLink>
    </nav>
  );
}

export default NavBar;
