
import { ArrowUp } from "lucide-react";

import "../styles/Footer.css";

/* =========================================
   FOOTER COMPONENT
========================================= */

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* =================================
                   FOOTER BRAND
                ================================= */}

                <div className="footer-brand">
                    <a
                        href="#home"
                        className="footer-logo"
                    >
                        CARL PATRICK CAGUBCUB
                    </a>

                    <p>
                        Quality Assurance · Test Automation ·
                        Software Development
                    </p>
                </div>

                {/* =================================
                   FOOTER BOTTOM
                ================================= */}

                <div className="footer-bottom">

                    {/* COPYRIGHT */}

                    <span className="footer-copyright">
                        © {currentYear} Carl Patrick Cagubcub.
                        All rights reserved.
                    </span>

                    {/* BACK TO TOP */}

                    <a
                        href="#home"
                        className="footer-back-to-top"
                    >
                        <span>Back to Top</span>

                        <ArrowUp
                            size={15}
                            strokeWidth={1.7}
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
