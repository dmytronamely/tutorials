import React from 'react';
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar';

function DashboardLayout() {
  return (
    <div className="page">
      <header>
        <h1>Dashboard Layout</h1>
        <NavBar />
        <hr/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
