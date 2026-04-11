import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Hub from "@/components/sections/Hub";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Internship with JuneHires - HR & EA Profiles",
    description:
        "Join JuneHires' free internship program targeted toward aspiring Executive Assistants and HR professionals. Gain hands-on mentorship, expert resume reviews, and real-world experience - completely free.",
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
        images: [{ url: "/JuneHires_logo.png", width: 1200, height: 630, alt: "JuneHires Internship Program" }],
    },
    alternates: {
        canonical: "https://www.junehires.com/internships",
    },
};

const benefits = [
    {
        icon: "✦",
        title: "Real Project Experience",
        desc: "Work on live tasks - scheduling, communications, research, and HR operations. Not simulated exercises.",
    },
    {
        icon: "✦",
        title: "Certificate of Completion",
        desc: "Earn a certificate to showcase on your resume and LinkedIn profile upon program completion.",
    },
    {
        icon: "✦",
        title: "100% Remote",
        desc: "Participate from anywhere in the world. All you need is a laptop and a willingness to learn.",
    },
    {
        icon: "✦",
        title: "Network & Connections",
        desc: "Connect with industry professionals and fellow interns. Build a network that lasts beyond the program.",
    },
];

const internTestimonials = [
    {
        text: "I came to JuneHires with zero experience and zero confidence. The internship changed both. The mentorship I received was personal, practical, and genuinely transformative. I landed my first HR role within 3 months.",
        name: "Ananya R.",
        role: "HR Associate (JuneHires Alum)",
        initial: "A",
    },
    {
        text: "I applied to the internship thinking I had nothing to offer. JuneHires saw potential I didn't see in myself. The hands-on guidance in EA skills was exactly the head-start I needed.",
        name: "Meera K.",
        role: "EA Intern → Full-time EA",
        initial: "M",
    },
];

export default function InternshipsPage() {
    return (
        <>
            <PageHero
                eyebrow="Start Your Journey"
                title="Internship with"
                titleHighlight="JuneHires."
                subtitle="Not just a general internship - our program is specifically targeted toward HR and EA profiles starting their careers. Gain hands-on mentorship and real-world experience."
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

            {/* Intern Testimonials */}
            <section className="intern-testimonials-section">
                <div className="container">
                    <div className="internships-section-heading-block">
                        <span className="eyebrow" style={{ justifyContent: "center" }}>
                            <span className="eyebrow-dot" />
                            Intern Stories
                        </span>
                        <h2 className="section-title">
                            From interns to <span style={{ color: "var(--amber)" }}>professionals.</span>
                        </h2>
                    </div>

                    <div className="intern-testimonials-grid">
                        {internTestimonials.map((t) => (
                            <article key={t.name} className="testimonial-card">
                                <div className="testimonial-stars">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">{t.initial}</div>
                                    <div>
                                        <p className="testimonial-name">{t.name}</p>
                                        <p className="testimonial-role">{t.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                titlePrefix="Ready to kickstart "
                titleAccent="your career?"
                subtitle="Apply for our free internship program today. No experience required - just bring your curiosity and eagerness to learn."
                primaryCta={{ label: "Apply Now", href: "mailto:recruiter@junehires.com?subject=Internship%20Application%20-%20JuneHires" }}
                secondaryCta={{ label: "Browse Jobs", href: "/careers" }}
            />
        </>
    );
}
