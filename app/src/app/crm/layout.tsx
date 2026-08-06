import CrmSidebar from "@/components/crm/CrmSidebar";
import { auth, signOut } from "@/lib/auth";
import type { Metadata } from "next";
import { LogOut } from "lucide-react";
import "./crm.css";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
    title: "CRM | JuneHires",
};

export default async function CrmLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = await auth();
    const isLoginPage = !session?.user;

    if (isLoginPage) {
        return <div className="crm-login-shell">{children}</div>;
    }

    const isAdmin = session.user.role === "admin";

    const signOutSlot = (
        <form
            action={async () => {
                "use server";
                await signOut({ redirectTo: "/crm/login" });
            }}
        >
            <button type="submit" className="crm-sidebar__signout">
                <LogOut size={16} aria-hidden />
                Sign out
            </button>
        </form>
    );

    return (
        <div className="crm-root">
            <CrmSidebar
                userName={session.user.name ?? "User"}
                userEmail={session.user.email ?? ""}
                isAdmin={isAdmin}
                signOutSlot={signOutSlot}
            />
            <div className="crm-main">
                <div className="crm-main__inner">{children}</div>
            </div>
        </div>
    );
}
