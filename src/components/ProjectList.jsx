import React from 'react'
import './css/ProjectList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function ProjectList({
    name = "Project Name",
    isLink = false,
    link = "",
    github = "",
}) {
    return (
        <div className='project-list'>
            <div className="name">
                <span>{name}</span>{" "}
                {isLink &&
                    <a href={link} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                }
            </div>
            <div className="github">
                <a href={github} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default ProjectList
