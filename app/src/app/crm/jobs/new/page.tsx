import JobForm from "@/components/crm/JobForm";
import CrmPageHeader from "@/components/crm/CrmPageHeader";
import { createJobAction } from "@/app/crm/actions";

export default function NewJobPage() {
    return (
        <>
            <CrmPageHeader
                title="New role"
                subtitle="Add a job opening to the careers page"
                backHref="/crm/jobs"
                backLabel="Job openings"
            />
            <JobForm action={createJobAction} submitLabel="Create role" />
        </>
    );
}
