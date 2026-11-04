"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const slogans = [
  "Short links, big impact.",
  "Turn long URLs into smart links.",
  "Share smarter, faster, easier.",
  "Track clicks. Build trust.",
  "Your link, your brand.",
];

export default function Home() {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [inputUrl, setInputUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  // Typewriter effect rotating between slogans
  useEffect(() => {
    const fullText = slogans[currentSloganIndex];
    const speed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSloganIndex]);

  const handleQuickShorten = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setShortenedUrl("");

    if (!inputUrl) {
      setErrorMsg("Please enter a destination URL.");
      return;
    }

    // Default to a short 6-char random ID if custom slug is left blank
    const slug = customSlug.trim() || Math.random().toString(36).substring(2, 8);

    try {
      setIsLoading(true);
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: inputUrl, shorturl: slug }),
      });

      const data = await res.json();
      if (data.success) {
        const fullLink = data.shortUrl || `${window.location.origin}/${slug}`;
        setShortenedUrl(fullLink);
      } else {
        setErrorMsg(data.message || "Failed to generate link.");
      }
    } catch {
      setErrorMsg("Unable to connect to server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!shortenedUrl) return;
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-purple-50/40">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 -z-10 w-full max-w-6xl h-96 bg-gradient-to-tr from-purple-300/30 via-indigo-200/20 to-pink-200/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-96 -left-32 -z-10 w-80 h-80 bg-purple-200/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-80 -right-32 -z-10 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full pointer-events-none" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
              <span>The Best URL Shortener in the Market</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Shorten Links. <br />
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent">
                Amplify Your Reach.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform long, messy URLs into sleek, trackable links that drive results.
              With our powerful shortener, you don’t just save space — you unlock insights,
              boost engagement, and build trust with every click. Whether it’s social media,
              email campaigns, or QR codes, BitLinks makes sharing smarter, faster, and more effective.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shorten"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm sm:text-base group"
              >
                <span>Try Now Free</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <a
                href="https://github.com/7gautamkumawat7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-purple-50 text-purple-700 font-semibold px-6 py-3.5 rounded-xl border border-purple-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>

            <div className="pt-4 max-w-xl mx-auto lg:mx-0">
              <form
                onSubmit={handleQuickShorten}
                className="bg-white/95 p-3 sm:p-4 rounded-2xl shadow-xl shadow-purple-500/10 border border-purple-100 backdrop-blur-md space-y-3"
              >
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-3 flex items-center text-purple-400">
                      🔗
                    </span>
                    <input
                      type="url"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="Paste your long link (https://...)"
                      className="w-full pl-9 pr-3 py-2.5 bg-purple-50/50 hover:bg-purple-50/80 focus:bg-white text-slate-800 placeholder-slate-400 text-sm rounded-xl border border-purple-200/80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    value={customSlug}
                    onChange={(e) => setCustomSlug(e.target.value)}
                    placeholder="Custom slug (optional)"
                    className="sm:w-44 px-3 py-2.5 bg-purple-50/50 hover:bg-purple-50/80 focus:bg-white text-slate-800 placeholder-slate-400 text-sm rounded-xl border border-purple-200/80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm rounded-xl shadow-md shadow-purple-500/20 active:scale-95 disabled:opacity-60 transition-all flex items-center justify-center gap-1.5"
                  >
                    {isLoading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Shorten"
                    )}
                  </button>
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-600 font-medium px-1">
                    {errorMsg}
                  </p>
                )}

                {shortenedUrl && (
                  <div className="flex items-center justify-between gap-2 p-2.5 bg-purple-50 border border-purple-200 rounded-xl animate-in fade-in slide-in-from-top-1">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-xs font-semibold text-purple-700">
                        Success!
                      </span>
                      <a
                        href={shortenedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-purple-600 hover:text-purple-800 hover:underline truncate"
                      >
                        {shortenedUrl}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg transition active:scale-95 flex items-center gap-1 shrink-0"
                    >
                      {copied ? "Copied! ✓" : "Copy Link"}
                    </button>
                  </div>
                )}
              </form>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✓</span> Free Forever
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✓</span> Sub-second Redirect
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✓</span> Custom Aliases
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/20 to-indigo-500/20 rounded-3xl blur-2xl transform scale-95" />

            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl shadow-purple-500/15 border border-purple-100 p-4 sm:p-5 transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-100/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                </div>
                <div className="px-2.5 py-0.5 rounded-md bg-purple-50 text-[11px] font-mono font-medium text-purple-600 border border-purple-100">
                  bitlinks.io/instant
                </div>
                <span className="text-xs text-purple-400">✨</span>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-purple-50/50 flex items-center justify-center p-3">
                <Image
                  src="/group.jpg"
                  alt="BitLinks collaborative team and audience"
                  width={420}
                  height={320}
                  loading="eager"
                  priority
                  className="rounded-lg object-contain w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg shadow-purple-500/10 border border-purple-100 flex items-center gap-2 animate-float">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-black">
                  ⚡
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Latency
                  </p>
                  <p className="text-xs font-bold text-slate-800">
                    &lt; 50ms Redirect
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg shadow-purple-500/10 border border-purple-100 flex items-center gap-2 animate-float-delayed">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-black">
                  📈
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Community
                  </p>
                  <p className="text-xs font-bold text-slate-800">
                    10k+ Smart Links
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-100/90 via-purple-50 to-indigo-100/80 border border-purple-200/80 p-5 sm:p-6 shadow-md shadow-purple-500/5 backdrop-blur-sm text-center">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-500">
              Dynamic Taglines
            </span>
          </div>
          <div className="min-h-[44px] flex items-center justify-center">
            <h2
              id="autoText"
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-purple-700 tracking-tight"
            >
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-6 sm:h-7 bg-purple-600 ml-1.5 animate-pulse align-middle" />
            </h2>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-purple-100/80">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block text-xs font-bold tracking-wider uppercase text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need in a Modern Shortener
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered for performance, simplicity, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white/80 hover:bg-white p-6 rounded-2xl border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
              ⚡
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Lightning Fast
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Redirect visitors seamlessly with sub-millisecond edge resolution and zero clutter.
            </p>
          </div>

          <div className="group bg-white/80 hover:bg-white p-6 rounded-2xl border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
              🎯
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Custom Aliases
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Create branded, memorable link slugs that reinforce brand trust and skyrocket CTR.
            </p>
          </div>

          <div className="group bg-white/80 hover:bg-white p-6 rounded-2xl border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
              📊
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Track & Optimize
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Keep full control over your URLs and prepare your campaigns for growth.
            </p>
          </div>

          <div className="group bg-white/80 hover:bg-white p-6 rounded-2xl border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
              🛡️
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Safe & Conflict-Free
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              MongoDB backend with real-time collision detection ensures links never overwrite.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-purple-100/70 via-purple-50 to-indigo-100/60 rounded-3xl p-8 sm:p-12 border border-purple-200/80 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How BitLinks Works
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Three simple steps to smarter, shorter links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 p-6 rounded-2xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
              <span className="w-10 h-10 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center mb-4 shadow-md shadow-purple-500/20">
                1
              </span>
              <h4 className="font-bold text-slate-900 mb-1">Paste Your Long URL</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Input any long web address from articles, stores, videos, or social campaigns.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
              <span className="w-10 h-10 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center mb-4 shadow-md shadow-purple-500/20">
                2
              </span>
              <h4 className="font-bold text-slate-900 mb-1">Personalize Slug</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Pick a customized slug or let our generator assign a compact, clean code.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
              <span className="w-10 h-10 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center mb-4 shadow-md shadow-purple-500/20">
                3
              </span>
              <h4 className="font-bold text-slate-900 mb-1">Share & Track</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Copy your sleek new link and share anywhere with full confidence and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white p-8 sm:p-12 text-center shadow-2xl shadow-purple-700/25">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Online Presence?
            </h2>
            <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed">
              Join thousands who rely on BitLinks for concise, impactful, and trustworthy links.
            </p>
            <div className="pt-2">
              <Link
                href="/shorten"
                className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm sm:text-base"
              >
                <span>Create Your BitLink Now</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
