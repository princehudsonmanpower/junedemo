"use client";
import Link from "next/link";

const testimonials = [
    {
        id: "t1",
        stars: 5,
        text: "Working with JuneHires completely changed how we approach hiring. Rashmi took the time to truly understand our company culture before sending a single candidate. We found our perfect Operations Manager within two weeks.",
        name: "Priya M.",
        role: "CEO, BrightSpace Solutions",
        initial: "P",
    },
    {
        id: "t2",
        stars: 5,
        text: "I came to JuneHires with zero experience and zero confidence. The internship changed both. The mentorship I received was personal, practical, and genuinely transformative. I landed my first HR role within 3 months.",
        name: "Ananya R.",
        role: "HR Associate (JuneHires Alum)",
        initial: "A",
    },
    {
        id: "t3",
        stars: 5,
        text: "As a startup founder, I never had time to focus on people strategy. JuneHires' HR Retainer gave us a full HR function from day one. Rashmi's approach is human-first — you can feel it in every interaction.",
        name: "Karan T.",
        role: "Founder, NovaPlex Tech",
        initial: "K",
    },
    {
        id: "t4",
        stars: 5,
        text: "The resume review service was a game-changer. I had been applying for months with no callbacks. After the JuneHires review — three interviews in one week. I genuinely can't thank them enough.",
        name: "Simran B.",
        role: "Executive Assistant",
        initial: "S",
    },
    {
        id: "t5",
        stars: 5,
        text: "JuneHires found us two Senior Developers and a Project Manager in under three weeks. What makes them different is that they act like partners, not just a staffing agency. Highly recommended.",
        name: "Rohan V.",
        role: "CTO, Meridian Digital",
        initial: "R",
    },
    {
        id: "t6",
        stars: 5,
        text: "I applied to the internship thinking I had nothing to offer. JuneHires saw potential I didn't see in myself. The hands-on guidance in EA skills was exactly the head-start I needed.",
        name: "Meera K.",
        role: "EA Intern → Full-time EA",
        initial: "M",
    },
];

function Stars({ count }: { count: number }) {
    return (
        <div className="testimonial-stars">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i}>★</span>
            ))}
        </div>
    );
}

interface TestimonialsProps {
    limit?: number;
}

export default function Testimonials({ limit }: TestimonialsProps) {
    const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">

                {/* Header */}
                <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
                    <span className="eyebrow" style={{ justifyContent: "center" }}>
                        <span className="eyebrow-dot" />
                        Success Stories
                    </span>
                    <h2 className="section-title">
                        Voices that inspire us<br />
                        <span style={{ color: "var(--amber)" }}>every single day.</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Employers who found their people. Candidates who found their path.
                        These are the stories that drive us.
                    </p>
                </div>

                {/* Grid */}
                <div className="testimonials-grid">
                    {displayTestimonials.map((t) => (
                        <article key={t.id} className="testimonial-card" id={`testimonial-${t.id}`}>
                            <Stars count={t.stars} />
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

                {/* Show "View All" only when limited */}
                {limit && limit < testimonials.length && (
                    <div style={{ textAlign: "center", marginTop: 40 }}>
                        <Link href="/testimonials" className="btn btn-outline" id="view-all-testimonials">
                            View All Success Stories
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
}
