import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { getDb } from "./index";
import { adminUsers } from "./schema";

export async function getUserByEmail(email: string) {
    const db = getDb();
    const rows = await db
        .select()
        .from(adminUsers)
        .where(eq(adminUsers.email, email.toLowerCase().trim()))
        .limit(1);
    return rows[0] ?? null;
}

export async function getUserById(id: string) {
    const db = getDb();
    const rows = await db.select().from(adminUsers).where(eq(adminUsers.id, id)).limit(1);
    return rows[0] ?? null;
}

export async function getAllUsers() {
    const db = getDb();
    return db.select().from(adminUsers).orderBy(adminUsers.createdAt);
}

export async function createUser(data: {
    email: string;
    password: string;
    name: string;
    role: "admin" | "editor";
}) {
    const db = getDb();
    const passwordHash = await bcrypt.hash(data.password, 12);
    const rows = await db
        .insert(adminUsers)
        .values({
            email: data.email.toLowerCase().trim(),
            passwordHash,
            name: data.name,
            role: data.role,
        })
        .returning();
    return rows[0];
}

export async function verifyPassword(password: string, passwordHash: string) {
    return bcrypt.compare(password, passwordHash);
}

export async function deleteUser(id: string) {
    const db = getDb();
    await db.delete(adminUsers).where(eq(adminUsers.id, id));
}
