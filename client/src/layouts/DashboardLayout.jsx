import React from 'react';
import { Outlet } from 'react-router-dom'
import '../assets/style/dashboard.scss'
import NavBar from '../components/NavBar';

const DashboardLayout = () => {
  return (
    <div className="dashboard"> 
      <small>Dashboard layout:</small>     
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
