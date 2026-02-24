"use client";
import Link from "next/link";

const values = [
    { emoji: "🐾", label: "Loyalty" },
    { emoji: "🎯", label: "Consistency" },
    { emoji: "🤝", label: "Partnership" },
    { emoji: "💡", label: "Growth" },
];

export default function WhyJuneHires() {
    return (
        <section id="why" className="why-section">
            <div className="container">
                <div className="why-inner">

                    {/* ── Photo column ── */}
                    <div className="why-photo-wrap">
                        <div className="why-photo-frame">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/rashmi.jpg"
                                alt="Rashmi — Founder of JuneHires"
                            />
                            {/* Warm overlay at bottom */}
                            <div style={{
                                position: "absolute", bottom: 0, left: 0, right: 0,
                                height: "35%",
                                background: "linear-gradient(to top, rgba(232,160,32,0.15), transparent)",
                            }} />
                        </div>

                        {/* Floating paw badge */}
                        <div className="why-photo-badge">
                            <span className="paw">🐾</span>
                            <p>Named after June,<br />our beloved dog</p>
                        </div>

                        {/* Decorative element */}
                        <div style={{
                            position: "absolute", top: -20, left: -20,
                            width: 80, height: 80,
                            borderRadius: 20,
                            background: "var(--amber-pale)",
                            border: "2px solid var(--border-warm)",
                            zIndex: -1,
                        }} />
                    </div>

                    {/* ── Content column ── */}
                    <div>
                        <span className="eyebrow">
                            <span className="eyebrow-dot" />
                            Our Story &amp; Values
                        </span>

                        <h2 className="section-title">
                            Why <span style={{ color: "var(--amber)" }}>JuneHires?</span>
                        </h2>

                        <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 24 }}>
                            JuneHires is named after my dog, <strong>June</strong>. To me, June represents
                            loyalty, consistency, and the joy of a perfect partnership. These are the exact
                            values we bring to every client and candidate we serve.
                        </p>

                        {/* Values pills */}
                        <div className="why-values">
                            {values.map((v) => (
                                <span key={v.label} className="why-value-pill">
                                    {v.emoji} {v.label}
                                </span>
                            ))}
                        </div>

                        {/* Founder's note */}
                        <div className="why-founder-note">
                            <p>
                                My career began in the world of R&amp;D, but my true path took shape when I
                                discovered the power of human connection. I realised that my greatest
                                fulfilment came from bringing ideas to life through people.
                            </p>
                            <p style={{ marginTop: 16 }}>
                                I&apos;m Rashmi, and JuneHires is my way of giving back — a space designed to
                                guide, support, and share the lessons I&apos;ve learned. Nothing gives me more
                                joy than witnessing a professional gain their footing, a student discover their
                                direction, or a founder build a team they can trust. We are here to grow
                                alongside you.
                            </p>
                            <div className="why-founder-sig">
                                — Rashmi, Founder &amp; CEO, JuneHires
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" id="why-hire-cta">
                                Work with Us
                            </Link>
                            <Link href="/testimonials" className="btn btn-outline" id="why-stories-cta">
                                Read Success Stories
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
