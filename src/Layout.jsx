import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import CustomCursor from "./components/CustomCursor";
import Footer from './components/Footer';


function Layout() {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout
