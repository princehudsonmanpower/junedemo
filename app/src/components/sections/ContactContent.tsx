"use client";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export default function ContactContent() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("recruiter@junehires.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <PageHero
                eyebrow="Get in Touch"
                title="Let's build something"
                titleHighlight="great together."
                subtitle="Whether you need to hire exceptional talent or you're looking for your next career opportunity — we'd love to hear from you."
            />

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Left: Contact info */}
                        <div className="contact-info">
                            <h2 className="section-title" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                                We read every{" "}
                                <span style={{ color: "var(--amber)" }}>message.</span>
                            </h2>
                            <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 36 }}>
                                Whether you&apos;re an employer looking for exceptional talent,
                                a candidate seeking your next move, or someone interested in our
                                internship program — reach out. We&apos;re here for all of it.
                            </p>

                            {/* Contact cards */}
                            <div className="contact-cards">
                                <div className="contact-card">
                                    <div className="contact-card-icon">✉</div>
                                    <div>
                                        <h4>Email Us</h4>
                                        <a href="mailto:recruiter@junehires.com" style={{ color: "var(--amber)", textDecoration: "none", fontSize: 15 }}>
                                            recruiter@junehires.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card-icon">💼</div>
                                    <div>
                                        <h4>LinkedIn</h4>
                                        <a href="https://www.linkedin.com/company/junehires" target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber)", textDecoration: "none", fontSize: 15 }}>
                                            /company/junehires
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="contact-card-icon">📍</div>
                                    <div>
                                        <h4>Location</h4>
                                        <p style={{ fontSize: 15, color: "var(--text-mid)" }}>Remote-First, Global</p>
                                    </div>
                                </div>
                            </div>

                            {/* Copy email button */}
                            <button
                                onClick={copyEmail}
                                className="btn btn-primary"
                                id="contact-copy-email"
                                style={{ marginTop: 32, cursor: "pointer" }}
                            >
                                {copied ? "✓ Email Copied!" : "Copy Email Address"}
                            </button>
                        </div>

                        {/* Right: Quick action cards */}
                        <div className="contact-actions">
                            <div className="contact-action-card" id="contact-hiring">
                                <div className="contact-action-icon">🎯</div>
                                <h3>I&apos;m Looking to Hire</h3>
                                <p>Tell us about the role you need filled. We&apos;ll present top candidates within 5–10 days.</p>
                                <a href="mailto:recruiter@junehires.com?subject=Hiring Inquiry" className="btn btn-primary" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>
                                    Start Hiring
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>

                            <div className="contact-action-card" id="contact-job-seeker">
                                <div className="contact-action-icon">💼</div>
                                <h3>I&apos;m Looking for a Job</h3>
                                <p>Browse our open positions or send a speculative application with your CV.</p>
                                <Link href="/careers" className="btn btn-outline" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>
                                    View Open Roles
                                </Link>
                            </div>

                            <div className="contact-action-card" id="contact-intern">
                                <div className="contact-action-icon">🌱</div>
                                <h3>I Want to Learn &amp; Grow</h3>
                                <p>Apply for our free internship program. No experience needed — just eagerness.</p>
                                <Link href="/internships" className="btn btn-outline" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>
                                    Explore Internships
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
