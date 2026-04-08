"use client";

import { useCallback, useEffect, useRef, useState, startTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function TestimonialCardBody({
    text,
    name,
    role,
    initial,
    stars,
}: (typeof testimonials)[0]) {
    return (
        <>
            <Stars count={stars} />
            <p className="testimonial-text">&ldquo;{text}&rdquo;</p>
            <div className="testimonial-author">
                <div className="testimonial-avatar">{initial}</div>
                <div>
                    <p className="testimonial-name">{name}</p>
                    <p className="testimonial-role">{role}</p>
                </div>
            </div>
        </>
    );
}

const AUTO_MS = 5200;

interface TestimonialsProps {
    limit?: number;
}

export default function Testimonials({ limit }: TestimonialsProps) {
    const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
    const len = displayTestimonials.length;
    const [index, setIndex] = useState(0);
    const [reduceMotion, setReduceMotion] = useState(false);
    const hoverPausedRef = useRef(false);

    useEffect(() => {
        startTransition(() => {
            setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        });
    }, []);

    const prevIdx = (index - 1 + len) % len;
    const nextIdx = (index + 1) % len;

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
                                        <TestimonialCardBody {...displayTestimonials[index]} />
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
