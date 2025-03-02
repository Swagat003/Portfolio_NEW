import React, { useEffect, useState } from 'react'
import './css/PreLoad.scss'
import { motion, useTransform, useScroll } from 'motion/react'
import CountUp from './CountUp';

function PreLoad({ onLoaded }) {

    useEffect(() => {

        setTimeout(() => {
            onLoaded();
        }, 5000);

    }, [onLoaded]);

    return (
        <div id='preload'>
            <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
            />
        </div>
    );
};

export default PreLoad;

