"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Internships", href: "/internships" },
    { label: "Careers", href: "/careers" },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`navbar${scrolled ? " scrolled" : ""}`}
                style={{ padding: "0 24px" }}
            >
                <div className="container">
                    <div className="nav-inner">
                        {/* Logo */}
                        <Link href="/" className="nav-logo" id="nav-logo">
                            <div className="nav-logo-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <line x1="12" y1="12" x2="12" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M2 13h20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <span className="nav-logo-text">JuneHires</span>
                        </Link>

                        {/* Desktop links */}
                        <ul className="nav-links">
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className={pathname === l.href ? "nav-link-active" : ""}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop CTAs */}
                        <div
                            style={{ display: "flex", gap: 12, alignItems: "center" }}
                            className="desktop-ctas"
                        >
                            <Link href="/careers" className={scrolled ? "btn btn-outline" : "btn btn-ghost-dark"} id="nav-find-job" style={{ padding: "10px 22px", fontSize: 14 }}>For Candidates</Link>
                            <Link href="/services" className="btn btn-primary" id="nav-hire" style={{ padding: "10px 22px", fontSize: 14 }}>For Employers</Link>
                        </div>

                        {/* Hamburger */}
                        <button
                            id="nav-hamburger"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                            style={{
                                display: "none",
                                background: "none",
                                border: scrolled ? "1.5px solid rgba(28,28,32,0.15)" : "1.5px solid rgba(255,255,255,0.2)",
                                borderRadius: 10,
                                padding: "8px 10px",
                                cursor: "pointer",
                                fontSize: 18,
                                color: scrolled ? "var(--charcoal)" : "#fff",
                                transition: "all 0.35s ease",
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
                                <Link
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        padding: "12px 16px",
                                        borderRadius: 12,
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: pathname === l.href ? "var(--blue)" : "var(--text-mid)",
                                        textDecoration: "none",
                                        transition: "background 0.2s",
                                        background: pathname === l.href ? "var(--blue-pale)" : "transparent",
                                    }}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </nav>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "auto" }}>
                            <Link href="/careers" className="btn btn-outline" style={{ justifyContent: "center" }}>For Candidates</Link>
                            <Link href="/services" className="btn btn-primary" style={{ justifyContent: "center" }}>For Employers</Link>
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
