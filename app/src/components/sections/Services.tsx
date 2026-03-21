"use client";
import Link from "next/link";

const services = [
    {
        id: "talent-acquisition",
        icon: "✦",
        iconClass: "service-icon-amber",
        tag: "For Employers",
        tagClass: "tag-amber",
        title: "Talent Acquisition",
        description:
            "We source, screen, and deliver exceptional candidates tailored to your organisation's culture and needs — so you only meet the right people.",
        features: [
            "End-to-end recruitment management",
            "Role-specific candidate screening",
            "Culture-fit assessments",
            "Seamless onboarding support",
        ],
        cta: { label: "Start Hiring", href: "/services#how-it-works" },
    },
    {
        id: "hr-retainer",
        icon: "✦",
        iconClass: "service-icon-sage",
        tag: "Partnership",
        tagClass: "tag-sage",
        title: "HR Retainer Services",
        description:
            "Get a dedicated HR partner on a retainer basis. From policy crafting to employee engagement, we handle the people-side so you can focus on growth.",
        features: [
            "Dedicated HR professional support",
            "Policy development & compliance",
            "Performance management frameworks",
            "Employee engagement strategies",
        ],
        cta: { label: "Explore Retainer", href: "/services#hr-retainer-process" },
    },
];

export default function Services() {
    return (
        <section id="services" className="services-section">
            <div className="container">

                {/* Header */}
                <div style={{ maxWidth: 600 }}>
                    <span className="eyebrow">
                        <span className="eyebrow-dot" />
                        Services for Employers
                    </span>
                    <h2 className="section-title">
                        Human-centred solutions<br />
                        <span style={{ color: "var(--amber)" }}>built for growth.</span>
                    </h2>
                    <p className="section-subtitle">
                        Whether you need to fill a critical role or build an entire HR
                        function from scratch, JuneHires is your end-to-end people partner.
                    </p>
                </div>

                {/* Service cards */}
                <div className="services-grid">
                    {services.map((s) => (
                        <div key={s.id} className="service-card" id={`service-${s.id}`}>
                            <div className={`service-icon ${s.iconClass}`}>{s.icon}</div>
                            <span className={`tag ${s.tagClass}`} style={{ marginBottom: 16, display: "inline-flex" }}>
                                {s.tag}
                            </span>
                            <h3>{s.title}</h3>
                            <p>{s.description}</p>
                            <ul className="service-features">
                                {s.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                            <Link
                                href={s.cta.href}
                                className="btn btn-primary"
                                id={`service-cta-${s.id}`}
                                style={{ marginTop: 28, width: "fit-content" }}
                            >
                                {s.cta.label}
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
