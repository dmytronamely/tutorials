import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import '../assets/style/dashboard.scss'
import NavBar from '../components/NavBar';
import { AuthContext } from '../features/auth';

const DashboardLayout = () => {
  const { user, isLoggedIn } = useContext(AuthContext)
  
  if(!isLoggedIn){ 
    return <Navigate to="/" replace />
  }

  const { userName, id } = user
  return (
    <div className="dashboard">
      <header>
        <small>Dashboard layout: {`${userName} => ${id}`}</small> 
        <hr />
        <NavBar />
      </header> 
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
