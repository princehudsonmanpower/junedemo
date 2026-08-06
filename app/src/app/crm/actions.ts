"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import {
    createJob,
    deleteJob,
    updateJob,
} from "@/lib/db/job-queries";
import { createUser, deleteUser } from "@/lib/db/user-queries";

export type JobFormState = {
    error?: string;
    success?: boolean;
};

function parseHighlights(value: string): string[] {
    return value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
}

async function ensureAuth() {
    const session = await auth();
    if (!session?.user) {
        redirect("/crm/login");
    }
    return session;
}

async function ensureAdmin() {
    const session = await ensureAuth();
    if (session.user.role !== "admin") {
        redirect("/crm/jobs");
    }
    return session;
}

export async function createJobAction(
    _prev: JobFormState,
    formData: FormData
): Promise<JobFormState> {
    await ensureAuth();

    const title = formData.get("title") as string;
    const tag = formData.get("tag") as string;
    const location = formData.get("location") as string;
    const employmentType = formData.get("employmentType") as string;
    const compensation = formData.get("compensation") as string;
    const workDays = formData.get("workDays") as string;
    const overview = formData.get("overview") as string;
    const highlights = parseHighlights(formData.get("highlights") as string);
    const linkedinUrl = formData.get("linkedinUrl") as string;
    const status = (formData.get("status") as "open" | "closed") || "open";
    const sortOrder = parseInt(formData.get("sortOrder") as string, 10) || 0;

    if (!title || !tag || !location || !employmentType || !compensation || !workDays || !overview || !linkedinUrl) {
        return { error: "Please fill in all required fields." };
    }

    await createJob({
        title,
        tag,
        location,
        employmentType,
        compensation,
        workDays,
        overview,
        highlights,
        linkedinUrl,
        status,
        sortOrder,
    });

    revalidatePath("/careers");
    revalidatePath("/crm/jobs");
    redirect("/crm/jobs");
}

export async function updateJobAction(
    id: string,
    _prev: JobFormState,
    formData: FormData
): Promise<JobFormState> {
    await ensureAuth();

    const title = formData.get("title") as string;
    const tag = formData.get("tag") as string;
    const location = formData.get("location") as string;
    const employmentType = formData.get("employmentType") as string;
    const compensation = formData.get("compensation") as string;
    const workDays = formData.get("workDays") as string;
    const overview = formData.get("overview") as string;
    const highlights = parseHighlights(formData.get("highlights") as string);
    const linkedinUrl = formData.get("linkedinUrl") as string;
    const status = (formData.get("status") as "open" | "closed") || "open";
    const sortOrder = parseInt(formData.get("sortOrder") as string, 10) || 0;

    if (!title || !tag || !location || !employmentType || !compensation || !workDays || !overview || !linkedinUrl) {
        return { error: "Please fill in all required fields." };
    }

    await updateJob(id, {
        title,
        tag,
        location,
        employmentType,
        compensation,
        workDays,
        overview,
        highlights,
        linkedinUrl,
        status,
        sortOrder,
    });

    revalidatePath("/careers");
    revalidatePath("/crm/jobs");
    revalidatePath(`/crm/jobs/${id}/edit`);
    redirect("/crm/jobs");
}

export async function toggleJobStatusAction(formData: FormData) {
    await ensureAuth();
    const id = formData.get("id") as string;
    const status = formData.get("status") as "open" | "closed";
    const newStatus = status === "open" ? "closed" : "open";
    await updateJob(id, { status: newStatus });
    revalidatePath("/careers");
    revalidatePath("/crm/jobs");
}

export async function deleteJobAction(id: string) {
    await ensureAuth();
    await deleteJob(id);
    revalidatePath("/careers");
    revalidatePath("/crm/jobs");
}

export async function createUserAction(
    _prev: JobFormState,
    formData: FormData
): Promise<JobFormState> {
    await ensureAdmin();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = (formData.get("role") as "admin" | "editor") || "editor";

    if (!name || !email || !password) {
        return { error: "Please fill in all required fields." };
    }

    if (password.length < 8) {
        return { error: "Password must be at least 8 characters." };
    }

    try {
        await createUser({ name, email, password, role });
    } catch {
        return { error: "A user with this email may already exist." };
    }

    revalidatePath("/crm/users");
    redirect("/crm/users");
}

export async function deleteUserAction(id: string) {
    const session = await ensureAdmin();
    if (session.user.id === id) {
        return;
    }
    await deleteUser(id);
    revalidatePath("/crm/users");
}
