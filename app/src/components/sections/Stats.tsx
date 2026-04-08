"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

function AnimatedCounter({
    value,
    prefix = "",
    suffix = "",
    duration = 2,
}: {
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = value / (duration * 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, value, duration]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
}

const testimonialFeature = {
    quote:
        "JuneHires made it easy to hire our video editor. They provided four excellent prospects and we seamlessly hired in under 2 weeks. He has been an incredible addition.",
    name: "David T.",
    company: "Visibly Marketing",
};

export default function Stats() {
    return (
        <section id="stats" className="section-py relative overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 bg-[#08080F]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(245,166,35,0.2)] to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    badge="Results"
                    title="The Numbers "
                    highlight="Speak For Themselves"
                    subtitle="Real results from real businesses. No fluff — just proof."
                />

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative group"
                        >
                            <div className="relative bg-[#13131F] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 lg:p-8 text-center overflow-hidden hover:border-[rgba(245,166,35,0.2)] transition-all duration-300">
                                {/* Glow */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div
                                    className="text-3xl lg:text-5xl font-bold text-[#F5A623] mb-2"
                                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                                >
                                    <AnimatedCounter
                                        value={stat.value}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <p className="text-white font-semibold text-sm lg:text-base mb-1">{stat.label}</p>
                                <p className="text-[#6A6A85] text-xs">{stat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 relative bg-[#13131F] border border-[rgba(245,166,35,0.15)] rounded-2xl p-6 lg:p-8"
                >
                    <div className="text-4xl lg:text-5xl text-[#F5A623] opacity-30 mb-3 leading-none">&ldquo;</div>
                    <p className="text-[#B4B4CC] text-base lg:text-lg leading-relaxed mb-4 max-w-3xl">
                        {testimonialFeature.quote}
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[rgba(245,166,35,0.15)] flex items-center justify-center text-[#F5A623] font-bold text-sm">
                            {testimonialFeature.name[0]}
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">{testimonialFeature.name}</p>
                            <p className="text-[#6A6A85] text-xs">{testimonialFeature.company}</p>
                        </div>
                        <div className="ml-auto flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-[#F5A623] text-sm">★</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
