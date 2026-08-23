# BitLinks - URL Shortener

BitLinks is a modern **URL Shortener application** built with **Next.js, React, TailwindCSS, and MongoDB**.  
It allows users to convert long, complex URLs into short, easy-to-share links while also supporting custom short codes, analytics, and fast redirection.

---

## 🚀 Project Overview

Long URLs are often messy, hard to share, and unsuitable for platforms with character limits.  
BitLinks solves this problem by providing a clean interface where users can:

- Enter a long URL (e.g., `https://www.google.com/search?q=nextjs+url+shortener`)
- Choose a preferred short code (e.g., `google`)
- Generate a shortened link (e.g., `https://bitlinks.vercel.app/google`)
- Redirect seamlessly to the original destination

This project demonstrates **full-stack development** with Next.js App Router, MongoDB integration, and TailwindCSS styling.

---

## ✨ Features

- **Shorten URLs** – Convert long links into short, shareable ones.
- **Custom Short Codes** – Users can define their own short text (e.g., `/my-link`).
- **MongoDB Storage** – All links are stored in a database for persistence.
- **Duplicate Check** – Prevents reusing the same short code.
- **Redirection** – Visiting `/shorturl` automatically redirects to the original URL.
- **Responsive UI** – Built with TailwindCSS for a clean, mobile-friendly design.
- **Error Handling** – Clear messages for missing fields, duplicates, or server errors.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (recommended)

---

## 📂 Project Structure

