"use client";

import Image from "next/image";
import { useState } from "react";
import {
    getClientTestimonialsByIds,
    internshipSpotlightTestimonialIds,
    type ClientTestimonialRecord,
} from "@/lib/client-testimonials";

const SHARED_AVATAR_SRC = "/user-avtar.png";
const WORD_LIMIT = 60;

function getWords(text: string): string[] {
    return text.trim().split(/\s+/).filter(Boolean);
}

function takeFirstWords(text: string, limit: number): string {
    return getWords(text).slice(0, limit).join(" ");
}

function isLongerThanWords(text: string, limit: number): boolean {
    return getWords(text).length > limit;
}

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
                src={SHARED_AVATAR_SRC}
                alt=""
                aria-hidden
                fill
                sizes="46px"
                className="testimonial-avatar__img"
            />
        </div>
    );
}

function InternStoryCard({ t }: { t: ClientTestimonialRecord }) {
    const [expanded, setExpanded] = useState(false);
    const isLong = isLongerThanWords(t.text, WORD_LIMIT);
    const collapsed = isLong && !expanded;
    const displayText = collapsed ? takeFirstWords(t.text, WORD_LIMIT) : t.text;

    return (
        <article className="testimonial-card" id={`intern-story-${t.id}`}>
            <Stars count={t.stars} />
            <div className="testimonial-text-block">
                <p className="testimonial-text">
                    &ldquo;{displayText}&rdquo;
                    {isLong ? (
                        <>
                            {" "}
                            <button
                                type="button"
                                className="testimonial-read-more"
                                onClick={() => setExpanded((v) => !v)}
                                aria-expanded={expanded}
                            >
                                {expanded ? "Read less" : "Read more"}
                            </button>
                        </>
                    ) : null}
                </p>
            </div>
            <div className="testimonial-author">
                <TestimonialAvatar />
                <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                </div>
            </div>
        </article>
    );
}

const spotlight = getClientTestimonialsByIds(internshipSpotlightTestimonialIds);

export default function InternTestimonialStories() {
    return (
        <section className="intern-testimonials-section">
            <div className="container">
                <div className="internships-section-heading-block">
                    <span className="eyebrow" style={{ justifyContent: "center" }}>
                        <span className="eyebrow-dot" />
                        Intern Stories
                    </span>
                    <h2 className="section-title">
                        From interns to <span style={{ color: "var(--amber)" }}>professionals.</span>
                    </h2>
                </div>

                <div className="intern-testimonials-grid">
                    {spotlight.map((t) => (
                        <InternStoryCard key={t.id} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
