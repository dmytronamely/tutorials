import React from 'react';
import { Outlet } from 'react-router-dom'
import '../assets/style/main.scss'

const MainLayout = () => {
  return (
    <div className="main">
      <header>
        <small>Main layout:</small>
        <hr />
      </header>

      <Outlet />
    </div>
  );
}

export default MainLayout;
