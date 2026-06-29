export interface Education {
  school: string;
  degree: string;
  dates: string;
  gpa: string;
  honors: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface ProjectResume {
  name: string;
  dates: string;
  link: string;
  bullets: string[];
  technologies: string;
}

export interface ResumeData {
  name: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    website: string;
  };
  education: Education[];
  experience: Experience[];
  projects: ProjectResume[];
  skills: Record<string, string>;
}

export const RESUME_DATA: ResumeData = {
  name: 'Mevludin Causevic',
  contact: {
    email: 'mev@mevcaus.dev',
    linkedin: 'linkedin.com/in/mevcaus',
    github: 'github.com/mevcaus',
    website: 'mevcaus.dev',
  },
  education: [
    {
      school: 'Boise State University',
      degree: 'B.S. in Computer Science',
      dates: 'Aug 2024 — Dec 2026',
      gpa: '3.94',
      honors: 'Dean\'s List with Highest Honors',
    },
  ],
  experience: [
    {
      title: 'IT Help Desk Technician',
      company: 'Boise State University',
      dates: 'Jan 2025 — Present',
      bullets: [
        'Built and deployed an AI support agent using BSU\'s enterprise LLM platform and RAG, indexing 20,000+ ServiceNow tickets and knowledge base articles to surface relevant resolutions; adopted by help desk staff as the primary search tool over ServiceNow\'s native search',
        'Resolve 50+ technical incidents per week for a user base of 25,000+ across Microsoft Entra MFA, VPN, PeopleSoft, and eduroam through systematic triage',
        'Authored and maintained knowledge base articles documenting novel troubleshooting procedures, enabling consistent resolution across 15+ help desk staff',
      ],
    },
  ],
  projects: [
    {
      name: 'JavaDropbox',
      dates: 'Sep 2025 - Present',
      link: 'https://github.com/mevcaus/JavaDropbox',
      bullets: [
        'Prevented path traversal attacks by normalizing all user-supplied file paths with java.nio.file.Path and validating that resolved paths remain within the configured serving directory root before any I/O operation',
        'Implemented on-the-fly ZIP archive generation for directory downloads using java.util.zip.ZipOutputStream, recursively streaming folder contents into an in-memory ByteArrayOutputStream returned as a Spring Resource',
        'Developed a version restore mechanism supporting two modes — OVERWRITE (replaces current file after versioning it) and COPY (creates a named duplicate like report_v3.pdf) — selectable per restore request',
      ],
      technologies: 'Java 21, Spring Boot 3, Spring Security, JPA, PostgreSQL, Thymeleaf, GitHub Actions, Docker, Gradle',
    },
    {
      name: 'GoProxy',
      dates: 'Jun 2026 — Present',
      link: 'https://github.com/mevcaus/goproxy',
      bullets: [
        'Chose sync.RWMutex over a standard Mutex for backend health status to allow concurrent request-handler reads without blocking, reserving exclusive locks for the infrequent health-check writer',
        'Implemented lock-free round-robin indexing with sync/atomic.AddUint64, avoiding mutex contention on the hot path where every inbound request increments the routing counter',
        'Verified atomic counter correctness under contention by spawning 1,000 concurrent goroutines and asserting exact counter values, run with Go\'s -race detector enabled',
      ],
      technologies: 'Go, net/http, httputil, JSON, Unit Testing',
    },
    {
      name: 'Stackage Server',
      dates: 'Apr 2023 — July 2023',
      link: 'https://github.com/StackageApp/stackage-server',
      bullets: [
        'Built a Node.js/Express backend for a social mobile application with real-time data synchronization utilizing Cloud Firestore',
        'Designed and documented a RESTful API specification supporting complex user interactions, session management, and feed generation',
        'Diagnosed and resolved critical race conditions in the post-sync logic, reducing API latency by 20% through targeted query optimization',
      ],
      technologies: 'Node.js, Express.js, Firebase/Firestore, REST APIs, JavaScript',
    },
  ],
  skills: {
    'Languages': 'Java, Go, Python, JavaScript, SQL, Bash',
    'Frameworks & Libraries': 'Spring Boot, Spring Security, Node.js, Express.js, React, REST APIs',
    'Tools & Infrastructure': 'Git, GitHub Actions, PostgreSQL, Firebase, Docker, Gradle, npm, Linux',
  },
};
