const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Node.js', 'Express.js', 'React', 'REST APIs'],
  },
  {
    label: 'Tools & Infrastructure',
    skills: ['Git', 'GitHub Actions', 'PostgreSQL', 'Firebase', 'Gradle', 'npm', 'Linux'],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label reveal">Skills</p>
      <h2 className="section-title reveal reveal-delay-1">
        Technologies I work with
      </h2>

      <div className="skills-categories reveal reveal-delay-2">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.label}>
            <p className="skills-category-label">{category.label}</p>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  <span className="skill-chip-dot"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
