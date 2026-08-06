import {
    pgTable,
    uuid,
    text,
    timestamp,
    integer,
    jsonb,
    pgEnum,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["admin", "editor"]);
export const jobStatusEnum = pgEnum("job_status", ["open", "closed"]);

export const adminUsers = pgTable("admin_users", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    passwordHash: text("password_hash").notNull(),
    name: text("name").notNull(),
    role: userRoleEnum("role").notNull().default("editor"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const jobPostings = pgTable("job_postings", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    tag: text("tag").notNull(),
    location: text("location").notNull(),
    employmentType: text("employment_type").notNull(),
    compensation: text("compensation").notNull(),
    workDays: text("work_days").notNull(),
    overview: text("overview").notNull(),
    highlights: jsonb("highlights").$type<string[]>().notNull().default([]),
    linkedinUrl: text("linkedin_url").notNull(),
    status: jobStatusEnum("status").notNull().default("open"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export type AdminUser = typeof adminUsers.$inferSelect;
export type JobPosting = typeof jobPostings.$inferSelect;
export type NewJobPosting = typeof jobPostings.$inferInsert;
