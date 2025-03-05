import React, { useRef, useState, useEffect } from 'react'
import './css/Home.scss'
import { motion, useScroll, useTransform } from 'motion/react'
import ShinyText from './ShinyText'
import StarBorder from './StarBorder'
import { TypeAnimation } from 'react-type-animation'
import Mouse from './Mouse'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function Home() {
  const homeScrollRef = useRef(null);
  const homeScroll = useScroll({
    target: homeScrollRef,
    offset: ["start start", "end start"]
  });

  const aboutScroll = useScroll({
    target: homeScrollRef,
    offset: ["start start", "end start"]
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 660);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aboutXTransform = isMobile
    ? useTransform(aboutScroll.scrollYProgress, [0, 1], ["calc(150vw - 0% + 1rem)", "calc(0vw - 100% - 1rem)"])
    : useTransform(aboutScroll.scrollYProgress, [0, 0.5], ["calc(150vw - 0% + 1rem)", "calc(50vw - 50% + 1rem)"]);


  const aboutScaleTransform = isMobile
    ? 1
    : useTransform(aboutScroll.scrollYProgress, [0.5, 1], [1, 5]);


  const aboutOpacityTransform = isMobile
    ? useTransform(aboutScroll.scrollYProgress, [0.9, 0.96], [1, 0])
    : useTransform(aboutScroll.scrollYProgress, [0.5, 0.96], [1, 0]);

  useEffect(() => {
    aboutOpacityTransform.onChange((value) => {
      if (value === 0) {
        setDisplay("none")
      } else {
        setDisplay("block")
      }
    })
  }, [aboutOpacityTransform])


  const xTransform = useTransform(homeScroll.scrollYProgress, [0, 1], ["0dvw", "-100vw"])
  const xTransformReverse = useTransform(homeScroll.scrollYProgress, [0, 1], ["0dvw", "100dvw"])
  const opacityTransform = useTransform(homeScroll.scrollYProgress, [0, 1], [1, 0])




  const variants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        staggerChildren: 0.5
      }
    }
  }

  const variants2 = {
    initial: {
      opacity: 0,
      y: -30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        staggerChildren: 1
      }
    }
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: -10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <div className='scroll-bg' id='home-bg' ref={homeScrollRef}>
        <section className='bg scroll-container' id='home'>
          <motion.h1
            className="about-title"
            style={{
              display: display,
              fontSize: isMobile ? "70vh" : "14rem",
              y: "-50%",
              x: aboutXTransform,
              z: 100,
              scale: aboutScaleTransform,
              textAlign: "center",
              opacity: aboutOpacityTransform,
            }}
          >
            ABOUT
          </motion.h1>


          <div className='container'>
            <header id="home-header">
              <div id="home-header-left"><span>SP.</span></div>
              <motion.div id="home-header-right"
                variants={variants2}
                initial='initial'
                animate='animate'
              >
                <motion.a href='https://www.linkedin.com/in/swagat-pritam-sahoo' target='_blank'
                  variants={childVariants}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </motion.a>
                <motion.a href='https://github.com/Swagat003' target='_blank'
                  variants={childVariants}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </motion.a>
                <motion.a href='https://www.instagram.com/__swagat_pritam__?igsh=bGY5NWd0MGw5MWk=' target='_blank'
                  variants={childVariants}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </motion.a>
              </motion.div>
            </header>
            <div id="home-content">
              <motion.div id="home-content-left"
                variants={variants}
                initial='initial'
                animate='animate'
                style={{ x: xTransform, opacity: opacityTransform }}
              >
                <motion.h1
                  variants={variants}
                >
                  Hi, I'm <span>Swagat</span>
                </motion.h1>
                <motion.h2
                  variants={variants}
                >A
                  <span>
                    <TypeAnimation
                      sequence={[
                        1500,
                        ' Web Developer',
                        2000,
                        ' Designer',
                        2000,
                        ' Programmer',
                        2000
                      ]}
                      wrapper="span"
                      speed={30}
                      repeat={Infinity}
                    />
                  </span>
                </motion.h2>
                <a href="mailto:swagat.pritam.2003@gmail.com" target='_blank'>
                  <StarBorder id="home-button" className='btn-hovered'>
                    <ShinyText text="CONTACT ME!" />
                  </StarBorder>
                </a>
              </motion.div>
              <motion.div id="home-content-right" className='image'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }}
                style={{ x: xTransformReverse, opacity: opacityTransform }}
              >
                <img
                  loading='lazy'
                  src="./images/hero.png" alt="hero" width={'512px'} height={'512px'} />
              </motion.div>
            </div>

            <Mouse className='mouse-position' />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
