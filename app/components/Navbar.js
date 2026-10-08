"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white shadow-md shadow-purple-950/15 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-200 active:scale-95"
          >
            <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:bg-white/25 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
              Bit<span className="text-purple-200">Links</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3.5 py-1.5 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 transition-all"
            >
              About
            </Link>
            <Link
              href="/shorten"
              className="px-3.5 py-1.5 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 transition-all"
            >
              Shortener
            </Link>
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/7gautamkumawat7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold tracking-wide transition-all active:scale-95 text-white"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>

            <Link
              href="/shorten"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-purple-700 hover:bg-purple-50 font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Try Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
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
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/50 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 font-medium"
            >
              About
            </Link>
            <Link
              href="/shorten"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 font-medium"
            >
              Shortener
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-purple-100 hover:text-white hover:bg-white/10 font-medium"
            >
              Contact Us
            </Link>

            <div className="pt-3 border-t border-purple-500/50 flex flex-col gap-2">
              <Link
                href="/shorten"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-white text-purple-700 font-bold text-sm shadow-sm"
              >
                Try Now Free
              </Link>
              <a
                href="https://github.com/7gautamkumawat7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
