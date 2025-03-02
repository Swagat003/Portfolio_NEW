import React from 'react'
import './css/NavBar.scss'
import { motion } from 'motion/react'

function NavBar() {
  return (
    <>
      <div id='navbar'>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#snaps">Snaps</a></li>
        </ul>
        <div id="arrow"></div>
      </div>
    </>
  )
}

export default NavBar
