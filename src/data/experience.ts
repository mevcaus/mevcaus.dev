export interface Job {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
}

export const EXPERIENCE: Job[] = [
  {
    title: 'Zone Support Analyst, IT Help Desk',
    company: 'Boise State University',
    dates: 'Feb 2025 to Present',
    location: 'Boise, ID',
    bullets: [
      'Built an AI support agent on my own in about a month. It answers help desk questions from 20,000+ past ServiceNow tickets and KB articles, and about 20 coworkers use it.',
      'Wrote a Python script that strips phone numbers, emails, and other personal info from the tickets, and set up a weekly job that refreshes the top 100 KB articles.',
      'Help students, faculty, and staff with hardware, software, network, and Canvas issues on a campus of 25,000+. I\'m one of the senior techs and help train new hires.',
    ],
  },
  {
    title: 'Software Engineering Immersive Resident',
    company: 'Hack Reactor',
    dates: 'May 2024 to Sep 2024',
    location: 'Remote',
    bullets: [
      'Ran 10 to 15 one-on-one debugging sessions a day for a cohort of 25 students: Node.js and environment errors, code bugs, and Git problems.',
      'Walked students through why each bug happened so they could find and fix the next one on their own.',
    ],
  },
];
