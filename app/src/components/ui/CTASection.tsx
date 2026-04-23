"use client";
import Link from "next/link";
import { useCallback, useState } from "react";

function isHttpUrl(href: string) {
    return href.startsWith("http://") || href.startsWith("https://");
}

const DEFAULT_RECRUITER_EMAIL = "recruiter@junehires.com";

interface CTASectionProps {
    /** Plain text before the accent span (no string splitting). */
    titlePrefix?: string;
    /** Accent segment; styled with .cta-title-accent */
    titleAccent?: string;
    subtitle?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    /** When true, show email field + Copy button instead of the primary CTA (e.g. home page). */
    recruiterEmailCopy?: boolean;
    recruiterEmail?: string;
}

export default function CTASection({
    titlePrefix = "Ready to find the ",
    titleAccent = "perfect fit?",
    subtitle = "Let's talk about your hiring needs. No obligations - just a genuine conversation about how we can help you grow.",
    primaryCta = { label: "Get in Touch", href: "/contact" },
    secondaryCta = { label: "View Open Roles", href: "/careers" },
    recruiterEmailCopy = false,
    recruiterEmail = DEFAULT_RECRUITER_EMAIL,
}: CTASectionProps) {
    const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

    const handleCopyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(recruiterEmail);
            setCopyState("copied");
            window.setTimeout(() => setCopyState("idle"), 2200);
        } catch {
            setCopyState("error");
            window.setTimeout(() => setCopyState("idle"), 2800);
        }
    }, [recruiterEmail]);

    const secondaryClass =
        "btn btn-outline" + (recruiterEmailCopy ? " cta-email-row-outline" : "");

    const secondaryCtaNode =
        secondaryCta.href.startsWith("mailto:") || isHttpUrl(secondaryCta.href) ? (
            <a
                href={secondaryCta.href}
                {...(isHttpUrl(secondaryCta.href) ? { target: "_blank" as const, rel: "noopener noreferrer" } : {})}
                className={secondaryClass}
                id="cta-secondary"
            >
                {secondaryCta.label}
            </a>
        ) : (
            <Link href={secondaryCta.href} className={secondaryClass} id="cta-secondary">
                {secondaryCta.label}
            </Link>
        );

    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-inner">


                    <span className="eyebrow" style={{ color: "var(--amber)", justifyContent: "center" }}>
                        <span className="eyebrow-dot" style={{ background: "var(--amber)" }} />
                        Let&apos;s Work Together
                    </span>

                    <h2 className="section-title" style={{ color: "var(--charcoal)", textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
                        {titlePrefix}
                        <span className="cta-title-accent">{titleAccent}</span>
                    </h2>

                    <p style={{
                        fontSize: 17, color: "var(--text-mid)",
                        lineHeight: 1.75, textAlign: "center",
                        maxWidth: 520, margin: "0 auto 36px",
                    }}>
                        {subtitle}
                    </p>

                    <div
                        className={
                            recruiterEmailCopy ? "cta-actions cta-actions--email-copy" : "cta-actions"
                        }
                    >
                        {recruiterEmailCopy ? (
                            <div className="cta-email-field">
                                <code className="cta-email-code">{recruiterEmail}</code>
                                <button
                                    type="button"
                                    className="cta-copy-email-btn"
                                    id="cta-copy-recruiter-email"
                                    onClick={handleCopyEmail}
                                >
                                    {copyState === "copied"
                                        ? "Copied!"
                                        : copyState === "error"
                                          ? "Try again"
                                          : "Copy Email"}
                                </button>
                            </div>
                        ) : isHttpUrl(primaryCta.href) ? (
                            <a
                                href={primaryCta.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                id="cta-primary"
                            >
                                {primaryCta.label}
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        ) : (
                            <Link href={primaryCta.href} className="btn btn-primary" id="cta-primary">
                                {primaryCta.label}
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        )}
                        {secondaryCtaNode}
                    </div>
                    {recruiterEmailCopy && copyState !== "idle" ? (
                        <p className="sr-only" role="status" aria-live="polite">
                            {copyState === "copied"
                                ? "Email address copied to clipboard."
                                : "Could not copy. Try again or select the address manually."}
                        </p>
                    ) : null}

                    {/* Trust signals */}
                    <div className="cta-trust-signals">
                        {["No hidden fees", "Replacement guarantee"].map((signal) => (
                            <span key={signal} className="cta-trust-item">
                                <span style={{ color: "var(--amber)" }}>✓</span> {signal}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
