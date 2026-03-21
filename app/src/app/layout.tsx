import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.junehires.com"),
  title: {
    default: "JuneHires | People-First Hiring & HR Solutions",
    template: "%s | JuneHires",
  },
  description:
    "JuneHires provides end-to-end human resource solutions and talent acquisition designed to help businesses scale and individuals thrive. Free internships, expert resume reviews, and dedicated HR partnership.",
  icons: {
    icon: [{ url: "/JuneHires_logo.png", type: "image/png" }],
    apple: "/JuneHires_logo.png",
    shortcut: "/JuneHires_logo.png",
  },
  keywords: [
    "HR solutions India",
    "talent acquisition",
    "HR retainer services",
    "free internship program",
    "executive assistant internship",
    "HR internship",
    "resume review",
    "JuneHires",
    "hiring agency",
    "people-first HR",
    "career guidance",
  ],
  authors: [{ name: "Rashmi, JuneHires" }],
  creator: "JuneHires",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.junehires.com",
    siteName: "JuneHires",
    title: "JuneHires | People-First Hiring & HR Solutions",
    description:
      "End-to-end HR and talent acquisition. Free internship program for aspiring EAs and HR professionals. Built for you.",
    images: [
      {
        url: "/JuneHires_logo.png",
        width: 1200,
        height: 630,
        alt: "JuneHires — People-First Hiring & HR Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JuneHires | People-First Hiring & HR Solutions",
    description:
      "JuneHires provides end-to-end HR and talent acquisition. Free internship program for aspiring EAs and HR professionals.",
    images: ["/JuneHires_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.junehires.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JuneHires",
  url: "https://www.junehires.com",
  logo: "https://www.junehires.com/JuneHires_logo.png",
  description:
    "JuneHires provides people-first HR solutions and talent acquisition services, helping businesses scale and individuals thrive.",
  foundingDate: "2024",
  founder: { "@type": "Person", name: "Rashmi" },
  contactPoint: {
    "@type": "ContactPoint",
    email: "recruiter@junehires.com",
    contactType: "Recruitment",
    availableLanguage: "English",
  },
  sameAs: ["https://www.linkedin.com/company/junehires"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
