import React from 'react';
import { Outlet } from 'react-router-dom'
import '../assets/style/dashboard.scss'
import NavBar from '../components/NavBar';

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <header>
        <small>Dashboard layout:</small> 
        <hr />
        <NavBar />
      </header> 
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
