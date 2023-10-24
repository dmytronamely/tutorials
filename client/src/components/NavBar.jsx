import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../assets/style/navbar.scss'

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chat/long-polling">Long Polling</NavLink>
      <NavLink to="/chat/event-sourcing">Event Sourcing</NavLink>
      <NavLink to="/chat/websockets">Websockets</NavLink>
    </nav>
  );
}

export default NavBar;
