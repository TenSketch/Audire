'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800">
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Audire Technologies</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Experience high-end AV, immersive home theater, and seamless automation — all integrated under one vision of luxury and precision.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gray-500" />
              +91 97877 08777
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gray-500" />
              info@audire.in
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gray-500 mt-1" />
              <span>Coimbatore HQ & Chennai Experience Center</span>
            </li>
          </ul>
        </div>

        {/* Quick Links (optional) */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#about" className="hover:text-black transition">About Us</a></li>
            <li><a href="#brands" className="hover:text-black transition">High-End AV</a></li>
            <li><a href="#home-theater" className="hover:text-black transition">Home Theater</a></li>
            <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} Audire Technologies. All rights reserved.
      </div>
    </footer>
  );
}
