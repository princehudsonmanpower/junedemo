interface BadgeProps {
    children: React.ReactNode;
    variant?: "amber" | "purple" | "green";
    className?: string;
}

export default function Badge({ children, variant = "amber", className = "" }: BadgeProps) {
    const variantClasses = {
        amber: "bg-[rgba(245,166,35,0.12)] text-[#F5A623] border-[rgba(245,166,35,0.2)]",
        purple: "bg-[rgba(108,99,255,0.12)] text-[#6C63FF] border-[rgba(108,99,255,0.2)]",
        green: "bg-[rgba(52,211,153,0.12)] text-[#34D399] border-[rgba(52,211,153,0.2)]",
    };

    return (
        <span
            className={`
        inline-flex items-center gap-1.5 px-3 py-1.5
        text-xs font-semibold tracking-wide uppercase
        border rounded-full backdrop-blur-sm
        ${variantClasses[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}
