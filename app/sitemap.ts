import type { MetadataRoute } from "next";

const BASE_URL = "https://niraina.dev";
const locales = ["fr", "en", "de"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
