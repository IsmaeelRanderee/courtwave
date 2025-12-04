"use client";

import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#0A66FF] text-white flex items-center justify-center text-xs font-bold shadow-md">
                CW
              </div>
              <span className="text-lg font-semibold tracking-tight text-neutral-900">
                CourtWave
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              Your destination for premium padel rackets engineered for power, precision, and performance.
            </p>
          </div>

          
          <div>
            <h3 className="font-semibold text-neutral-900 mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><Link href="/" className="hover:text-[#0A66FF]">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#0A66FF]">Products</Link></li>
              <li><Link href="/checkout" className="hover:text-[#0A66FF]">Checkout</Link></li>
              <li><Link href="/gallery" className="hover:text-[#0A66FF]">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#0A66FF]">Contact</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-neutral-900 mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><Link href="/about" className="hover:text-[#0A66FF]">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-[#0A66FF]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0A66FF]">Privacy Policy</Link></li>
              <li><Link href="/returns" className="hover:text-[#0A66FF]">Returns & Refunds</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-neutral-900 mb-3">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-[#0A66FF]" />
                randeree.business@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-[#0A66FF]" />
                +27 82 398 1954
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-[#0A66FF]" />
                Johannesburg, South Africa
              </li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-neutral-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} CourtWave. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://www.instagram.com/ismaeel_randeree_/" className="hover:text-[#0A66FF]">Instagram</Link>
            <Link href="https://www.linkedin.com/in/ismaeel-randeree-829b97363/" className="hover:text-[#0A66FF]">LinkedIn</Link>
            <Link href="https://ismaeelranderee.carrd.co/" className="hover:text-[#0A66FF]">Website</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
