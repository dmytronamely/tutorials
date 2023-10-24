import React from 'react';
import { Outlet } from 'react-router-dom'
import '../assets/style/main.scss'

function MainLayout() {
  return (
    <div className="page">
      <header>
        <div>
          Main Layout:
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
