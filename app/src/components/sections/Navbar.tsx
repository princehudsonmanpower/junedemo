"use client";
import { useState, useEffect, useRef, startTransition } from "react";
import Image from "next/image";
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
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const drawerCloseRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        startTransition(() => setMobileOpen(false));
    }, [pathname]);

    useEffect(() => {
        if (!mobileOpen) return;
        drawerCloseRef.current?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [mobileOpen]);

    return (
        <>
            <header className="navbar scrolled" style={{ padding: "0 24px" }}>
                <div className="container">
                    <div className="nav-inner">
                        <Link href="/" className="nav-logo" id="nav-logo">
                            <span className="nav-logo-plate">
                                <Image
                                    src="/JuneHires_logo.png"
                                    alt="JuneHires"
                                    width={200}
                                    height={50}
                                    priority
                                    style={{ height: "50px", width: "auto", display: "block" }}
                                />
                            </span>
                        </Link>

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

                        <div
                            style={{ display: "flex", gap: 12, alignItems: "center" }}
                            className="desktop-ctas"
                        >
                            <Link href="/services" className="btn btn-primary" id="nav-hire" style={{ padding: "10px 22px", fontSize: 14 }}>
                                Work with us
                            </Link>
                            <Link href="/careers" className="btn btn-outline" id="nav-find-job" style={{ padding: "10px 22px", fontSize: 14 }}>
                                For Candidates
                            </Link>
                        </div>

                        <button
                            type="button"
                            id="nav-hamburger"
                            onClick={() => setMobileOpen((o) => !o)}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-nav-drawer"
                            style={{
                                display: "none",
                                background: "none",
                                border: "1.5px solid rgba(28,28,32,0.15)",
                                borderRadius: 10,
                                padding: "8px 10px",
                                cursor: "pointer",
                                fontSize: 18,
                                color: "var(--charcoal)",
                                transition: "all 0.35s ease",
                            }}
                            className="hamburger-btn"
                        >
                            {mobileOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </header>

            {mobileOpen && (
                <div
                    role="presentation"
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 99,
                        background: "rgba(28,28,32,0.45)",
                        backdropFilter: "blur(6px)",
                    }}
                    onClick={() => setMobileOpen(false)}
                    onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
                >
                    <div
                        id="mobile-nav-drawer"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="mobile-nav-title"
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
                        <h2 id="mobile-nav-title" className="sr-only">
                            Site navigation
                        </h2>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Image
                                src="/JuneHires_logo.png"
                                alt=""
                                width={184}
                                height={46}
                                style={{ height: "46px", width: "auto" }}
                            />
                            <button
                                ref={drawerCloseRef}
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close menu"
                                style={{
                                    background: "none",
                                    border: "none",
                                    fontSize: 20,
                                    cursor: "pointer",
                                    color: "var(--text-mid)",
                                }}
                            >
                                ✕
                            </button>
                        </div>
                        <nav aria-label="Primary" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
                                        color: pathname === l.href ? "var(--charcoal)" : "var(--text-mid)",
                                        textDecoration: "none",
                                        transition: "background 0.2s",
                                        background: pathname === l.href ? "rgba(15, 23, 42, 0.06)" : "transparent",
                                    }}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </nav>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "auto" }}>
                            <Link href="/services" className="btn btn-primary" style={{ justifyContent: "center" }}>
                                Work with us
                            </Link>
                            <Link href="/careers" className="btn btn-outline" style={{ justifyContent: "center" }}>
                                For Candidates
                            </Link>
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
