
import {
    Workflow,
    CarTaxiFront,
    Plane,
    CarFront,
    Server,
    Monitor,
    GraduationCap,
    ChartNoAxesCombined,
    CalendarDays,
    MonitorCog,
    Users
} from 'lucide-react';

import '../styles/Projects.css';

/* =========================================
   FEATURED PROJECT BACKGROUNDS
========================================= */

import freshworksBg from '../assets/backgrounds/itsm-bg.png';
import taxiBookingBg from '../assets/backgrounds/tbs-bg.png';
import flightHotelBg from '../assets/backgrounds/dfhbs-bg.png';
import carRentalBg from '../assets/backgrounds/crbs-bg.png';
import itamBg from '../assets/backgrounds/itam-bg.png';
import rmmBg from '../assets/backgrounds/rmm-bg.png';
import itsmxBg from '../assets/backgrounds/itsmx-bg.png';
import lmsBg from '../assets/backgrounds/lms-bg.png';
import scBg from '../assets/backgrounds/sc-bg.png';
import crBg from '../assets/backgrounds/cr-bg.png';
import wsBg from '../assets/backgrounds/ws-bg.png';
import hrmsBg from '../assets/backgrounds/hrms-bg.png';


/* =========================================
   ADDITIONAL PROJECT BACKGROUNDS

   Import each image when it is available.

   Example:
   import device42Bg from '../assets/backgrounds/device42-bg.png';
========================================= */

/* =========================================
   FEATURED PROJECTS DATA
========================================= */

const featuredProjects = [
    {
        id: 'freshworks',
        name: 'ITSM, ESM & CX — Freshservice & Freshdesk',
        description:
            'Developed automated tests for ITSM workflows across Freshworks platforms using Robot Framework and Selenium.',
        icon: Workflow,
        background: freshworksBg,
        testing: [
            'Automation Testing',
            'Functional Testing',
            'User Acceptance Testing',
            'Manual Testing',
            'Process Standardization'
        ]
    },
    {
        id: 'taxi-booking',
        name: 'Taxi Booking System',
        description:
            'Developed automated tests to validate taxi booking workflows, system functionality, and regression scenarios.',
        icon: CarTaxiFront,
        background: taxiBookingBg,
        testing: [
            'Robot Framework',
            'Selenium',
            'Automation Testing',
            'Regression Testing'
        ]
    },
    {
        id: 'flight-hotel',
        name: 'Domestic Flight & Hotel Booking',
        description:
            'Performed manual and regression testing for domestic flight reservations and hotel booking workflows.',
        icon: Plane,
        background: flightHotelBg,
        testing: [
            'Manual Testing',
            'Regression Testing',
            'Document Standardization'
        ]
    },
    {
        id: 'car-rental',
        name: 'Car Rental Booking System',
        description:
            'Conducted manual and regression testing to validate vehicle reservations and booking functionality.',
        icon: CarFront,
        background: carRentalBg,
        testing: [
            'Manual Testing',
            'Regression Testing'
        ]
    }
];

/* =========================================
   ADDITIONAL PROJECTS DATA
========================================= */

const additionalProjects = [
    {
        id: 'device42',
        name: 'IT Asset Management — Device42',
        description:
            'Worked on asset discovery, database dependency mapping, proof-of-concept activities, and system configuration.',
        icon: Server,
        background: itamBg,
        testing: [
            'Overall Project Management'
        ]
    },
    {
        id: 'action1',
        name: 'RMM — Action1',
        description:
            'Worked with a remote monitoring and management platform supporting endpoint visibility and IT operations.',
        icon: Monitor,
        background: rmmBg,
        testing: [
            'Remote Monitoring',
            'Endpoint Management'
        ]
    },
    {
        id: 'xurrent',
        name: 'ITSM: Xurrent — Internal',
        description:
            'Worked with an internal IT service management platform supporting service workflows and operational processes.',
        icon: Workflow,
        background: itsmxBg,
        testing: [
            'IT Service Management',
            'Workflow Validation',
            'Functional Testing',
            'User Acceptance Testing'
        ]
    },
    {
        id: 'lms',
        name: 'Learning Management System',
        description:
            'Helped develop and test a learning management platform designed to support training and onboarding for new recruits.',
        icon: GraduationCap,
        background: lmsBg,
        testing: [
            'Software Development',
            'Manual Testing',
            'Test Case Design',
            'API Testing'
        ]
    },
    {
        id: 'supply-chain',
        name: 'Supply Chain & Financial Management',
        description:
            'Worked on an enterprise application supporting supply chain operations and financial management processes.',
        icon: ChartNoAxesCombined,
        background: scBg,
        testing: [
            'Oracle EBS',
            'SQL Developer',
            'Oracle APEX'
        ]
    },
    {
        id: 'conference-room',
        name: 'Conference Room Reservation System',
        description:
            'Developed a room reservation system for managing conference room availability, scheduling, and bookings.',
        icon: CalendarDays,
        background: crBg,
        testing: [
            'Software Development',
            'PostgreSQL',
            'Bubble.io'
        ]
    },
    {
        id: 'windows-software',
        name: 'Software Management System for Windows',
        description:
            'Worked on a Windows software management system designed to support application administration.',
        icon: MonitorCog,
        background: wsBg,
        testing: [
            'Software Management'
        ]
    },
    {
        id: 'hrms',
        name: 'Payroll & HR Management System',
        description:
            'Worked on a system supporting payroll administration and human resource management processes.',
        icon: Users,
        background: hrmsBg,
        testing: [
            'Payroll Management',
            'HR Management'
        ]
    }
];

