'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <Link href="/">MazeArtDesign</Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } absolute inset-0 bg-white md:bg-transparent flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 md:static md:translate-x-0 transition-transform duration-300 ease-in-out md:w-auto z-50`}
        >
          <Link href="/" className="text-gray-800 transition-colors hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Beranda
          </Link>
          <Link href="/portfolio" className="text-gray-800 transition-colors hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Portofolio
          </Link>
          <Link href="/aboutus" className="text-gray-800 transition-colors hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Tentang Kami
          </Link>
          <Link href="/contactus" className="text-gray-800 transition-colors hover:text-blue-500" onClick={() => setIsOpen(false)}>
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
}
