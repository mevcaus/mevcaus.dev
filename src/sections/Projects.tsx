import React from 'react';
import { PROJECTS } from '../data/projects';

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label reveal">Projects</p>
      <h2 className="section-title reveal reveal-delay-1">
        Selected projects
      </h2>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            className={`project-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card-header">
              <div className={`project-card-icon${project.image ? ' project-card-icon--has-image' : ''}${project.invertImage ? ' project-card-icon--inverted' : ''}`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} logo`}
                    className="project-card-icon-img"
                  />
                ) : (
                  project.icon
                )}
              </div>
              <span className="project-card-arrow">↗</span>
            </div>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-desc">{project.description}</p>
            <div className="project-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
