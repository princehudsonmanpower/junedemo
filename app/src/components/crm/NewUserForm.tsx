"use client";

import { useActionState } from "react";
import { createUserAction, type JobFormState } from "@/app/crm/actions";
import CrmSelect from "@/components/crm/CrmSelect";

const ROLE_OPTIONS = [
    { value: "editor", label: "Editor", description: "Manage job openings only" },
    { value: "admin", label: "Admin", description: "Jobs + team management" },
];

export default function NewUserForm() {
    const [state, formAction, pending] = useActionState(createUserAction, {} as JobFormState);

    return (
        <form action={formAction} className="crm-form-layout">
            {state.error && (
                <div className="crm-alert crm-alert--error" role="alert">
                    {state.error}
                </div>
            )}

            <div className="crm-form-card">
                <div className="crm-form-card__header">
                    <h2>Account details</h2>
                    <p>Credentials for signing into the HR Console</p>
                </div>
                <div className="crm-form-card__body crm-form-card__body--stack">
                    <label className="crm-field">
                        <span className="crm-field__label">Full name</span>
                        <input name="name" className="crm-input" placeholder="Rashmi Singh" required />
                    </label>

                    <label className="crm-field">
                        <span className="crm-field__label">Email</span>
                        <input name="email" type="email" className="crm-input" placeholder="hr@junehires.com" required />
                    </label>

                    <label className="crm-field">
                        <span className="crm-field__label">
                            <span className="crm-field__label-text">Password</span>
                            <span className="crm-field__hint">Minimum 8 characters</span>
                        </span>
                        <input name="password" type="password" className="crm-input" minLength={8} required />
                    </label>

                    <div className="crm-field">
                        <span className="crm-field__label">Role</span>
                        <CrmSelect
                            name="role"
                            options={ROLE_OPTIONS}
                            defaultValue="editor"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="crm-form-footer">
                <button type="submit" className="crm-btn crm-btn--primary" disabled={pending}>
                    {pending ? "Creating…" : "Create account"}
                </button>
            </div>
        </form>
    );
}
