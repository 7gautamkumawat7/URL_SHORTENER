import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

// Redirect aliases should not appear as duplicate search results.
export const metadata = {
  robots: { index: false, follow: true },
};

export default async function Page({ params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (doc?.url) {
    redirect(doc.url);
  }

  // If link not found, send visitor back to homepage
  const fallbackUrl = process.env.NEXT_PUBLIC_HOST || "/";
  redirect(fallbackUrl);
}