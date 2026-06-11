function About() {
  return (
    <section className="section" id="about">
      <p className="section-label reveal">About</p>
      <h2 className="section-title reveal reveal-delay-1">
        A bit about me
      </h2>

      <div className="about-grid">
        <div className="about-text reveal reveal-delay-2">
          <p>
            I'm a <strong>Computer Science student at Boise State</strong>,
            graduating December 2026 with a 3.94 GPA and Dean's List with
            Highest Honors. Basically I do a lot of homework and somehow
            still find time to build things.
          </p>
          <p>
            I'm most at home working on the <strong>backend and
            full-stack side of things</strong>. REST APIs, CI/CD
            pipelines, databases, that kind of stuff. I've shipped
            projects with Java/Spring Boot, Node.js/Express, and
            Firebase. If something breaks at 2am, I'm probably the one
            who caused it and also the one fixing it.
          </p>
          <p>
            Right now I also work at Boise State's IT Help Desk, where I
            help 25,000+ people figure out why their stuff isn't working.
            Turns out the hardest part of engineering isn't the code, it's
            explaining the code to someone who just wants their email back.
          </p>
        </div>

        <div className="about-visual reveal reveal-delay-3">
          <div className="about-visual-card">
            <div className="about-visual-pattern"></div>
            <div className="about-visual-accent"></div>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-value">3.94</div>
                <div className="about-stat-label">Major GPA</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">Dec '26</div>
                <div className="about-stat-label">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
