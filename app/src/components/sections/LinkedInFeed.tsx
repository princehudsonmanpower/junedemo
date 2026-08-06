"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FeedPost } from "@/lib/types/feed";

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const MapPinIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
);

const RupeeIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 3h12M6 8h12M6 13h8a4 4 0 0 1 0 8H6" />
    </svg>
);

function JobCardBody({ post }: { post: FeedPost }) {
    return (
        <div className="li-job-body">
            <div className="li-job-hero">
                <div className="li-job-title-row">
                    <h3 className="li-job-title">{post.title}</h3>
                    <span className="li-job-live">
                        <span className="li-job-live-dot" aria-hidden="true" />
                        Open
                    </span>
                </div>
                <div className="li-job-chips">
                    <span className="li-job-chip">
                        <MapPinIcon />
                        {post.location}
                    </span>
                    <span className="li-job-chip">
                        <BriefcaseIcon />
                        {post.employmentType}
                    </span>
                    <span className="li-job-chip li-job-chip--accent">
                        <RupeeIcon />
                        {post.compensation}
                    </span>
                    <span className="li-job-chip">{post.workDays}</span>
                </div>
            </div>
            <p className="li-job-overview">{post.overview}</p>
            <div className="li-job-highlights">
                <span className="li-job-highlights-label">Highlights</span>
                {post.highlights.map((item) => (
                    <span key={item} className="li-job-highlight">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

function FeedCard({ post }: { post: FeedPost }) {
    return (
        <a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="li-card li-card--featured"
        >
            <div className="li-card-header">
                <div className="li-card-avatar">
                    <Image
                        src="/JuneHires_logo.png"
                        alt=""
                        width={30}
                        height={30}
                        className="object-contain"
                        style={{ display: "block", margin: "0 auto", padding: 4 }}
                    />
                </div>
                <div className="li-card-meta">
                    <span className="li-card-name">JuneHires</span>
                    <span className="li-card-handle">@junehires · {post.time}</span>
                </div>
                <span
                    className="li-card-tag"
                    style={{ color: post.tagColor, background: post.tagBg }}
                >
                    {post.tag}
                </span>
            </div>

            <JobCardBody post={post} />

            <div className="li-card-footer">
                <span className="li-card-cta">
                    <LinkedInIcon size={12} />
                    View job on LinkedIn
                </span>
            </div>
        </a>
    );
}

type LinkedInFeedProps = {
    posts: FeedPost[];
};

export default function LinkedInFeed({ posts }: LinkedInFeedProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const isProgrammaticScrollRef = useRef(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const getVisibleSlideCount = useCallback((track: HTMLDivElement) => {
        const slides = Array.from(track.children) as HTMLElement[];
        if (slides.length === 0) return 1;

        const trackWidth = track.clientWidth;
        const slideWidth = slides[0].offsetWidth;
        const gap = 18;

        return Math.max(
            1,
            Math.min(slides.length, Math.floor((trackWidth + gap) / (slideWidth + gap)))
        );
    }, []);

    const scrollToIndex = useCallback(
        (index: number) => {
            const track = trackRef.current;
            if (!track || posts.length === 0) return;

            const clamped = Math.max(0, Math.min(posts.length - 1, index));
            const slide = track.children[clamped] as HTMLElement | undefined;
            if (!slide) return;

            const visibleCount = getVisibleSlideCount(track);

            setActiveIndex(clamped);
            isProgrammaticScrollRef.current = true;

            if (clamped < visibleCount) {
                track.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                track.scrollTo({
                    left: slide.offsetLeft - track.offsetLeft,
                    behavior: "smooth",
                });
            }

            window.setTimeout(() => {
                isProgrammaticScrollRef.current = false;
            }, 500);
        },
        [getVisibleSlideCount, posts.length]
    );

    const go = useCallback(
        (dir: -1 | 1) => {
            scrollToIndex(activeIndex + dir);
        },
        [activeIndex, scrollToIndex]
    );

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const updateActiveIndexFromScroll = () => {
            if (isProgrammaticScrollRef.current) return;

            const slides = Array.from(track.children) as HTMLElement[];
            if (slides.length === 0) return;

            const scrollLeft = track.scrollLeft;
            const visibleCount = getVisibleSlideCount(track);

            if (scrollLeft < 8) {
                setActiveIndex((current) => (current < visibleCount ? current : visibleCount - 1));
                return;
            }

            let closest = visibleCount;
            let minDistance = Number.POSITIVE_INFINITY;

            slides.forEach((slide, i) => {
                if (i < visibleCount) return;
                const distance = Math.abs(slide.offsetLeft - track.offsetLeft - scrollLeft);
                if (distance < minDistance) {
                    minDistance = distance;
                    closest = i;
                }
            });

            setActiveIndex(closest);
        };

        window.addEventListener("resize", updateActiveIndexFromScroll);

        return () => {
            window.removeEventListener("resize", updateActiveIndexFromScroll);
        };
    }, [getVisibleSlideCount]);

    if (posts.length === 0) {
        return (
            <section className="li-section">
                <div className="container">
                    <div className="li-topbar">
                        <div className="li-topbar-left">
                            <div className="li-platform-badge">
                                <LinkedInIcon size={18} />
                                <span>LinkedIn</span>
                            </div>
                            <div className="li-title-block">
                                <h2 className="li-title">
                                    Follow us for <span className="li-title-accent">insights & openings</span>
                                </h2>
                                <p className="li-subtitle">
                                    No open roles right now - follow us on LinkedIn for the latest updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="li-section">
            <div className="container">

                <div className="li-topbar">
                    <div className="li-topbar-left">
                        <div className="li-platform-badge">
                            <LinkedInIcon size={18} />
                            <span>LinkedIn</span>
                        </div>
                        <div className="li-title-block">
                            <h2 className="li-title">
                                Follow us for <span className="li-title-accent">insights & openings</span>
                            </h2>
                            <p className="li-subtitle">
                                Hiring tips, HR trends, and team updates - straight from our feed.
                            </p>
                        </div>
                    </div>
                    <div className="li-topbar-actions">
                        <a
                            href="https://www.linkedin.com/company/junehires/follow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="li-follow-btn"
                        >
                            <LinkedInIcon size={15} />
                            Follow
                        </a>
                        <a
                            href="https://www.linkedin.com/company/junehires/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="li-view-all-btn"
                        >
                            View All Openings ↗
                        </a>
                    </div>
                </div>

                <div className="li-cards-carousel-wrap">
                    <div
                        className="li-cards-carousel"
                        aria-roledescription="carousel"
                        aria-label="LinkedIn job openings"
                    >
                        <button
                            type="button"
                            className="li-cards-carousel__nav li-cards-carousel__nav--prev"
                            onClick={() => go(-1)}
                            disabled={activeIndex === 0}
                            aria-label="Show previous job opening"
                        >
                            <ChevronLeft size={22} strokeWidth={2.25} aria-hidden />
                        </button>

                        <div className="li-cards-carousel__viewport">
                            <div className="li-cards-track" ref={trackRef}>
                                {posts.map((post, i) => (
                                    <div
                                        key={post.id}
                                        className={`li-card-slide${i === activeIndex ? " is-active" : ""}`}
                                    >
                                        <FeedCard post={post} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            className="li-cards-carousel__nav li-cards-carousel__nav--next"
                            onClick={() => go(1)}
                            disabled={activeIndex === posts.length - 1}
                            aria-label="Show next job opening"
                        >
                            <ChevronRight size={22} strokeWidth={2.25} aria-hidden />
                        </button>
                    </div>

                    <div className="li-cards-carousel__dots" role="tablist" aria-label="Choose job opening">
                        {posts.map((post, i) => (
                            <button
                                key={post.id}
                                type="button"
                                role="tab"
                                aria-selected={i === activeIndex}
                                aria-label={`Show job ${i + 1}: ${post.title}`}
                                className={`li-cards-carousel__dot${i === activeIndex ? " is-active" : ""}`}
                                onClick={() => scrollToIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="li-bottom-cta">
                    <div className="li-bottom-cta-inner">
                        <div className="li-bottom-icon">
                            <LinkedInIcon size={28} />
                        </div>
                        <div>
                            <p className="li-bottom-title">Never miss an update</p>
                            <p className="li-bottom-sub">Joined 9000+ professionals following JuneHires on LinkedIn.</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/company/junehires"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="li-follow-btn li-follow-btn-lg"
                        >
                            <LinkedInIcon size={16} />
                            Follow JuneHires
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
