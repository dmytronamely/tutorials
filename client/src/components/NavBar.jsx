import React from 'react';
import { NavLink } from 'react-router-dom'
import '../assets/style/navbar.scss'

const NavBar = () => {
  return (
    <nav className='primary'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chat">Chat</NavLink>
    </nav>
  );
}

export default NavBar;
