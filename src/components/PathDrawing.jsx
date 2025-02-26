import { motion } from "framer-motion";
import React from "react";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

export default function PathDrawing({style = {}}) {
    return (
        <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
            style={{...image, ...style}}
        >
            <motion.circle
                className="circle-path"
                cx="100"
                cy="100"
                r="80"
                stroke="#f3f3f3"
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                stroke="#f3f3f3"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                stroke="#f3f3f3"
                variants={draw}
                custom={2.5}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="30"
                rx="20"
                stroke="#f3f3f3"
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.circle
                cx="100"
                cy="300"
                r="80"
                stroke="#f3f3f3"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="230"
                x2="360"
                y2="370"
                stroke="#f3f3f3"
                custom={3}
                variants={draw}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="370"
                x2="360"
                y2="230"
                stroke="#f3f3f3"
                custom={3.5}
                variants={draw}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="230"
                rx="20"
                stroke="#f3f3f3"
                custom={4}
                variants={draw}
                style={shape}
            />
            <motion.circle
                cx="100"
                cy="500"
                r="80"
                stroke="#f3f3f3"
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="430"
                x2="360"
                y2="570"
                stroke="#f3f3f3"
                variants={draw}
                custom={4}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="570"
                x2="360"
                y2="430"
                stroke="#f3f3f3"
                custom={4.5}
                variants={draw}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="430"
                rx="20"
                stroke="#f3f3f3"
                variants={draw}
                custom={5}
                style={shape}
            />
        </motion.svg>
    );
}

const image = {
    maxWidth: "80vw",
};

const shape = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
};