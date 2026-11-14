
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Toolkit from './components/Toolkit.jsx';
import Expertise from './components/Expertise.jsx';
import Certifications from './components/Certifications.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    return (
        <>
            {/* =========================================
                NAVBAR + HERO BACKGROUND
            ========================================= */}

            <div className="hero-scene">
                <Navbar />
                <Hero />
            </div>

            {/* =========================================
                MAIN CONTENT - CONTINUOUS BRICK WALL
            ========================================= */}

            <main className="portfolio-content">
                <Projects />
                <Experience />
                <Toolkit />
                <Expertise />
                <Certifications />
                <About />
                <Contact />
            </main>

            {/* =========================================
                FOOTER
            ========================================= */}

            <Footer />
        </>
    );
}
