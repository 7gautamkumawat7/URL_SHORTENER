import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Check if the short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "URL already exists!"
      })
    }

    // Insert new document
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date()
    })

    // ✅ Return the actual short URL
    const shortUrl = `${process.env.NEXT_PUBLIC_HOST}/${body.shorturl}`

    return NextResponse.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
      shortUrl
    })
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "Internal Server Error"
    }, { status: 500 })
  }
}
