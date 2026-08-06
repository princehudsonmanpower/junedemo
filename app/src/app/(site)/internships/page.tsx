import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Hub from "@/components/sections/Hub";
import InternTestimonialStories from "@/components/sections/InternTestimonialStories";
import CTASection from "@/components/ui/CTASection";
import { GOOGLE_FORM_SHORT_URL } from "@/lib/google-form";

export const metadata: Metadata = {
    title: "Internship with JuneHires - HR & EA Profiles",
    description:
        "Join JuneHires' free internship targeted toward aspiring Executive Assistants and HR professionals. Gain hands-on mentorship, expert resume reviews, and real-world experience - completely free.",
    keywords: [
        "free internship",
        "executive assistant internship",
        "HR internship",
        "remote internship",
        "mentorship program",
        "career guidance",
        "resume review",
    ],
    openGraph: {
        title: "Internship with JuneHires - HR & EA Profiles | JuneHires",
        description:
            "Zero-cost, hands-on internship targeted toward aspiring EAs and HR professionals starting their careers. Mentorship, resume reviews, and real-world projects.",
        url: "https://www.junehires.com/internships",
        images: [{ url: "/JuneHires_logo.png", width: 1200, height: 630, alt: "JuneHires Internship" }],
    },
    alternates: {
        canonical: "https://www.junehires.com/internships",
    },
};

const benefits = [
    {
        icon: "✦",
        title: "Real Work Experience",
        desc: "Work on live tasks - scheduling, communications, research, and HR operations. Not simulated exercises.",
    },
    {
        icon: "✦",
        title: "Certificate of Completion",
        desc: "Paid internship - we teach and we pay.",
    },
    {
        icon: "✦",
        title: "Remote/On-site",
        desc: "Participate from anywhere in the world. All you need is a laptop and a willingness to learn.",
    },
    {
        icon: "✦",
        title: "Network & Connections",
        desc: "Connect with industry professionals and fellow interns. Build a network that lasts.",
    },
];

export default function InternshipsPage() {
    return (
        <>
            <PageHero
                eyebrow="Start Your Journey"
                title="Internship with"
                titleHighlight="JuneHires."
                subtitle="Not just a general internship - our Internship is specifically targeted toward HR and EA profiles starting their careers. Gain hands-on mentorship and real-world experience."
            />

            <Hub />

            {/* Additional Benefits */}
            <section className="benefits-section">
                <div className="container">
                    <div className="internships-section-heading-block">
                        <span className="eyebrow" style={{ justifyContent: "center" }}>
                            <span className="eyebrow-dot" />
                            Why Join Us
                        </span>
                        <h2 className="section-title">
                            More than just <span style={{ color: "var(--amber)" }}>an internship.</span>
                        </h2>
                    </div>

                    <div className="benefits-grid">
                        {benefits.map((b) => (
                            <div key={b.title} className="benefit-card" id={`benefit-${b.title.toLowerCase().replace(/\s/g, "-")}`}>
                                <div className="benefit-icon">{b.icon}</div>
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <InternTestimonialStories />

            <CTASection
                titlePrefix="Ready to kickstart "
                titleAccent="your career?"
                subtitle="Apply for our free internship program today. No experience required - just bring your curiosity and eagerness to learn."
                primaryCta={{ label: "Apply Now", href: GOOGLE_FORM_SHORT_URL }}
                secondaryCta={{ label: "Browse Jobs", href: "/careers" }}
            />
        </>
    );
}
