"use client";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
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
                            <li><a href="#services">Talent Acquisition</a></li>
                            <li><a href="#services">HR Retainer</a></li>
                            <li><a href="#hub">Internship Program</a></li>
                            <li><a href="#hub">Resume Reviews</a></li>
                            <li><a href="#jobs">Job Board</a></li>
                        </ul>
                    </div>

                    {/* Links col 2 */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#why">Our Story</a></li>
                            <li><a href="#testimonials">Success Stories</a></li>
                            <li><a href="mailto:recruiter@junehires.com">Contact Us</a></li>
                            <li><a href="https://www.linkedin.com/company/junehires" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <span>© {year} JuneHires. All rights reserved.</span>
                    <span style={{ opacity: 0.4 }}>
                        Made with 🐾 by Rashmi
                    </span>
                    <span>
                        <a href="mailto:recruiter@junehires.com">recruiter@junehires.com</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
