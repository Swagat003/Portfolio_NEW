import React from 'react'
import './css/Stairs.scss'
import { motion } from 'motion/react'
import { delay } from 'motion'

function Stairs({ children }) {

  const anim = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants
    }
  }

  const noOfStairs = 5;

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i) => ({
      top: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
      transitionEnd: {
        height: "0",
        top: "0",
      }
    }),
    exit: (i) => ({
      height: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  const opacity = {
    initial: {
      opacity: 1
    },
    enter: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 0.5
      }

    }
  }

  return (
    <div className='stairs'>
      <motion.div {...anim(opacity)} className='stairs-background' />
      <div className="stairs-container">
        {
          [...Array(noOfStairs)].map((_, i) => {
            return <motion.div {...anim(expand, noOfStairs - i)} key={i} />
          })
        }
      </div>
      {children}
    </div>
  )
}

export default Stairs
