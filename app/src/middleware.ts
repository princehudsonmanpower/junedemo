import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/crm/login")) {
        const session = await auth();
        if (session?.user) {
            return NextResponse.redirect(new URL("/crm/jobs", request.url));
        }
        return NextResponse.next();
    }

    if (pathname.startsWith("/crm")) {
        const session = await auth();
        if (!session?.user) {
            const loginUrl = new URL("/crm/login", request.url);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/crm/:path*"],
};
