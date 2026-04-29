"use client";

import { useCallback, useEffect, useMemo, useRef, useState, startTransition } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    clientTestimonials,
    companyFromRole,
    type ClientTestimonialRecord,
} from "@/lib/client-testimonials";

/** One image for every testimonial card (`public/user-avtar.png`). */
const TESTIMONIAL_SHARED_AVATAR_SRC = "/user-avtar.png";

type TestimonialRecord = ClientTestimonialRecord;
const testimonials = clientTestimonials;

const FEATURED_WORD_LIMIT = 60;

function getWords(text: string): string[] {
    return text.trim().split(/\s+/).filter(Boolean);
}

function takeFirstWords(text: string, limit: number): string {
    return getWords(text).slice(0, limit).join(" ");
}

function isLongerThanWords(text: string, limit: number): boolean {
    return getWords(text).length > limit;
}

type TestimonialEntry = TestimonialRecord;

type TestimonialCardBodyProps = TestimonialEntry & {
    featuredReadMore?: {
        expanded: boolean;
        onToggle: () => void;
    };
};

function Stars({ count }: { count: number }) {
    return (
        <div className="testimonial-stars">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i}>★</span>
            ))}
        </div>
    );
}

function TestimonialAvatar() {
    return (
        <div className="testimonial-avatar testimonial-avatar--photo testimonial-avatar--shared">
            <Image
                src={TESTIMONIAL_SHARED_AVATAR_SRC}
                alt=""
                aria-hidden
                fill
                sizes="46px"
                className="testimonial-avatar__img"
            />
        </div>
    );
}

function TestimonialCardBody({ text, name, role, stars, featuredReadMore }: TestimonialCardBodyProps) {
    const isLong = isLongerThanWords(text, FEATURED_WORD_LIMIT);
    const collapsed = Boolean(featuredReadMore && isLong && !featuredReadMore.expanded);
    const displayText = collapsed ? takeFirstWords(text, FEATURED_WORD_LIMIT) : text;

    return (
        <>
            <Stars count={stars} />
            <div className="testimonial-text-block">
                <p className="testimonial-text">
                    &ldquo;{displayText}&rdquo;
                    {featuredReadMore && isLong ? (
                        <>
                            {" "}
                            <button
                                type="button"
                                className="testimonial-read-more"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    featuredReadMore.onToggle();
                                }}
                                aria-expanded={featuredReadMore.expanded}
                            >
                                {featuredReadMore.expanded ? "Read less" : "Read more"}
                            </button>
                        </>
                    ) : null}
                </p>
            </div>
            <div className="testimonial-author">
                <TestimonialAvatar />
                <div>
                    <p className="testimonial-name">{name}</p>
                    <p className="testimonial-role">{role}</p>
                </div>
            </div>
        </>
    );
}

const AUTO_MS = 5200;

/**
 * Left/right peek indices so the three visible cards use three different companies when possible.
 */
function resolvePeekIndices(
    items: ClientTestimonialRecord[],
    companies: string[],
    i: number
): { prevIdx: number; nextIdx: number } {
    const n = items.length;
    if (n <= 1) return { prevIdx: 0, nextIdx: 0 };
    if (n === 2) {
        const other = (i + 1) % 2;
        return { prevIdx: other, nextIdx: other };
    }
    const ci = companies[i];
    for (let df = 1; df < n; df++) {
        const ni = (i + df) % n;
        const cn = companies[ni];
        if (cn === ci) continue;
        for (let dg = 1; dg < n; dg++) {
            const pi = (i - dg + n * 1000) % n;
            if (pi === ni) continue;
            const cp = companies[pi];
            if (cp === ci || cp === cn) continue;
            return { prevIdx: pi, nextIdx: ni };
        }
    }
    return { prevIdx: (i - 1 + n) % n, nextIdx: (i + 1) % n };
}

interface TestimonialsProps {
    limit?: number;
}

