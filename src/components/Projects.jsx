import React, { useState, useEffect, useRef } from 'react'
import './css/Projects.scss';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform, useInView, useMotionValueEvent, useSpring, useAnimation } from 'motion/react';
import ProjectList from './ProjectList';


function Projects() {

    const projectRef = useRef(null);
    const projectScroll = useScroll({
        target: projectRef,
        offset: ["start center", "end start"]
    });

    const latestY = useTransform(projectScroll.scrollYProgress, [0, 0.2], ["200vh", "-310vh"]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

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

                <section className='bg scroll-container section' id='other-projects-section'>

                    <div className="curve" id='project-svg-2' >
                        <svg width="100" height="12" viewBox="0 0 400 42" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M0 18.4598L1 19.8658L2 21.2788L3 22.69L4 24.0908L5 25.4726L6 26.8268L7 28.145L8 29.4192L9 30.6415L10 31.8044L11 32.9006L12 33.9235L13 34.8667L14 35.7244L15 36.4913L16 37.1628L17 37.7345L18 38.2031L19 38.5656L20 38.8199L21 38.9642L22 38.9978L23 38.9205L24 38.7327L25 38.4355L26 38.0308L27 37.5212L28 36.9097L29 36.2L30 35.3967L31 34.5046L32 33.5293L33 32.4767L34 31.3534L35 30.1662L36 28.9225L37 27.63L38 26.2965L39 24.9305L40 23.5402L41 22.1342L42 20.7213L43 19.31L44 17.9092L45 16.5274L46 15.1733L47 13.855L48 12.5808L49 11.3585L50 10.1956L51 9.09938L52 8.0765L53 7.13331L54 6.2756L55 5.50867L56 4.83727L57 4.2655L58 3.79691L59 3.43437L60 3.18015L61 3.03577L62 3.00217L63 3.07952L64 3.26736L65 3.56452L66 3.96918L67 4.47884L68 5.09036L69 5.79997L70 6.60329L71 7.49538L72 8.47072L73 9.52331L74 10.6467L75 11.8338L76 13.0775L77 14.3701L78 15.7035L79 17.0695L80 18.4598L81 19.8658L82 21.2788L83 22.69L84 24.0908L85 25.4726L86 26.8268L87 28.145L88 29.4192L89 30.6415L90 31.8044L91 32.9006L92 33.9235L93 34.8667L94 35.7244L95 36.4913L96 37.1628L97 37.7345L98 38.2031L99 38.5656L100 38.8199L101 38.9642L102 38.9978L103 38.9205L104 38.7327L105 38.4355L106 38.0308L107 37.5212L108 36.9097L109 36.2L110 35.3967L111 34.5046L112 33.5293L113 32.4767L114 31.3534L115 30.1662L116 28.9225L117 27.63L118 26.2965L119 24.9305L120 23.5402L121 22.1342L122 20.7213L123 19.31L124 17.9092L125 16.5274L126 15.1733L127 13.855L128 12.5808L129 11.3585L130 10.1956L131 9.09938L132 8.0765L133 7.13331L134 6.2756L135 5.50867L136 4.83727L137 4.2655L138 3.79691L139 3.43437L140 3.18015L141 3.03577L142 3.00217L143 3.07952L144 3.26736L145 3.56452L146 3.96918L147 4.47884L148 5.09036L149 5.79997L150 6.60329L151 7.49538L152 8.47072L153 9.52331L154 10.6467L155 11.8338L156 13.0775L157 14.3701L158 15.7035L159 17.0695L160 18.4598L161 19.8658L162 21.2788L163 22.69L164 24.0908L165 25.4726L166 26.8268L167 28.145L168 29.4192L169 30.6415L170 31.8044L171 32.9006L172 33.9235L173 34.8667L174 35.7244L175 36.4913L176 37.1628L177 37.7345L178 38.2031L179 38.5656L180 38.8199L181 38.9642L182 38.9978L183 38.9205L184 38.7327L185 38.4355L186 38.0308L187 37.5212L188 36.9097L189 36.2L190 35.3967L191 34.5046L192 33.5293L193 32.4767L194 31.3534L195 30.1662L196 28.9225L197 27.63L198 26.2965L199 24.9305L200 23.5402L201 22.1342L202 20.7213L203 19.31L204 17.9092L205 16.5274L206 15.1733L207 13.855L208 12.5808L209 11.3585L210 10.1956L211 9.09938L212 8.0765L213 7.13331L214 6.2756L215 5.50867L216 4.83727L217 4.2655L218 3.79691L219 3.43437L220 3.18015L221 3.03577L222 3.00217L223 3.07952L224 3.26736L225 3.56452L226 3.96918L227 4.47884L228 5.09036L229 5.79997L230 6.60329L231 7.49538L232 8.47072L233 9.52331L234 10.6467L235 11.8338L236 13.0775L237 14.3701L238 15.7035L239 17.0695L240 18.4598L241 19.8658L242 21.2788L243 22.69L244 24.0908L245 25.4726L246 26.8268L247 28.145L248 29.4192L249 30.6415L250 31.8044L251 32.9006L252 33.9235L253 34.8667L254 35.7244L255 36.4913L256 37.1628L257 37.7345L258 38.2031L259 38.5656L260 38.8199L261 38.9642L262 38.9978L263 38.9205L264 38.7327L265 38.4355L266 38.0308L267 37.5212L268 36.9097L269 36.2L270 35.3967L271 34.5046L272 33.5293L273 32.4767L274 31.3534L275 30.1662L276 28.9225L277 27.63L278 26.2965L279 24.9305L280 23.5402L281 22.1342L282 20.7213L283 19.31L284 17.9092L285 16.5274L286 15.1733L287 13.855L288 12.5808L289 11.3585L290 10.1956L291 9.09938L292 8.0765L293 7.13331L294 6.2756L295 5.50867L296 4.83727L297 4.2655L298 3.79691L299 3.43437L300 3.18015L301 3.03577L302 3.00217L303 3.07952L304 3.26736L305 3.56452L306 3.96918L307 4.47884L308 5.09036L309 5.79997L310 6.60329L311 7.49538L312 8.47072L313 9.52331L314 10.6467L315 11.8338L316 13.0775L317 14.3701L318 15.7035L319 17.0695L320 18.4598L321 19.8658L322 21.2788L323 22.69L324 24.0908L325 25.4726L326 26.8268L327 28.145L328 29.4192L329 30.6415L330 31.8044L331 32.9006L332 33.9235L333 34.8667L334 35.7244L335 36.4913L336 37.1628L337 37.7345L338 38.2031L339 38.5656L340 38.8199L341 38.9642L342 38.9978L343 38.9205L344 38.7327L345 38.4355L346 38.0308L347 37.5212L348 36.9097L349 36.2L350 35.3967L351 34.5046L352 33.5293L353 32.4767L354 31.3534L355 30.1662L356 28.9225L357 27.63L358 26.2965L359 24.9305L360 23.5402L361 22.1342L362 20.7213L363 19.31L364 17.9092L365 16.5274L366 15.1733L367 13.855L368 12.5808L369 11.3585L370 10.1956L371 9.09938L372 8.0765L373 7.13331L374 6.2756L375 5.50867L376 4.83727L377 4.2655L378 3.79691L379 3.43437L380 3.18015L381 3.03577L382 3.00217L383 3.07952L384 3.26736L385 3.56452L386 3.96918L387 4.47884L388 5.09036L389 5.79997L390 6.60329L391 7.49538L392 8.47072L393 9.52331L394 10.6467L395 11.8338L396 13.0775L397 14.3701L398 15.7035L399 17.0695" stroke="var(--bg-color)" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="100" height="12" viewBox="0 0 400 42" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M0 18.4598L1 19.8658L2 21.2788L3 22.69L4 24.0908L5 25.4726L6 26.8268L7 28.145L8 29.4192L9 30.6415L10 31.8044L11 32.9006L12 33.9235L13 34.8667L14 35.7244L15 36.4913L16 37.1628L17 37.7345L18 38.2031L19 38.5656L20 38.8199L21 38.9642L22 38.9978L23 38.9205L24 38.7327L25 38.4355L26 38.0308L27 37.5212L28 36.9097L29 36.2L30 35.3967L31 34.5046L32 33.5293L33 32.4767L34 31.3534L35 30.1662L36 28.9225L37 27.63L38 26.2965L39 24.9305L40 23.5402L41 22.1342L42 20.7213L43 19.31L44 17.9092L45 16.5274L46 15.1733L47 13.855L48 12.5808L49 11.3585L50 10.1956L51 9.09938L52 8.0765L53 7.13331L54 6.2756L55 5.50867L56 4.83727L57 4.2655L58 3.79691L59 3.43437L60 3.18015L61 3.03577L62 3.00217L63 3.07952L64 3.26736L65 3.56452L66 3.96918L67 4.47884L68 5.09036L69 5.79997L70 6.60329L71 7.49538L72 8.47072L73 9.52331L74 10.6467L75 11.8338L76 13.0775L77 14.3701L78 15.7035L79 17.0695L80 18.4598L81 19.8658L82 21.2788L83 22.69L84 24.0908L85 25.4726L86 26.8268L87 28.145L88 29.4192L89 30.6415L90 31.8044L91 32.9006L92 33.9235L93 34.8667L94 35.7244L95 36.4913L96 37.1628L97 37.7345L98 38.2031L99 38.5656L100 38.8199L101 38.9642L102 38.9978L103 38.9205L104 38.7327L105 38.4355L106 38.0308L107 37.5212L108 36.9097L109 36.2L110 35.3967L111 34.5046L112 33.5293L113 32.4767L114 31.3534L115 30.1662L116 28.9225L117 27.63L118 26.2965L119 24.9305L120 23.5402L121 22.1342L122 20.7213L123 19.31L124 17.9092L125 16.5274L126 15.1733L127 13.855L128 12.5808L129 11.3585L130 10.1956L131 9.09938L132 8.0765L133 7.13331L134 6.2756L135 5.50867L136 4.83727L137 4.2655L138 3.79691L139 3.43437L140 3.18015L141 3.03577L142 3.00217L143 3.07952L144 3.26736L145 3.56452L146 3.96918L147 4.47884L148 5.09036L149 5.79997L150 6.60329L151 7.49538L152 8.47072L153 9.52331L154 10.6467L155 11.8338L156 13.0775L157 14.3701L158 15.7035L159 17.0695L160 18.4598L161 19.8658L162 21.2788L163 22.69L164 24.0908L165 25.4726L166 26.8268L167 28.145L168 29.4192L169 30.6415L170 31.8044L171 32.9006L172 33.9235L173 34.8667L174 35.7244L175 36.4913L176 37.1628L177 37.7345L178 38.2031L179 38.5656L180 38.8199L181 38.9642L182 38.9978L183 38.9205L184 38.7327L185 38.4355L186 38.0308L187 37.5212L188 36.9097L189 36.2L190 35.3967L191 34.5046L192 33.5293L193 32.4767L194 31.3534L195 30.1662L196 28.9225L197 27.63L198 26.2965L199 24.9305L200 23.5402L201 22.1342L202 20.7213L203 19.31L204 17.9092L205 16.5274L206 15.1733L207 13.855L208 12.5808L209 11.3585L210 10.1956L211 9.09938L212 8.0765L213 7.13331L214 6.2756L215 5.50867L216 4.83727L217 4.2655L218 3.79691L219 3.43437L220 3.18015L221 3.03577L222 3.00217L223 3.07952L224 3.26736L225 3.56452L226 3.96918L227 4.47884L228 5.09036L229 5.79997L230 6.60329L231 7.49538L232 8.47072L233 9.52331L234 10.6467L235 11.8338L236 13.0775L237 14.3701L238 15.7035L239 17.0695L240 18.4598L241 19.8658L242 21.2788L243 22.69L244 24.0908L245 25.4726L246 26.8268L247 28.145L248 29.4192L249 30.6415L250 31.8044L251 32.9006L252 33.9235L253 34.8667L254 35.7244L255 36.4913L256 37.1628L257 37.7345L258 38.2031L259 38.5656L260 38.8199L261 38.9642L262 38.9978L263 38.9205L264 38.7327L265 38.4355L266 38.0308L267 37.5212L268 36.9097L269 36.2L270 35.3967L271 34.5046L272 33.5293L273 32.4767L274 31.3534L275 30.1662L276 28.9225L277 27.63L278 26.2965L279 24.9305L280 23.5402L281 22.1342L282 20.7213L283 19.31L284 17.9092L285 16.5274L286 15.1733L287 13.855L288 12.5808L289 11.3585L290 10.1956L291 9.09938L292 8.0765L293 7.13331L294 6.2756L295 5.50867L296 4.83727L297 4.2655L298 3.79691L299 3.43437L300 3.18015L301 3.03577L302 3.00217L303 3.07952L304 3.26736L305 3.56452L306 3.96918L307 4.47884L308 5.09036L309 5.79997L310 6.60329L311 7.49538L312 8.47072L313 9.52331L314 10.6467L315 11.8338L316 13.0775L317 14.3701L318 15.7035L319 17.0695L320 18.4598L321 19.8658L322 21.2788L323 22.69L324 24.0908L325 25.4726L326 26.8268L327 28.145L328 29.4192L329 30.6415L330 31.8044L331 32.9006L332 33.9235L333 34.8667L334 35.7244L335 36.4913L336 37.1628L337 37.7345L338 38.2031L339 38.5656L340 38.8199L341 38.9642L342 38.9978L343 38.9205L344 38.7327L345 38.4355L346 38.0308L347 37.5212L348 36.9097L349 36.2L350 35.3967L351 34.5046L352 33.5293L353 32.4767L354 31.3534L355 30.1662L356 28.9225L357 27.63L358 26.2965L359 24.9305L360 23.5402L361 22.1342L362 20.7213L363 19.31L364 17.9092L365 16.5274L366 15.1733L367 13.855L368 12.5808L369 11.3585L370 10.1956L371 9.09938L372 8.0765L373 7.13331L374 6.2756L375 5.50867L376 4.83727L377 4.2655L378 3.79691L379 3.43437L380 3.18015L381 3.03577L382 3.00217L383 3.07952L384 3.26736L385 3.56452L386 3.96918L387 4.47884L388 5.09036L389 5.79997L390 6.60329L391 7.49538L392 8.47072L393 9.52331L394 10.6467L395 11.8338L396 13.0775L397 14.3701L398 15.7035L399 17.0695" stroke="var(--bg-color)" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <img src="./images/Dot_Grid.svg" alt="dots" id='dot-svg' />
                    <div className="container">
                        <div id="top-name">
                            <h1>Other Projects</h1>
                        </div>
                        <motion.div id="other-projects"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible" 
                            viewport={{ once: false, amount: 0.2 }} 
                        >
                            <motion.div variants={itemVariants}>
                                <ProjectList
                                    name='SMS Spam Detection'
                                    isLink={true}
                                    link='https://swagat-spam-detection.streamlit.app'
                                    github='https://github.com/Swagat003/Edunet-TECHSAKSHAM-CSR-INITIATIVE-OF-MICROSOFT-P1---SMS-Spam-Detection-System-Using-NLP-'
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProjectList
                                    name='Weather App'
                                    isLink={true}
                                    link='https://weather-app-neon-three-81.vercel.app'
                                    github='https://github.com/Swagat003/WeatherApp'
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProjectList
                                    name='Sign Language Detection'
                                    github='https://github.com/Swagat003/sign-language'
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProjectList
                                    name='Spotify Clone'
                                    isLink={true}
                                    link='https://swagat003.github.io/spotify/'
                                    github='https://github.com/Swagat003/spotify'
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProjectList
                                    name='Tic Tac Toe'
                                    isLink={true}
                                    link='https://swagat003.github.io/TicTacToe/'
                                    github='https://github.com/Swagat003/TicTacToe'
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ProjectList
                                    name='Scientific Calculator'
                                    isLink={true}
                                    link='https://swagat003.github.io/Calculator/'
                                    github='https://github.com/Swagat003/Calculator'
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

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
