import { EXPERIENCE } from '../data/experience';

function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label reveal">Experience</p>
      <h2 className="section-title reveal reveal-delay-1">
        Where I've worked
      </h2>

      <div className="experience-list">
        {EXPERIENCE.map((job, i) => (
          <article
            key={job.title}
            className={`experience-card reveal reveal-delay-${Math.min(i + 2, 4)}`}
          >
            <div className="experience-card-header">
              <div>
                <h3 className="experience-card-title">{job.title}</h3>
                <p className="experience-card-company">{job.company}</p>
              </div>
              <div className="experience-card-meta">
                <span>{job.dates}</span>
                <span>{job.location}</span>
              </div>
            </div>
            <ul className="experience-card-bullets">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
