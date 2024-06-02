import React from 'react';
import './Project.css';

function Projects() {
const projects = [
{
    title: "Guess The Word Game",
    description: "A simple game built using HTML, CSS, and JavaScript",
    image: "guessword.png",
    github: "https://github.com/TanviAgarwal-14/GuessTheWord-game",
},
{
    title: "Tic Tac Toe",
    description: "A backend project",
    image: "tictactoe.png",
    github: "https://github.com/TanviAgarwal-14/TicTacToe",
},
];

return (
<div className="projects-container">
    <h2>My Projects</h2>
    <div className="projects-grid">
    {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
    ))}
    </div>
</div>
);
}

function ProjectCard({ project }) {
return (
<div className="project-card">
    <img src={project.image} alt={project.title} />
    <div className="project-info">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="project-links">
        {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
        </a>
        )}
        <a href={project.github} target="_blank" rel="noopener noreferrer">
        GitHub
        </a>
    </div>
    </div>
</div>
);
}

export default Projects;
