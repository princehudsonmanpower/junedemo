import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";
import { getUserByEmail, verifyPassword } from "@/lib/db/user-queries";

declare module "next-auth" {
    interface User {
        role: "admin" | "editor";
    }
    interface Session {
        user: {
            id: string;
            email: string;
            name: string;
            role: "admin" | "editor";
        };
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        role: "admin" | "editor";
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const email = credentials?.email as string | undefined;
                const password = credentials?.password as string | undefined;

                if (!email || !password) return null;

                const user = await getUserByEmail(email);
                if (!user) return null;

                const valid = await verifyPassword(password, user.passwordHash);
                if (!valid) return null;

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                };
            },
        }),
    ],
    pages: {
        signIn: "/crm/login",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub!;
                session.user.role = token.role as "admin" | "editor";
            }
            return session;
        },
    },
    trustHost: true,
});

export async function requireAuth() {
    const session = await auth();
    if (!session?.user) {
        redirect("/crm/login");
    }
    return session;
}

export async function requireAdmin() {
    const session = await requireAuth();
    if (session.user.role !== "admin") {
        redirect("/crm/jobs");
    }
    return session;
}
