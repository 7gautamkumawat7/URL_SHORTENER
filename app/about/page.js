import { pageMetadata } from "@/lib/seo";

import React from "react";
import Link from "next/link";

export const metadata = pageMetadata(
  "About",
  "Learn about BitLinks, a URL shortener built to turn long web addresses into compact, memorable links for everyday sharing.",
  "/about"
);

const AboutPage = () => {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/60 via-white to-purple-50/40">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <span>✨ About BitLinks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simplifying Links,{" "}
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent">
              Empowering Shares
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            BitLinks is a fast, reliable URL shortener built for creators, marketers, and developers who want clean links and higher engagement.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-xl shadow-purple-500/5 space-y-8">
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              <strong className="text-purple-700 font-semibold">BitLinks</strong> was crafted with modern web technologies: Next.js, React, TailwindCSS, and MongoDB. It solves the everyday problem of messy, unwieldy URLs by converting them into compact, memorable web addresses.
            </p>
            <p>
              Whether you’re sharing content across Twitter, sending product links over WhatsApp, embedding links into presentations, or tracking marketing campaigns, BitLinks provides instant performance without annoying redirects or ads.
            </p>
          </div>

          {/* Features Grid */}
          <div className="pt-4 border-t border-purple-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-purple-600">⚡</span> Key Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1">
                <h3 className="font-bold text-slate-800 text-sm">Instant Generation</h3>
                <p className="text-xs text-slate-600">Sub-second generation and fast database persistence.</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1">
                <h3 className="font-bold text-slate-800 text-sm">Custom Aliases</h3>
                <p className="text-xs text-slate-600">Brand every link with personalized, human-readable slugs.</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1">
                <h3 className="font-bold text-slate-800 text-sm">Conflict Prevention</h3>
                <p className="text-xs text-slate-600">Built-in collision detection prevents overlapping links.</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1">
                <h3 className="font-bold text-slate-800 text-sm">100% Free & Open</h3>
                <p className="text-xs text-slate-600">Designed with modern standards, no hidden limits.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Built with ❤️ by Gautam using Next.js & MongoDB
            </p>
            <Link
              href="/shorten"
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all active:scale-95"
            >
              Try BitLinks Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
