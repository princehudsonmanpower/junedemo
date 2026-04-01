"use client";
import { useEffect } from "react";
import Link from "next/link";

interface PageHeroProps {
    eyebrow: string;
    title: string;
    titleHighlight?: string;
    subtitle: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
}

export default function PageHero({ eyebrow, title, titleHighlight, subtitle, primaryCta, secondaryCta }: PageHeroProps) {
    useEffect(() => {
        const els = document.querySelectorAll(".page-hero-anim");
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
        <section className="page-hero">
            {/* bg decorations */}
            <div className="hero-bg-blob-1" />
            <div className="hero-bg-blob-2" />
            <div style={{
                position: "absolute", inset: 0, zIndex: 0,
                backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
            }} />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div className="page-hero-content">
                    <div className="hero-eyebrow page-hero-anim">
                        {eyebrow}
                    </div>
                    <h1 className="hero-h1 page-hero-anim">
                        {title}
                        {titleHighlight && (
                            <>
                                <br />
                                <em>{titleHighlight}</em>
                            </>
                        )}
                    </h1>
                    <p className="hero-sub page-hero-anim">{subtitle}</p>
                    {(primaryCta || secondaryCta) && (
                        <div className="hero-ctas page-hero-anim">
                            {primaryCta &&
                                (primaryCta.href.startsWith("mailto:") ? (
                                    <a href={primaryCta.href} className="btn btn-primary" id="page-hero-primary-cta">
                                        {primaryCta.label}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                ) : (
                                    <Link href={primaryCta.href} className="btn btn-primary" id="page-hero-primary-cta">
                                        {primaryCta.label}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                ))}
                            {secondaryCta &&
                                (secondaryCta.href.startsWith("mailto:") ? (
                                    <a href={secondaryCta.href} className="btn btn-ghost-dark" id="page-hero-secondary-cta">
                                        {secondaryCta.label}
                                    </a>
                                ) : (
                                    <Link href={secondaryCta.href} className="btn btn-ghost-dark" id="page-hero-secondary-cta">
                                        {secondaryCta.label}
                                    </Link>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom fade */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 80,
                background: "linear-gradient(to bottom, transparent, var(--warm-white))",
            }} />
        </section>
    );
}
