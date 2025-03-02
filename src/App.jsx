import React from 'react'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import CustomCursor from "./components/CustomCursor";
import NavBar from './components/NavBar';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from "react";


function App() {
  const homeScrollRef = useRef(null);
  const aboutScroll = useScroll({
    target: homeScrollRef,
    offset: ["start start", "end start"]
  });


  const aboutXTransform = useTransform(aboutScroll.scrollYProgress, [0, 0.5], ["calc(150vw - 0% + 1rem)", "calc(50vw - 50% + 1rem)"]);
  const aboutScaleTransform = useTransform(aboutScroll.scrollYProgress, [0.5, 1], [1, 4]);
  const aboutOpacityTransform = useTransform(aboutScroll.scrollYProgress, [0.5, 0.96], [1, 0]);


  return (
    <>
      <CustomCursor />
      <NavBar />
      <div id='home-scroll-bg' ref={homeScrollRef}>
        <section className='bg' id='home'>
          <motion.h1
            className="about-title"
            style={{
              y:"-50%",
              x: aboutXTransform,
              scale: aboutScaleTransform,
              textAlign: "center",
              opacity: aboutOpacityTransform,
            }}
          >
            ABOUT
          </motion.h1>
          <Home refid={homeScrollRef} />
        </section>
      </div>
      <section className='bg' id='about'><About /></section>
      <section className='bg' id='project'>Projects</section>
      <section className='bg' id='skills'>Skills</section>
      <section className='bg' id='contact'>Contact</section>
      <section className='bg' id='snaps'>Snaps</section>
    </>
  )
}

export default App
