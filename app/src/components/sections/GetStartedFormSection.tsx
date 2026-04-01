"use client";

/**
 * Get Started — embedded Google Form with Employer / Candidate tabs.
 * Styling: get-started-form-section.css (vanilla CSS, no Tailwind).
 */

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GOOGLE_FORM_EMBED_URL, GOOGLE_FORM_SHORT_URL } from "@/lib/google-form";
import "./get-started-form-section.css";

type Audience = "employer" | "candidate";

const DESCRIPTIONS: Record<Audience, string> = {
  employer: "Hire top talent quickly and efficiently.",
  candidate: "Find opportunities that match your skills.",
};

function GetStartedFormSectionInner() {
  const searchParams = useSearchParams();
  const [audience, setAudience] = useState<Audience>("employer");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [contextSwitching, setContextSwitching] = useState(false);

  // URL: ?type=employer | ?type=candidate
  useEffect(() => {
    const t = searchParams.get("type");
    if (t === "employer" || t === "employers") {
      setAudience("employer");
    } else if (t === "candidate" || t === "candidates") {
      setAudience("candidate");
    }
  }, [searchParams]);

  const selectAudience = useCallback((next: Audience) => {
    if (next === audience) return;
    setContextSwitching(true);
    setAudience(next);
    window.setTimeout(() => setContextSwitching(false), 200);
  }, [audience]);

  const onIframeLoad = useCallback(() => {
    setIframeLoaded(true);
  }, []);

  return (
    <section
      className="get-started-form-section"
      aria-labelledby="get-started-title"
    >
      <div className="get-started-form-inner">
        <header className="get-started-form-header">
          <h2 id="get-started-title" className="get-started-form-title">
            Get Started
          </h2>
          <p className="get-started-form-subtitle">
            Tell us about your requirements and we&apos;ll connect you with the right opportunities.
          </p>
        </header>

        <p className="get-started-form-note">
          One short form for everyone—we route your request based on whether you&apos;re hiring or job-seeking.
        </p>

        <div
          className="get-started-tabs"
          role="tablist"
          aria-label="Choose employer or candidate"
        >
          <button
            type="button"
            role="tab"
            id="tab-employer"
            aria-selected={audience === "employer"}
            aria-controls="get-started-panel"
            className={`get-started-tab${audience === "employer" ? " is-active" : ""}`}
            onClick={() => selectAudience("employer")}
          >
            Work with us
          </button>
          <button
            type="button"
            role="tab"
            id="tab-candidate"
            aria-selected={audience === "candidate"}
            aria-controls="get-started-panel"
            className={`get-started-tab${audience === "candidate" ? " is-active" : ""}`}
            onClick={() => selectAudience("candidate")}
          >
            For Candidates
          </button>
        </div>

        <article
          id="get-started-panel"
          role="tabpanel"
          aria-labelledby={audience === "employer" ? "tab-employer" : "tab-candidate"}
          className="get-started-card"
        >
          <p
            className={`get-started-context${contextSwitching ? " is-switching" : ""}`}
            key={audience}
          >
            {DESCRIPTIONS[audience]}
          </p>

          <p className="get-started-trust">
            <span className="get-started-trust-icon" aria-hidden="true">
              🔒
            </span>
            <span>Your data is secure and will not be shared.</span>
          </p>

          <div className="get-started-iframe-wrap">
            <div
              className={`get-started-loading${iframeLoaded ? " is-hidden" : ""}`}
              aria-hidden={iframeLoaded}
            >
              <div className="get-started-spinner" aria-hidden="true" />
              <div className="get-started-skeleton-lines">
                <div className="get-started-skeleton-line" />
                <div className="get-started-skeleton-line" />
                <div className="get-started-skeleton-line" />
              </div>
              <span className="get-started-loading-text">Loading form…</span>
            </div>

            {/* Same form for both tabs; context copy above personalizes the experience */}
            <iframe
              title="JuneHires — Get started form"
              className="get-started-iframe"
              src={GOOGLE_FORM_EMBED_URL}
              onLoad={onIframeLoad}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="get-started-fallback">
            Form not loading?{" "}
            <a href={GOOGLE_FORM_SHORT_URL} target="_blank" rel="noopener noreferrer">
              Open the form in a new tab
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
}

function GetStartedFormSectionFallback() {
  return (
    <section className="get-started-form-section" aria-busy="true">
      <div className="get-started-form-inner">
        <div className="get-started-card" style={{ minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="get-started-spinner" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default function GetStartedFormSection() {
  return (
    <Suspense fallback={<GetStartedFormSectionFallback />}>
      <GetStartedFormSectionInner />
    </Suspense>
  );
}
