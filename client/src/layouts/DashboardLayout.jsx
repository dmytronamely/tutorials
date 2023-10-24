import React from 'react';
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar';

function DashboardLayout() {
  return (
    <div className="page">
      <h1>Dashboard Layout</h1>
      <NavBar />
      <hr/>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
