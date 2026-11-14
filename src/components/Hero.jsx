import { ShieldCheck, Workflow, Users } from 'lucide-react';
import HeroVisual from './HeroVisual.jsx';
import '../styles/Hero.css';

export default function Hero() {
    return (
        <section className="hero section-shell" id="home">
            <div className="hero-copy">
                <div className="eyebrow hero-eyebrow">
                    <span className="status-dot" />
                    QUALITY ASSURANCE ANALYST
                </div>

                <h1>
                    <span className="first-name">CARL</span>{' '}
                    <span className="middle-name">PATRICK</span>{' '}
                    <span className="last-name">CAGUBCUB</span>
                </h1>

                <p className="hero-tagline">
                    Every Details Matter.
                    <br />
                    <span>Every Test Counts.</span>
                </p>

                <p className="hero-description">
                    Building reliable software through thoughtful testing,
                    practical automation, and a strong understanding of how
                    systems work.
                </p>

                <div className="hero-actions">
                    <a className="button button-primary" href="#projects">
                        Explore my work
                        <span aria-hidden="true">↗</span>
                    </a>

                    <a className="text-link" href="#contact">
                        Get in touch
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div className="hero-meta">
                    <div className="hero-meta-item">
                        <ShieldCheck size={19} strokeWidth={1.8} aria-hidden="true" />
                        <span>QUALITY ASSURANCE</span>
                    </div>
                    <div className="hero-meta-item">
                        <Workflow size={19} strokeWidth={1.8} aria-hidden="true" />
                        <span>TEST AUTOMATION</span>
                    </div>
                    <div className="hero-meta-item">
                        <Users size={19} strokeWidth={1.8} aria-hidden="true" />
                        <span>TEAM LEADERSHIP</span>
                    </div>
                </div>
            </div>

            <HeroVisual />

            <div className="hero-index">
                <span>01</span> / INTRODUCTION
            </div>
        </section>
    );
}
