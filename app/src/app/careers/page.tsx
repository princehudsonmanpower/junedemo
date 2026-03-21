import type { Metadata } from "next";
import Jobs from "@/components/sections/Jobs";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Careers & Job Board — Current Openings",
    description:
        "Browse current job openings at JuneHires. We're hiring Executive Assistant Interns, HR Generalist Interns, and Talent Coordinators. Remote-first, people-first.",
    keywords: [
        "jobs at JuneHires",
        "remote jobs",
        "executive assistant jobs",
        "HR jobs",
        "talent coordinator",
        "internship openings",
        "career opportunities",
    ],
    openGraph: {
        title: "Careers & Job Board — Current Openings | JuneHires",
        description:
            "Find your next career move at JuneHires. Remote-first roles in EA, HR, and talent coordination.",
        url: "https://www.junehires.com/careers",
        images: [{ url: "/JuneHires_logo.png", width: 1200, height: 630, alt: "JuneHires Careers" }],
    },
    alternates: {
        canonical: "https://www.junehires.com/careers",
    },
};

export default function CareersPage() {
    return (
        <>
            {/* Slim careers header — jobs shown directly */}
            <section style={{
                paddingTop: "120px",
                paddingBottom: "48px",
                background: "var(--warm-white)",
                textAlign: "center",
            }}>
                <div className="container">
                    <span className="eyebrow" style={{ justifyContent: "center", color: "var(--blue-light)" }}>
                        <span className="eyebrow-dot" style={{ background: "var(--blue-light)" }} />
                        Current Openings
                    </span>
                    <h1 style={{
                        fontSize: "clamp(32px, 5vw, 56px)",
                        fontWeight: 800,
                        color: "var(--charcoal)",
                        lineHeight: 1.15,
                        marginTop: 12,
                        marginBottom: 16,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}>
                        Find Your Next<br />
                        <span style={{ color: "var(--blue-light)" }}>Career Move.</span>
                    </h1>
                    <p style={{ fontSize: 17, color: "var(--text-mid)", maxWidth: 540, margin: "0 auto" }}>
                        Browse open roles at JuneHires and apply directly. We’re always looking for talented HR professionals, EAs, and coordinators.
                    </p>
                </div>
            </section>

            <Jobs />

            <CTASection
                title="Don't see the right role?"
                titleHighlight="the right role?"
                subtitle="Send a speculative application to recruiter@junehires.com — we're always looking for talented people."
                primaryCta={{ label: "Send Application", href: "mailto:recruiter@junehires.com" }}
                secondaryCta={{ label: "Learn About Us", href: "/about" }}
            />
        </>
    );
}
