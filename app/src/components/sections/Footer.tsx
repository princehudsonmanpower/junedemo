import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-brand-logo-row">
                            <span className="footer-brand-logo-wrap">
                                <Image
                                    src="/JuneHires_logo.png"
                                    alt="JuneHires"
                                    width={200}
                                    height={48}
                                    style={{ height: "48px", width: "auto", display: "block" }}
                                />
                            </span>
                        </div>
                        <p>
                            End-to-end human resource solutions and talent acquisition — built
                            on loyalty, consistency, and a genuine love for people.
                        </p>
                        <p style={{ marginTop: 16 }}>
                            Built for you.
                        </p>
                        <a
                            href="mailto:recruiter@junehires.com"
                            style={{
                                display: "inline-flex", alignItems: "center", gap: 8,
                                marginTop: 20,
                                color: "var(--amber-light)",
                                textDecoration: "none",
                                fontSize: 14,
                                fontWeight: 500,
                            }}
                        >
                            <span aria-hidden="true">✉ </span>
                            recruiter@junehires.com
                        </a>
                    </div>

                    {/* Links col 1 */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/services#process-step-02">Talent Acquisition</Link></li>
                            <li><Link href="/services#retainer-step-02">HR Retainer</Link></li>
                            <li><Link href="/internships">Internship Program</Link></li>
                            <li><Link href="/internships#hub-resume-cta">Resume Reviews</Link></li>
                            <li><Link href="/careers">Job Board</Link></li>
                        </ul>
                    </div>

                    {/* Links col 2 */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">Our Story</Link></li>
                            <li><Link href="/testimonials">Success Stories</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><a href="https://www.linkedin.com/company/junehires" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <span>© {year} JuneHires. All rights reserved.</span>
                    <span>
                        Made with ♥ by Rashmi
                    </span>
                    <span>
                        <a href="mailto:recruiter@junehires.com">recruiter@junehires.com</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
