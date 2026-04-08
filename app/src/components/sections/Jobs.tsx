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
                        <span className="eyebrow-dot" />
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
                    <span className="sr-only" aria-live="polite">
                        {copied === "email" ? "Email address copied to clipboard." : ""}
                    </span>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{
                            background: "rgba(15, 23, 42, 0.04)",
                            border: "1px solid var(--border-soft)",
                            borderRadius: 10,
                            padding: "10px 18px",
                            fontSize: 15,
                            color: "var(--charcoal)",
                            fontFamily: "monospace",
                        }}>
                            recruiter@junehires.com
                        </span>
                        <button
                            type="button"
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
                <p style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "var(--text-soft)" }}>
                    Don&apos;t see the right role? Send a speculative application to{" "}
                    <a href="mailto:recruiter@junehires.com" style={{ color: "var(--blue)", textDecoration: "none" }}>
                        recruiter@junehires.com
                    </a>
                </p>

            </div>
        </section>
    );
}
