import React from 'react';

export interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  highlights?: string[];
  screenshot?: Screenshot;
  tags: string[];
  link?: string;
  label?: string;
  extraLink?: { label: string; to: string };
}

const STROKE_ICON_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: '20',
  height: '20',
} as const;

export const PROJECTS: Project[] = [
  {
    icon: React.createElement(
      'svg',
      STROKE_ICON_PROPS,
      React.createElement('path', { d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' }),
      React.createElement('path', { d: 'M13.73 21a2 2 0 0 1-3.46 0' })
    ),
    title: 'shop-watch',
    label: 'Private repo (paid service)',
    description:
      'A Go service I run that watches Shopify stores and sends restock and price-drop alerts to 10 paying subscribers through Discord, with one-tap cart links.',
    screenshot: {
      src: '/shop-watch-alert.png',
      alt: 'A shop-watch restock alert in Discord showing the product, price, store, stock status, and add-to-cart buttons',
      width: 1336,
      height: 756,
    },
    highlights: [
      'Runs on a DigitalOcean droplet under a hardened systemd unit behind Caddy TLS, with one-command deploys and rollback.',
      'Tracks health per target. The /health endpoint returns 503 when anything is degraded, and a dead-man switch fires after 15 minutes without a successful poll.',
    ],
    tags: ['Go', 'DigitalOcean', 'Linux', 'Discord API'],
  },
  {
    icon: React.createElement(
      'svg',
      STROKE_ICON_PROPS,
      React.createElement('path', {
        d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
      })
    ),
    title: 'Help Desk AI Support Agent (Boise State OIT)',
    label: 'Internal tool',
    description:
      'An AI support agent I built on my own in about a month for Boise State\'s IT help desk. It answers questions from 20,000+ past ServiceNow tickets and KB articles. I tested several LLMs along the way, and about 20 coworkers use it now.',
    highlights: [
      'Wrote a Python script that uses regex to strip phone numbers, emails, and other personal info from every ticket before it gets indexed.',
      'A ServiceNow scheduled job pulls the 100 most popular KB articles every week and updates the agent\'s knowledge base through a REST API.',
    ],
    tags: ['Python', 'RAG', 'ServiceNow', 'REST API'],
  },
  {
    image: '/javadropbox-logo.png',
    title: 'JavaDropbox',
    description:
      'Self-hosted file storage modeled on Dropbox. A Spring Boot REST API, PostgreSQL, and a React front end, with file versioning, signed share links, and an audit log.',
    highlights: [
      'Every POST started failing with a 403 after I turned on CSRF protection. I traced it to Spring Security loading the token lazily, which never wrote the cookie for a JSON-only SPA.',
      '95 tests (JUnit 5, MockMvc, Testcontainers, Vitest) run in GitHub Actions against a real PostgreSQL service container.',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    link: 'https://github.com/mevcaus/JavaDropbox',
    extraLink: {
      label: 'How the metadata works',
      to: '/writing/two-sources-of-truth-zero-reconciliation',
    },
  },
  {
    image: '/goproxy-logo.png',
    title: 'GoProxy',
    description:
      'A Layer 7 HTTP load balancer in Go using only the standard library. Round-robin and least-connections routing, health checks, and lock-free counters with sync/atomic.',
    highlights: [
      'Health checks run on their own goroutine with a time.Ticker, so routing never waits on a dead backend.',
      '26 tests run under go test -race, including one that hits the counters from 1,000 goroutines and checks the exact totals.',
    ],
    tags: ['Go', 'net/http', 'Concurrency'],
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
    title: 'More on GitHub',
    description: 'Code for JavaDropbox, GoProxy, and this site.',
    tags: ['GitHub'],
    link: 'https://github.com/mevcaus',
  },
];
