"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
    className?: string;
    icon?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    target,
    rel,
    onClick,
    className = "",
    icon = false,
}: ButtonProps) {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    const variantClasses = {
        primary: `
      bg-[#F5A623] text-black font-bold rounded-xl
      hover:bg-[#E8950E] hover:shadow-[0_0_30px_rgba(245,166,35,0.4)]
      transition-all duration-300
    `,
        ghost: `
      bg-transparent text-white font-semibold rounded-xl border border-[rgba(255,255,255,0.15)]
      hover:border-[#F5A623] hover:text-[#F5A623] hover:bg-[rgba(245,166,35,0.05)]
      transition-all duration-300
    `,
        outline: `
      bg-transparent text-[#F5A623] font-semibold rounded-xl border border-[#F5A623]
      hover:bg-[rgba(245,166,35,0.1)] hover:shadow-[0_0_20px_rgba(245,166,35,0.2)]
      transition-all duration-300
    `,
    };

    const classes = `
    inline-flex items-center gap-2 cursor-pointer
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

    const content = (
        <>
            {children}
            {icon && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
        </>
    );

    if (href) {
        const relResolved =
            rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
        return (
            <motion.a
                href={href}
                target={target}
                rel={relResolved}
                className={`group ${classes}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={`group ${classes}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    );
}
