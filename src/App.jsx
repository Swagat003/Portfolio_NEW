import React from 'react'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stairs from './components/Stairs';


function App() {

  return (
    <>
      <Stairs>
        <Home />
        <About />
        <Skills />
        <Projects />
      </Stairs>
    </>
  )
}

export default App
