import React from 'react'

const page=() => {
  return (
    <div className="mx-auto max-w-3xl my-16 p-8 bg-purple-100 rounded-2xl shadow-lg">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-purple-700 text-center mb-6">
        Contact Me
      </h1>

      {/* Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-center">
          I’d love to connect with you! Whether it’s about coding, projects, or
          collaborations, feel free to reach out through any of the platforms
          below.
        </p>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-purple-600">📧 Email:</span>
            <a
              href="mailto:7gautamkumawat7@gmaial.com"
              className="text-purple-700 underline"
              
            >
              7gautamkumawat7@gmaial.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-purple-600">💻 GitHub:</span>
            <a
              href="https://github.com/7gautamkumawat7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 underline"
            >
              github.com/7gautamkumawat7
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-purple-600">📸 Instagram:</span>
            <a
              href="https://instagram.com/go_tam5333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 underline"
            >
              @go_tam5333
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Built with ❤️ by Gautam
        </p>
      </div>
    </div>
  )
}

export default page
