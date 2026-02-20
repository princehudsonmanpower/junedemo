"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTABanner() {
    return (
        <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 bg-[#0E0E1A]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.08)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(245,166,35,0.3)] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(245,166,35,0.3)] to-transparent" />

            {/* Paw prints decoration */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-5xl opacity-5 rotate-[-20deg] select-none pointer-events-none">🐾</div>
            <div className="absolute right-8 top-1/3 text-7xl opacity-5 rotate-[20deg] select-none pointer-events-none">🐾</div>
            <div className="absolute left-1/4 top-8 text-3xl opacity-5 select-none pointer-events-none">🐾</div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.2)] text-[#F5A623] text-sm font-semibold mb-6">
                    🐾 Your Next A-Player Is Waiting
                </div>

                <h2
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "Syne, sans-serif" }}
                >
                    Ready to Scale With{" "}
                    <span className="gradient-text-amber">World-Class Talent?</span>
                </h2>

                <p className="text-[#8A8A9A] text-lg mb-10 leading-relaxed">
                    Book a free 15-minute discovery call. No pressure, no obligation — just a
                    conversation about your hiring needs and how JuneHire can help.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-10">
                    <Button href="https://calendly.com" variant="primary" size="lg" icon>
                        Book Your Free Call
                    </Button>
                    <Button href="mailto:hello@junehire.com" variant="ghost" size="lg">
                        Email Us Instead
                    </Button>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6A6A85]">
                    <span className="flex items-center gap-1.5"><span className="text-[#F5A623]">✓</span> No contracts</span>
                    <span className="flex items-center gap-1.5"><span className="text-[#F5A623]">✓</span> No hidden fees</span>
                    <span className="flex items-center gap-1.5"><span className="text-[#F5A623]">✓</span> Replacement guarantee</span>
                    <span className="flex items-center gap-1.5"><span className="text-[#F5A623]">✓</span> Hire in &lt; 7 days</span>
                </div>
            </motion.div>
        </section>
    );
}
