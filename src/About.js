import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
return (
<div className="about-container">
    <div className="about-content">
    <h1>About Me</h1>
    <h2><strong>Hi, my name is Tanvi Agarwal and I am from Bengaluru, India. I'm a student pursuing Bcs in CSE.</strong></h2>
    <h2><strong>I am passionate about technologies and love to learn new things.</strong></h2>
    <h2><strong>Apart from coding I love to do art & craft and dance.</strong></h2>
    <h2><strong>Currently expanding my portfolio by building more projects that I can add here.</strong></h2>
    </div>
</div>
);
}

export default About;
