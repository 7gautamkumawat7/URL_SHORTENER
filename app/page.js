"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const text = "Welcome to My Home Page!|Short links, big impact.|Turn long URLs into smart links.|Share smarter, faster, easier.|Track clicks. Build trust.|Your link, your brand.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="flex flex-col md:flex-row justify-center items-center">

        {/* Column 1 */}
        <div className="w-full md:w-1/2 py-6 px-4 font-bold">
          <p className="text-lg mb-2">The best URL shortener in the market</p>
          <p className="font-normal">
            Transform long, messy URLs into sleek, trackable links that drive results.
            With our powerful shortener, you don’t just save space — you unlock insights,
            boost engagement, and build trust with every click. Whether it’s social media,
            email campaigns, or QR codes, our short links make sharing smarter, faster,
            and more effective. Join the future of URL shortening today and elevate your online presence.
          </p>
          <div className="gap-7 mt-4 flex">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Try Now</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">GitHub</button>
          </div>
        </div>

        {/* Column 2 */}
        {/* Column 2 */}
        <div className="w-full md:w-1/2 flex justify-center p-4 py-6">
          <Image
            src="/group.jpg"
            alt="An image of group"
            width={300}
            height={300}
            loading="eager"   // ✅ prioritize this image for LCP
            className="mix-blend-darken h-auto w-auto"
          />
        </div>


      </section>

      {/* Auto-writing text section */}
      <div
        className="flex justify-center items-center bg-purple-100 w-full"
        style={{ height: "84px", marginRight: "220px" }}
      >
        <h1 id="autoText" className="text-3xl font-bold text-purple-600">
          {displayText}
        </h1>
      </div>

    </main>
  );
}
