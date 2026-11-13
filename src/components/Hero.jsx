import HeroVisual from './HeroVisual.jsx';
export default function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy">
      <div className="eyebrow hero-eyebrow">
        <span className="status-dot"/> QA • AUTOMATION • ENGINEERING
        </div>
        <h1>CARL PATRICK<span>CAGUBCUB</span>
        </h1>
        <p className="hero-tagline">Human-centric.<br/>
        <span>Engineering quality.</span>
        </p>
        <p className="hero-description">Building reliable software through thoughtful testing, practical automation, and a strong understanding of how systems work.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work 
          <span>↗</span>
          </a>
          <a className="text-link" href="mailto:your.email@example.com">Get in touch 
            <span>↗</span>
          </a>
        </div>
        <div className="hero-meta">
          <span>QUALITY ASSURANCE</span>
          <i/>
          <span>TEST AUTOMATION</span>
          <i/>
          <span>TEAM LEADERSHIP</span>
        </div>
      </div>
      <HeroVisual/>
      <div className="hero-index">
        <span>01</span>
         / INTRODUCTION
      </div>
  </section>;
}
