import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, shorturl } = body;

    if (!url || !shorturl) {
      return NextResponse.json(
        { success: false, error: true, message: "URL and shortcode are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Make sure the chosen slug is not already taken
    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "This short code is already taken. Try another one!",
      });
    }

    // Save the new link with timestamp
    await collection.insertOne({
      url,
      shorturl,
      createdAt: new Date(),
    });

    const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
    const shortUrl = `${host}/${shorturl}`;

    return NextResponse.json({
      success: true,
      error: false,
      message: "Short URL generated successfully",
      shortUrl,
    });
  } catch (err) {
    console.error("Link generation error:", err);
    return NextResponse.json(
      { success: false, error: true, message: "Server error occurred while creating link" },
      { status: 500 }
    );
  }
}
