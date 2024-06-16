import React from "react";
import './Connect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Connect(){
    return(<div className="connect-section">
        <h2>CONNECT WITH ME</h2>
        <div className="icon-container">
        <a href="https://www.linkedin.com/in/tanvi-agarwal-732b99280/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} color="white" style={{ fontSize: '100px' }}/>
        </a>
        <a href="https://github.com/TanviAgarwal-14">
        <FontAwesomeIcon icon={faGithub} color="white" style={{ fontSize: '100px' }}/>
        </a>
        <a href="https://outlook.office.com/mail/">
        <FontAwesomeIcon icon={faEnvelope} color="white" style={{ fontSize: '100px' }} />
        </a>
    </div>
    </div>
    );
}
export default Connect;