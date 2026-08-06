"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
    Briefcase,
    Users,
    ExternalLink,
    ChevronRight,
} from "lucide-react";

type CrmSidebarProps = {
    userName: string;
    userEmail: string;
    isAdmin: boolean;
    signOutSlot: React.ReactNode;
};

const navItems = [
    { href: "/crm/jobs", label: "Job Openings", icon: Briefcase },
    { href: "/crm/users", label: "Team", icon: Users, adminOnly: true },
];

export default function CrmSidebar({
    userName,
    userEmail,
    isAdmin,
    signOutSlot,
}: CrmSidebarProps) {
    const pathname = usePathname();

    const initials = userName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <aside className="crm-sidebar">
            <div className="crm-sidebar__brand">
                <Link href="/crm/jobs" className="crm-sidebar__logo">
                    <Image src="/JuneHires_logo.png" alt="" width={32} height={32} />
                    <div>
                        <span className="crm-sidebar__logo-name">JuneHires</span>
                        <span className="crm-sidebar__logo-tag">HR Console</span>
                    </div>
                </Link>
            </div>

            <nav className="crm-sidebar__nav" aria-label="CRM navigation">
                <span className="crm-sidebar__section-label">Workspace</span>
                {navItems
                    .filter((item) => !item.adminOnly || isAdmin)
                    .map(({ href, label, icon: Icon }) => {
                        const active =
                            pathname === href || pathname.startsWith(`${href}/`);
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`crm-sidebar__link${active ? " is-active" : ""}`}
                            >
                                <Icon size={18} strokeWidth={2} aria-hidden />
                                <span>{label}</span>
                                {active && <ChevronRight size={14} className="crm-sidebar__link-arrow" aria-hidden />}
                            </Link>
                        );
                    })}
            </nav>

            <div className="crm-sidebar__footer">
                <Link
                    href="/careers"
                    target="_blank"
                    className="crm-sidebar__external"
                >
                    <ExternalLink size={16} aria-hidden />
                    View careers page
                </Link>

                <div className="crm-sidebar__user">
                    <div className="crm-sidebar__avatar" aria-hidden>
                        {initials}
                    </div>
                    <div className="crm-sidebar__user-info">
                        <span className="crm-sidebar__user-name">{userName}</span>
                        <span className="crm-sidebar__user-email">{userEmail}</span>
                    </div>
                </div>

                {signOutSlot}
            </div>
        </aside>
    );
}
