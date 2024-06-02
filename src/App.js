import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from'./Home';
import Skill from '/home/tanviagarwal/portfolio/portfolio/src/Skill.js';
import Project from './Project';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skill/>}/>
          <Route path="/Projects" element={<Project/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;