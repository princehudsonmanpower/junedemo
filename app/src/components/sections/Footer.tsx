"use client";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: "var(--amber)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 18,
                            }}>🐾</div>
                            <h3 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#fff" }}>
                                JuneHires
                            </h3>
                        </div>
                        <p>
                            End-to-end human resource solutions and talent acquisition — built
                            on loyalty, consistency, and a genuine love for people.
                        </p>
                        <p style={{ marginTop: 16 }}>
                            Named after June. Built for you.
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
                            ✉ recruiter@junehires.com
                        </a>
                    </div>

                    {/* Links col 1 */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/services">Talent Acquisition</Link></li>
                            <li><Link href="/services">HR Retainer</Link></li>
                            <li><Link href="/internships">Internship Program</Link></li>
                            <li><Link href="/internships">Resume Reviews</Link></li>
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
