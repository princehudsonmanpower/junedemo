"use client";

const features = [
    {
        icon: "✦",
        bg: "var(--amber-pale)",
        title: "Hands-on Mentorship",
        desc: "Aspiring Executive Assistants and HR Professionals get real mentorship, not just theory. Learn alongside experienced professionals on live projects.",
    },
    {
        icon: "✦",
        bg: "var(--sage-pale)",
        title: "Expert Resume Reviews",
        desc: "Need a second pair of eyes? We provide expert guidance to ensure your resume reflects your true potential and stands out to recruiters.",
    },
    {
        icon: "✦",
        bg: "var(--blue-pale)",
        title: "Zero Experience Needed",
        desc: "No prior experience required — just a ready-to-learn attitude. If you're eager, we'll guide you every step of the way.",
    },
    {
        icon: "✦",
        bg: "var(--sage-pale)",
        title: "Completely Free",
        desc: "Internship with JuneHires is 100% free — built for HR and EA profiles starting their careers and hungry for real exposure.",
    },
];

export default function Hub() {
    return (
        <section id="hub" className="hub-section">
            <div className="container">
                <div className="hub-grid">

                    {/* Visual side */}
                    <div className="hub-visual">
                        <div className="hub-image-stack">
                            <div className="hub-img-main">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=85&fit=crop"
                                    alt="Interns collaborating and learning"
                                />
                            </div>
                            <div className="hub-img-accent">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80&fit=crop"
                                    alt="Mentorship and career growth"
                                />
                            </div>
                            {/* Floating "Free" badge */}
                            <div className="hub-badge">
                                <strong>Free</strong>
                                <span>Always &amp; Forever</span>
                            </div>
                        </div>
                    </div>

                    {/* Content side */}
                    <div>
                        <span className="eyebrow">
                            <span className="eyebrow-dot" />
                            Internship &amp; Guidance Hub
                        </span>

                        <h2 className="section-title">
                            Learn by Doing.<br />
                            <span style={{ color: "var(--amber)" }}>Grow by Experiencing.</span>
                        </h2>

                        <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.75, marginBottom: 8 }}>
                            <strong>Internship with JuneHires</strong> is not a generic internship — it&apos;s
                            aimed at HR and EA profiles starting their careers. Learn on real work, with
                            mentorship, completely free.
                        </p>

                        <div className="hub-features">
                            {features.map((f) => (
                                <div key={f.title} className="hub-feature-item">
                                    <div
                                        className="hub-feature-icon"
                                        style={{ background: f.bg }}
                                    >
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
                            <a
                                href="mailto:recruiter@junehires.com?subject=Internship%20Application%20-%20JuneHires"
                                className="btn btn-primary"
                                id="hub-apply-cta"
                            >
                                Apply for Internship
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="mailto:recruiter@junehires.com?subject=Resume%20Review%20Request"
                                className="btn btn-outline"
                                id="hub-resume-cta"
                            >
                                Get Resume Reviewed
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
