import { scrollToSection } from '../utils/scroll';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          Mevludin<br />
          <span className="hero-name-accent">Causevic</span>
        </h1>
        <p className="hero-title">Software Engineer</p>
        <p className="hero-tagline">
          CS student at Boise State who likes building things that
          actually work. Mostly backend and full-stack stuff.
          Big fan of clean code, solid APIs, and not breaking prod.
        </p>
        <div className="hero-cta-group">
          <button
            className="hero-cta hero-cta-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work →
          </button>
          <button
            className="hero-cta hero-cta-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </button>
        </div>
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
