
import { Award, ExternalLink, Check } from "lucide-react";

import certificationsBg from "../assets/backgrounds/certifications-bg.png";
import "../styles/Certifications.css";

/* =========================================
   CERTIFICATIONS DATA
========================================= */

const certifications = [
    {
        id: "freshservice",
        name: "Freshservice Certification",
        issuer: "Freshworks",
        description:
            "Certified in configuring and testing Freshservice instances, including service management workflows, system settings, and functional validation.",
        credentials: [
            "Configuration",
            "Functional Testing"
        ],
        credentialUrl: ""
    },
    {
        id: "freshdesk",
        name: "Freshdesk Certification",
        issuer: "Freshworks",
        description:
            "Certified in configuring and testing Freshdesk instances, including customer support workflows, ticket management, and system functionality.",
        credentials: [
            "Configuration",
            "Functional Testing"
        ],
        credentialUrl: ""
    },
    {
        id: "device42",
        name: "Device42 Certification",
        issuer: "Device42",
        description:
            "Certified at the Technical Associate and Technical Advanced levels, covering technical knowledge of the Device42 platform and its capabilities.",
        credentials: [
            "Technical Associate",
            "Technical Advanced"
        ],
        credentialUrl: ""
    },
    {
        id: "xurrent",
        name: "Xurrent Certification",
        issuer: "Xurrent",
        description:
            "Certified in Xurrent Administration Levels 1 and 2, covering platform administration, configuration, and service management capabilities.",
        credentials: [
            "Administrator Level 1",
            "Administrator Level 2"
        ],
        credentialUrl: ""
    },
    {
        id: "action1",
        name: "Action1 Certification",
        issuer: "Action1",
        description:
            "Certified in configuring and testing Action1, with knowledge of platform settings, endpoint management functionality, and system validation.",
        credentials: [
            "Configuration",
            "Functional Testing"
        ],
        credentialUrl: ""
    }
];

/* =========================================
   CERTIFICATION CARD
========================================= */

function CertificationCard({ certification }) {
    return (
        <article
            className={`certification-card certification-card--${certification.id}`}
            style={{
                "--certification-bg": `url("${certificationsBg}")`
            }}
        >
            <div className="certification-card-header">
                <div className="certification-card-icon">
                    <Award size={24} strokeWidth={1.6} />
                </div>

                <div className="certification-card-info">
                    <h3>{certification.name}</h3>

                    <p className="certification-issuer">
                        {certification.issuer}
                    </p>
                </div>
            </div>

            <p className="certification-description">
                {certification.description}
            </p>

            <div className="certification-credentials">
                {certification.credentials.map((credential) => (
                    <span
                        className="certification-credential"
                        key={credential}
                    >
                        <Check size={14} strokeWidth={1.8} />
                        {credential}
                    </span>
                ))}
            </div>

            {certification.credentialUrl && (
                <div className="certification-card-footer">
                    <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-link"
                    >
                        View Credential
                        <ExternalLink
                            size={15}
                            strokeWidth={1.8}
                        />
                    </a>
                </div>
            )}
        </article>
    );
}

/* =========================================
   CERTIFICATIONS SECTION
========================================= */

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="certifications-section section-shell"
        >
            <div className="certifications-header">
                <h2>Certifications</h2>

                <p>
                    Professional certifications and learning
                    achievements supporting my experience
                    in software testing, automation,
                    and development.
                </p>
            </div>

            <div className="certifications-grid">
                {certifications.map((certification) => (
                    <CertificationCard
                        key={certification.id}
                        certification={certification}
                    />
                ))}
            </div>
        </section>
    );
}
