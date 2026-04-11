import type { Metadata } from "next";
import Jobs from "@/components/sections/Jobs";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Careers & Job Board - Current Openings",
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
        title: "Careers & Job Board - Current Openings | JuneHires",
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
            <Jobs />

            <CTASection
                titlePrefix="Don't see "
                titleAccent="the right role?"
                subtitle="Send a speculative application to recruiter@junehires.com - we're always looking for talented people."
                primaryCta={{ label: "Send Application", href: "mailto:recruiter@junehires.com" }}
                secondaryCta={{ label: "Learn About Us", href: "/about" }}
            />
        </>
    );
}
