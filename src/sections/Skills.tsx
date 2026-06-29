import React from 'react';
import { SKILL_CATEGORIES } from '../data/skills';

function Skills() {
  return (
    <section className="section section--alt" id="skills">
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
