import React, { useEffect, useState, useRef } from 'react'
import './css/Skills.scss'
import CountUp from './CountUp';
import { motion, useScroll, useTransform, useInView, useMotionValueEvent, useSpring } from 'motion/react';
import { animate, delay } from 'motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


function Skills() {
    const [totalLeet, setTotalLeet] = useState(0);
    const [totalProjects, setTotalProjects] = useState(0);


    const skillScrollRef = useRef(null);
    const skillScroll = useScroll({
        target: skillScrollRef,
        offset: ["start start", "end start"]
    });



    const rawTitleHeight = useTransform(skillScroll.scrollYProgress, [0.2, 0.8], ["0vh", "200vh"]);
    const projectTitleHeight = useSpring(rawTitleHeight, {
        stiffness: 12000,
        damping: 200,
        mass: 1,
    });

    const [display, setDisplay] = useState("block");
    useMotionValueEvent(skillScroll.scrollYProgress, "change", (value) => {
        if (value == 1 || value == 0) {
            setDisplay("none");
        } else {
            setDisplay("block");
        }
    });

    const fetchLeet = async () => {
        try {
            const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/swagat003');
            const data = await response.json();
            setTotalLeet(data.totalSolved);
        } catch (error) {
            console.log(error);
        }
    }


    const fetchProjects = async () => {
        try {
            const response = await fetch('https://api.github.com/users/swagat003');
            const data = await response.json();
            setTotalProjects(data.public_repos);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLeet();
        fetchProjects();
    }, []);

    const floating = {
        animate: {
            y: [0, -2, 0, 2, 0],
            x: [0, 2, -2, 0],
            rotate: [0, 1, -1, 0, 1, 0, -1],
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }
        }
    };

    const floating2 = {
        animate: {
            y: [0, 2, 0, -2, 0],
            x: [0, 2, -2, 0],
            rotate: [0, 1, -1, 0, -1, 0, 1],
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }
        }
    };

    const floating3 = {
        animate: {
            y: [0, -2, 0, 2, 0],
            x: [0, -2, 2, 0],
            rotate: [0, -1, 1, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }
        }
    };

    const floating4 = {
        animate: {
            y: [0, 2, 0, -2, 0],
            x: [0, -2, 2, 0],
            rotate: [0, -1, 1, 0, -1, 0, 1],
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const containerRefLang = useRef(null);
    const containerRefTech = useRef(null);
    const containerRef = useRef(null);



    return (
        <>
            <div className="scroll-bg" id="skills-bg" ref={skillScrollRef}>

                <section className='bg scroll-container section' id='skills' ref={containerRef}>
                    <div class="custom-shape-divider-top-1741456221">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                        </svg>
                    </div>

                    <div id="box" />

                    <img src="./images/Dot_Grid.svg" alt="dots" id='dots' width={512} height={512} />

                    <div className="skills container">

                        <div id="skills-top">
                            <div id="languages-container" ref={containerRefLang}>
                                <h1>
                                    Languages
                                </h1>
                                <motion.div id="languages"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefLang}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>C</p>
                                        </div>
                                        <motion.img src="./images/c.png" alt="c" height={128}
                                            variants={floating}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                        />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefLang}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>C++</p>
                                        </div>
                                        <motion.img src="./images/cpp.png" alt="cpp" height={128}
                                            variants={floating}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                        />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefLang}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>JAVA</p>
                                        </div>
                                        <motion.img
                                            variants={floating2}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/java.png" alt="java" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefLang}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>JavaScript</p>
                                        </div>
                                        <motion.img
                                            variants={floating3}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/js.png" alt="js" height={128} />
                                    </motion.div>

                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefLang}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>HTML</p>
                                        </div>
                                        <motion.img
                                            variants={floating4}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/html.png" alt="html" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefLang}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>CSS</p>
                                        </div>
                                        <motion.img
                                            variants={floating}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/css.png" alt="css" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefLang}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>Python</p>
                                        </div>
                                        <motion.img
                                            variants={floating3}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/python.png" alt="python" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                </motion.div>
                            </div>
                            <div id="technologies-container" ref={containerRefTech}>
                                <h1>
                                    Technologies
                                </h1>
                                <motion.div id="technologies"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefTech}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>MongoDB</p>
                                        </div>
                                        <motion.img
                                            variants={floating2}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/mongoDB.png" alt="mongodb" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefTech}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>Express</p>
                                        </div>
                                        <motion.img
                                            variants={floating4}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/express.png" alt="express" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefTech}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>React</p>
                                        </div>
                                        <motion.img
                                            variants={floating}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/react.png" alt="react" height={128} />
                                    </motion.div>

                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefTech}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>NodeJS</p>
                                        </div>
                                        <motion.img
                                            variants={floating3}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/node.png" alt="nodejs" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefTech}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>MySQL</p>
                                        </div>
                                        <motion.img
                                            variants={floating2}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/MySQL.png" alt="MySQL" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>

                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefTech}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>Docker</p>
                                        </div>
                                        <motion.img
                                            variants={floating}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/docker.png" alt="docker" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefTech}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>Git</p>
                                        </div>
                                        <motion.img
                                            variants={floating4}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/git.png" alt="git" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants} className='code-container'
                                        drag
                                        dragConstraints={containerRefTech}
                                        whileDrag={{
                                            filter: "drop-shadow(0px 0px 7px white) invert(0)",
                                            transition: {
                                                duration: 0.5,
                                            }
                                        }}
                                    >
                                        <div className="code-name-container">
                                            <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="26" r="4" stroke="#F3F3F3" stroke-width="2" />
                                                <path d="M8.29291 22.5061L29.5061 1.2929" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" />
                                                <path d="M30 0C29.4477 0 29 0.447715 29 1C29 1.55228 29.4477 2 30 2V0ZM30 2L60 2V0L30 0V2Z" fill="#F3F3F3" />
                                            </svg>
                                            <p>Vercel</p>
                                        </div>
                                        <motion.img
                                            variants={floating3}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}

                                            src="./images/vercel.png" alt="vercel" height={128} style={{ filter: "invert(1)" }} />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                        <div id="skills-bottom">
                            <div id="skills-bottom-left">
                                <CountUp
                                    to={totalLeet}
                                    from={0}
                                    delay={1}
                                    duration={3}
                                    separator=","
                                    className="count"
                                />
                                <p>
                                    Total Leetcode Problems Solved {" "}
                                    <a href="https://leetcode.com/u/Swagat003/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </p>
                            </div>
                            <div id="horizontal-line"></div>
                            <div id="skills-bottom-right">
                                <CountUp
                                    to={totalProjects}
                                    from={0}
                                    delay={1}
                                    duration={3}
                                    separator=","
                                    className="count"
                                />
                                <p>
                                    Total Projects on Github {" "}
                                    <a href="https://github.com/Swagat003?tab=repositories" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <motion.div id="project-title-bg"
                        style={{
                            height: projectTitleHeight,
                            display: display
                        }}
                    >
                        <div id="project-title-container">
                            <h1>.PROJECTS</h1>
                        </div>
                    </motion.div>

                </section>
            </div>
        </>
    )
}

export default Skills
