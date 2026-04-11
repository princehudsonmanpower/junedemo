import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/ui/CTASection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />

      {/* Stats / Trust Band */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-band-inner">
            {[
              { value: "50+", label: "Candidates Placed" },
              { value: "100%", label: "Free Internships" },
              { value: "10+", label: "Companies Trust Us" },
              { value: "4.9★", label: "Average Rating" },
            ].map((s) => (
              <div key={s.label} className="stats-band-item">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick highlights */}
      <section className="quick-highlights">
        <div className="container">
          <div className="section-intro-block section-intro-block--600">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow-dot" />
              What We Offer
            </span>
            <h2 className="section-title">
              Everything you need to{" "}
              <span style={{ color: "var(--blue)" }}>grow your team.</span>
            </h2>
          </div>

          <div className="highlights-grid">
            {[
              {
                icon: "✦",
                title: "Talent Acquisition",
                desc: "End-to-end recruitment management to find your perfect hire.",
                link: "/services",
              },
              {
                icon: "✦",
                title: "HR Retainer",
                desc: "Dedicated HR partnership to handle your people strategy.",
                link: "/services",
              },
              {
                icon: "✦",
                title: "Free Internships",
                desc: "Hands-on learning programs for aspiring EAs and HR pros.",
                link: "/internships",
              },
              {
                icon: "✦",
                title: "Job Board",
                desc: "Browse current openings and find your next career move.",
                link: "/careers",
              },
            ].map((item) => (
              <Link href={item.link} key={item.title} className="highlight-card" id={`highlight-${item.title.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="highlight-arrow">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials (show only 3) */}
      <Testimonials limit={3} />

      <CTASection recruiterEmailCopy />
    </>
  );
}
