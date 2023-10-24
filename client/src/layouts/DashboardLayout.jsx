import React from 'react';
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar';
import '../assets/style/dashboard.scss'

function DashboardLayout() {
  return (
    <div className="page">
      <header>
        <div>
          <p>Dashboard Layout:</p>
        </div>
        <div>
          <NavBar />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
