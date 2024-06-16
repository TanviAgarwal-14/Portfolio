import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar.js';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About.js';
import Home from'./Home.js';
import Skill from './Skill.js';
import Project from './Project.js';
import Connect from './Connect.js';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skill/>}/>
          <Route path="/Projects" element={<Project/>}/>
          <Route path="/Connect" element={<Connect/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;