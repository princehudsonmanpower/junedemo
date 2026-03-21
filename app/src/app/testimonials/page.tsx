import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Success Stories & Testimonials",
    description:
        "Read success stories from employers and candidates who found their perfect match through JuneHires. Real results, real people, real growth.",
    keywords: [
        "JuneHires reviews",
        "hiring success stories",
        "JuneHires testimonials",
        "HR agency reviews",
        "recruitment testimonials",
    ],
    openGraph: {
        title: "Success Stories & Testimonials | JuneHires",
        description:
            "Employers who found their people. Candidates who found their path. Read their stories.",
        url: "https://www.junehires.com/testimonials",
        images: [{ url: "/JuneHires_logo.png", width: 1200, height: 630, alt: "JuneHires Testimonials" }],
    },
    alternates: {
        canonical: "https://www.junehires.com/testimonials",
    },
};

export default function TestimonialsPage() {
    return (
        <>
            <PageHero
                eyebrow="Success Stories"
                title="Voices that inspire us"
                titleHighlight="every single day."
                subtitle="Employers who found their people. Candidates who found their path. These are the stories that drive us."
                primaryCta={{ label: "Start Your Story", href: "/contact" }}
                secondaryCta={{ label: "Explore Services", href: "/services" }}
            />

            <Testimonials />

            <CTASection
                titlePrefix="Ready to become our "
                titleAccent="next success story?"
                subtitle="Join the hundreds of businesses and professionals who have grown with JuneHires."
                primaryCta={{ label: "Get Started", href: "/contact" }}
                secondaryCta={{ label: "View Services", href: "/services" }}
            />
        </>
    );
}
