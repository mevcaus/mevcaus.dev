export interface SkillCategory {
  label: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['Java', 'Go', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'Bash'],
  },
  {
    label: 'Frameworks & Testing',
    skills: ['Spring Boot', 'React', 'Node.js', 'Express', 'JUnit 5', 'Testcontainers', 'Playwright'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['PostgreSQL', 'Docker', 'GitHub Actions (CI/CD)', 'Git', 'Linux (systemd)', 'DigitalOcean', 'Claude Code'],
  },
];
