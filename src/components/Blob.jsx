import React, { useState, useEffect } from 'react'
import './css/Blob.scss'

const paths = [
    'M82.5,64Q66,78,47,83Q28,88,20.5,69Q13,50,19,28.5Q25,7,49.5,8Q74,9,86.5,29.5Q99,50,82.5,64Z',
    'M81,71Q74,92,50.5,90.5Q27,89,15,69.5Q3,50,18,35Q33,20,51,18.5Q69,17,78.5,33.5Q88,50,81,71Z',
    'M81.5,63.5Q66,77,49.5,78.5Q33,80,19,65Q5,50,15.5,29.5Q26,9,46,15.5Q66,22,81.5,36Q97,50,81.5,63.5Z',
    'M78,69Q72,88,51,86Q30,84,17,67Q4,50,17.5,33.5Q31,17,49.5,17.5Q68,18,76,34Q84,50,78,69Z',
    'M78.5,69Q72,88,49,90Q26,92,14.5,71Q3,50,17.5,34.5Q32,19,50,19.5Q68,20,76.5,35Q85,50,78.5,69Z',
    'M85.5,69Q72,88,53,83Q34,78,26,64Q18,50,23,31Q28,12,49.5,13Q71,14,85,32Q99,50,85.5,69Z',
    'M81.5,67Q70,84,48,88Q26,92,17,71Q8,50,18.5,32Q29,14,50,14Q71,14,82,32Q93,50,81.5,67Z',
    'M85.5,69Q72,88,50.5,87Q29,86,18,68Q7,50,16.5,29.5Q26,9,48.5,11.5Q71,14,85,32Q99,50,85.5,69Z',
    'M80.5,69.5Q73,89,52.5,85Q32,81,21.5,65.5Q11,50,22.5,36.5Q34,23,53,17.5Q72,12,80,31Q88,50,80.5,69.5Z',
    'M81.5,63.5Q66,77,49.5,78.5Q33,80,19,65Q5,50,15.5,29.5Q26,9,46,15.5Q66,22,81.5,36Q97,50,81.5,63.5Z',
    'M85.5,68.5Q71,87,48.5,89.5Q26,92,17,71Q8,50,20,35Q32,20,53,14.5Q74,9,87,29.5Q100,50,85.5,68.5Z',
    'M77,68.5Q71,87,51.5,84.5Q32,82,18.5,66Q5,50,19,35Q33,20,49.5,21.5Q66,23,74.5,36.5Q83,50,77,68.5Z'
];

const generatePathSequence = () => {
    const startEndPath = paths[Math.floor(Math.random() * paths.length)];

    let middlePaths = paths.filter(path => path !== startEndPath);

    for (let i = middlePaths.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [middlePaths[i], middlePaths[j]] = [middlePaths[j], middlePaths[i]];
    }

    return [startEndPath, ...middlePaths, startEndPath]; 
};

function Blob({ speed = 30, delay = 0, color = '#fff' }) {
    const shuffledPaths = generatePathSequence(); 

    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill={color}>
            <path>
                <animate
                    attributeName="d"
                    dur={`${speed}s`}  
                    repeatCount="indefinite"
                    values={shuffledPaths.join(';')}  
                    begin={`${delay}s`}
                />
            </path>
        </svg>
    );
}

export default Blob;