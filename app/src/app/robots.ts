import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: "/crm/",
            },
        ],
        sitemap: "https://www.junehires.com/sitemap.xml",
    };
}
