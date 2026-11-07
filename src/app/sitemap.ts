import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.selektafood.com";
  const lastModified = new Date();

  const articulos: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    { url: base,                    lastModified, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/nosotros`,      lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicios`,     lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/beneficios`,    lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/productos`,     lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,          lastModified, changeFrequency: "weekly",  priority: 0.6 },
    ...articulos,
    { url: `${base}/contacto`,      lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacidad`,    lastModified, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
