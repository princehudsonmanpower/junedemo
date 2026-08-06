"use client";

import { useActionState, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { JobFormState } from "@/app/crm/actions";
import CrmSelect from "@/components/crm/CrmSelect";

const TABS = [
    { id: "role", label: "Role details", desc: "Title, location & status" },
    { id: "pay", label: "Compensation", desc: "Pay & work schedule" },
    { id: "desc", label: "Description", desc: "Overview & highlights" },
    { id: "linkedin", label: "LinkedIn", desc: "Post link" },
] as const;

const STATUS_OPTIONS = [
    { value: "open", label: "Open", description: "Visible on careers page" },
    { value: "closed", label: "Closed", description: "Hidden from public" },
];

const TAG_OPTIONS = [
    { value: "Hiring", label: "Hiring", description: "Full-time or contract role" },
    { value: "Internship", label: "Internship", description: "Internship opening" },
];

type TabId = (typeof TABS)[number]["id"];

type JobFormProps = {
    action: (prev: JobFormState, formData: FormData) => Promise<JobFormState>;
    initialValues?: {
        title?: string;
        tag?: string;
        location?: string;
        employmentType?: string;
        compensation?: string;
        workDays?: string;
        overview?: string;
        highlights?: string[];
        linkedinUrl?: string;
        status?: "open" | "closed";
        sortOrder?: number;
    };
    submitLabel?: string;
    cancelHref?: string;
};

function validatePanel(form: HTMLFormElement, tabId: TabId, report = true): boolean {
    const panel = form.querySelector(`[data-tab-panel="${tabId}"]`);
    if (!panel) return true;

    const inputs = panel.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        "input:not([type='hidden']), select, textarea"
    );

    for (const input of inputs) {
        if (!input.checkValidity()) {
            if (report) input.reportValidity();
            return false;
        }
    }
    return true;
}

