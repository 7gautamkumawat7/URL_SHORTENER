import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-500 flex justify-between px-6 items-center text-white">
      {/* Logo */}
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shorten">Shortener</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>

        {/* Extra Links Group */}
        <li>
          <ul className="flex gap-4">
            <li>
              <Link href="/shorten">Try Now</Link>
            </li>
            <li>
              <Link href="/github">GitHub</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
