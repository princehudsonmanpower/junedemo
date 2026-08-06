"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function CrmLoginForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/crm/jobs";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (result?.error) {
            setError("Invalid email or password.");
            return;
        }

        window.location.href = callbackUrl;
    };

    return (
        <div className="crm-login-page">
            <div className="crm-login-card">
                <div className="crm-login-card__top">
                    <div className="crm-login-logo">
                        <Image
                            src="/JuneHires_logo.png"
                            alt="JuneHires"
                            width={120}
                            height={48}
                            priority
                            className="crm-login-logo__img"
                        />
                    </div>
                    <h1 className="crm-login-title">Welcome back</h1>
                    <p className="crm-login-subtitle">
                        Enter your credentials to access the HR Console
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="crm-login-form">
                    {error && (
                        <div className="crm-alert crm-alert--error" role="alert">
                            {error}
                        </div>
                    )}

                    <label className="crm-field">
                        <span className="crm-field__label">Email address</span>
                        <input
                            type="email"
                            className="crm-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@junehires.com"
                            required
                            autoComplete="email"
                        />
                    </label>

                    <label className="crm-field">
                        <span className="crm-field__label">Password</span>
                        <input
                            type="password"
                            className="crm-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            autoComplete="current-password"
                        />
                    </label>

                    <button type="submit" className="crm-btn crm-btn--primary crm-login-submit" disabled={loading}>
                        {loading ? "Signing in…" : "Sign in to Console"}
                    </button>
                </form>

                <p className="crm-login-footer">
                    Need access? Contact your workspace admin.
                </p>
            </div>
        </div>
    );
}
