import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-950 text-purple-100/90 border-t border-purple-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600/60 border border-purple-400/30 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Bit<span className="text-purple-400">Links</span>
              </span>
            </div>
            <p className="text-sm text-purple-200/70 max-w-sm leading-relaxed">
              Transform long, complex URLs into clean, memorable, and high-converting links. Fast, secure, and modern link management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-purple-200/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shorten" className="hover:text-white transition-colors">
                  URL Shortener
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Developer
            </h4>
            <ul className="space-y-2 text-sm text-purple-200/80">
              <li>
                <a
                  href="https://github.com/7gautamkumawat7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/go_tam5333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Support & Queries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/60">
          <p>© {new Date().getFullYear()} BitLinks. Crafted with care by Gautam.</p>
          <p className="flex items-center gap-3">
            <span>Powered by Next.js & MongoDB</span>
            <span>•</span>
            <span className="text-purple-400 font-medium">100% Free to Use</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
