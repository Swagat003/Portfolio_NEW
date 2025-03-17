import React, { useState, useEffect, useRef } from 'react'
import './css/Projects.scss';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform, useInView, useMotionValueEvent, useSpring } from 'motion/react';


function Projects() {

    const projectRef = useRef(null);
    const projectScroll = useScroll({
        target: projectRef,
        offset: ["start center", "end start"]
    });

    const latestY = useTransform(projectScroll.scrollYProgress, [0, 0.2], ["200vh", "-200vh"]);

    return (
        <>
            <div className="scroll-bg" id='projects-bg' ref={projectRef}>

                <ProjectCard
                    no='01'
                    name='Collab Docs'
                    desc='Developed Collab Docs, a real-time collaborative document editor built with MERN Stack, featuring WebSockets for instant synchronization and JWT Authentication for secure access, enabling seamless multi-user editing and management.'
                    isLink={true}
                    link='https://collab-docs-five.vercel.app'
                    github='https://github.com/Swagat003/CollabDocs'
                    img='./images/project-1.png'
                />
                <ProjectCard
                    no='02'
                    name='HUNGER'
                    desc='Built HUNGER, a Java-based web application for seamless food ordering and management with integrated database support. Developed using Java Servlets, JSP, MySQL and JavaScript for dynamic and efficient user interactions.'
                    github='https://github.com/Swagat003/HUNGER'
                    img='./images/project-2.png'
                    bgColor='var(--primary-color)'
                    textColor='var(--bg-color)'
                    />
                <ProjectCard
                    no='03'
                    name='DATAGEINE'
                    desc='Developed DATAGEINE, a platform that automates image dataset creation based on user-provided class names and keywords. Built using Python, Streamlit, APIs, and the Gemini API for efficient data generation.'
                    isLink={true}
                    link='https://datageine.streamlit.app'
                    github='https://github.com/Swagat003/DATAGEINE'
                    img='./images/project-3.png'
                />
                <motion.h1 id='latest'
                    style={{
                        rotate: "-90deg",
                        y: latestY,
                        x: "0",
                    }}
                >
                    Latest Works
                </motion.h1>
            </div>
        </>
    )
}

export default Projects
