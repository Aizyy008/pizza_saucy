import { MetadataRoute } from "next";
import { siteConfig } from "@/menu/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.seo.url}/sitemap.xml`,
  };
}
