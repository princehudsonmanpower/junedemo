import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WhyJuneHire from "@/components/sections/WhyJuneHire";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "About Us — Our Story & Values",
    description:
        "JuneHires is a people-first hiring agency dedicated to connecting great talent with great companies. Learn about our mission, values, and the team behind every placement.",
    keywords: [
        "about JuneHires",
        "JuneHires story",
        "Rashmi founder",
        "people-first company",
        "HR company values",
        "hiring agency story",
    ],
    openGraph: {
        title: "About Us — Our Story & Values | JuneHires",
        description:
            "People-first hiring done right. Learn about JuneHires' mission, values, and commitment to every client and candidate.",
        url: "https://www.junehires.com/about",
        images: [{ url: "/JuneHires_logo.png", width: 1200, height: 630, alt: "About JuneHires" }],
    },
    alternates: {
        canonical: "https://www.junehires.com/about",
    },
};

const faqs = [
    {
        q: "What types of roles does JuneHires fill?",
        a: "We place candidates in a wide range of roles including executive assistants, project managers, content creators, video editors, developers, designers, media buyers, operations managers, bookkeepers, and more.",
    },
    {
        q: "How quickly can I hire someone?",
        a: "Our recruitment team typically presents 3–5 pre-qualified candidates within 5–10 days. 92% of our clients hire from the first shortlist.",
    },
    {
        q: "Will they work in my timezone?",
        a: "Yes — absolutely. Working during your business hours is a requirement we verify with all candidates during our screening process.",
    },
    {
        q: "What happens if I'm not happy with my hire?",
        a: "We offer a replacement guarantee with no time limitation. If at any point you're not satisfied, we'll restart the search at no additional fee.",
    },
    {
        q: "Are there any long-term contracts?",
        a: "No long-term contracts at all. Simply provide two weeks' notice. No termination fees, no penalties.",
    },
    {
        q: "How does billing work?",
        a: "We bill you once a month for the employee's salary. You pay us directly, and we handle all international banking and payments to your hire.",
    },
    {
        q: "Can I start part-time and scale up?",
        a: "Absolutely. Many clients start with 10–20 hours per week and scale to full-time as confidence and workflow develop.",
    },
    {
        q: "Are there any hidden fees?",
        a: "No hidden fees whatsoever. You pay a one-time search fee to initiate the process, then the agreed monthly salary. Fully transparent.",
    },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="Our Story & Values"
                title="Why JuneHires?"
                subtitle="JuneHires is more than a hiring agency. It's a promise — that every person matters, every detail counts, and every partnership is personal."
            />
            
            <WhyJuneHire />

            {/* Mission section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div>
                            <span className="eyebrow">
                                <span className="eyebrow-dot" />
                                Our Mission
                            </span>
                            <h2 className="section-title">
                                Building bridges between{" "}
                                <span style={{ color: "var(--amber)" }}>talent and opportunity.</span>
                            </h2>
                            <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8, maxWidth: 520 }}>
                                We exist to make hiring human again. In a world of automated
                                screening and impersonal processes, JuneHires brings the personal
                                touch back. Every candidate is a person, every company has a unique
                                story, and our job is to make the perfect match.
                            </p>
                        </div>
                        <div className="mission-values-grid">
                            {[
                                { icon: "✦", title: "Loyalty", desc: "We stand by our clients and candidates through every step." },
                                { icon: "✦", title: "Consistency", desc: "Reliable, predictable, high-quality results every time." },
                                { icon: "✦", title: "Partnership", desc: "We're not vendors — we're your extended team." },
                                { icon: "✦", title: "Growth", desc: "We help businesses scale and individuals thrive." },
                            ].map((v) => (
                                <div key={v.title} className="mission-value-card">
                                    <span className="mission-value-icon">{v.icon}</span>
                                    <h4>{v.title}</h4>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section" id="faq">
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
                        <span className="eyebrow" style={{ justifyContent: "center" }}>
                            <span className="eyebrow-dot" />
                            FAQ
                        </span>
                        <h2 className="section-title">
                            Got questions?{" "}
                            <span style={{ color: "var(--amber)" }}>We&apos;ve got answers.</span>
                        </h2>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <details key={i} className="faq-item" id={`faq-${i}`}>
                                <summary className="faq-question">
                                    <span>{faq.q}</span>
                                    <span className="faq-toggle">+</span>
                                </summary>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                titlePrefix="Ready to experience "
                titleAccent="the difference?"
                subtitle="Whether you're hiring or job hunting, JuneHires is here to help. Let's start a conversation."
                primaryCta={{ label: "Contact Us", href: "/contact" }}
                secondaryCta={{ label: "View Services", href: "/services" }}
            />
        </>
    );
}
