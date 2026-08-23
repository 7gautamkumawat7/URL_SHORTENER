import React from 'react'

const page = () => {
  return (
    <div className="mx-auto max-w-3xl my-16 p-8 bg-purple-100 rounded-2xl shadow-lg">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-purple-700 text-center mb-6">
        About BitLinks
      </h1>

      {/* Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold text-purple-600">BitLinks</span> is a
          modern URL shortener built with Next.js, MongoDB, and TailwindCSS. It
          helps you transform long, messy links into short, clean, and
          shareable URLs.
        </p>

        <p>
          Our mission is to make sharing links simple and effective. Whether
          you’re posting on social media, sending an email, or just want a
          quick way to remember a link, BitLinks gives you the tools to shorten
          and customize your URLs.
        </p>

        <p>
          This project demonstrates full-stack development with a focus on
          performance, scalability, and user experience. It’s designed to be
          lightweight, responsive, and easy to use.
        </p>

        {/* Features Section */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">
            ✨ Features
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Shorten long URLs instantly</li>
            <li>Custom short codes for personalized links</li>
            <li>MongoDB persistence for storing links</li>
            <li>Duplicate check to avoid conflicts</li>
            <li>Responsive design with TailwindCSS</li>
          </ul>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Built with ❤️ by Gautam using Next.js & MongoDB
        </p>
      </div>
    </div>
  )
}

export default page