/* =========================================
   FEATURED PROJECT CARD
========================================= */

function ProjectCard({ project }) {
    const Icon = project.icon;

    return (
        <article
            className={`project-card project-card--${project.id}`}
        >
            {/* Individual project background */}
            <div
                className="project-card-background"
                style={
                    project.background
                        ? {
                            backgroundImage: `url("${project.background}")`
                        }
                        : undefined
                }
                aria-hidden="true"
            />

            {/* Decorative corners */}
            <span
                className="project-card-corner project-card-corner--tl"
                aria-hidden="true"
            />
            <span
                className="project-card-corner project-card-corner--tr"
                aria-hidden="true"
            />
            <span
                className="project-card-corner project-card-corner--bl"
                aria-hidden="true"
            />
            <span
                className="project-card-corner project-card-corner--br"
                aria-hidden="true"
            />

            {/* Project information */}
            <div className="project-card-content">
                <div className="project-card-icon">
                    <Icon size={26} strokeWidth={1.6} />
                </div>

                <div className="project-card-details">
                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    {project.testing?.length > 0 && (
                        <div className="project-card-tags">
                            {project.testing.map((type) => (
                                <span
                                    className="project-card-tag"
                                    key={type}
                                >
                                    {type}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

/* =========================================
   ADDITIONAL PROJECT CARD
========================================= */

function AdditionalProjectCard({ project }) {
    const Icon = project.icon;

    return (
        <article
            className={`additional-project-card additional-project-card--${project.id}`}
        >
            {/* Individual project background */}
            <div
                className="additional-project-background"
                style={
                    project.background
                        ? {
                            backgroundImage: `url("${project.background}")`
                        }
                        : undefined
                }
                aria-hidden="true"
            />

            {/* Project information */}
            <div className="additional-project-content">
                <div className="additional-project-icon">
                    <Icon size={24} strokeWidth={1.6} />
                </div>

                <div className="additional-project-details">
                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    {project.testing?.length > 0 && (
                        <div className="additional-project-tags">
                            {project.testing.map((type) => (
                                <span
                                    className="additional-project-tag"
                                    key={type}
                                >
                                    {type}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

/* =========================================
   PROJECTS SECTION
========================================= */

export default function Projects() {
    return (
        <section
            id="projects"
            className="projects-section section-shell"
        >
            {/* Featured Projects Header */}
            <div className="projects-header">
                <h2>Featured Projects</h2>

                <p>
                    A selection of projects I've worked on,
                    covering test automation, manual testing,
                    and regression testing.
                </p>
            </div>

            {/* Featured Projects Grid */}
            <div className="featured-projects-grid">
                {featuredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>

            {/* Additional Projects Section */}
            <div className="additional-projects-section">
                <div className="additional-projects-header">
                    <h2>Other Projects &amp; Systems</h2>

                    <p>
                        Other systems and platforms I've worked
                        with throughout my software development
                        and quality assurance experience.
                    </p>
                </div>

                {/* Additional Projects Grid */}
                <div className="additional-projects-grid">
                    {additionalProjects.map((project) => (
                        <AdditionalProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
