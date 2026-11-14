
import '../styles/Experience.css';
import cpiBg from '../assets/backgrounds/cpi-bg.png';
import alpsBg from '../assets/backgrounds/alps-bg.png';
import tgsiBg from '../assets/backgrounds/tgsi-bg.png';

/* =========================================
   PROFESSIONAL EXPERIENCE DATA
========================================= */

const experiences = [
    {
        id: "cpi",
        background: cpiBg,
        title: "QA Analyst",
        company: "Computer Professionals, Inc.",
        employmentType: "Full-time",
        dates: "November 2026 – Present",
        responsibilities: [
            "Incoming QA Analyst, preparing to contribute to software quality assurance activities, test execution, defect management, and the delivery of reliable software solutions."
        ]
    },
    {
        id: "alps",
        background: alpsBg,
        title: "Quality Assurance Lead – Compliance and Service Excellence Lead",
        company: "ALPS Technologies Inc.",
        employmentType: "Full-time",
        dates: "March 2026 – November 2026",
        responsibilities: [
            "Led QA activities, test planning, execution, and UAT coordination across multiple projects.",
            "Managed QA assignments, balanced team workloads, and monitored deliverables to ensure timely completion.",
            "Reviewed and standardized test scenarios, test cases, test scripts, and UAT documentation to improve clarity and efficiency.",
            "Introduced and developed test automation using Robot Framework and Selenium to reduce repetitive manual testing.",
            "Trained and guided QA team members in automation practices, strengthening the team's technical capabilities.",
            "Maintained automation scripts, documented test procedures, and prepared test evidence to support validation and test coverage.",
            "Coordinated with developers, business analysts, stakeholders, and UAT Agents to validate requirements and resolve issues."
        ],
        keyProjects: [
            {
                id: "government-systems",
                title: "Government Systems – QA and UAT",
                description:
                    "Supported QA and UAT activities across multiple government projects while maintaining client and system confidentiality.",
                responsibilities: [
                    "Planned and monitored QA activities, UAT execution, and testing deliverables.",
                    "Developed standardized UAT templates and training materials.",
                    "Enhanced Robot Framework and Selenium scripts based on project requirements and test scenarios."
                ]
            },
            {
                id: "device42",
                title: "Internal Device42 Sandbox Development",
                description:
                    "Led cross-functional coordination across Development, Business Analysis, and QA to establish an internal Device42 environment for capability demonstrations and potential client engagements.",
                responsibilities: [
                    "Defined initial requirements, configurations, workflows, and the work breakdown structure (WBS).",
                    "Coordinated development progress, team responsibilities, and project deliverables.",
                    "Created test scripts and guidelines, improved test templates, and performed smoke, ad hoc, monkey, and exploratory testing.",
                    "Supported environment validation to ensure functionality, stability, and readiness for client demonstrations."
                ]
            }
        ]
    },
    {
        id: "tgsi",
        background: tgsiBg,
        title: "Quality Assurance Tester – Software Engineer I",
        company: "Tsukiden Global Solutions Inc.",
        employmentType: "Full-time",
        dates: "October 2023 – March 2026",
        responsibilities: [
            "Developed and executed automated test scripts to validate complex booking and ticketing workflows.",
            "Authored detailed automation procedures, test manuals, and structured validation scenarios.",
            "Conducted end-to-end automated and manual testing to ensure system reliability and release stability.",
            "Designed booking and cancellation test scenarios aligned with business rules and edge cases.",
            "Created reusable backend test data to support large-scale reservation workflows.",
            "Performed regression, smoke, ad hoc, and black-box testing across multiple system releases.",
            "Strengthened test coverage by reviewing and refining requirement documents for clarity and accuracy.",
            "Investigated backend logic issues, including scheduled job processes, and supported defect resolution.",
            "Revised system and operational documentation to improve maintainability and team alignment.",
            "Analyzed procurement and financial workflows and documented complex system processes to improve cross-team handoffs.",
            "Led requirements analysis, created work breakdown structures (WBS), assessed task complexity, and coordinated development workflows.",
            "Set up and configured a complete local enterprise development environment for internal systems.",
            "Designed custom system structures, roles, and permission frameworks.",
            "Customized front-end components and enhanced backend APIs to improve scalability and maintainability.",
            "Designed and developed an internal scheduling and reservation platform with full booking workflow implementation.",
            "Partially led project teams across reservation, ticketing, and training systems.",
            "Coordinated developers and QA testers to maintain alignment and meet project timelines.",
            "Reviewed deliverables and supported release readiness validation."
        ]
    }
];

/* =========================================
   RESPONSIBILITIES COMPONENT
========================================= */

function ResponsibilitiesList({ responsibilities }) {
    return (
        <ul className="experience-responsibilities">
            {responsibilities.map((responsibility, index) => (
                <li key={index}>
                    {responsibility}
                </li>
            ))}
        </ul>
    );
}

/* =========================================
   KEY PROJECTS COMPONENT
========================================= */

function KeyProjects({ projects }) {
    if (!projects?.length) {
        return null;
    }

    return (
        <div className="experience-key-projects">
            <h4 className="experience-key-projects-heading">
                Key Projects
            </h4>

            <div className="experience-projects-list">
                {projects.map((project) => (
                    <div
                        className="experience-project"
                        key={project.id}
                    >
                        <h5 className="experience-project-title">
                            {project.title}
                        </h5>

                        <p className="experience-project-description">
                            {project.description}
                        </p>

                        <ResponsibilitiesList
                            responsibilities={project.responsibilities}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


/* =========================================
   EXPERIENCE ITEM COMPONENT
========================================= */

function ExperienceItem({ experience }) {
    return (
        <article
            className={`experience-item experience-item--${experience.id}`}
        >
            <div
                className="experience-marker"
                aria-hidden="true"
            />

            <div
                className="experience-content"
                style={{
                    "--experience-bg": `url("${experience.background}")`
                }}
            >
                <div className="experience-title-row">
                    <h3>{experience.title}</h3>

                    <span className="experience-dates">
                        {experience.dates}
                    </span>
                </div>

                <p className="experience-company">
                    {experience.company}

                    <span className="experience-employment-type">
                        {" · "}{experience.employmentType}
                    </span>
                </p>

                <ResponsibilitiesList
                    responsibilities={experience.responsibilities}
                />

                <KeyProjects
                    projects={experience.keyProjects}
                />
            </div>
        </article>
    );
}

/* =========================================
   EXPERIENCE SECTION
========================================= */

export default function Experience() {
    return (
        <section
            id="experience"
            className="experience-section section-shell"
        >
            <div className="experience-header">
                <h2>Work Experience</h2>
            </div>

            <div className="experience-timeline">
                {experiences.map((experience) => (
                    <ExperienceItem
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
}
