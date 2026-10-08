import React from "react";

const ContactPage = () => {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/60 via-white to-purple-50/40">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <span>📫 Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              the Creator
            </span>
          </h1>
          <p className="text-base text-slate-600 max-w-lg mx-auto">
            I’d love to connect with you! Whether it’s about coding, collaborations, or feedback on BitLinks.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-xl shadow-purple-500/5 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Email Card */}
            <a
              href="mailto:7gautamkumawat7@gmail.com"
              className="p-5 rounded-2xl bg-purple-50/60 hover:bg-purple-100/60 border border-purple-100 hover:border-purple-200 transition-all duration-200 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
                📧
              </div>
              <h3 className="font-bold text-sm text-slate-800">Email</h3>
              <p className="text-xs text-purple-600 break-all mt-1 font-medium">
                7gautamkumawat7@gmail.com
              </p>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/7gautamkumawat7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-purple-50/60 hover:bg-purple-100/60 border border-purple-100 hover:border-purple-200 transition-all duration-200 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
                💻
              </div>
              <h3 className="font-bold text-sm text-slate-800">GitHub</h3>
              <p className="text-xs text-purple-600 mt-1 font-medium">
                @7gautamkumawat7
              </p>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/go_tam5333"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-purple-50/60 hover:bg-purple-100/60 border border-purple-100 hover:border-purple-200 transition-all duration-200 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
                📸
              </div>
              <h3 className="font-bold text-sm text-slate-800">Instagram</h3>
              <p className="text-xs text-purple-600 mt-1 font-medium">
                @go_tam5333
              </p>
            </a>
          </div>

          <div className="pt-6 border-t border-purple-100 text-center">
            <p className="text-xs text-slate-500">
              Built with ❤️ by Gautam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
