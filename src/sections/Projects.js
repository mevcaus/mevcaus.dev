const PROJECTS = [
  {
    image: '/javadropbox-logo.png',
    title: 'JavaDropbox',
    description:
      'Basically Dropbox but I built it myself. Full-stack cloud storage app with drag-and-drop uploads, a Spring Boot REST API on the backend, and a CI/CD pipeline through GitHub Actions so deploys don\'t give me anxiety.',
    tags: ['Java', 'Spring Boot', 'JavaScript', 'GitHub Actions'],
    link: 'https://github.com/mevcaus/JavaDropbox',
  },
  {
    image: '/stackage-logo.png',
    invertImage: true,
    title: 'Stackage Server',
    description:
      'Backend for a social mobile app, built with Node.js/Express and Cloud Firestore. Hunted down race conditions in the real-time sync logic and optimized API latency by 20% through query tuning. Teamwork was involved, bugs were squashed.',
    tags: ['Node.js', 'Express.js', 'Firestore', 'REST APIs'],
    link: 'https://github.com/StackageApp/stackage-server', // Or https://github.com/mevcaus/stackage-server
  },
  {
    image: '/goproxy-logo.png',
    title: 'GoProxy',
    description:
      'Basically my own mini version of Nginx. A Layer 7 HTTP load balancer built entirely from scratch in Go using just the standard library. Handles round-robin request routing and hot-swappable JSON configs. Built it to prove I could handle deep systems engineering and concurrent programming without pulling my hair out.',
    tags: ['Go', 'net/http', 'System Design'],
    link: 'https://github.com/mevcaus/goproxy',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    title: 'View all projects',
    description:
      'Check out my GitHub for more open-source projects, dotfiles, algorithms, and random experiments that haven\'t made it to the portfolio yet.',
    tags: ['GitHub', 'Open Source', 'Contributions'],
    link: 'https://github.com/mevcaus',
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
