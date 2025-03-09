import React, { useEffect, useState , useRef} from 'react'
import './css/Skills.scss'
import CountUp from './CountUp';
import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from 'motion/react';
import { animate, delay } from 'motion';

function Skills() {
    const [totalLeet, setTotalLeet] = useState(0);
    const [totalProjects, setTotalProjects] = useState(0);

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

    const containerRef = useRef(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
    useEffect(() => {
        const updateConstraints = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setConstraints({
                    left: -width / 2,
                    right: width / 2,
                    top: -height / 2,
                    bottom: height / 2,
                });
            }
        };

        updateConstraints();
        window.addEventListener("resize", updateConstraints);

        return () => window.removeEventListener("resize", updateConstraints);
    }, []);


    return (
        <>
            <div className="scroll-bg">
                <section className='bg scroll-container' id='skills'>
                    <div class="custom-shape-divider-top-1741456221">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <div className="skills container">
                        <div id="skills-top">
                            <div id="languages-container" ref={containerRef}>
                                <h1>Languages</h1>
                                <motion.div id="languages"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <motion.div variants={itemVariants}>

                                        <motion.img src="./images/cpp.png" alt="cpp" height={128}
                                            variants={floating}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                        />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating2}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/java.png" alt="java" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating3}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/js.png" alt="js" height={128} />
                                    </motion.div>

                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating4}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/html.png" alt="html" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/css.png" alt="css" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating3}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/python.png" alt="python" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                </motion.div>
                            </div>
                            <div id="technologies-container">
                                <h1>Technologies</h1>
                                <motion.div id="technologies"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating2}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/mongoDB.png" alt="mongodb" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating4}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/express.png" alt="express" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/react.png" alt="react" height={128} />
                                    </motion.div>

                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating3}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/node.png" alt="nodejs" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating2}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/MySQL.png" alt="MySQL" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>

                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/docker.png" alt="docker" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating4}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
                                            src="./images/git.png" alt="git" height={128} />
                                    </motion.div>
                                    <div class="empty"></div>
                                    <motion.div variants={itemVariants}>
                                        <motion.img
                                            variants={floating3}
                                            // initial={false}
                                            animate="animate"
                                            whileHover={{
                                                scale: 1.2,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }}
                                            drag
                                            dragConstraints={constraints}
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
                                    duration={5}
                                    separator=","
                                    className="count"
                                />
                                <p>
                                    Total Leetcode Problems Solved
                                </p>
                            </div>
                            <div id="horizontal-line"></div>
                            <div id="skills-bottom-right">
                                <CountUp
                                    to={totalProjects}
                                    from={0}
                                    delay={1}
                                    duration={5}
                                    separator=","
                                    className="count"
                                />
                                <p>
                                    Total Projects on Github
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Skills
