import { config } from "dotenv";
config({ path: ".env.local" });
import { neon } from "@neondatabase/serverless";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

async function migrate() {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");

    const sql = neon(url);
    const drizzleDir = join(process.cwd(), "drizzle");
    const files = readdirSync(drizzleDir)
        .filter((f) => f.endsWith(".sql"))
        .sort();

    for (const file of files) {
        const content = readFileSync(join(drizzleDir, file), "utf-8");
        const statements = content
            .split("--> statement-breakpoint")
            .map((s) => s.trim())
            .filter(Boolean);

        for (const statement of statements) {
            await sql.query(statement, []);
        }
        console.log(`Applied: ${file}`);
    }

    console.log("Migration complete");
}

migrate().catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
});
