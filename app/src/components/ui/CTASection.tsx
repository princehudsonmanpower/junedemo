"use client";
import Link from "next/link";

interface CTASectionProps {
    title?: string;
    titleHighlight?: string;
    subtitle?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
}

export default function CTASection({
    title = "Ready to find the perfect fit?",
    titleHighlight = "the perfect fit?",
    subtitle = "Let's talk about your hiring needs. No obligations — just a genuine conversation about how we can help you grow.",
    primaryCta = { label: "Get in Touch", href: "/contact" },
    secondaryCta = { label: "View Open Roles", href: "/careers" },
}: CTASectionProps) {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-inner">
                    {/* Decorative paw prints */}
                    <div className="cta-paw cta-paw-1">🐾</div>
                    <div className="cta-paw cta-paw-2">🐾</div>

                    <span className="eyebrow" style={{ color: "var(--amber-light)", justifyContent: "center" }}>
                        <span className="eyebrow-dot" style={{ background: "var(--amber-light)" }} />
                        Let&apos;s Work Together
                    </span>

                    <h2 className="section-title" style={{ color: "#fff", textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
                        {title.replace(titleHighlight, "")}
                        <span style={{ color: "var(--amber-light)" }}>{titleHighlight}</span>
                    </h2>

                    <p style={{
                        fontSize: 17, color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.75, textAlign: "center",
                        maxWidth: 520, margin: "0 auto 36px",
                    }}>
                        {subtitle}
                    </p>

                    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href={primaryCta.href} className="btn btn-primary" id="cta-primary">
                            {primaryCta.label}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href={secondaryCta.href} className="btn btn-ghost-dark" id="cta-secondary">
                            {secondaryCta.label}
                        </Link>
                    </div>

                    {/* Trust signals */}
                    <div className="cta-trust-signals">
                        {["No contracts", "No hidden fees", "Replacement guarantee"].map((signal) => (
                            <span key={signal} className="cta-trust-item">
                                <span style={{ color: "var(--amber-light)" }}>✓</span> {signal}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
