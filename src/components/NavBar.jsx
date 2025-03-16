import React from 'react'
import './css/NavBar.scss'
import { motion } from 'motion/react'

function NavBar() {
  return (
    <>
      <div id='navbar'>
        <ul>
            <li><a href="#home-bg">Home</a></li>
            <li><a href="#about-bg">About</a></li>
            <li><a href="#skills-bg">Skills</a></li>
            <li><a href="#projects-bg">Project</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#snaps">Snaps</a></li>
        </ul>
        <div id="arrow"></div>
      </div>
    </>
  )
}

export default NavBar
