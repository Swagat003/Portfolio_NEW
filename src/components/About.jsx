import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from 'motion/react';
import './css/About.scss';
import Triangle from '../assets/Triangle.svg';

function About() {
  const aboutScrollRef = useRef(null);
  const aboutScroll = useScroll({
    target: aboutScrollRef,
    offset: ["start end", "end start"]
  });

  // const yTransform = useTransform(aboutScroll.scrollYProgress, [0.3, 0.4], ["0%", "-100%"]);
  // const y2Transform = useTransform(aboutScroll.scrollYProgress, [0.4, 0.5], ["100%", "0%"]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 660);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMidle, setIsMidle] = useState(false);

  useMotionValueEvent(aboutScroll.scrollYProgress, "change", (value) => {
    if (value >= 0.3) {
      setIsMidle(true);
    } else {
      setIsMidle(false);
    }
  });

  return (
    <>
      <div className="scroll-bg" id='about-bg' ref={aboutScrollRef}>
        <section className='bg scroll-container' id='about'>
          <div className="about container">
            <div id="about-text-flex">
              <motion.div className="square"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeatType: "loop",
                  repeatDelay: 0,
                  repeat: Infinity
                }}
              ></motion.div>
              <motion.img className='triangle' src={Triangle} alt="triangle"
                animate={{
                  rotate: [0, -360],
                  y: [0, 13, 0],
                  x: [0, 4, 0]
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeatType: "loop",
                  repeatDelay: 0,
                  repeat: Infinity
                }}
              />
              <div id="about-text-grid">
                <motion.div className="about-text-box-right">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 2,
                        delay: 0.5,
                      }
                    }}
                    viewport={{
                      amount: "all",
                    }}
                  >
                    Hey, I’m Swagat Pritam Sahoo, a full-stack web developer and designer.
                  </motion.h3>
                </motion.div>
                <motion.div className="about-text-box-left">

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 0,
                      x: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1,
                      }
                    }}
                    viewport={{
                      amount: "all",
                    }}
                    animate = {{
                      [isMobile ? "x" : "y"]: !isMidle ? 0 : -200,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    
                  >
                    With expertise in the MERN stack, I build dynamic, user-friendly web apps with modern design and efficient backend solutions. That’s what I bring to the digital world.
                  </motion.p>
                  <motion.p
                    style={{
                      position: "absolute",
                    }}
                    initial={{
                      opacity:0,
                      [isMobile ? "x" : "y"]: 300,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                      }
                    }}
                    viewport={{
                      amount: "all",
                    }}
                    animate = {{
                      [isMobile ? "x" : "y"]: !isMidle ? 300 : 0,
                      ...(isMobile && { opacity: !isMidle ? 0 : 1 }),
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    
                  >
                     I am a B.Tech student in Computer Science and Engineering (AI & ML) at CV Raman Global University. I live in Bhubaneswar, Odisha, and I am passionate about technology and always eager to learn new things.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