export default function JobForm({
    action,
    initialValues,
    submitLabel = "Save role",
    cancelHref = "/crm/jobs",
}: JobFormProps) {
    const [state, formAction, pending] = useActionState(action, {});
    const [activeTab, setActiveTab] = useState<TabId>("role");
    const [maxUnlockedIndex, setMaxUnlockedIndex] = useState(() =>
        initialValues ? TABS.length - 1 : 0
    );
    const formRef = useRef<HTMLFormElement>(null);

    const activeIndex = TABS.findIndex((t) => t.id === activeTab);
    const isFirst = activeIndex === 0;
    const isLast = activeIndex === TABS.length - 1;
    const activeMeta = TABS[activeIndex];

    function goToTab(tabId: TabId) {
        setActiveTab(tabId);
    }

    function handleStepClick(tabId: TabId, index: number) {
        if (index > maxUnlockedIndex) return;
        goToTab(tabId);
    }

    function goNext() {
        const form = formRef.current;
        if (!form || !validatePanel(form, activeTab)) return;
        if (!isLast) {
            setMaxUnlockedIndex((prev) => Math.max(prev, activeIndex + 1));
            goToTab(TABS[activeIndex + 1].id);
        }
    }

    function goBack() {
        if (!isFirst) goToTab(TABS[activeIndex - 1].id);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        for (const tab of TABS) {
            if (!validatePanel(e.currentTarget, tab.id)) {
                e.preventDefault();
                setActiveTab(tab.id);
                return;
            }
        }
    }

    return (
        <form
            ref={formRef}
            action={formAction}
            onSubmit={handleSubmit}
            className="crm-form-layout crm-form-layout--tabs"
        >
            {state.error && (
                <div className="crm-alert crm-alert--error" role="alert">
                    {state.error}
                </div>
            )}

            <div className="crm-form-card crm-form-card--tabs">
                <div className="crm-form-stepper-wrap">
                    <div className="crm-form-stepper" role="tablist" aria-label="Job form sections">
                        {TABS.map((tab, i) => {
                            const isLocked = i > maxUnlockedIndex;
                            const isDone = i < maxUnlockedIndex && activeTab !== tab.id;

                            return (
                            <div key={tab.id} className="crm-form-stepper__item">
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === tab.id}
                                    aria-controls={`panel-${tab.id}`}
                                    aria-disabled={isLocked}
                                    disabled={isLocked}
                                    title={isLocked ? "Complete the previous step to continue" : undefined}
                                    className={`crm-form-step${activeTab === tab.id ? " is-active" : ""}${isDone ? " is-done" : ""}${isLocked ? " is-disabled" : ""}`}
                                    onClick={() => handleStepClick(tab.id, i)}
                                >
                                    <span className="crm-form-step__num">
                                        {isDone ? (
                                            <Check size={14} strokeWidth={3} aria-hidden />
                                        ) : (
                                            i + 1
                                        )}
                                    </span>
                                    <span className="crm-form-step__label">{tab.label}</span>
                                </button>
                                {i < TABS.length - 1 && (
                                    <span
                                        className={`crm-form-stepper__line${i < maxUnlockedIndex ? " is-done" : ""}`}
                                        aria-hidden
                                    />
                                )}
                            </div>
                            );
                        })}
                    </div>
                    <div className="crm-form-progress" aria-hidden>
                        <div
                            className="crm-form-progress__bar"
                            style={{ width: `${((activeIndex + 1) / TABS.length) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="crm-form-tab-panel-wrap">
                    <p className="crm-form-panel-desc">{activeMeta.desc}</p>

                    {/* Role details */}
                    <div
                        id="panel-role"
                        data-tab-panel="role"
                        role="tabpanel"
                        className={`crm-form-tab-panel${activeTab === "role" ? " is-active" : ""}`}
                        hidden={activeTab !== "role"}
                    >
                        <div className="crm-form-card__body">
                            <div className="crm-form-section">
                                <span className="crm-form-section__title">Basic information</span>
                                <div className="crm-form-grid">
                                    <label className="crm-field crm-field--full">
                                        <span className="crm-field__label">Job title</span>
                                        <input
                                            name="title"
                                            className="crm-input"
                                            defaultValue={initialValues?.title}
                                            placeholder="e.g. Marketing Lead"
                                            required
                                        />
                                    </label>
                                    <div className="crm-field">
                                        <span className="crm-field__label">Tag</span>
                                        <CrmSelect
                                            name="tag"
                                            options={TAG_OPTIONS}
                                            defaultValue={initialValues?.tag ?? "Hiring"}
                                            required
                                        />
                                    </div>
                                    <label className="crm-field">
                                        <span className="crm-field__label">Employment type</span>
                                        <input
                                            name="employmentType"
                                            className="crm-input"
                                            defaultValue={initialValues?.employmentType}
                                            placeholder="Full-time, Internship…"
                                            required
                                        />
                                    </label>
                                    <label className="crm-field crm-field--full">
                                        <span className="crm-field__label">Location</span>
                                        <input
                                            name="location"
                                            className="crm-input"
                                            defaultValue={initialValues?.location}
                                            placeholder="e.g. Mumbai / Hybrid"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="crm-form-section">
                                <span className="crm-form-section__title">Publishing</span>
                                <div className="crm-form-grid">
                                    <div className="crm-field">
                                        <span className="crm-field__label">Status</span>
                                        <CrmSelect
                                            name="status"
                                            options={STATUS_OPTIONS}
                                            defaultValue={initialValues?.status ?? "open"}
                                            required
                                        />
                                    </div>
                                    <label className="crm-field">
                                        <span className="crm-field__label">
                                            Sort order
                                            <span className="crm-field__hint">Lower = first</span>
                                        </span>
                                        <input
                                            name="sortOrder"
                                            type="number"
                                            className="crm-input"
                                            defaultValue={initialValues?.sortOrder ?? 0}
                                            min={0}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compensation */}
                    <div
                        id="panel-pay"
                        data-tab-panel="pay"
                        role="tabpanel"
                        className={`crm-form-tab-panel${activeTab === "pay" ? " is-active" : ""}`}
                        hidden={activeTab !== "pay"}
                    >
                        <div className="crm-form-card__body">
                            <div className="crm-form-grid">
                                <label className="crm-field">
                                    <span className="crm-field__label">Compensation</span>
                                    <input
                                        name="compensation"
                                        className="crm-input"
                                        defaultValue={initialValues?.compensation}
                                        placeholder="e.g. Up to ₹50,000/mo"
                                        required
                                    />
                                </label>
                                <label className="crm-field">
                                    <span className="crm-field__label">Work days</span>
                                    <input
                                        name="workDays"
                                        className="crm-input"
                                        defaultValue={initialValues?.workDays}
                                        placeholder="e.g. Mon – Sat"
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div
                        id="panel-desc"
                        data-tab-panel="desc"
                        role="tabpanel"
                        className={`crm-form-tab-panel${activeTab === "desc" ? " is-active" : ""}`}
                        hidden={activeTab !== "desc"}
                    >
                        <div className="crm-form-card__body crm-form-card__body--stack">
                            <label className="crm-field">
                                <span className="crm-field__label">Overview</span>
                                <textarea
                                    name="overview"
                                    className="crm-input crm-textarea crm-textarea--compact"
                                    rows={4}
                                    defaultValue={initialValues?.overview}
                                    placeholder="Brief description of the role…"
                                    required
                                />
                            </label>
                            <label className="crm-field">
                                <span className="crm-field__label">
                                    <span className="crm-field__label-text">Highlights</span>
                                    <span className="crm-field__hint">Comma-separated</span>
                                </span>
                                <input
                                    name="highlights"
                                    className="crm-input"
                                    defaultValue={initialValues?.highlights?.join(", ")}
                                    placeholder="Recruitment, Freshers welcome, Certificate"
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div
                        id="panel-linkedin"
                        data-tab-panel="linkedin"
                        role="tabpanel"
                        className={`crm-form-tab-panel${activeTab === "linkedin" ? " is-active" : ""}`}
                        hidden={activeTab !== "linkedin"}
                    >
                        <div className="crm-form-card__body">
                            <label className="crm-field">
                                <span className="crm-field__label">LinkedIn post URL</span>
                                <input
                                    name="linkedinUrl"
                                    type="url"
                                    className="crm-input"
                                    defaultValue={initialValues?.linkedinUrl}
                                    placeholder="https://www.linkedin.com/posts/…"
                                    required
                                />
                                <span className="crm-field__hint">
                                    Applicants will be directed to this post from the careers page.
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="crm-form-tab-footer">
                    <div className="crm-form-tab-footer__left">
                        {!isFirst ? (
                            <button type="button" className="crm-btn crm-btn--secondary" onClick={goBack}>
                                <ChevronLeft size={16} aria-hidden />
                                Back
                            </button>
                        ) : (
                            <Link href={cancelHref} className="crm-btn crm-btn--secondary">
                                Cancel
                            </Link>
                        )}
                    </div>
                    <div className="crm-form-tab-footer__right">
                        <span className="crm-form-tab-step">
                            Step {activeIndex + 1} of {TABS.length}
                        </span>
                        {!isLast ? (
                            <button type="button" className="crm-btn crm-btn--primary" onClick={goNext}>
                                Next
                                <ChevronRight size={16} aria-hidden />
                            </button>
                        ) : (
                            <button type="submit" className="crm-btn crm-btn--primary" disabled={pending}>
                                {pending ? "Saving…" : submitLabel}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}
