import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar';
import CustomCursor from "./components/CustomCursor";
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from "motion/react";


function Layout() {
  const location = useLocation();
  return (
    <>
      <ToastContainer />
      <CustomCursor />
      <NavBar />

      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default Layout
