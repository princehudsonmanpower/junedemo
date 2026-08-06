import { config } from "dotenv";
config({ path: ".env.local" });
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { getDb } from "../src/lib/db/index";
import { adminUsers, jobPostings } from "../src/lib/db/schema";

const SEED_JOBS = [
    {
        title: "Marketing Lead",
        tag: "Hiring",
        location: "Thane, Mumbai / Hybrid",
        employmentType: "Full-time",
        compensation: "Up to ₹50,000/mo",
        workDays: "Mon – Sat",
        overview:
            "Build and scale demand generation and brand positioning - strategic thinking meets hands-on execution in agri-trade.",
        highlights: ["Demand Gen", "B2B Marketing", "3–4 yrs exp"],
        linkedinUrl:
            "https://www.linkedin.com/posts/job-title-marketing-lead-location-thane-share-7484564766594777088-GJsp/",
        status: "open" as const,
        sortOrder: 1,
    },
    {
        title: "Sales Lead",
        tag: "Hiring",
        location: "Thane, Mumbai · Hybrid",
        employmentType: "Full-time",
        compensation: "₹40K – ₹50K/mo",
        workDays: "3 days/week in office",
        overview:
            "Drive lead generation, manage a high-volume sales pipeline, and build lasting relationships with importers and exporters.",
        highlights: ["Sales / BD", "500+ lead funnel", "3+ yrs exp"],
        linkedinUrl:
            "https://www.linkedin.com/posts/job-title-sales-lead-location-thane-mumbai-share-7484564137625264128-rnum/",
        status: "open" as const,
        sortOrder: 2,
    },
    {
        title: "HR Intern",
        tag: "Internship",
        location: "Remote",
        employmentType: "6-month Internship",
        compensation: "₹5,000/mo stipend",
        workDays: "Mon – Sat · 10 AM – 7 PM",
        overview:
            "Kickstart your HR career with hands-on recruitment experience - sourcing, shortlisting, interview coordination, and real-time HR operations.",
        highlights: ["Freshers welcome", "Recruitment", "Certificate"],
        linkedinUrl:
            "https://www.linkedin.com/posts/achal-meshram-675458199_hiring-hrintern-internshipopportunity-share-7483429491382370304-NWx8/",
        status: "open" as const,
        sortOrder: 3,
    },
    {
        title: "Associate – Global Sourcing & Seller Partnerships",
        tag: "Hiring",
        location: "Mumbai (flexible)",
        employmentType: "Full-time",
        compensation: "₹40K – ₹50K/mo",
        workDays: "6 days/week",
        overview:
            "Build and manage Agrify's seller network across domestic and international markets - outreach, qualification, onboarding, and coordination with exporters and trading companies.",
        highlights: ["Global Sourcing", "Seller Partnerships", "1–3 yrs exp"],
        linkedinUrl:
            "https://www.linkedin.com/posts/junehires_job-title-associate-global-sourcing-activity-7485611388304830464-7F1F/",
        status: "open" as const,
        sortOrder: 4,
    },
    {
        title: "Lead – Credit Sales (Export Financing)",
        tag: "Hiring",
        location: "Mumbai · Field travel",
        employmentType: "Full-time",
        compensation: "Up to ₹50,000/mo",
        workDays: "Mon – Sat",
        overview:
            "Drive adoption of export financing among Indian agri exporters - own the full sales lifecycle from outreach and deal structuring to repeat business and portfolio growth.",
        highlights: ["Trade Finance", "Credit Sales", "4–8 yrs exp"],
        linkedinUrl:
            "https://www.linkedin.com/posts/junehires_job-title-lead-credit-sales-export-financing-activity-7485612605672275968-12DG/",
        status: "open" as const,
        sortOrder: 5,
    },
];

async function seed() {
    const db = getDb();

    const email = process.env.SEED_ADMIN_EMAIL;
    const password = process.env.SEED_ADMIN_PASSWORD;

    if (!email || !password) {
        throw new Error("SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD must be set");
    }

    const existingAdmin = await db
        .select()
        .from(adminUsers)
        .where(eq(adminUsers.email, email.toLowerCase().trim()))
        .limit(1);

    if (existingAdmin.length === 0) {
        const passwordHash = await bcrypt.hash(password, 12);
        await db.insert(adminUsers).values({
            email: email.toLowerCase().trim(),
            passwordHash,
            name: "Admin",
            role: "admin",
        });
        console.log(`Created admin user: ${email}`);
    } else {
        console.log(`Admin user already exists: ${email}`);
    }

    const existingJobs = await db.select().from(jobPostings).limit(1);
    if (existingJobs.length === 0) {
        await db.insert(jobPostings).values(
            SEED_JOBS.map((job) => ({
                ...job,
                updatedAt: new Date(),
            }))
        );
        console.log(`Seeded ${SEED_JOBS.length} job postings`);
    } else {
        console.log("Job postings already exist, skipping seed");
    }

    console.log("Seed complete");
}

seed().catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
});