export default function Testimonials({ limit }: TestimonialsProps) {
    const displayTestimonials = useMemo(
        () => (limit ? testimonials.slice(0, limit) : testimonials),
        [limit]
    );
    const len = displayTestimonials.length;
    const [index, setIndex] = useState(0);
    const [featuredExpanded, setFeaturedExpanded] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const hoverPausedRef = useRef(false);

    useEffect(() => {
        startTransition(() => setFeaturedExpanded(false));
    }, [index]);

    useEffect(() => {
        startTransition(() => {
            setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        });
    }, []);

    const companies = useMemo(
        () => displayTestimonials.map((t) => companyFromRole(t.role)),
        [displayTestimonials]
    );
    const { prevIdx, nextIdx } = useMemo(
        () => resolvePeekIndices(displayTestimonials, companies, index),
        [displayTestimonials, companies, index]
    );

    const go = useCallback(
        (dir: -1 | 1) => {
            setIndex((i) => (i + dir + len) % len);
        },
        [len]
    );

    const goTo = useCallback((i: number) => {
        setIndex(((i % len) + len) % len);
    }, [len]);

    useEffect(() => {
        if (len <= 1 || reduceMotion) return;
        const id = setInterval(() => {
            if (typeof document !== "undefined" && document.hidden) return;
            if (hoverPausedRef.current) return;
            setIndex((i) => (i + 1) % len);
        }, AUTO_MS);
        return () => clearInterval(id);
    }, [len, reduceMotion]);

    if (len === 0) return null;

    return (
        <section
            id="testimonials"
            className="testimonials-section"
            onMouseEnter={() => {
                hoverPausedRef.current = true;
            }}
            onMouseLeave={() => {
                hoverPausedRef.current = false;
            }}
        >
            <div className="container">

                <div className="section-intro-block section-intro-block--560 section-intro-block--no-trail">
                    <span className="eyebrow" style={{ justifyContent: "center" }}>
                        <span className="eyebrow-dot" />
                        Success Stories
                    </span>
                    {/* <h2 className="section-title">
                        Voices that inspire us<br />
                        <span style={{ color: "var(--amber)" }}>every single day.</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Employers who found their people. Candidates who found their path.
                        These are the stories that drive us.
                    </p> */}
                </div>

                <div
                    className={`testimonials-carousel${len === 1 ? " testimonials-carousel--single" : ""}`}
                    aria-roledescription="carousel"
                    aria-label="Client testimonials"
                >
                    {len > 1 && (
                        <button
                            type="button"
                            className="testimonials-carousel__nav testimonials-carousel__nav--prev"
                            onClick={() => go(-1)}
                            aria-label="Show previous testimonial"
                        >
                            <ChevronLeft size={22} strokeWidth={2.25} aria-hidden />
                        </button>
                    )}

                    <div className="testimonials-carousel__viewport">
                        <div className="testimonials-carousel__row">
                            {len > 1 && (
                                <motion.button
                                    type="button"
                                    className="testimonial-card testimonial-card--peek testimonial-card--peek-left"
                                    onClick={() => goTo(prevIdx)}
                                    aria-label={`Read testimonial from ${displayTestimonials[prevIdx].name}`}
                                    layout
                                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={displayTestimonials[prevIdx].id}
                                            className="testimonials-carousel__card-inner"
                                            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={reduceMotion ? undefined : { opacity: 0, x: 16 }}
                                            transition={{ duration: 0.28 }}
                                        >
                                            <TestimonialCardBody {...displayTestimonials[prevIdx]} />
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.button>
                            )}

                            <article
                                className="testimonial-card testimonial-card--featured"
                                id={`testimonial-${displayTestimonials[index].id}`}
                                aria-current="true"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={displayTestimonials[index].id}
                                        className="testimonials-carousel__card-inner"
                                        initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: 0.98 }}
                                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <TestimonialCardBody
                                            {...displayTestimonials[index]}
                                            featuredReadMore={{
                                                expanded: featuredExpanded,
                                                onToggle: () => setFeaturedExpanded((v) => !v),
                                            }}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </article>

                            {len > 1 && (
                                <motion.button
                                    type="button"
                                    className="testimonial-card testimonial-card--peek testimonial-card--peek-right"
                                    onClick={() => goTo(nextIdx)}
                                    aria-label={`Read testimonial from ${displayTestimonials[nextIdx].name}`}
                                    layout
                                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={displayTestimonials[nextIdx].id}
                                            className="testimonials-carousel__card-inner"
                                            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={reduceMotion ? undefined : { opacity: 0, x: -16 }}
                                            transition={{ duration: 0.28 }}
                                        >
                                            <TestimonialCardBody {...displayTestimonials[nextIdx]} />
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.button>
                            )}
                        </div>
                    </div>

                    {len > 1 && (
                        <button
                            type="button"
                            className="testimonials-carousel__nav testimonials-carousel__nav--next"
                            onClick={() => go(1)}
                            aria-label="Show next testimonial"
                        >
                            <ChevronRight size={22} strokeWidth={2.25} aria-hidden />
                        </button>
                    )}
                </div>

                {len > 1 && (
                    <div className="testimonials-carousel__dots" role="tablist" aria-label="Choose testimonial">
                        {displayTestimonials.map((t, i) => (
                            <button
                                key={t.id}
                                type="button"
                                role="tab"
                                aria-selected={i === index}
                                aria-label={`Show testimonial ${i + 1}: ${t.name}`}
                                className={`testimonials-carousel__dot${i === index ? " is-active" : ""}`}
                                onClick={() => goTo(i)}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
