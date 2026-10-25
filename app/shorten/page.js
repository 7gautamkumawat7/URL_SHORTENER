import ShortenForm from "./ShortenForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Create a Short Link",
  "Create a custom short URL with BitLinks. Paste your destination URL, choose a memorable alias, and copy your new link to share.",
  "/shorten"
);

export default function ShortenPage() {
  return <ShortenForm />;
}
