import React from 'react';
import NavBar from './NavBar';
import Typing from './Typing';
import './App.css';
import './Home.css';
import photo from './MyPhoto.jpeg';

function Home() {
return(
    <div className="home-section">
    <NavBar />
    <div className="content">
    <div className="typing-section">
        <h2>Hi There!!</h2>
        <h1>This is Tanvi Agarwal</h1>
    <Typing
        text={[
        "I am a Software Developer.",
        "I code, therefore I am."
        ]}
        typingSpeed={100}
        deletingSpeed={50}
        duration={1000}
    />
    </div>
    <div className="photo-section">
        <img src={photo} alt="Your Photo" />
    </div>
    </div>
    </div>
    );
}

export default Home;