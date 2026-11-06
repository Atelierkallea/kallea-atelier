import type { MetadataRoute } from "next";
import { navigation, site } from "@/content/site";
import { legal } from "@/content/legal";

/** Plan du site pour Google (généré automatiquement à partir du menu). */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navigation.map((item) => item.href);
  if (legal.ready) pages.push("/mentions-legales");

  return pages.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
