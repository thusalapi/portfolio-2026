import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/.next"],
      },
      {
        userAgent: ["AhrefsBot", "SemrushBot", "DotBot"],
        disallow: "/",
      },
    ],
    sitemap: "https://thusala.me/sitemap.xml",
  };
}
