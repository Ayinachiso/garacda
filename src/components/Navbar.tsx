'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/meet-our-team', label: 'Meet Our Team' },
    { href: '/projects', label: 'Projects' },
    { href: '/media', label: 'Media' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/help', label: 'Help' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white z-40 shadow-md transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="flex items-center justify-between w-full px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/garaLogo.png"
            alt="GACDA Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-[#0A4F0A] text-2xl font-semibold">GACDA</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-10 mx-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[#0A4F0A] text-lg font-medium no-underline px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#E6FAEB] ${
                    isActive ? 'bg-[#E6FAEB] font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden lg:block">
          <Link
            href="/login"
            className="bg-[#4CAF50] text-white font-medium px-6 py-2 rounded-full transition duration-300 hover:bg-[#3ea043] hover:-translate-y-0.5"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#0A4F0A] p-2 hover:bg-[#E6FAEB] rounded-md transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl rounded-b-xl z-30 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href} className="border-b border-gray-100">
              <Link
                href={link.href}
                className={`block text-[#0A4F0A] text-base font-medium px-6 py-4 transition hover:bg-[#F0FDF4] ${
                  isActive ? 'bg-[#E6FAEB] font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li className="border-t border-gray-100">
          <Link
            href="/login"
            className="block text-center text-white bg-[#4CAF50] font-semibold px-6 py-4 rounded-b-xl hover:bg-[#3ea043] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
