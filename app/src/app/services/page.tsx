import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import CTASection from "@/components/ui/CTASection";
import { GOOGLE_FORM_SHORT_URL } from "@/lib/google-form";

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

const retainerProcessSteps = [
    {
        num: "01",
        icon: "✦",
        title: "Discovery & scope",
        desc: "We map your team size, culture, and people priorities — then agree what “great HR” looks like for your stage.",
    },
    {
        num: "02",
        icon: "✦",
        title: "Policies & compliance",
        desc: "Handbooks, contracts, and compliant frameworks tailored to how you actually work — not generic templates.",
    },
    {
        num: "03",
        icon: "✦",
        title: "Ongoing partnership",
        desc: "A dedicated HR partner for engagement, performance conversations, and day-to-day people questions.",
    },
    {
        num: "04",
        icon: "✦",
        title: "Review & scale",
        desc: "Quarterly check-ins to refine priorities; flex the retainer as you hire and grow.",
    },
];

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
                primaryCta={{ label: "Start Hiring", href: "#how-it-works" }}
                secondaryCta={{ label: "View Open Roles", href: "/careers" }}
            />

            <Services />

            {/* HR Retainer workflow */}
            <section
                className="how-it-works-section"
                id="hr-retainer-process"
                style={{ background: "var(--warm-white)" }}
            >
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
                        <span className="eyebrow" style={{ justifyContent: "center" }}>
                            <span className="eyebrow-dot" />
                            HR Retainer
                        </span>
                        <h2 className="section-title">
                            Your embedded HR partner in{" "}
                            <span style={{ color: "var(--amber)" }}>4 focused steps.</span>
                        </h2>
                        <p className="section-subtitle" style={{ margin: "0 auto 0" }}>
                            From foundations to ongoing support — we stay beside you as your people function matures.
                        </p>
                    </div>

                    <div className="process-grid">
                        {retainerProcessSteps.map((step) => (
                            <div key={step.num} className="process-step-card" id={`retainer-step-${step.num}`}>
                                <div className="process-step-icon">{step.icon}</div>
                                <div className="process-step-num">{step.num}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p style={{ textAlign: "center", marginTop: 32, fontSize: 15, color: "var(--text-mid)" }}>
                        Ready to talk retainer?{" "}
                        <Link
                            href="mailto:recruiter@junehires.com?subject=HR%20Retainer%20inquiry"
                            style={{ color: "var(--amber)", fontWeight: 600 }}
                        >
                            Email us about HR Retainer
                        </Link>
                    </p>
                </div>
            </section>

            {/* How It Works — Talent acquisition */}
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
                titlePrefix="Ready to scale with "
                titleAccent="world-class talent?"
                subtitle="Share your name, email, and the services you need — we use the same secure Google Form as on our contact page."
                primaryCta={{ label: "Book Your Free Call", href: GOOGLE_FORM_SHORT_URL }}
                secondaryCta={{ label: "Email Us Instead", href: "mailto:recruiter@junehires.com" }}
            />
        </>
    );
}
