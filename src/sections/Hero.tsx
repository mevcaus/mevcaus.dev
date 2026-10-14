import { scrollToSection } from '../utils/scroll';
import SocialLinks from '../components/SocialLinks';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm Mev</p>
        <h1 className="hero-name">
          Mevludin<br />
          <span className="hero-name-accent">Causevic</span>
        </h1>
        <p className="hero-title">Software Engineer</p>
        <p className="hero-tagline">
          CS senior at Boise State, graduating December 2026 and
          available January 2027. I build backend services in Java,
          Spring Boot, and Go. Right now that's an AI support agent 20 of
          my coworkers use and a restock alert service 10 people pay for.
        </p>
        <div className="hero-cta-group">
          <button
            className="hero-cta hero-cta-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work →
          </button>
          <a
            href="/resume.pdf"
            className="hero-cta hero-cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
        </div>
        <SocialLinks className="hero-socials" />
      </div>

      <button
        className="hero-scroll-indicator"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
      >
        <div className="hero-scroll-line"></div>
      </button>
    </section>
  );
}

export default Hero;
