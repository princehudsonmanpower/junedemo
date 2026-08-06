"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    Search,
    Plus,
    Pencil,
    Eye,
    EyeOff,
    Trash2,
    MapPin,
    ExternalLink,
} from "lucide-react";
import { toggleJobStatusAction, deleteJobAction } from "@/app/crm/actions";

export type JobRow = {
    id: string;
    title: string;
    tag: string;
    location: string;
    employmentType: string;
    compensation: string;
    status: "open" | "closed";
    sortOrder: number;
    linkedinUrl: string;
    updatedAt: Date;
};

type Filter = "all" | "open" | "closed";

function formatUpdated(date: Date) {
    const diff = Date.now() - new Date(date).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days}d ago`;
    return new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
    });
}

export default function JobsTable({ jobs }: { jobs: JobRow[] }) {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState<Filter>("all");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return jobs.filter((job) => {
            if (filter !== "all" && job.status !== filter) return false;
            if (!q) return true;
            return (
                job.title.toLowerCase().includes(q) ||
                job.location.toLowerCase().includes(q) ||
                job.tag.toLowerCase().includes(q) ||
                job.employmentType.toLowerCase().includes(q)
            );
        });
    }, [jobs, query, filter]);

    const openCount = jobs.filter((j) => j.status === "open").length;
    const closedCount = jobs.filter((j) => j.status === "closed").length;

    async function handleDelete(id: string, title: string) {
        if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
        await deleteJobAction(id);
    }

    return (
        <div className="crm-jobs">
            <div className="crm-stats">
                <div className="crm-stat-card">
                    <span className="crm-stat-card__label">Total roles</span>
                    <span className="crm-stat-card__value">{jobs.length}</span>
                    <span className="crm-stat-card__hint">All listings in CRM</span>
                </div>
                <div className="crm-stat-card crm-stat-card--green">
                    <span className="crm-stat-card__label">Live on site</span>
                    <span className="crm-stat-card__value">{openCount}</span>
                    <span className="crm-stat-card__hint">Visible on /careers</span>
                </div>
                <div className="crm-stat-card crm-stat-card--muted">
                    <span className="crm-stat-card__label">Closed</span>
                    <span className="crm-stat-card__value">{closedCount}</span>
                    <span className="crm-stat-card__hint">Hidden from public</span>
                </div>
            </div>

            <div className="crm-panel">
                <div className="crm-panel__toolbar">
                    <div className="crm-search">
                        <Search size={16} className="crm-search__icon" aria-hidden />
                        <input
                            type="search"
                            className="crm-search__input"
                            placeholder="Search by title, location, or type…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            aria-label="Search jobs"
                        />
                    </div>

                    <div className="crm-filters" role="tablist" aria-label="Filter by status">
                        {(["all", "open", "closed"] as const).map((f) => (
                            <button
                                key={f}
                                type="button"
                                role="tab"
                                aria-selected={filter === f}
                                className={`crm-filter-pill${filter === f ? " is-active" : ""}`}
                                onClick={() => setFilter(f)}
                            >
                                {f === "all" ? "All" : f === "open" ? "Open" : "Closed"}
                                <span className="crm-filter-pill__count">
                                    {f === "all" ? jobs.length : f === "open" ? openCount : closedCount}
                                </span>
                            </button>
                        ))}
                    </div>

                    <Link href="/crm/jobs/new" className="crm-btn crm-btn--primary crm-btn--icon">
                        <Plus size={16} aria-hidden />
                        New role
                    </Link>
                </div>

                {filtered.length === 0 ? (
                    <div className="crm-panel__empty">
                        <div className="crm-panel__empty-icon">
                            <BriefcaseIcon />
                        </div>
                        <h3>{jobs.length === 0 ? "No job openings yet" : "No matches found"}</h3>
                        <p>
                            {jobs.length === 0
                                ? "Create your first role to show it on the careers page."
                                : "Try a different search or filter."}
                        </p>
                        {jobs.length === 0 && (
                            <Link href="/crm/jobs/new" className="crm-btn crm-btn--primary">
                                <Plus size={16} aria-hidden />
                                Create first role
                            </Link>
                        )}
                    </div>
                ) : (
                    <div className="crm-table-scroll">
                        <table className="crm-data-table">
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>Location</th>
                                    <th>Compensation</th>
                                    <th>Status</th>
                                    <th>Updated</th>
                                    <th aria-label="Actions" />
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((job) => (
                                    <tr key={job.id}>
                                        <td>
                                            <div className="crm-job-cell">
                                                <span className="crm-job-cell__title">{job.title}</span>
                                                <span className="crm-job-cell__meta">
                                                    <span className={`crm-tag crm-tag--${job.tag.toLowerCase()}`}>
                                                        {job.tag}
                                                    </span>
                                                    <span>{job.employmentType}</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="crm-location">
                                                <MapPin size={14} aria-hidden />
                                                {job.location}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="crm-comp">{job.compensation}</span>
                                        </td>
                                        <td>
                                            <span className={`crm-status crm-status--${job.status}`}>
                                                <span className="crm-status__dot" aria-hidden />
                                                {job.status === "open" ? "Live" : "Closed"}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="crm-muted">{formatUpdated(job.updatedAt)}</span>
                                        </td>
                                        <td>
                                            <div className="crm-row-actions">
                                                <Link
                                                    href={job.linkedinUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="crm-icon-btn"
                                                    title="View LinkedIn post"
                                                    aria-label={`View LinkedIn post for ${job.title}`}
                                                >
                                                    <ExternalLink size={15} />
                                                </Link>
                                                <Link
                                                    href={`/crm/jobs/${job.id}/edit`}
                                                    className="crm-icon-btn"
                                                    title="Edit"
                                                    aria-label={`Edit ${job.title}`}
                                                >
                                                    <Pencil size={15} />
                                                </Link>
                                                <form action={toggleJobStatusAction}>
                                                    <input type="hidden" name="id" value={job.id} />
                                                    <input type="hidden" name="status" value={job.status} />
                                                    <button
                                                        type="submit"
                                                        className="crm-icon-btn"
                                                        title={job.status === "open" ? "Close role" : "Reopen role"}
                                                        aria-label={job.status === "open" ? `Close ${job.title}` : `Reopen ${job.title}`}
                                                    >
                                                        {job.status === "open" ? (
                                                            <EyeOff size={15} />
                                                        ) : (
                                                            <Eye size={15} />
                                                        )}
                                                    </button>
                                                </form>
                                                <button
                                                    type="button"
                                                    className="crm-icon-btn crm-icon-btn--danger"
                                                    title="Delete"
                                                    aria-label={`Delete ${job.title}`}
                                                    onClick={() => handleDelete(job.id, job.title)}
                                                >
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

function BriefcaseIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
    );
}
