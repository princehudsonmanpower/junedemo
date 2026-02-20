interface SectionHeaderProps {
    badge?: string;
    title: string;
    highlight?: string;
    subtitle?: string;
    center?: boolean;
}

export default function SectionHeader({
    badge,
    title,
    highlight,
    subtitle,
    center = true,
}: SectionHeaderProps) {
    const titleParts = highlight ? title.split(highlight) : [title];

    return (
        <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
            {badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-[#F5A623] bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.2)] rounded-full">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                {highlight ? (
                    <>
                        {titleParts[0]}
                        <span className="gradient-text-amber">{highlight}</span>
                        {titleParts[1]}
                    </>
                ) : (
                    title
                )}
            </h2>
            {subtitle && (
                <p className="text-[#8A8A9A] text-lg max-w-2xl leading-relaxed mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
