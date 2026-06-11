const PROJECTS = [
  {
    icon: '☁️',
    title: 'JavaDropbox',
    description:
      'Basically Dropbox but I built it myself. Full-stack cloud storage app with drag-and-drop uploads, a Spring Boot REST API on the backend, and a CI/CD pipeline through GitHub Actions so deploys don\'t give me anxiety.',
    tags: ['Java', 'Spring Boot', 'JavaScript', 'GitHub Actions'],
    link: 'https://github.com/mevcaus/JavaDropbox',
  },
  {
    icon: '📱',
    title: 'Stackage Server',
    description:
      'Backend for a social mobile app, built with Node.js/Express and Cloud Firestore. Hunted down race conditions in the real-time sync logic and optimized API latency by 20% through query tuning. Teamwork was involved, bugs were squashed.',
    tags: ['Node.js', 'Express.js', 'Firestore', 'REST APIs'],
    link: 'https://github.com/StackageApp/stackage-server',
  },
];

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
              <div className="project-card-icon">{project.icon}</div>
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
