import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import './Skill.css';

function Skill() {
return (
    <div className="skill-container">
        <h2>Skills</h2>
        <div className="icon-list">
            <div className="icon-item">
                <FontAwesomeIcon icon={faHtml5} className="icon" />
                <p>HTML5</p>
            </div>
            <div className="icon-item">
                <FontAwesomeIcon icon={faCss3} className="icon" />
                <p>CSS3</p>
            </div>
            <div className="icon-item">
                <FontAwesomeIcon icon={faJs} className="icon" />
                <p>JavaScript</p>
            </div>
            <div className="icon-item">
                <FontAwesomeIcon icon={faReact} className="icon" />
                <p>React</p>
            </div>
            <div className="icon-item">
                <FontAwesomeIcon icon={faNodeJs} className="icon" />
                <p>Node.js</p>
            </div>
            {/* Add more icons as needed */}
        </div>
    </div>
);
}

export default Skill;
