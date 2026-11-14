
import {
    Bot,
    Code2,
    Database,
    GitBranch,
    Layers,
    Wrench,
    ClipboardList,
    Network
} from "lucide-react";

import "../styles/Toolkit.css";
import toolkitBg from "../assets/backgrounds/toolkit-bg.png";

/* =========================================
   TOOLKIT DATA
========================================= */

const toolkit = [
    {
        id: "test-automation",
        title: "Test Automation",
        icon: Bot,
        tools: [
            "Selenium",
            "Robot Framework",
            "Playwright",
            "Cypress",
            "T-DASH",
            "Ranorex"
        ]
    },
    {
        id: "programming",
        title: "Programming Languages",
        icon: Code2,
        tools: [
            "C",
            "C#",
            "C++",
            "Python",
            "ReactJS",
            "Java",
            "CSS",
            "HTML",
            "Vue.js"
        ]
    },
    {
        id: "databases",
        title: "Databases",
        icon: Database,
        tools: [
            "MySQL",
            "PostgreSQL",
            "PL/SQL",
            "Oracle SQL"
        ]
    },
    {
        id: "version-control",
        title: "Version Control & CI/CD",
        icon: GitBranch,
        tools: [
            "Git",
            "GitLab (CI/CD)",
            "SVN"
        ]
    },
    {
        id: "enterprise",
        title: "Enterprise Systems & Frameworks",
        icon: Layers,
        tools: [
            "Oracle EBS",
            "ERPNext",
            "Spring Boot",
            "Bootstrap",
            "Frappe Framework"
        ]
    },
    {
        id: "enterprise-platforms",
        title: "Enterprise IT Platforms",
        icon: Network,
        tools: [
            "Freshservice",
            "Freshdesk",
            "Device42",
            "Xurrent",
            "Action1"
        ]
    },
    {
        id: "development-tools",
        title: "Development Tools",
        icon: Wrench,
        tools: [
            "Visual Studio Code",
            "Visual Studio",
            "Oracle APEX",
            "Bubble.io",
            "Arduino"
        ]
    },
    {
        id: "project-management",
        title: "Project Management Tools",
        icon: ClipboardList,
        tools: [
            "Redmine",
            "Confluence",
            "Jira",
            "Box",
            "MS Excel"
        ]
    }
];

/* =========================================
   TOOLKIT CARD
========================================= */

function ToolkitCard({ category }) {
    const Icon = category.icon;

    return (
        <article
            className={`toolkit-card toolkit-card--${category.id}`}
            style={{
                "--toolkit-bg": `url("${toolkitBg}")`
            }}
        >
            <div className="toolkit-card-header">
                <div className="toolkit-card-icon">
                    <Icon
                        size={24}
                        strokeWidth={1.6}
                        aria-hidden="true"
                    />
                </div>

                <h3>{category.title}</h3>
            </div>

            <div className="toolkit-tags">
                {category.tools.map((tool) => (
                    <span
                        className="toolkit-tag"
                        key={tool}
                    >
                        {tool}
                    </span>
                ))}
            </div>
        </article>
    );
}

/* =========================================
   TOOLKIT SECTION
========================================= */

export default function Toolkit() {
    return (
        <section
            id="toolkit"
            className="toolkit-section section-shell"
        >
            <div className="toolkit-header">
                <h2>Technical Skills</h2>

                <p>
                    Tools, technologies, and enterprise platforms
                    I've worked with across software testing,
                    test automation, development, and IT service
                    management.
                </p>
            </div>

            <div className="toolkit-grid">
                {toolkit.map((category) => (
                    <ToolkitCard
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>
        </section>
    );
}
