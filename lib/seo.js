// Use a stable production origin so preview deployments do not become canonical.
export const siteUrl = new URL(
  process.env.SITE_URL || "https://bitlinksg.vercel.app"
).origin;

export const siteDescription =
  "Shorten long URLs and create custom, memorable links with BitLinks. Generate a short link and copy it to share across social media, messages, and email.";

export function pageMetadata(title, description, path) {
  const socialTitle = `${title} | BitLinks`;
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "BitLinks — Short links, simple sharing",
  };

  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "BitLinks",
      locale: "en_US",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
