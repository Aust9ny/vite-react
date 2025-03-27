import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Example Project */}
        <div className="project-item">
          <h3>Project 1</h3>
          <p>You can view all my projects here.</p>
          <a
            href="https://github.com/Aust9ny"
            target="https://github.com/Aust9ny"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
}

export default Projects;
