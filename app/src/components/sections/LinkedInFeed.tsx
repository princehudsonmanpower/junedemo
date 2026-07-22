"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MARKETING_LEAD_POST_URL =
    "https://www.linkedin.com/posts/job-title-marketing-lead-location-thane-share-7484564766594777088-GJsp/";

const SALES_LEAD_POST_URL =
    "https://www.linkedin.com/posts/job-title-sales-lead-location-thane-mumbai-share-7484564137625264128-rnum/";

const HR_INTERN_POST_URL =
    "https://www.linkedin.com/posts/achal-meshram-675458199_hiring-hrintern-internshipopportunity-share-7483429491382370304-NWx8/";

const GLOBAL_SOURCING_POST_URL =
    "https://www.linkedin.com/posts/junehires_job-title-associate-global-sourcing-activity-7485611388304830464-7F1F/";

const CREDIT_SALES_POST_URL =
    "https://www.linkedin.com/posts/junehires_job-title-lead-credit-sales-export-financing-activity-7485612605672275968-12DG/";

type JobPost = {
    id: number;
    type: "job";
    tag: string;
    tagColor: string;
    tagBg: string;
    time: string;
    href: string;
    title: string;
    location: string;
    employmentType: string;
    compensation: string;
    workDays: string;
    overview: string;
    highlights: string[];
    reactions: string;
    comments: string;
};

type TextPost = {
    id: number;
    type?: "post";
    tag: string;
    tagColor: string;
    tagBg: string;
    time: string;
    href?: string;
    content: string;
    reactions: string;
    comments: string;
};

type FeedPost = JobPost | TextPost;

const posts: FeedPost[] = [
    {
        id: 1,
        type: "job",
        tag: "Hiring",
        tagColor: "#0A66C2",
        tagBg: "rgba(10,102,194,0.12)",
        time: "2d ago",
        href: MARKETING_LEAD_POST_URL,
        title: "Marketing Lead",
        location: "Thane, Mumbai / Hybrid",
        employmentType: "Full-time",
        compensation: "Up to ₹50,000/mo",
        workDays: "Mon – Sat",
        overview:
            "Build and scale demand generation and brand positioning - strategic thinking meets hands-on execution in agri-trade.",
        highlights: ["Demand Gen", "B2B Marketing", "3–4 yrs exp"],
        reactions: "12",
        comments: "10",
    },
    {
        id: 2,
        type: "job",
        tag: "Hiring",
        tagColor: "#0A66C2",
        tagBg: "rgba(10,102,194,0.12)",
        time: "2d ago",
        href: SALES_LEAD_POST_URL,
        title: "Sales Lead",
        location: "Thane, Mumbai · Hybrid",
        employmentType: "Full-time",
        compensation: "₹40K – ₹50K/mo",
        workDays: "3 days/week in office",
        overview:
            "Drive lead generation, manage a high-volume sales pipeline, and build lasting relationships with importers and exporters.",
        highlights: ["Sales / BD", "500+ lead funnel", "3+ yrs exp"],
        reactions: "7",
        comments: "0",
    },
    {
        id: 3,
        type: "job",
        tag: "Internship",
        tagColor: "#057642",
        tagBg: "rgba(5,118,66,0.12)",
        time: "6d ago",
        href: HR_INTERN_POST_URL,
        title: "HR Intern",
        location: "Remote",
        employmentType: "6-month Internship",
        compensation: "₹5,000/mo stipend",
        workDays: "Mon – Sat · 10 AM – 7 PM",
        overview:
            "Kickstart your HR career with hands-on recruitment experience - sourcing, shortlisting, interview coordination, and real-time HR operations.",
        highlights: ["Freshers welcome", "Recruitment", "Certificate"],
        reactions: "21",
        comments: "7",
    },
    {
        id: 4,
        type: "job",
        tag: "Hiring",
        tagColor: "#0A66C2",
        tagBg: "rgba(10,102,194,0.12)",
        time: "New",
        href: GLOBAL_SOURCING_POST_URL,
        title: "Associate – Global Sourcing & Seller Partnerships",
        location: "Mumbai (flexible)",
        employmentType: "Full-time",
        compensation: "₹40K – ₹50K/mo",
        workDays: "6 days/week",
        overview:
            "Build and manage Agrify's seller network across domestic and international markets — outreach, qualification, onboarding, and coordination with exporters and trading companies.",
        highlights: ["Global Sourcing", "Seller Partnerships", "1–3 yrs exp"],
        reactions: "0",
        comments: "0",
    },
    {
        id: 5,
        type: "job",
        tag: "Hiring",
        tagColor: "#0A66C2",
        tagBg: "rgba(10,102,194,0.12)",
        time: "New",
        href: CREDIT_SALES_POST_URL,
        title: "Lead – Credit Sales (Export Financing)",
        location: "Mumbai · Field travel",
        employmentType: "Full-time",
        compensation: "Up to ₹50,000/mo",
        workDays: "Mon – Sat",
        overview:
            "Drive adoption of export financing among Indian agri exporters — own the full sales lifecycle from outreach and deal structuring to repeat business and portfolio growth.",
        highlights: ["Trade Finance", "Credit Sales", "4–8 yrs exp"],
        reactions: "0",
        comments: "0",
    },
];
const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const HeartIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const CommentIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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

function isJobPost(post: FeedPost): post is JobPost {
    return post.type === "job";
}

function JobCardBody({ post }: { post: JobPost }) {
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
    const href = post.href ?? "https://www.linkedin.com/company/junehires/posts/?feedView=all";
    const isJob = isJobPost(post);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`li-card${isJob ? " li-card--featured" : ""}`}
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

            {isJob ? <JobCardBody post={post} /> : <p className="li-card-body">{post.content}</p>}

            <div className="li-card-footer">
                <span className="li-card-stat">
                    <HeartIcon />
                    {post.reactions}
                </span>
                <span className="li-card-stat">
                    <CommentIcon />
                    {post.comments}
                </span>
                <span className="li-card-cta">
                    <LinkedInIcon size={12} />
                    {isJob ? "View job on LinkedIn" : "Read on LinkedIn"}
                </span>
            </div>
        </a>
    );
}

export default function LinkedInFeed() {
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
            if (!track) return;

            const clamped = Math.max(0, Math.min(posts.length - 1, index));
            const slide = track.children[clamped] as HTMLElement | undefined;
            if (!slide) return;

            const visibleCount = getVisibleSlideCount(track);

            setActiveIndex(clamped);
            isProgrammaticScrollRef.current = true;

            // First "screen": highlight cards 1→2→3 without scrolling
            if (clamped < visibleCount) {
                track.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Then scroll to bring cards 4, 5 into view
                track.scrollTo({
                    left: slide.offsetLeft - track.offsetLeft,
                    behavior: "smooth",
                });
            }

            window.setTimeout(() => {
                isProgrammaticScrollRef.current = false;
            }, 500);
        },
        [getVisibleSlideCount]
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

    return (
        <section className="li-section">
            <div className="container">

                {/* ── Top bar ── */}
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

                {/* ── Post cards carousel ── */}
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
                                aria-label={`Show job ${i + 1}: ${isJobPost(post) ? post.title : post.tag}`}
                                className={`li-cards-carousel__dot${i === activeIndex ? " is-active" : ""}`}
                                onClick={() => scrollToIndex(i)}
                            />
                        ))}
                    </div>
                </div>
                {/* ── Bottom CTA ── */}
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
