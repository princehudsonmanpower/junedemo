import { notFound } from "next/navigation";
import JobForm from "@/components/crm/JobForm";
import CrmPageHeader from "@/components/crm/CrmPageHeader";
import { updateJobAction } from "@/app/crm/actions";
import { getJobById } from "@/lib/db/job-queries";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function EditJobPage({ params }: Props) {
    const { id } = await params;
    const job = await getJobById(id);

    if (!job) notFound();

    const boundAction = updateJobAction.bind(null, id);

    return (
        <>
            <CrmPageHeader
                title="Edit role"
                subtitle={job.title}
                backHref="/crm/jobs"
                backLabel="Job openings"
            />
            <JobForm
                action={boundAction}
                submitLabel="Save changes"
                initialValues={{
                    title: job.title,
                    tag: job.tag,
                    location: job.location,
                    employmentType: job.employmentType,
                    compensation: job.compensation,
                    workDays: job.workDays,
                    overview: job.overview,
                    highlights: job.highlights,
                    linkedinUrl: job.linkedinUrl,
                    status: job.status,
                    sortOrder: job.sortOrder,
                }}
            />
        </>
    );
}
