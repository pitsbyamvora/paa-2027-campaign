import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowRight, Heart } from "lucide-react";
import { XIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#031d14] text-slate-300 pt-16 pb-12 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-950">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative h-14 w-36 bg-white/10 p-2 rounded-xl backdrop-blur-xs flex items-center">
              <Image
                src="/images/logo.png"
                alt="PAA Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Social Democratic Party (SDP). Driven by Chapter 2 of the Nigerian Constitution: The security and welfare of the people shall be the primary purpose of government.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://x.com/Pres_Adebayo" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-emerald-950 flex items-center justify-center text-slate-300 hover:text-white hover:bg-orange-600 transition-colors" title="X (Twitter)">
                <XIcon className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/princeadewoleadebayo" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-emerald-950 flex items-center justify-center text-slate-300 hover:text-white hover:bg-orange-600 transition-colors" title="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/PrinceAdewoleAdebayoOfficial" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-emerald-950 flex items-center justify-center text-slate-300 hover:text-white hover:bg-orange-600 transition-colors" title="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@KAFTANTVmedia" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-emerald-950 flex items-center justify-center text-slate-300 hover:text-white hover:bg-orange-600 transition-colors" title="YouTube">
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Prince Adebayo</Link></li>
              <li><Link href="/policies" className="hover:text-white transition-colors">2027 Policy Manifesto</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">Watch Video Gallery</Link></li>
              <li><Link href="/survey" className="hover:text-orange-400 font-bold transition-colors">Citizen Voice Survey</Link></li>
              <li><Link href="/join" className="hover:text-white transition-colors">Join The Movement</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Campaign Office</Link></li>
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              National Secretariat
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>SDP National Headquarters, Abuja, FCT, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>secretariat@sdpnigeria.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>+234 801 234 5678</span>
              </li>
            </ul>
          </div>

          {/* Quick Join Callout */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              Make Your Voice Heard
            </h4>
            <p className="text-xs text-slate-400">
              Take the national citizen survey or join the grassroots movement for 2027.
            </p>
            <div className="space-y-2">
              <Link
                href="/survey"
                className="block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-600/30"
              >
                Take Citizen Survey →
              </Link>
              <Link
                href="/join"
                className="block text-center bg-emerald-900 hover:bg-emerald-800 text-emerald-100 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Join Movement
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026-2027 Social Democratic Party (SDP). Prince Adewole Adebayo Presidential Campaign.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-slate-400">Home</Link>
            <Link href="/about" className="hover:text-slate-400">Biography</Link>
            <Link href="/policies" className="hover:text-slate-400">Manifesto</Link>
            <Link href="/survey" className="hover:text-slate-400">Survey</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
