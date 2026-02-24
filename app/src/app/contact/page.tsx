import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
    title: "Contact Us — Let's Work Together",
    description:
        "Get in touch with JuneHires. Whether you're looking to hire exceptional talent or kickstart your career, we'd love to hear from you. Email recruiter@junehires.com.",
    keywords: [
        "contact JuneHires",
        "hire with JuneHires",
        "recruitment inquiry",
        "HR consultation",
        "career consultation",
    ],
    openGraph: {
        title: "Contact Us — Let's Work Together | JuneHires",
        description:
            "Reach out to JuneHires for hiring, internships, or career guidance. We read every message.",
        url: "https://www.junehires.com/contact",
        images: [{ url: "/junehires.jpg", width: 1200, height: 630, alt: "Contact JuneHires" }],
    },
    alternates: {
        canonical: "https://www.junehires.com/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
