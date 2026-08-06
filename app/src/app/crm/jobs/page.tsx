import { getAllJobs } from "@/lib/db/job-queries";
import JobsTable from "@/components/crm/JobsTable";
import CrmPageHeader from "@/components/crm/CrmPageHeader";

export default async function CrmJobsPage() {
    const jobs = await getAllJobs();

    const rows = jobs.map((job) => ({
        id: job.id,
        title: job.title,
        tag: job.tag,
        location: job.location,
        employmentType: job.employmentType,
        compensation: job.compensation,
        status: job.status,
        sortOrder: job.sortOrder,
        linkedinUrl: job.linkedinUrl,
        updatedAt: job.updatedAt,
    }));

    return (
        <>
            <CrmPageHeader
                title="Job Openings"
                subtitle="Manage roles published on your careers page"
            />
            <JobsTable jobs={rows} />
        </>
    );
}
