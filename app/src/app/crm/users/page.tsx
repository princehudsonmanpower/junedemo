import { Plus } from "lucide-react";
import { requireAdmin } from "@/lib/auth";
import { getAllUsers } from "@/lib/db/user-queries";
import CrmPageHeader from "@/components/crm/CrmPageHeader";

export default async function CrmUsersPage() {
    await requireAdmin();
    const users = await getAllUsers();

    return (
        <>
            <CrmPageHeader
                title="Team"
                subtitle="Manage who can access the HR Console"
                action={
                    <button
                        type="button"
                        className="crm-btn crm-btn--primary"
                        disabled
                        title="Coming soon"
                    >
                        <Plus size={16} aria-hidden />
                        Add member
                    </button>
                }
            />

            <div className="crm-panel">
                <div className="crm-table-scroll">
                    <table className="crm-data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Joined</th>
                                <th aria-label="Actions" />
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <span className="crm-job-cell__title">{user.name}</span>
                                    </td>
                                    <td>
                                        <span className="crm-muted">{user.email}</span>
                                    </td>
                                    <td>
                                        <span className={`crm-badge crm-badge--${user.role}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="crm-muted">
                                            {user.createdAt.toLocaleDateString("en-IN", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="crm-btn crm-btn--sm crm-btn--danger"
                                            disabled
                                            title="Coming soon"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
