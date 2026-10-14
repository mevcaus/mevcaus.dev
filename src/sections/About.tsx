const STATS = [
  { value: "Dec '26", label: 'Graduating' },
  { value: '3.79', label: 'Major GPA' },
  { value: '20', label: 'Coworkers using my AI agent' },
  { value: '10', label: 'Paying subscribers' },
];

function About() {
  return (
    <section className="section section--alt" id="about">
      <p className="section-label reveal">About</p>
      <h2 className="section-title reveal reveal-delay-1">
        A bit about me
      </h2>

      <div className="about-grid">
        <div className="about-text reveal reveal-delay-2">
          <p>
            I'm a <strong>Computer Science senior at Boise State</strong>,
            graduating in December 2026. I've made the Dean's List four
            terms in a row (Fall 2024 to Spring 2026). Basically I do a lot
            of homework and somehow still find time to build things.
          </p>
          <p>
            I'm most at home working on the <strong>backend and
            full-stack side of things</strong>. REST APIs, CI/CD
            pipelines, databases, that kind of stuff. Most of what I build
            is in Java with Spring Boot, Go, and React.
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
              {STATS.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
