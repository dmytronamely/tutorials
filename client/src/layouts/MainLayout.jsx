import React from 'react';
import { Outlet } from 'react-router-dom'
import '../assets/style/main.scss'

const MainLayout = () => {
  return (
    <div className="main">
      <small>Main layout:</small>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
