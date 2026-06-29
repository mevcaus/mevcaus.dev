export interface SkillCategory {
  label: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['Java', 'Go', 'Python', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Spring Security', 'Node.js', 'Express.js', 'React', 'REST APIs'],
  },
  {
    label: 'Tools & Infrastructure',
    skills: ['Git', 'GitHub Actions', 'PostgreSQL', 'Firebase', 'Docker', 'Gradle', 'npm', 'Linux'],
  },
];
