import React from 'react';

export interface Project {
  image?: string;
  invertImage?: boolean;
  icon?: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const PROJECTS: Project[] = [
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
      'Backend for a social mobile app. real-time sync, race condition fixes, 20% API latency improvement',
    tags: ['Node.js', 'Express.js', 'Firestore', 'REST APIs'],
    link: 'https://github.com/StackageApp/stackage-server',
  },
  {
    image: '/goproxy-logo.png',
    title: 'GoProxy',
    description:
      'Layer 7 HTTP load balancer built from scratch using Go\'s standard library with round-robin routing and hot-swap configs',
    tags: ['Go', 'net/http', 'System Design'],
    link: 'https://github.com/mevcaus/goproxy',
  },
  {
    icon: React.createElement(
      'svg',
      { viewBox: '0 0 24 24', fill: 'currentColor', width: '24', height: '24' },
      React.createElement('path', {
        d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
      })
    ),
    title: 'View all projects',
    description:
      'Check out my GitHub for more open-source projects, dotfiles, algorithms, and random experiments that haven\'t made it to the portfolio yet.',
    tags: ['GitHub', 'Open Source', 'Contributions'],
    link: 'https://github.com/mevcaus',
  },
];
