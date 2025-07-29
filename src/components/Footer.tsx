'use client'

import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A4F0A] text-[#F3F4F6] py-12 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid gap-10 md:grid-cols-3">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-base leading-relaxed text-[#D1D5DB] font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 text-[#9CA3AF]" />
              Gbemisola Adenubi Street, Lagos
            </li>
            <li className="flex items-start gap-3">
              <PhoneCall className="w-5 h-5 mt-0.5 text-[#9CA3AF]" />
              +234 123 456 7890
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5 text-[#9CA3AF]" />
              info@gacda.org
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-base text-[#D1D5DB] font-medium">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/news" className="hover:text-white transition">News</Link></li>
            <li><Link href="/guidelines" className="hover:text-white transition">Guidelines</Link></li>
            <li><Link href="/benefits" className="hover:text-white transition">Benefits</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center space-x-5">
            <Link href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5 opacity-80 hover:opacity-100" /></Link>
            <Link href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5 opacity-80 hover:opacity-100" /></Link>
            <Link href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5 opacity-80 hover:opacity-100" /></Link>
            <Link href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 opacity-80 hover:opacity-100" /></Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-300 mt-10 font-medium">
        © 2025 Gbemisola Adenubi Community Development. All Rights Reserved.
      </div>
    </footer>
  )
}
