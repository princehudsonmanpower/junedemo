"use client";
import { useState } from "react";
import LinkedInFeed from "@/components/sections/LinkedInFeed";

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

            </div>

            {/* LinkedIn feed sits between header and apply CTA */}
            <LinkedInFeed />

            <div className="container">

                {/* Email CTA band */}
                <div className="jobs-cta-band" style={{ marginTop: 0 }}>
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
