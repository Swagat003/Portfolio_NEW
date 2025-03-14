import React from 'react'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import CustomCursor from "./components/CustomCursor";
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {

  return (
    <>
      <CustomCursor />
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <section className='bg' id='contact'>Contact</section>
      <section className='bg' id='snaps'>Snaps</section>
    </>
  )
}

export default App
