import Link from "next/link";

type PageHeaderProps = {
    title: string;
    subtitle?: string;
    backHref?: string;
    backLabel?: string;
    action?: React.ReactNode;
};

export default function CrmPageHeader({
    title,
    subtitle,
    backHref,
    backLabel = "Back",
    action,
}: PageHeaderProps) {
    return (
        <header className="crm-page-header">
            <div className="crm-page-header__text">
                {backHref && (
                    <Link href={backHref} className="crm-breadcrumb">
                        {backLabel}
                    </Link>
                )}
                <h1 className="crm-page-header__title">{title}</h1>
                {subtitle && <p className="crm-page-header__subtitle">{subtitle}</p>}
            </div>
            {action && <div className="crm-page-header__action">{action}</div>}
        </header>
    );
}
