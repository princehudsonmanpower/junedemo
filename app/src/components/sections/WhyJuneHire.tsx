"use client";
import Link from "next/link";

const values = [
    { emoji: "✦", label: "Loyalty" },
    { emoji: "✦", label: "Consistency" },
    { emoji: "✦", label: "Partnership" },
    { emoji: "✦", label: "Growth" },
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
                            {/* Subtle blue overlay at bottom */}
                            <div style={{
                                position: "absolute", bottom: 0, left: 0, right: 0,
                                height: "35%",
                                background: "linear-gradient(to top, rgba(10,102,194,0.15), transparent)",
                            }} />
                        </div>

                        {/* Credibility badge */}
                        <div className="why-photo-badge">
                            <span style={{ fontSize: 20 }}>🏆</span>
                            <p>500+ Successful<br />Placements</p>
                        </div>

                        {/* Decorative element */}
                        <div style={{
                            position: "absolute", top: -20, left: -20,
                            width: 80, height: 80,
                            borderRadius: 20,
                            background: "var(--blue-pale)",
                            border: "2px solid var(--border-warm)",
                            zIndex: -1,
                        }} />
                    </div>

                    {/* ── Content column ── */}
                    <div>
                        <span className="eyebrow">
                            <span className="eyebrow-dot" />
                            A closer look
                        </span>

                        <h2 className="section-title">
                            Our story &amp;{" "}
                            <span style={{ color: "var(--blue)" }}>values</span>
                        </h2>

                        <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 24 }}>
                            JuneHires was built on one conviction: that hiring done right changes lives.
                            We combine rigorous talent acquisition with a genuinely personal touch — because
                            every placement is a partnership, not just a transaction.
                        </p>

                        <aside className="why-june-origin" aria-labelledby="why-june-title">
                            <h3 id="why-june-title" className="why-june-origin-title">
                                Why &ldquo;June&rdquo;?
                            </h3>
                            <p>
                                Before there was a logo, there was a dog — <strong>June</strong>, the one I loved
                                most. She was loyalty in a small body: present, patient, and unshakably kind.
                                When I named this company, I wasn&apos;t thinking of a month on the calendar;
                                I was carrying her forward. <em>JuneHires</em> is my way of bringing that same
                                spirit into how we treat people — faithful, warm, and human, every single time.
                            </p>
                        </aside>

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
