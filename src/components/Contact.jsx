
import {
    Mail,
    Download,
    ArrowUpRight
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaViber,
    FaTelegramPlane,
    FaFacebookMessenger
} from "react-icons/fa";

import "../styles/Contact.css";

import resumePdf from "../assets/Carl_Patrick_Cagubcub_Resume.pdf";

/* =========================================
   CONTACT INFORMATION

   Mobile:
   Use 639XXXXXXXXX or 09XXXXXXXXX

   Telegram:
   Enter your username without @

   Messenger:
   Enter your full Messenger link
========================================= */

const contact = {
    email: "pcagubcub@gmail.com",
    mobile: "639690885231",
    linkedin: "https://www.linkedin.com/in/ccagubcub/",
    github: "https://github.com/DraftPepsi",
    telegram: "639690885231",
    messenger: "https://m.me/Popowoosh"
};

/* =========================================
   PHONE NUMBER FORMATTING
========================================= */

function getPhoneNumber() {
    const mobile = contact.mobile.replace(/\D/g, "");

    if (mobile.startsWith("0")) {
        return `63${mobile.slice(1)}`;
    }

    return mobile;
}

/* =========================================
   CONTACT LINKS
========================================= */

function getContactLinks() {
    const phoneNumber = getPhoneNumber();

    const telegramUsername = contact.telegram
        .trim()
        .replace(/^@/, "");

    return [
        {
            id: "whatsapp",
            name: "WhatsApp",
            icon: FaWhatsapp,
            url: phoneNumber
                ? `https://wa.me/${phoneNumber}`
                : ""
        },
        {
            id: "viber",
            name: "Viber",
            icon: FaViber,
            url: phoneNumber
                ? `viber://chat?number=%2B${phoneNumber}`
                : ""
        },
        {
            id: "telegram",
            name: "Telegram",
            icon: FaTelegramPlane,
            url: telegramUsername
                ? `https://t.me/${telegramUsername}`
                : ""
        },
        {
            id: "messenger",
            name: "Messenger",
            icon: FaFacebookMessenger,
            url: contact.messenger.trim()
        },
        {
            id: "linkedin",
            name: "LinkedIn",
            icon: FaLinkedin,
            url: contact.linkedin.trim()
        },
        {
            id: "github",
            name: "GitHub",
            icon: FaGithub,
            url: contact.github.trim()
        }
    ].filter((item) => Boolean(item.url));
}

/* =========================================
   CONTACT COMPONENT
========================================= */

export default function Contact() {
    const email = contact.email.trim();
    const hasEmail = Boolean(email);

    const contactLinks = getContactLinks();

    return (
        <section
            id="contact"
            className="contact-section section-shell"
        >
            <div className="contact-container">

                {/* =================================
                   CONTACT HEADER
                ================================= */}

                <div className="contact-header">
                    <span className="section-eyebrow">
                        LET'S CONNECT
                    </span>

                    <h2>Have something in mind?</h2>

                    <p>
                        Whether it's a QA opportunity,
                        an automation project, or just
                        a conversation about technology,
                        feel free to reach out through
                        any of the platforms below.
                    </p>
                </div>

                {/* =================================
                   CONTACT ACTIONS
                ================================= */}

                <div className="contact-actions">

                    {/* =================================
                       PRIMARY BUTTONS
                    ================================= */}

                    <div className="contact-primary-actions">

                        {/* EMAIL BUTTON */}

                        {hasEmail && (
                            <a
                                href={`mailto:${email}`}
                                className="contact-email-button"
                            >
                                <Mail
                                    size={20}
                                    strokeWidth={1.7}
                                    aria-hidden="true"
                                />

                                <span>Send an Email</span>

                                <ArrowUpRight
                                    size={18}
                                    aria-hidden="true"
                                />
                            </a>
                        )}

                        {/* DOWNLOAD RESUME BUTTON */}

                        <a
                            href={resumePdf}
                            download="Carl_Patrick_Cagubcub_Resume.pdf"
                            className="contact-resume-button"
                        >
                            <Download
                                size={20}
                                strokeWidth={1.7}
                                aria-hidden="true"
                            />

                            <span>Download Resume</span>

                            <ArrowUpRight
                                size={18}
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    {/* =================================
                       SOCIAL AND MESSAGING PLATFORMS
                    ================================= */}

                    {contactLinks.length > 0 && (
                        <div className="contact-platforms">

                            <span className="contact-platforms-label">
                                OR CONNECT THROUGH
                            </span>

                            <div className="contact-socials">
                                {contactLinks.map((item) => {
                                    const Icon = item.icon;

                                    const isWebLink =
                                        item.url.startsWith("https://") ||
                                        item.url.startsWith("http://");

                                    return (
                                        <a
                                            key={item.id}
                                            href={item.url}
                                            target={
                                                isWebLink
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                isWebLink
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className={
                                                `contact-social-link ` +
                                                `contact-social-link--${item.id}`
                                            }
                                            aria-label={`Connect via ${item.name}`}
                                        >
                                            <Icon
                                                size={20}
                                                aria-hidden="true"
                                            />

                                            <span>
                                                {item.name}
                                            </span>

                                            <ArrowUpRight
                                                size={15}
                                                strokeWidth={1.7}
                                                aria-hidden="true"
                                            />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
