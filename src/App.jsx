import React from 'react'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import CustomCursor from "./components/CustomCursor";
import NavBar from './components/NavBar';
import Skills from './components/Skills';


function App() {

  return (
    <>
      <CustomCursor />
      <NavBar />
      <Home />
      <About />
      <Skills />
      <section className='bg' id='project'>Projects</section>
      <section className='bg' id='contact'>Contact</section>
      <section className='bg' id='snaps'>Snaps</section>
    </>
  )
}

export default App
