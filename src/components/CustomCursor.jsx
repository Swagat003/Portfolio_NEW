import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import "./css/CustomCursor.scss";

const CustomCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const prevX = useRef(0);
    const prevY = useRef(0);
    const lastTime = useRef(Date.now());

    const smoothX = useSpring(mouseX, { stiffness: 1500, damping: 100 });
    const smoothY = useSpring(mouseY, { stiffness: 1500, damping: 100 });

    const speed = useMotionValue(1); 

    const images = document.querySelectorAll(".image");
    images.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            document.querySelector(".custom-cursor").classList.add("img-hovered");
        });
        img.addEventListener("mouseleave", () => {
            document.querySelector(".custom-cursor").classList.remove("img-hovered");
        });
    });

    useEffect(() => {
        const moveCursor = (e) => {
            const currentTime = Date.now();
            const deltaTime = (currentTime - lastTime.current) / 1000; 

            const deltaX = e.clientX - prevX.current;
            const deltaY = e.clientY - prevY.current;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            const newSpeed = 1 + distance*distance / (deltaTime * 300); 

            speed.set(Math.min(6, Math.max(1, newSpeed))); 

            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            prevX.current = e.clientX;
            prevY.current = e.clientY;
            lastTime.current = currentTime;
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [mouseX, mouseY, speed]);

    const smoothScale = useSpring(speed, { stiffness: 150, damping: 20 });

    return (
        <motion.div
            className="custom-cursor"
            style={{
                scale: smoothScale,
                translateX: smoothX,
                translateY: smoothY,
            }}
        />
    );
};

export default CustomCursor;
