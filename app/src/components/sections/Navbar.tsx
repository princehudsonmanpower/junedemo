"use client";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "For Employers", href: "#services" },
    { label: "Internships", href: "#hub" },
    { label: "Job Board", href: "#jobs" },
    { label: "Our Story", href: "#why" },
    { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={`navbar${scrolled ? " scrolled" : ""}`}
                style={{ padding: "0 24px" }}
            >
                <div className="container">
                    <div className="nav-inner">
                        {/* Logo */}
                        <a href="/" className="nav-logo" id="nav-logo">
                            <div className="nav-logo-icon">🐾</div>
                            <span className="nav-logo-text">JuneHires</span>
                        </a>

                        {/* Desktop links */}
                        <ul className="nav-links">
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop CTAs */}
                        <div
                            style={{ display: "flex", gap: 12, alignItems: "center" }}
                            className="desktop-ctas"
                        >
                            <a href="#jobs" className="btn btn-outline" id="nav-find-job" style={{ padding: "10px 22px", fontSize: 14 }}>Find a Job</a>
                            <a href="#contact" className="btn btn-primary" id="nav-hire" style={{ padding: "10px 22px", fontSize: 14 }}>Hire with Us</a>
                        </div>

                        {/* Hamburger */}
                        <button
                            id="nav-hamburger"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                            style={{
                                display: "none",
                                background: "none",
                                border: "1.5px solid rgba(28,28,32,0.15)",
                                borderRadius: 10,
                                padding: "8px 10px",
                                cursor: "pointer",
                                fontSize: 18,
                                color: "var(--charcoal)",
                            }}
                            className="hamburger-btn"
                        >
                            {mobileOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 99,
                        background: "rgba(28,28,32,0.45)",
                        backdropFilter: "blur(6px)",
                    }}
                    onClick={() => setMobileOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: 280,
                            background: "var(--warm-white)",
                            padding: "28px 24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 32,
                            boxShadow: "-8px 0 40px rgba(28,28,32,0.15)",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span className="nav-logo-text">JuneHires</span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "var(--text-mid)" }}
                            >✕</button>
                        </div>
                        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            {navLinks.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        padding: "12px 16px",
                                        borderRadius: 12,
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "var(--text-mid)",
                                        textDecoration: "none",
                                        transition: "background 0.2s",
                                    }}
                                >
                                    {l.label}
                                </a>
                            ))}
                        </nav>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "auto" }}>
                            <a href="#jobs" className="btn btn-outline" style={{ justifyContent: "center" }}>Find a Job</a>
                            <a href="#contact" className="btn btn-primary" style={{ justifyContent: "center" }}>Hire with Us</a>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @media (max-width: 900px) {
          .desktop-ctas { display: none !important; }
          .nav-links     { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
        </>
    );
}
