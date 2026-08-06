import { asc, desc, eq } from "drizzle-orm";
import { getDb } from "./index";
import { jobPostings, type NewJobPosting } from "./schema";

export async function getOpenJobs() {
    const db = getDb();
    return db
        .select()
        .from(jobPostings)
        .where(eq(jobPostings.status, "open"))
        .orderBy(asc(jobPostings.sortOrder), desc(jobPostings.createdAt));
}

export async function getAllJobs() {
    const db = getDb();
    return db
        .select()
        .from(jobPostings)
        .orderBy(asc(jobPostings.sortOrder), desc(jobPostings.createdAt));
}

export async function getJobById(id: string) {
    const db = getDb();
    const rows = await db.select().from(jobPostings).where(eq(jobPostings.id, id)).limit(1);
    return rows[0] ?? null;
}

export async function createJob(data: Omit<NewJobPosting, "id" | "createdAt" | "updatedAt">) {
    const db = getDb();
    const rows = await db
        .insert(jobPostings)
        .values({ ...data, updatedAt: new Date() })
        .returning();
    return rows[0];
}

export async function updateJob(
    id: string,
    data: Partial<Omit<NewJobPosting, "id" | "createdAt">>
) {
    const db = getDb();
    const rows = await db
        .update(jobPostings)
        .set({ ...data, updatedAt: new Date() })
        .where(eq(jobPostings.id, id))
        .returning();
    return rows[0] ?? null;
}

export async function deleteJob(id: string) {
    const db = getDb();
    await db.delete(jobPostings).where(eq(jobPostings.id, id));
}

export function formatJobTime(createdAt: Date): string {
    const now = Date.now();
    const diffMs = now - createdAt.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 3) return "New";
    if (diffDays < 7) return `${diffDays}d ago`;
    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks < 5) return `${diffWeeks}w ago`;
    const diffMonths = Math.floor(diffDays / 30);
    return `${diffMonths}mo ago`;
}

export function getTagStyles(tag: string) {
    if (tag.toLowerCase() === "internship") {
        return { tagColor: "#057642", tagBg: "rgba(5,118,66,0.12)" };
    }
    return { tagColor: "#0A66C2", tagBg: "rgba(10,102,194,0.12)" };
}

export function jobToFeedPost(job: Awaited<ReturnType<typeof getOpenJobs>>[number]) {
    const { tagColor, tagBg } = getTagStyles(job.tag);
    return {
        id: job.id,
        type: "job" as const,
        tag: job.tag,
        tagColor,
        tagBg,
        time: formatJobTime(job.createdAt),
        href: job.linkedinUrl,
        title: job.title,
        location: job.location,
        employmentType: job.employmentType,
        compensation: job.compensation,
        workDays: job.workDays,
        overview: job.overview,
        highlights: job.highlights,
    };
}
