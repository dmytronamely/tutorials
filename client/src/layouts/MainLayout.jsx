import React from 'react';
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="page">
      <h1>Main Layout</h1>
      <hr/>
      <Outlet />
    </div>
  );
}

export default MainLayout;
