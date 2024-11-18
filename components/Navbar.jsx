'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">MazeArtDesign</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute inset-x-0 top-16 z-40 flex flex-col items-center bg-white md:static md:flex-row md:space-y-0 md:space-x-8 md:bg-transparent w-full md:w-auto ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'
          } transition-all duration-300 ease-in-out`}
        >
          <Link href="/" className="py-2 font-medium text-gray-800 transition-colors hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Beranda
          </Link>
          <Link href="/portfolio" className="py-2 font-medium text-gray-800 transition-colors hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Portofolio
          </Link>
          <Link href="/aboutus" className="py-2 font-medium text-gray-800 transition-colors hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Tentang Kami
          </Link>
          <Link href="/contactus" className="py-2 font-medium text-gray-800 transition-colors hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}
