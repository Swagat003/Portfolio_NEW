import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import CustomCursor from "./components/CustomCursor";
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


function Layout() {
  return (
    <>
      <ToastContainer />
      <CustomCursor />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
