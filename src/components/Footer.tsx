'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-neutral-light text-neutral-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-sans font-bold text-primary mb-4">GACDA</h3>
            <p className="font-body">
              Building a stronger community together through collaboration, innovation, and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-sans font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#news" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="#benefits" className="hover:text-primary transition-colors">Benefits</Link></li>
              <li><Link href="#guidelines" className="hover:text-primary transition-colors">Guidelines</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-sans font-bold text-primary mb-4">Contact Us</h3>
            <ul className="space-y-2 font-body">
              <li className="flex items-center"><MapPin size={16} className="text-primary mr-2" /> Gbemisola Adenubi, Lagos</li>
              <li className="flex items-center"><Mail size={16} className="text-primary mr-2" /> info@gacda.org</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-sans font-bold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary hover:text-secondary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-primary hover:text-secondary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-primary hover:text-secondary transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="text-primary hover:text-secondary transition-colors"><Linkedin size={20} /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral pt-4 text-center font-body text-sm">
          <p>&copy; {new Date().getFullYear()} Gbemisola Adenubi CDA. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
