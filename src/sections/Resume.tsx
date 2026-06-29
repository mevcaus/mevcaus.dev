import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RESUME_DATA } from '../data/resume';

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
            <a href={`https://github.com/${RESUME_DATA.contact.github}`} target="_blank" rel="noopener noreferrer">github.com/{RESUME_DATA.contact.github}</a>
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
                {proj.link ? (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="resume-entry-primary resume-project-link">
                    {proj.name} ↗
                  </a>
                ) : (
                  <span className="resume-entry-primary">{proj.name}</span>
                )}
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
