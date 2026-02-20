"use client";
import { motion } from "framer-motion";
import { steps } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section-py relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0E0E1A]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[rgba(245,166,35,0.3)] to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    badge="The Process"
                    title="Hire Your A-Player in "
                    highlight="4 Simple Steps"
                    subtitle="We do the heavy lifting — from sourcing to screening. You just show up for interviews and pick your favourite."
                />

                <div className="relative mt-16">
                    {/* Connecting line (desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(245,166,35,0.25)] to-transparent" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="group relative bg-[#13131F] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 text-center hover:border-[rgba(245,166,35,0.25)] hover:bg-[rgba(245,166,35,0.03)] transition-all duration-400 cursor-default">
                                    {/* Step number bubble */}
                                    <div className="relative inline-flex mb-5">
                                        <div className="w-14 h-14 rounded-2xl bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.2)] flex items-center justify-center group-hover:bg-[rgba(245,166,35,0.15)] transition-colors duration-300">
                                            <span className="text-2xl">{step.icon}</span>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center text-black text-xs font-bold">
                                            {i + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#F5A623] transition-colors duration-300" style={{ fontFamily: 'Syne, sans-serif' }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-[#6A6A85] text-sm leading-relaxed">
                                        {step.desc}
                                    </p>

                                    {/* Hover glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-[rgba(245,166,35,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Arrow connector (mobile/tablet) */}
                                {i < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-2 text-[#F5A623] opacity-40">↓</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-[#6A6A85] text-sm">
                        Average time from brief to onboarding:{" "}
                        <span className="text-[#F5A623] font-semibold">under 7 days.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
