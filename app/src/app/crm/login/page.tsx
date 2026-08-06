import { Suspense } from "react";
import CrmLoginForm from "@/components/crm/CrmLoginForm";

function LoginFallback() {
    return (
        <div className="crm-login-page">
            <div className="crm-login-card">
                <p className="crm-login-subtitle">Loading…</p>
            </div>
        </div>
    );
}

export default function CrmLoginPage() {
    return (
        <Suspense fallback={<LoginFallback />}>
            <CrmLoginForm />
        </Suspense>
    );
}
