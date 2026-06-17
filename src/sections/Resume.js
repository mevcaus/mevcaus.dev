import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const RESUME_DATA = {
  name: 'Mevludin Causevic',
  title: 'Software Engineer',
  contact: {
    email: 'mevludincausevic@u.boisestate.edu',
    linkedin: 'in/mevcaus',
    github: 'mevcaus',
    website: 'mevcaus.dev',
  },
  education: [
    {
      school: 'Boise State University',
      degree: 'B.S. Computer Science',
      gpa: '3.94',
      dates: 'Aug 2022 – Dec 2026',
      honors: "Dean's List with Highest Honors",
      coursework: [
        'Data Structures',
        'Algorithms',
        'Software Engineering',
        'Database Systems',
        'Operating Systems',
        'Computer Networks',
      ],
    },
  ],
  experience: [
    {
      title: 'IT Help Desk Technician',
      company: 'Boise State University OIT',
      dates: 'Aug 2024 – Present',
      bullets: [
        'Resolve 50+ technical incidents per week for a user base of 25,000+ across Microsoft Entra MFA, VPN, PeopleSoft, and eduroam, reducing average resolution time through systematic triage',
        'Automate identity verification and MFA reset workflows using ServiceNow, decreasing ticket escalation rate to IAM team',
        'Author and maintain knowledge base articles documenting novel troubleshooting procedures, enabling consistent resolution across 15+ help desk staff',
      ],
    },
  ],
  projects: [
    {
      name: 'JavaDropbox',
      dates: 'Jan 2025 – Present',
      bullets: [
        'Architected a self-hosted cloud storage platform with Java 21/Spring Boot 3, implementing a layered service architecture with JPA/PostgreSQL for file metadata persistence and version control (up to 10 revisions per file)',
        'Engineered path traversal prevention through canonical path validation on all file I/O endpoints, securing upload, download, delete, and directory creation operations against directory traversal attacks',
        'Built a CI/CD pipeline using GitHub Actions with a PostgreSQL service container, automated Gradle builds, JUnit 5 tests, and Dependabot dependency graph submission for vulnerability tracking',
        'Implemented Spring Security with BCrypt password hashing, form-based authentication, session management, and a first-run setup filter to handle zero-config bootstrapping',
      ],
      technologies: 'Java 21, Spring Boot 3, Spring Security, JPA, PostgreSQL, Thymeleaf, GitHub Actions, Docker, Gradle',
    },
    {
      name: 'GoProxy',
      dates: 'Jun 2025 – Present',
      bullets: [
        'Built a Layer 7 HTTP load balancer from scratch in Go using only the standard library (net/http, net/http/httputil), implementing configurable reverse proxying across multiple backend servers',
        'Implemented round-robin request distribution with a server pool abstraction, routing incoming traffic across N configurable backends defined via a JSON configuration file',
        'Wrote comprehensive unit tests covering configuration parsing, URL validation, round-robin cycling correctness, and edge cases (malformed JSON, empty backends, missing files)',
      ],
      technologies: 'Go, net/http, httputil, JSON, Unit Testing',
    },
    {
      name: 'Stackage Server',
      dates: 'Aug 2024 – Dec 2024',
      bullets: [
        'Developed RESTful backend services for a social mobile application serving real-time data to iOS/Android clients using Node.js/Express and Cloud Firestore',
        'Identified and resolved race conditions in concurrent Firestore document writes by implementing optimistic locking with transaction retries, eliminating data inconsistency in multi-user scenarios',
        'Optimized API response latency by 20% through compound Firestore index tuning and query restructuring, reducing read operations per request from O(n) to O(1) for feed queries',
      ],
      technologies: 'Node.js, Express.js, Cloud Firestore, REST APIs',
    },
  ],
  skills: {
    'Languages': 'Java, Go, Python, JavaScript, SQL, Bash',
    'Frameworks & Libraries': 'Spring Boot, Spring Security, Node.js, Express.js, React, REST APIs',
    'Tools & Infrastructure': 'Git, GitHub Actions, PostgreSQL, Firebase, Docker, Gradle, npm, Linux',
  },
};

function Resume() {
  const resumeRef = useRef(null);

  useEffect(() => {
    document.title = 'Résumé — Mevludin Causevic';
    return () => { document.title = 'Mevludin Causevic — Software Engineer'; };
  }, []);

  const handleDownload = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      <div className="resume-page-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>

      <div className="resume-toolbar no-print">
        <Link to="/" className="resume-toolbar-back">← Back to Portfolio</Link>
        <div className="resume-toolbar-actions">
          <button className="resume-toolbar-btn" onClick={handlePrint}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Print
          </button>
          <button className="resume-toolbar-btn resume-toolbar-btn--primary" onClick={handleDownload}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      <div className="resume-paper" ref={resumeRef}>
        <header className="resume-header">
          <h1 className="resume-name">{RESUME_DATA.name}</h1>
          <div className="resume-contact-row">
            <a href={`mailto:${RESUME_DATA.contact.email}`}>{RESUME_DATA.contact.email}</a>
            <span className="resume-contact-sep">·</span>
            <a href={`https://linkedin.com/${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{RESUME_DATA.contact.linkedin}</a>
            <span className="resume-contact-sep">·</span>
            <a href={`https://github.com/${RESUME_DATA.contact.github}`} target="_blank" rel="noopener noreferrer">{RESUME_DATA.contact.github}</a>
            <span className="resume-contact-sep">·</span>
            <a href={`https://${RESUME_DATA.contact.website}`} target="_blank" rel="noopener noreferrer">{RESUME_DATA.contact.website}</a>
          </div>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          {RESUME_DATA.education.map((edu) => (
            <div key={edu.school} className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <span className="resume-entry-primary">{edu.school}</span>
                  <span className="resume-entry-secondary"> — {edu.degree}</span>
                </div>
                <span className="resume-entry-dates">{edu.dates}</span>
              </div>
              <div className="resume-entry-meta">
                GPA: {edu.gpa} · {edu.honors}
              </div>
              <div className="resume-coursework">
                <span className="resume-coursework-label">Coursework:</span>{' '}
                {edu.coursework.join(', ')}
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          {RESUME_DATA.experience.map((exp) => (
            <div key={exp.title} className="resume-entry">
              <div className="resume-entry-header">
                <div>
                  <span className="resume-entry-primary">{exp.title}</span>
                  <span className="resume-entry-secondary"> — {exp.company}</span>
                </div>
                <span className="resume-entry-dates">{exp.dates}</span>
              </div>
              <ul className="resume-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Projects</h2>
          {RESUME_DATA.projects.map((proj) => (
            <div key={proj.name} className="resume-entry">
              <div className="resume-entry-header">
                <span className="resume-entry-primary">{proj.name}</span>
                <span className="resume-entry-dates">{proj.dates}</span>
              </div>
              <ul className="resume-bullets">
                {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="resume-tech">
                <span className="resume-tech-label">Technologies:</span> {proj.technologies}
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="resume-skills-grid">
            {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
              <div key={category} className="resume-skill-row">
                <span className="resume-skill-category">{category}: </span>
                <span className="resume-skill-values">{skills}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
