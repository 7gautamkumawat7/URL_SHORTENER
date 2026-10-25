import { siteUrl } from "@/lib/seo";

export default function sitemap() {
  // Only first-party public pages belong here, never user-generated aliases.
  return ["/", "/shorten", "/about", "/contact"].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
