import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from 'motion/react';
import './css/About.scss';
import Triangle from '../assets/Triangle.svg';
import GlitchText from './GlitchText ';

function About() {
  const aboutScrollRef = useRef(null);
  const aboutScroll = useScroll({
    target: aboutScrollRef,
    offset: ["start end", "end start"]
  });

  const bgWidth = useTransform(aboutScroll.scrollYProgress, [0.6, 0.75], ["0dvw", "100dvw"]);
  const layer0Scroll = useTransform(aboutScroll.scrollYProgress, [0.75, 1], ["0%", "-100%"]);
  const layer1Scroll = useTransform(aboutScroll.scrollYProgress, [0.75, 1], ["0%", "-105%"]);
  const layer2Scroll = useTransform(aboutScroll.scrollYProgress, [0.75, 1], ["0%", "-200%"]);
  const layer3Scroll = useTransform(aboutScroll.scrollYProgress, [0.75, 1], ["0%", "-600%"]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 660);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMidle, setIsMidle] = useState(false);

  useMotionValueEvent(aboutScroll.scrollYProgress, "change", (value) => {
    if (value >= 0.4) {
      setIsMidle(true);
    } else {
      setIsMidle(false);
    }
    console.log(value);
  });

  return (
    <>
      <div className="scroll-bg" id='about-bg' ref={aboutScrollRef}>
        <section className='bg scroll-container' id='about'>

          <motion.div id="skill-title-container-bg"
            style={{
              width: bgWidth,
              y: layer0Scroll,
            }}
          >
            <div id="skill-title-container">
              <motion.div id="Layer-1"
                style={{
                  y: layer1Scroll,
                }}
              >
                <motion.div className="square size blur"
                  id='sqr-1-1'
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                ></motion.div>
                <motion.div className="triangle blur"
                  id='trg-1-1'
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 102 102" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58838 87.5L51 3.01696L99.4116 87.5H2.58838Z" stroke="white" stroke-width="0"
                    />
                  </svg>
                </motion.div>
                <motion.div className="square size blur"
                  id='sqr-1-2'
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                ></motion.div>
                <motion.div className="triangle blur"
                  id='trg-1-2'
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 102 102" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58838 87.5L51 3.01696L99.4116 87.5H2.58838Z" stroke="white" stroke-width="0"
                    />
                  </svg>
                </motion.div>
                <motion.div className="triangle blur"
                  id='trg-1-3'
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 102 102" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58838 87.5L51 3.01696L99.4116 87.5H2.58838Z" stroke="white" stroke-width="0"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              <motion.div id='Layer-2'
                style={{
                  y: layer2Scroll,
                }}
              >
                <motion.div className="square size"
                  id='sqr-2-2'
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                ></motion.div>
                <div id="skill-title">
                  <motion.div className="square size"
                    id='sqr-2-1'
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 30,
                      ease: "linear",
                      repeatType: "loop",
                      repeatDelay: 0,
                      repeat: Infinity
                    }}
                  ></motion.div>
                  <motion.div className="triangle"
                    id='trg-2-1'
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 30,
                      ease: "linear",
                      repeatType: "loop",
                      repeatDelay: 0,
                      repeat: Infinity
                    }}
                  >
                    <svg width="100" height="100" viewBox="0 0 102 102" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.58838 87.5L51 3.01696L99.4116 87.5H2.58838Z" stroke="white" stroke-width="0"
                      />
                    </svg>
                  </motion.div>
                  <GlitchText
                    speed={1.5}
                    enableShadows={true}
                    enableOnHover={false}
                  >
                    #Skills
                  </GlitchText>
                </div>
              </motion.div>

              <motion.div id="Layer-3"
                style={{
                  y: layer3Scroll,
                }}
              >
                <motion.div className="square size blur"
                  id='sqr-3-1'
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                ></motion.div>
                <motion.div className="triangle blur"
                  id='trg-3-1'
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                >
                  <svg width="250" height="250" viewBox="0 0 102 102" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58838 87.5L51 3.01696L99.4116 87.5H2.58838Z" stroke="white" stroke-width="0"
                    />
                  </svg>
                </motion.div>
                <motion.div className="triangle blur"
                  id='trg-3-2'
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 35,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0,
                    repeat: Infinity
                  }}
                >
                  <svg width="250" height="250" viewBox="0 0 102 102" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58838 87.5L51 3.01696L99.4116 87.5H2.58838Z" stroke="white" stroke-width="0"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

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
                    animate={{
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
                      opacity: 0,
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
                    animate={{
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
