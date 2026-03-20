"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        /* Simple entrance animation via class toggle */
        const els = document.querySelectorAll(".hero-anim");
        els.forEach((el, i) => {
            (el as HTMLElement).style.opacity = "0";
            (el as HTMLElement).style.transform = "translateY(28px)";
            (el as HTMLElement).style.transition = `opacity 0.65s ease ${i * 0.12}s, transform 0.65s ease ${i * 0.12}s`;
            setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
            }, 80);
        });
    }, []);

    return (
        <section id="home" className="hero-section">
            {/* bgblobs */}
            <div className="hero-bg-blob-1" style={{ background: "rgba(10, 102, 194, 0.10)" }} />
            <div className="hero-bg-blob-2" style={{ background: "rgba(46, 128, 216, 0.07)" }} />

            {/* Subtle grid overlay */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 0,
                backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
            }} />

            <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
                <div className="hero-grid">

                    {/* ── LEFT: Text ── */}
                    <div>
                        <div className="hero-eyebrow hero-anim" style={{ background: "rgba(10,102,194,0.12)", border: "1px solid rgba(10,102,194,0.22)", color: "#7EC8FF" }}>
                            People-First. Growth-Focused.
                        </div>

                        <h1 className="hero-h1 hero-anim" ref={h1Ref}>
                            People-First Hiring.<br />
                            <em>Growth-Focused</em> HR.
                        </h1>

                        <p className="hero-sub hero-anim">
                            JuneHires provides end-to-end human resource solutions and
                            talent acquisition designed to help businesses scale and
                            individuals thrive.
                        </p>

                        <div className="hero-ctas hero-anim">
                            <Link href="/services" className="btn btn-primary" id="hero-hire-cta">
                                For Employers
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link href="/careers" className="btn btn-ghost-dark" id="hero-jobs-cta">
                                For Candidates
                            </Link>
                        </div>

                        {/* Trust chips */}
                        <div className="hero-anim" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
                            {[
                                { icon: "✦", text: "End-to-end HR" },
                                { icon: "✦", text: "Talent Acquisition" },
                                { icon: "✦", text: "Free Internships" },
                            ].map((chip) => (
                                <span
                                    key={chip.text}
                                    style={{
                                        display: "flex", alignItems: "center", gap: 7,
                                        background: "rgba(255,255,255,0.07)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: 100, padding: "6px 14px",
                                        fontSize: 13, color: "rgba(255,255,255,0.65)",
                                        fontWeight: 500,
                                    }}
                                >
                                    {chip.icon} {chip.text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Professional visual ── */}
                    <div className="hero-visual">
                        <div className="hero-img-wrap float-anim">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=85&fit=crop&crop=faces"
                                alt="Professional team collaboration at JuneHires"
                                loading="eager"
                            />
                            {/* Subtle blue overlay at bottom */}
                            <div style={{
                                position: "absolute", bottom: 0, left: 0, right: 0,
                                height: "40%",
                                background: "linear-gradient(to top, rgba(10,102,194,0.20), transparent)",
                            }} />
                        </div>

                        {/* Floating stats cards */}
                        <div className="hero-float-card" style={{ top: 32, left: -24 }}>
                            <p>Companies Trust Us</p>
                            <strong style={{ fontSize: 15 }}>50+ Clients</strong>
                        </div>

                        <div className="hero-float-card" style={{ bottom: 56, right: -20 }}>
                            <p>Candidates Placed</p>
                            <strong style={{ fontSize: 16 }}>500+ Hires</strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom fade into next section */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 80,
                background: "linear-gradient(to bottom, transparent, var(--warm-white))",
            }} />
        </section>
    );
}
