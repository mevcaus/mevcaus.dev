export interface Job {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
}

export const EXPERIENCE: Job[] = [
  {
    title: 'IT Help Desk',
    company: 'Boise State University',
    dates: 'Feb. 2025 to Present',
    location: 'Boise, ID',
    bullets: [
      'Built a RAG support agent solo in about a month, on Claude Sonnet 5 after testing other LLMs, that answers help desk questions from past ServiceNow tickets and KB articles; about 20 coworkers use it.',
      'Exported 20,000+ ServiceNow tickets and wrote a Python script that uses regex to strip phone numbers, emails, and other personal info before indexing.',
      'Automated a weekly refresh: a ServiceNow scheduled job pulls the 100 most popular KB articles and updates the agent\'s knowledge base through a REST API.',
    ],
  },
  {
    title: 'Software Engineering Immersive Resident',
    company: 'Hack Reactor',
    dates: 'May 2024 to Sep. 2024',
    location: 'Remote',
    bullets: [
      'Ran 10 to 15 one-on-one debugging sessions a day over Zoom for a cohort of 25 students, working through Node.js environment errors, code bugs, and Git issues.',
      'Taught students why and how each issue happened rather than fixing it, and answered questions in Slack.',
    ],
  },
];
