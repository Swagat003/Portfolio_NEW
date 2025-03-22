import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './css/NavBar.scss'
import { motion } from 'motion/react'

function NavBar() {
  return (
    <>
      <div id='navbar'>
        <ul>
          <li><HashLink smooth to="/#home-bg">Home</HashLink></li>
          <li><HashLink smooth to="/#about-bg">About</HashLink></li>
          <li><HashLink smooth to="/#skills-bg">Skills</HashLink></li>
          <li><HashLink smooth to="/#projects-bg">Project</HashLink></li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div id="arrow"></div>
      </div>
    </>
  )
}

export default NavBar
