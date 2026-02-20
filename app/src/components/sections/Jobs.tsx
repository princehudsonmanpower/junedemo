"use client";
import { useState } from "react";

const openings = [
    {
        id: "ea-intern",
        title: "Executive Assistant Intern",
        type: "Internship",
        location: "Remote",
        tag: "Free Program",
        tagType: "amber",
        subject: "EA Intern Application – [Your Name]",
    },
    {
        id: "hr-intern",
        title: "HR Generalist Intern",
        type: "Internship",
        location: "Remote",
        tag: "Free Program",
        tagType: "amber",
        subject: "HR Intern Application – [Your Name]",
    },
    {
        id: "talent-coordinator",
        title: "Talent Coordinator",
        type: "Full-time",
        location: "Remote",
        tag: "Open",
        tagType: "sage",
        subject: "Talent Coordinator Application – [Your Name]",
    },
];

const steps = [
    {
        num: "01",
        title: "Check the Subject Line",
        desc: "Each job listing has a specific email subject format. Copy it exactly — this is your first test of attention to detail.",
    },
    {
        num: "02",
        title: "Submit your CV via Email",
        desc: "Send your CV to recruiter@junehires.com with the correct subject line. Make it count — first impressions matter.",
    },
    {
        num: "03",
        title: "Complete the Application Form",
        desc: "Click the link in the job description to fill in your application details. This helps us understand you better.",
    },
];

export default function Jobs() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyEmail = () => {
        navigator.clipboard.writeText("recruiter@junehires.com");
        setCopied("email");
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="jobs" className="jobs-section">
            <div className="container">

                {/* Header */}
                <div style={{ maxWidth: 580 }}>
                    <span className="eyebrow">
                        <span className="eyebrow-dot" style={{ background: "var(--amber-light)" }} />
                        Job Board
                    </span>
                    <h2 className="section-title">Current Openings</h2>
                    <p className="section-subtitle">
                        We value attention to detail. Every application step matters — and
                        getting it right is your first chance to impress us.
                    </p>
                </div>

                {/* How to apply steps */}
                <div style={{ marginTop: 16, marginBottom: 8 }}>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20 }}>
                        How to Apply
                    </p>
                </div>
                <div className="jobs-how-grid">
                    {steps.map((s) => (
                        <div key={s.num} className="how-step-card" id={`step-${s.num}`}>
                            <div className="how-step-num">{s.num}</div>
                            <h4>{s.title}</h4>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Email CTA band */}
                <div className="jobs-cta-band">
                    <div>
                        <h3>Ready to apply?</h3>
                        <p>Send your CV to our recruiter — we read every application.</p>
                    </div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 10,
                            padding: "10px 18px",
                            fontSize: 15,
                            color: "rgba(255,255,255,0.8)",
                            fontFamily: "monospace",
                        }}>
                            recruiter@junehires.com
                        </span>
                        <button
                            onClick={copyEmail}
                            className="btn btn-primary"
                            id="copy-email-btn"
                            style={{ cursor: "pointer" }}
                        >
                            {copied === "email" ? "✓ Copied!" : "Copy Email"}
                        </button>
                    </div>
                </div>

                {/* Openings list */}
                <div style={{ marginTop: 48, marginBottom: 16 }}>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        Open Positions
                    </p>
                </div>
                <div className="jobs-openings-list">
                    {openings.map((job) => (
                        <div
                            key={job.id}
                            className="job-opening-card"
                            id={`job-${job.id}`}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="job-opening-info">
                                <h4>{job.title}</h4>
                                <p>Subject: <span style={{ fontFamily: "monospace", color: "rgba(255,255,255,0.6)" }}>{job.subject}</span></p>
                            </div>
                            <div className="job-opening-tags">
                                <span className="job-tag">{job.location}</span>
                                <span className="job-tag">{job.type}</span>
                                <span className={`job-tag ${job.tagType === "amber" ? "job-tag-amber" : ""}`}>{job.tag}</span>
                            </div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ color: "rgba(255,255,255,0.25)", flexShrink: 0 }}>
                                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* No openings remark */}
                <p style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "rgba(255,255,255,0.3)" }}>
                    Don&apos;t see the right role? Send a speculative application to{" "}
                    <a href="mailto:recruiter@junehires.com" style={{ color: "var(--amber-light)", textDecoration: "none" }}>
                        recruiter@junehires.com
                    </a>
                </p>

            </div>
        </section>
    );
}
