import Home from "./components/Home";
import { pageMetadata, siteDescription, siteUrl } from "@/lib/seo";

export const metadata = pageMetadata("Custom URL Shortener", siteDescription, "/");

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BitLinks",
  url: siteUrl,
  description: siteDescription,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Home />
    </>
  );
}
