import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <p className="section-label reveal">Projects</p>
      <h2 className="section-title reveal reveal-delay-1">
        Selected projects
      </h2>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <article
            key={project.title}
            className={`project-card${project.link ? '' : ' project-card--static'} reveal reveal-delay-${Math.min(i + 1, 4)}`}
          >
            <div className="project-card-header">
              <div className={`project-card-icon${project.image ? ' project-card-icon--has-image' : ''}`}>
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
              {project.link ? (
                <span className="project-card-arrow" aria-hidden="true">↗</span>
              ) : (
                <span className="project-card-label">{project.label}</span>
              )}
            </div>
            <h3 className="project-card-title">
              {project.link ? (
                <a
                  href={project.link}
                  className="project-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="project-card-desc">{project.description}</p>
            {project.extraLink && (
              <Link to={project.extraLink.to} className="project-card-extra-link">
                {project.extraLink.label} →
              </Link>
            )}
            <div className="project-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
