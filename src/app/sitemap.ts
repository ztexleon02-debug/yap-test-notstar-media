import type { MetadataRoute } from "next";
import { getPosts, getShows } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, shows] = await Promise.all([getPosts(), getShows()]);
  const base = "https://notstar-media-site.vercel.app";

  return [
    "",
    "/about",
    "/shows",
    "/news",
    "/services",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    ...posts.map((post) => `/news/${post.slug.current}`),
    ...shows.map((show) => `/shows/${show.slug.current}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
