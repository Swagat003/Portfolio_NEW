import React from 'react'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import CustomCursor from "./components/CustomCursor";
import NavBar from './components/NavBar';


function App() {

  return (
    <>
      <CustomCursor />
      <NavBar />
      <Home />
      <About />
      <section className='bg' id='skills'>Skills</section>
      <section className='bg' id='project'>Projects</section>
      <section className='bg' id='contact'>Contact</section>
      <section className='bg' id='snaps'>Snaps</section>
    </>
  )
}

export default App
