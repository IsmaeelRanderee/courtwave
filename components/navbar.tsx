"use client";

import Link from "next/link";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="h-7 w-7 rounded-full bg-[#0A66FF] text-white flex items-center justify-center text-xs font-bold shadow-md group-hover:scale-105 transition-transform">
            CW
          </div>
          <span className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:text-[#0A66FF] transition-colors">
            CourtWave
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          <Link
            href="/"
            className="relative hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0A66FF] after:transition-all"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="relative hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0A66FF] after:transition-all"
          >
            Products
          </Link>
          <Link
            href="/checkout"
            className="relative hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0A66FF] after:transition-all"
          >
            Checkout
          </Link>
          <Link
            href="/about"
            className="relative hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0A66FF] after:transition-all"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="relative hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0A66FF] after:transition-all"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="relative hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0A66FF] after:transition-all"
          >
            Contact
          </Link>
        </div>

        
        <div className="flex items-center gap-3">
          <Link
            href="/checkout"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm hover:border-[#0A66FF] hover:text-[#0A66FF] transition-colors"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white shadow-md">
                {cartCount}
              </span>
            )}
          </Link>

          <Button
            variant="ghost"
            className="md:hidden h-9 w-9 p-0 rounded-full border border-neutral-200"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm font-medium text-neutral-800">
            <li>
              <Link
                href="/"
                className="block rounded-lg px-2 py-2 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block rounded-lg px-2 py-2 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                className="block rounded-lg px-2 py-2 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Checkout
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded-lg px-2 py-2 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="block rounded-lg px-2 py-2 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded-lg px-2 py-2 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
