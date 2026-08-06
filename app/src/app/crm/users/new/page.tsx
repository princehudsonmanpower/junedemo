import { requireAdmin } from "@/lib/auth";
import NewUserForm from "@/components/crm/NewUserForm";
import CrmPageHeader from "@/components/crm/CrmPageHeader";

export default async function NewUserPage() {
    await requireAdmin();

    return (
        <>
            <CrmPageHeader
                title="Add team member"
                subtitle="Create a new HR Console login"
                backHref="/crm/users"
                backLabel="Team"
            />
            <NewUserForm />
        </>
    );
}
