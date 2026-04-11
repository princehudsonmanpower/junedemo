"use client";
import Image from "next/image";

const posts = [
    {
        id: 1,
        tag: "Hiring",
        tagColor: "#0A66C2",
        tagBg: "rgba(10,102,194,0.12)",
        time: "2d ago",
        content:
            "We're hiring! Looking for talented HR professionals and Executive Assistants who want to make a real impact. Remote-first roles with mentorship and real growth opportunities. Apply today 👇",
        reactions: "48",
        comments: "12",
    },
    {
        id: 2,
        tag: "Career Tip",
        tagColor: "#057642",
        tagBg: "rgba(5,118,66,0.12)",
        time: "5d ago",
        content:
            "80% of jobs are filled through networking - not job boards. Here are 5 things our recruiters look for beyond a great CV. Hint: communication is everything. 🧵",
        reactions: "134",
        comments: "27",
    },
    {
        id: 3,
        tag: "Culture",
        tagColor: "#B24020",
        tagBg: "rgba(178,64,32,0.12)",
        time: "1w ago",
        content:
            "Our free internship program has helped 100+ candidates land their first HR role. People-first isn't just a tagline - it's how we build every program we run. ✨",
        reactions: "211",
        comments: "39",
    },
];

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const HeartIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const CommentIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

export default function LinkedInFeed() {
    return (
        <section className="li-section">
            <div className="container">

                {/* ── Top bar ── */}
                <div className="li-topbar">
                    <div className="li-topbar-left">
                        <div className="li-platform-badge">
                            <LinkedInIcon size={18} />
                            <span>LinkedIn</span>
                        </div>
                        <div className="li-title-block">
                            <h2 className="li-title">
                                Follow us for <span className="li-title-accent">insights & openings</span>
                            </h2>
                            <p className="li-subtitle">
                                Hiring tips, HR trends, and team updates - straight from our feed.
                            </p>
                        </div>
                    </div>
                    <div className="li-topbar-actions">
                        <a
                            href="https://www.linkedin.com/company/junehires/follow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="li-follow-btn"
                        >
                            <LinkedInIcon size={15} />
                            Follow
                        </a>
                        <a
                            href="https://www.linkedin.com/company/junehires/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="li-view-all-btn"
                        >
                            View All Openings ↗
                        </a>
                    </div>
                </div>

                {/* ── Post cards ── */}
                <div className="li-cards-grid">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href="https://www.linkedin.com/company/junehires/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="li-card"
                        >
                            {/* Card header */}
                            <div className="li-card-header">
                                <div className="li-card-avatar">
                                    <Image
                                        src="/JuneHires_logo.png"
                                        alt=""
                                        width={30}
                                        height={30}
                                        className="object-contain"
                                        style={{ display: "block", margin: "0 auto", padding: 4 }}
                                    />
                                </div>
                                <div className="li-card-meta">
                                    <span className="li-card-name">JuneHires</span>
                                    <span className="li-card-handle">@junehires · {post.time}</span>
                                </div>
                                <span
                                    className="li-card-tag"
                                    style={{ color: post.tagColor, background: post.tagBg }}
                                >
                                    {post.tag}
                                </span>
                            </div>

                            {/* Card body */}
                            <p className="li-card-body">{post.content}</p>

                            {/* Card footer */}
                            <div className="li-card-footer">
                                <span className="li-card-stat">
                                    <HeartIcon />
                                    {post.reactions}
                                </span>
                                <span className="li-card-stat">
                                    <CommentIcon />
                                    {post.comments}
                                </span>
                                <span className="li-card-cta">
                                    <LinkedInIcon size={12} />
                                    Read on LinkedIn
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="li-bottom-cta">
                    <div className="li-bottom-cta-inner">
                        <div className="li-bottom-icon">
                            <LinkedInIcon size={28} />
                        </div>
                        <div>
                            <p className="li-bottom-title">Never miss an update</p>
                            <p className="li-bottom-sub">Joined 9000+ professionals following JuneHires on LinkedIn.</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/company/junehires"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="li-follow-btn li-follow-btn-lg"
                        >
                            <LinkedInIcon size={16} />
                            Follow JuneHires
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
