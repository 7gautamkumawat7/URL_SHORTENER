"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!url || !shorturl) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await response.json();

      if (result.success) {
        const link =
          result.shortUrl ||
          (typeof window !== "undefined"
            ? `${window.location.origin}/${shorturl}`
            : `/${shorturl}`);
        setGenerated(link);
        toast.success("Short link created successfully! 🎉");
        setUrl("");
        setShorturl("");
      } else {
        toast.error(result.message || "Failed to generate short link.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyLink = () => {
    if (!generated) return;
    navigator.clipboard.writeText(generated);
    setCopied(true);
    toast.info("Link copied to clipboard! 📋");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-purple-50/60 via-white to-purple-50/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-purple-300/20 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md border border-purple-100 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-purple-500/10 flex flex-col gap-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <span>✨ Link Generator</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Create Your <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">BitLink</span>
          </h1>
          <p className="text-sm text-slate-600">
            Paste your destination URL and choose a clean custom alias.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Destination URL
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-purple-400">
                🔗
              </span>
              <input
                type="url"
                value={url}
                className="w-full pl-9 pr-4 py-3 bg-purple-50/50 hover:bg-purple-50/80 focus:bg-white text-slate-800 placeholder-slate-400 text-sm rounded-xl border border-purple-200/80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="https://your-long-url.com/anything..."
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Custom Alias (Short code)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-purple-400 font-bold text-sm">
                /
              </span>
              <input
                type="text"
                value={shorturl}
                className="w-full pl-8 pr-4 py-3 bg-purple-50/50 hover:bg-purple-50/80 focus:bg-white text-slate-800 placeholder-slate-400 text-sm rounded-xl border border-purple-200/80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="e.g. launch2026, myportfolio"
                onChange={(e) => setShorturl(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={generate}
            disabled={!url || !shorturl || isLoading}
            className="w-full mt-2 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 text-sm"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <span>Generate Smart Link</span>
                <span>⚡</span>
              </>
            )}
          </button>

          <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
        </div>

        {generated && (
          <div className="pt-4 border-t border-purple-100 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Your Shortened Link:
            </span>
            <div className="flex items-center justify-between gap-2 p-3 bg-purple-50/80 border border-purple-200 rounded-xl">
              <Link
                target="_blank"
                href={generated}
                className="text-sm font-bold text-purple-600 hover:text-purple-800 hover:underline truncate"
              >
                {generated}
              </Link>
              <button
                type="button"
                onClick={copyLink}
                className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg shadow-sm active:scale-95 transition-all shrink-0"
              >
                {copied ? "Copied! ✓" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;