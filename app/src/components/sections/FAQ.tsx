"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-py relative overflow-hidden">
            <div className="absolute inset-0 bg-[#08080F]" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    badge="FAQ"
                    title="Got Questions? "
                    highlight="We've Got Answers."
                    subtitle="Everything you need to know about hiring with JuneHire."
                />

                <div className="mt-10 space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className={`
                border rounded-2xl overflow-hidden transition-all duration-300
                ${openIndex === i
                                    ? "border-[rgba(245,166,35,0.25)] bg-[rgba(245,166,35,0.03)]"
                                    : "border-[rgba(255,255,255,0.06)] bg-[#13131F] hover:border-[rgba(245,166,35,0.12)]"
                                }
              `}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                                aria-expanded={openIndex === i}
                                id={`faq-btn-${i}`}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span
                                    className={`font-semibold text-sm lg:text-base transition-colors duration-300 ${openIndex === i ? "text-[#F5A623]" : "text-white"
                                        }`}
                                    style={{ fontFamily: "Syne, sans-serif" }}
                                >
                                    {faq.q}
                                </span>
                                <div
                                    className={`
                    flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300
                    ${openIndex === i
                                            ? "border-[#F5A623] bg-[rgba(245,166,35,0.15)] text-[#F5A623]"
                                            : "border-[rgba(255,255,255,0.12)] text-[#6A6A85]"
                                        }
                  `}
                                >
                                    {openIndex === i ? <Minus size={13} /> : <Plus size={13} />}
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        id={`faq-answer-${i}`}
                                        role="region"
                                        aria-labelledby={`faq-btn-${i}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-5 text-[#8A8A9A] text-sm lg:text-base leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions? */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 text-center p-6 rounded-2xl bg-[#13131F] border border-[rgba(255,255,255,0.06)]"
                >
                    <p className="text-[#8A8A9A] mb-3">Still have questions?</p>
                    <a
                        href="#contact"
                        className="text-[#F5A623] font-semibold hover:underline text-sm"
                    >
                        → Book a free 15-minute discovery call with our team
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
