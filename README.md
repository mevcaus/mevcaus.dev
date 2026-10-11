# mevcaus.dev

Personal portfolio website for **Mevludin Causevic**, a Computer Science senior at Boise State University (graduating December 2026) focused on backend and full-stack software engineering.

**Live site →** [mevcaus.dev](https://mevcaus.dev)

---

## About

This is the source code for my portfolio. It showcases my experience, projects, writing, skills, résumé, and a way to get in touch. I built it to have a single place that reflects what I'm working on and what I care about as an engineer: clean architecture, solid APIs, and code that actually ships.

## Features

- **Dark / Light Theme**: System-preference-aware with manual toggle, persisted via `localStorage`
- **Responsive Design**: Mobile-first layout with an accessible hamburger menu, focus trapping, and keyboard navigation
- **Code-Splitting & Performance**: Leverages `React.lazy()` and `<Suspense>` to load the `/writing` routes dynamically, reducing initial bundle size
- **Strictly Typed**: Built entirely with TypeScript, utilizing strict typing for components, events, and hooks
- **Scroll Animations**: Section reveal effects powered by `IntersectionObserver`
- **Résumé**: The navbar button opens `resume.pdf` in a new tab, and `/resume` redirects to it
- **Writing**: Blog posts at `/writing`, with the latest one featured on the home page
- **Contact Form**: Submissions handled via [Formspree](https://formspree.io) with environment variable security
- **SEO & Open Graph**: Structured data (JSON-LD), meta tags, OG images, and Twitter cards
- **Accessibility**: ARIA labels, semantic HTML, focus management, and keyboard-accessible UI

## Tech Stack

| Layer         | Technology                                             |
| ------------- | ------------------------------------------------------ |
| Framework     | [React 18](https://react.dev) (TypeScript)             |
| Routing       | [React Router v7](https://reactrouter.com)             |
| Styling       | Vanilla CSS (custom properties, no utility frameworks)  |
| Typography    | Inter, Instrument Serif, JetBrains Mono (Google Fonts) |
| Contact Form  | [Formspree](https://formspree.io)                      |
| Build Tooling | [Create React App](https://create-react-app.dev)       |

## Project Structure

```
mevcaus.dev/
├── public/
│   ├── index.html              # HTML shell with SEO, OG, and JSON-LD
│   ├── _redirects              # SPA fallback and /resume redirect to the PDF
│   ├── resume.pdf              # Résumé (opened from the navbar)
│   ├── og-image.png            # Open Graph preview image
│   ├── favicon.svg             # Site favicon
│   └── *-logo.png              # Project logo assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive nav with active-section tracking
│   │   ├── ContactForm.tsx     # Formspree-powered contact form
│   │   ├── ThemeToggle.tsx     # Dark/light mode switch
│   │   ├── BackToTop.tsx       # Scroll-to-top button
│   │   └── Footer.tsx          # Site footer
│   ├── sections/
│   │   ├── Hero.tsx            # Landing hero with animated orbs
│   │   ├── About.tsx           # Bio and quick stats
│   │   ├── Experience.tsx      # Work history
│   │   ├── Projects.tsx        # Featured project cards
│   │   ├── Writing.tsx         # Latest post on the home page
│   │   ├── Skills.tsx          # Categorized tech skills
│   │   ├── Contact.tsx         # Contact section with socials
│   │   ├── WritingList.tsx     # /writing post list
│   │   └── WritingPost.tsx     # /writing/:slug post page
│   ├── hooks/
│   │   ├── useTheme.ts         # Theme state + system preference sync
│   │   └── useActiveSection.ts # IntersectionObserver-based nav highlight
│   ├── data/
│   │   ├── experience.ts       # Abstracted experience data
│   │   ├── posts.ts            # Blog posts
│   │   ├── projects.ts         # Abstracted project data
│   │   └── skills.ts           # Abstracted skills data
│   ├── utils/
│   │   ├── date.ts             # Post date formatting
│   │   └── scroll.ts           # Smooth scroll helper
│   ├── App.tsx                 # Root component with Suspense routing
│   ├── App.css                 # Global styles and design system
│   └── index.css               # CSS reset and base tokens
├── .env                        # Environment variables (Formspree endpoint)
├── tsconfig.json               # TypeScript configuration
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 16
- npm (ships with Node)

### Installation

```bash
git clone https://github.com/mevcaus/mevcaus.dev.git
cd mevcaus.dev
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on changes.

### Production Build

```bash
npm run build
```

Outputs an optimized bundle to the `build/` directory, ready for deployment.

## Featured Projects

| Project | Description | Stack |
| ------- | ----------- | ----- |
| Help Desk AI Support Agent (Boise State OIT, internal tool) | An AI support agent I built for Boise State's IT help desk, on my own, in about a month. I exported 20,000+ ServiceNow tickets, stripped personal info with a Python script, tested several LLMs, and set up a weekly refresh of the top 100 KB articles. About 20 coworkers use it. | Python, RAG, ServiceNow, REST API |
| shop-watch (private repo, paid service) | A Go service I run that watches Shopify stores and sends restock and price-drop alerts to 10 paying subscribers through Discord. It runs on a DigitalOcean droplet with health checks, a dead-man switch, and one-command deploys and rollback. | Go, DigitalOcean, Linux, Discord API |
| [JavaDropbox](https://github.com/mevcaus/JavaDropbox) | Self-hosted file storage modeled on Dropbox. A Spring Boot REST API, PostgreSQL, and a React front end, with file versioning, signed share links, an audit log, and 95 automated tests in CI. | Java, Spring Boot, PostgreSQL, React |
| [GoProxy](https://github.com/mevcaus/goproxy) | A Layer 7 HTTP load balancer in Go using only the standard library. Round-robin and least-connections routing, health checks, and lock-free counters with sync/atomic. | Go, net/http, Concurrency |

## Contact

- **Email:** [mev@mevcaus.dev](mailto:mev@mevcaus.dev)
- **LinkedIn:** [linkedin.com/in/mevcaus](https://www.linkedin.com/in/mevcaus)
- **GitHub:** [github.com/mevcaus](https://github.com/mevcaus)

## License

This project is open source and available under the [MIT License](LICENSE).