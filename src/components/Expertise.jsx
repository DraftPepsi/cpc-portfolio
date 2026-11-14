
import {
    ClipboardCheck,
    Users,
    FileCheck2,
    ChartNoAxesCombined,
    Check
} from "lucide-react";

import "../styles/Expertise.css";

/* =========================================
   BACKGROUND IMAGES
========================================= */

import qualityAssuranceBg from "../assets/backgrounds/qa-bg.png";
import leadershipBg from "../assets/backgrounds/leadership-bg.png";
import documentationBg from "../assets/backgrounds/documentation-bg.png";
import analysisBg from "../assets/backgrounds/analysis-bg.png";

/* =========================================
   EXPERTISE DATA
========================================= */

const expertise = [
    {
        id: "quality-assurance",
        title: "Quality Assurance & Testing",
        icon: ClipboardCheck,
        background: qualityAssuranceBg,
        skills: [
            "Manual & Regression Testing",
            "Test Planning & Execution",
            "Test Case & Scenario Design",
            "UAT & Internal UAT",
            "Defect Management",
            "Test Specification Analysis"
        ]
    },
    {
        id: "leadership",
        title: "Leadership & Collaboration",
        icon: Users,
        background: leadershipBg,
        skills: [
            "QA Team Leadership",
            "Cross-functional Collaboration",
            "Team Mentoring & Coaching",
            "Task Delegation & Coordination",
            "Test Automation Training",
            "Knowledge Sharing"
        ]
    },
    {
        id: "documentation",
        title: "Test Management & Documentation",
        icon: FileCheck2,
        background: documentationBg,
        skills: [
            "Test Documentation",
            "Project Requirement Documentation",
            "User & Developer Manuals",
            "QA Process Improvement",
            "Process Standardization",
            "Work Breakdown Structure"
        ]
    },
    {
        id: "analysis",
        title: "Analysis & Process Improvement",
        icon: ChartNoAxesCombined,
        background: analysisBg,
        skills: [
            "Requirements Analysis",
            "Project Requirement Analysis",
            "Data Analysis",
            "Test Coverage Analysis",
            "Workflow & Process Analysis",
            "Quality Improvement"
        ]
    }
];

/* =========================================
   EXPERTISE CARD
========================================= */

function ExpertiseCard({ category }) {
    const Icon = category.icon;

    return (
        <article
            className={`expertise-card expertise-card--${category.id}`}
            style={{
                "--expertise-bg": `url("${category.background}")`
            }}
        >
            <div className="expertise-card-header">
                <div className="expertise-card-icon">
                    <Icon
                        size={26}
                        strokeWidth={1.6}
                        aria-hidden="true"
                    />
                </div>

                <h3>{category.title}</h3>
            </div>

            <ul className="expertise-list">
                {category.skills.map((skill) => (
                    <li key={skill}>
                        <Check
                            size={16}
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />

                        <span>{skill}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

/* =========================================
   EXPERTISE SECTION
========================================= */

export default function Expertise() {
    return (
        <section
            id="expertise"
            className="expertise-section section-shell"
        >
            <div className="expertise-header">
                <h2>QA Expertise & Leadership</h2>

                <p>
                    My experience in software testing,
                    quality assurance processes,
                    documentation, and team leadership
                    to help deliver reliable software.
                </p>
            </div>

            <div className="expertise-grid">
                {expertise.map((category) => (
                    <ExpertiseCard
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>
        </section>
    );
}
