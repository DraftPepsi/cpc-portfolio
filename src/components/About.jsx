
import "../styles/About.css";

/* =========================================
   ABOUT INTERESTS
========================================= */

const interests = [
    "Quality Assurance",
    "Test Automation",
    "Software Development",
    "QA Leadership",
    "Continuous Learning"
];

/* =========================================
   ABOUT SECTION
========================================= */

export default function About() {
    return (
        <section
            id="about"
            className="about-section section-shell"
        >
            <div className="about-container">
                <div className="about-content">
                    <span className="section-eyebrow">
                        BEYOND THE CODE
                    </span>

                    <h2>About Me</h2>

                    <div className="about-description">
                        <p>
                            I'm a software QA professional with
                            a background in software development.
                            I've worked on different kinds of
                            systems, from learning management
                            and financial applications to
                            reservation platforms, digital
                            ticketing services, and enterprise
                            software.
                        </p>

                        <p>
                            Over the years, I've gained experience
                            in both manual and automated testing.
                            I've also had the opportunity to lead
                            a QA team, improve testing processes,
                            and make test cases and documentation
                            easier to understand and follow,
                            especially during UAT.
                        </p>

                        <p>
                            One of the things I enjoy most is
                            finding ways to make testing easier
                            and more efficient. I've developed
                            automation scripts using Robot
                            Framework and Selenium, and helped
                            teammates learn how to create and
                            use them in their own testing work.
                        </p>

                        <p>
                            I'm always interested in learning
                            new technologies, improving the way
                            things are done, and sharing what
                            I've learned with others. Whether
                            it's testing, automation, or
                            development, I enjoy working on
                            things that challenge me and help
                            me grow.
                        </p>
                    </div>

                    <div className="about-interests">
                        {interests.map((interest) => (
                            <span
                                className="about-interest-tag"
                                key={interest}
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>

                <div
                    className="about-visual"
                    aria-hidden="true"
                >
                    <div className="about-visual-background" />
                </div>
            </div>
        </section>
    );
}
