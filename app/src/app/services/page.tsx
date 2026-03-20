import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import Hub from "@/components/sections/Hub";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Our Services — Talent Acquisition & HR Retainer",
    description:
        "JuneHires offers end-to-end talent acquisition and dedicated HR retainer services. We source, screen, and deliver exceptional candidates tailored to your organisation's needs.",
    keywords: [
        "talent acquisition",
        "HR retainer services",
        "recruitment agency",
        "HR outsourcing",
        "human resource solutions",
        "hiring partner",
    ],
    openGraph: {
        title: "Our Services — Talent Acquisition & HR Retainer | JuneHires",
        description:
            "End-to-end recruitment and dedicated HR partnership. From sourcing to onboarding, we handle the people side so you can focus on growth.",
        url: "https://www.junehires.com/services",
        images: [{ url: "/JuneHires_logo.png", width: 1200, height: 630, alt: "JuneHires Services" }],
    },
    alternates: {
        canonical: "https://www.junehires.com/services",
    },
};

const processSteps = [
    {
        num: "01",
        icon: "✦",
        title: "Tell Us Your Needs",
        desc: "Share the role, requirements, and culture fit you're looking for. We take it from there.",
    },
    {
        num: "02",
        icon: "✦",
        title: "We Source & Screen",
        desc: "Our team reviews hundreds of candidates. We reject 95% — so you only meet the best.",
    },
    {
        num: "03",
        icon: "✦",
        title: "You Interview Top 3–5",
        desc: "Meet a curated shortlist of pre-qualified, vetted candidates on your schedule.",
    },
    {
        num: "04",
        icon: "✦",
        title: "Hire & Onboard Fast",
        desc: "Choose your hire, sign off, and onboard in days — not months. We handle the rest.",
    },
];

export default function ServicesPage() {
    return (
        <>
            <PageHero
                eyebrow="Our Services"
                title="Human-centred solutions"
                titleHighlight="built for growth."
                subtitle="Whether you need to fill a critical role or build an entire HR function from scratch, JuneHires is your end-to-end people partner."
                primaryCta={{ label: "Start Hiring", href: "/contact" }}
                secondaryCta={{ label: "View Open Roles", href: "/careers" }}
            />

            <Services />

            {/* How It Works */}
            <section className="how-it-works-section" id="how-it-works">
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
                        <span className="eyebrow" style={{ justifyContent: "center" }}>
                            <span className="eyebrow-dot" />
                            The Process
                        </span>
                        <h2 className="section-title">
                            Hire your A-player in{" "}
                            <span style={{ color: "var(--amber)" }}>4 simple steps.</span>
                        </h2>
                        <p className="section-subtitle" style={{ margin: "0 auto 0" }}>
                            We do the heavy lifting — from sourcing to screening. You just show up for interviews and pick your favourite.
                        </p>
                    </div>

                    <div className="process-grid">
                        {processSteps.map((step) => (
                            <div key={step.num} className="process-step-card" id={`process-step-${step.num}`}>
                                <div className="process-step-icon">{step.icon}</div>
                                <div className="process-step-num">{step.num}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p style={{ textAlign: "center", marginTop: 32, fontSize: 15, color: "var(--text-mid)" }}>
                        Average time from brief to onboarding:{" "}
                        <strong style={{ color: "var(--amber)" }}>under 7 days.</strong>
                    </p>
                </div>
            </section>

            <CTASection
                title="Ready to scale with world-class talent?"
                titleHighlight="world-class talent?"
                subtitle="Book a free 15-minute discovery call. No pressure, no obligation — just a conversation about your hiring needs."
                primaryCta={{ label: "Book Your Free Call", href: "/contact" }}
                secondaryCta={{ label: "Email Us Instead", href: "mailto:recruiter@junehires.com" }}
            />
        </>
    );
}
