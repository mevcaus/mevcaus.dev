# mevcaus.dev

Personal portfolio website for **Mevludin Causevic** - a Computer Science student at Boise State University (graduating December 2026) focused on backend and full-stack software engineering.

**Live site →** [mevcaus.dev](https://mevcaus.dev)

---

## About

This is the source code for my portfolio. It showcases my projects, skills, résumé, and a way to get in touch. I built it to have a single place that reflects what I'm working on and what I care about as an engineer: clean architecture, solid APIs, and code that actually ships.

## Features

- **Dark / Light Theme** — System-preference-aware with manual toggle, persisted via `localStorage`
- **Responsive Design** — Mobile-first layout with an accessible hamburger menu, focus trapping, and keyboard navigation
- **Code-Splitting & Performance** — Leverages `React.lazy()` and `<Suspense>` to load the `/resume` route dynamically, reducing initial bundle size
- **Strictly Typed** — Built entirely with TypeScript, utilizing strict typing for components, events, and hooks
- **Scroll Animations** — Section reveal effects powered by `IntersectionObserver`
- **Interactive Résumé** — Dedicated `/resume` route with print-optimized styles and PDF download
- **Contact Form** — Submissions handled via [Formspree](https://formspree.io) with environment variable security
- **SEO & Open Graph** — Structured data (JSON-LD), meta tags, OG images, and Twitter cards
- **Accessibility** — ARIA labels, semantic HTML, focus management, and keyboard-accessible UI

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
│   ├── resume.pdf              # Downloadable résumé
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
│   │   ├── About.tsx           # Bio, GPA, and graduation info
│   │   ├── Projects.tsx        # Featured project cards
│   │   ├── Skills.tsx          # Categorized tech skills
│   │   ├── Contact.tsx         # Contact section with socials
│   │   └── Resume.tsx          # Full interactive résumé page
│   ├── hooks/
│   │   ├── useTheme.ts         # Theme state + system preference sync
│   │   └── useActiveSection.ts # IntersectionObserver-based nav highlight
│   ├── data/
│   │   ├── projects.ts         # Abstracted project data
│   │   ├── skills.ts           # Abstracted skills data
│   │   └── resume.ts           # Abstracted resume data
│   ├── utils/
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
| [JavaDropbox](https://github.com/mevcaus/JavaDropbox) | Full-stack cloud storage app with drag-and-drop uploads, Spring Boot REST API, and CI/CD via GitHub Actions | Java, Spring Boot, JavaScript, GitHub Actions |
| [Stackage Server](https://github.com/StackageApp/stackage-server) | Backend for a social mobile app. real-time sync, race condition fixes, 20% API latency improvement | Node.js, Express.js, Firestore, REST APIs |
| [GoProxy](https://github.com/mevcaus/goproxy) | Layer 7 HTTP load balancer built from scratch using Go's standard library with round-robin routing and hot-swap configs | Go, net/http, System Design |

## Contact

- **Email:** [mev@mevcaus.dev](mailto:mev@mevcaus.dev)
- **LinkedIn:** [linkedin.com/in/mevcaus](https://www.linkedin.com/in/mevcaus)
- **GitHub:** [github.com/mevcaus](https://github.com/mevcaus)

## License

This project is open source and available under the [MIT License](LICENSE).