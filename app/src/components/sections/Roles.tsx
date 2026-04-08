"use client";
import { motion } from "framer-motion";
import { roles } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export default function Roles() {
    return (
        <section id="roles" className="section-py relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0E0E1A]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[rgba(108,99,255,0.3)] to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    badge="Roles We Fill"
                    title="Whatever You Need, "
                    highlight="We've Got You Covered"
                    subtitle="From executive assistants to full-stack developers — JuneHire places top talent across every business function."
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
                    {roles.map((role, i) => (
                        <motion.a
                            key={role.title}
                            href={role.link}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                            className="group relative bg-[#13131F] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 hover:border-[rgba(245,166,35,0.3)] hover:bg-[rgba(245,166,35,0.03)] transition-all duration-300 cursor-pointer overflow-hidden"
                            whileHover={{ y: -4 }}
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,166,35,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                            <div className="relative z-10">
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {role.icon}
                                </div>
                                <h3
                                    className="text-white font-bold text-sm lg:text-base mb-2 group-hover:text-[#F5A623] transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                                >
                                    {role.title}
                                </h3>
                                <p className="text-[#6A6A85] text-xs leading-relaxed mb-3 line-clamp-2">
                                    {role.desc}
                                </p>
                                <div className="flex items-center gap-1 text-[#F5A623] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                                    Explore Role <ArrowRight size={13} />
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 bg-[rgba(245,166,35,0.05)] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>
                    ))}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-[#6A6A85] text-sm mt-8"
                >
                    Don&apos;t see your role? No problem —{" "}
                    <a href="#contact" className="text-[#F5A623] hover:underline font-medium">
                        tell us what you need
                    </a>{" "}
                    and we&apos;ll find the right fit.
                </motion.p>
            </div>
        </section>
    );
}
