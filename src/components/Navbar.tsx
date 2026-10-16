"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Policies", href: "/policies" },
    { label: "Media & Videos", href: "/media" },
    { label: "Citizen Survey", href: "/survey", highlight: true },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand / Logo - Optimized for mobile scaling */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative h-8 w-16 sm:h-12 sm:w-24 flex items-center">
            <Image
              src="/images/logo.png"
              alt="PAA Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col border-l border-slate-200 pl-2">
            <span className="font-extrabold text-[9px] sm:text-xs tracking-tight text-emerald-950 uppercase leading-tight">
              Social Democratic Party
            </span>
            <span className="text-[7.5px] sm:text-[10px] text-orange-600 font-bold tracking-wider">
              Progress • People • Prosperity
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors py-1 ${
                isActive(item.href)
                  ? "text-emerald-800 font-bold border-b-2 border-orange-500"
                  : item.highlight
                  ? "text-orange-600 hover:text-orange-700 bg-orange-50 px-3 py-1 rounded-full text-xs font-bold uppercase"
                  : "hover:text-emerald-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/survey"
            className="text-xs font-bold text-emerald-900 hover:text-orange-600 transition-colors hidden xl:inline-block"
          >
            Voice Your Opinion →
          </Link>
          <Link
            href="/join"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md shadow-orange-600/25 active:scale-95 inline-flex items-center gap-1.5"
          >
            Join Movement
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button Only (Cleaner Header) */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-600" />
            ) : (
              <Menu className="w-6 h-6 text-emerald-950" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          
          {/* Mobile Navigation Links */}
          <div className="space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 px-3.5 rounded-xl font-bold text-sm transition-colors ${
                  isActive(item.href)
                    ? "bg-emerald-50 text-emerald-900 border-l-4 border-orange-500"
                    : item.highlight
                    ? "text-orange-600 bg-orange-50/70"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA Action Buttons */}
          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-extrabold uppercase tracking-wider text-xs shadow-md shadow-orange-600/25"
            >
              Join Movement
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/survey"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-emerald-900 hover:bg-emerald-950 text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-xs"
            >
              Take Citizen Survey →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}