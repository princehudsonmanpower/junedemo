import Image from "next/image";
import Link from "next/link";
import AboutPawCollage from "@/components/sections/AboutPawCollage";

export default function WhyJuneHires() {
    return (
        <section id="why" className="why-section">
            <div className="container">
                <div className="why-inner">

                    <div className="why-visual-cluster">
                        <div className="why-photo-wrap">
                            <div className="why-photo-frame">
                                <Image
                                    src="/rashmi.jpg"
                                    alt="Rashmi Singh, Founder and CEO of JuneHires"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 38vw"
                                    className="object-cover"
                                    style={{ objectPosition: "center top" }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "35%",
                                        background: "linear-gradient(to top, rgba(15,23,42,0.22), transparent)",
                                    }}
                                />
                            </div>

                            <div className="why-photo-badge">
                                <span style={{ fontSize: 20 }}>🏆</span>
                                <p>
                                    70+ <br />
                                    Placements in just 2 years
                                </p>
                            </div>

                            <div
                                style={{
                                    position: "absolute",
                                    top: -20,
                                    left: -20,
                                    width: 80,
                                    height: 80,
                                    borderRadius: 20,
                                    background: "rgba(15, 23, 42, 0.06)",
                                    border: "2px solid rgba(15, 23, 42, 0.1)",
                                    zIndex: -1,
                                }}
                            />
                        </div>

                        <div className="why-paw-card">
                            <p className="why-paw-card__label">June, frame by frame</p>
                            <AboutPawCollage />
                        </div>
                    </div>

                    <div>
                        <span className="eyebrow">
                            <span className="eyebrow-dot" />
                            A closer look
                        </span>

                        <h2 className="section-title">
                            Our story &amp;{" "}
                            <span style={{ color: "var(--blue)" }}>values</span>
                        </h2>

                        <h3 className="why-june-origin-title" style={{ marginBottom: 12 }}>
                            The Spirit of JuneHires
                        </h3>
                        <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 24 }}>
                            June isn&apos;t a month; he is my dog, a gentle boy who teaches me every day that
                            loyalty is everything. I started JuneHires to bring his spirit into the professional
                            world. Where others see transactions, we see people. We are building a brand that is
                            just like him: faithful, warm, and human, every single time.
                        </p>

                        <aside className="why-june-origin" aria-labelledby="story-behind-name-title">
                            <h3 id="story-behind-name-title" className="why-june-origin-title">
                                The Story Behind the Name
                            </h3>
                            <p>Before there was a logo, there was a dog named June.</p>
                            <p style={{ marginTop: 12 }}>
                                People often assume I named my company after a month on the calendar, but the truth
                                is much more personal. June is my constant-a small, steadfast boy who defines what
                                loyalty looks like to me. He is present when things are chaotic, patient when I am
                                overwhelmed, and unshakably kind to everyone he meets.
                            </p>
                            <p style={{ marginTop: 12 }}>
                                In founding JuneHires, I am carrying his spirit forward. In an industry that often
                                feels cold and transactional, we choose to be like June: faithful, warm, and deeply
                                human, every single time.
                            </p>
                        </aside>

                        <div className="why-founder-note" aria-labelledby="meet-rashmi-title">
                            <h3
                                id="meet-rashmi-title"
                                className="why-june-origin-title"
                                style={{ marginBottom: 16, fontStyle: "normal", position: "relative", zIndex: 1 }}
                            >
                                Meet Rashmi Singh: The Heart of JuneHires
                            </h3>
                            <p>
                                My journey began in R&amp;D, but I soon realized that my true passion isn&apos;t
                                just building products, it&apos;s building people. I founded JuneHires to bring a
                                much-needed human touch to recruitment. Named after my dog, June, the company
                                embodies his daily spirit: unwavering loyalty and kindness.
                            </p>
                            <p style={{ marginTop: 16 }}>
                                At a young age, I am dedicated to ensuring no candidate feels like a transaction.
                                Whether I am guiding a student or helping a founder build their dream team, my
                                motive is simple: to be as faithful and supportive as June is to me. We don&apos;t
                                just hire; we grow alongside you.
                            </p>
                            <div className="why-founder-sig">
                                - Rashmi Singh, Founder &amp; CEO, JuneHires
                            </div>
                        </div>

                        <div style={{ marginTop: 36 }}>
                            <Link href="/contact" className="btn btn-primary" id="why-hire-cta">
                                Work with Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
