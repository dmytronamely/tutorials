import React from 'react';
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="page">
      <header>
        <h1>Main Layout</h1>
        <hr/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
