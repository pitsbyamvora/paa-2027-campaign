"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { candidateBio } from "@/data/candidateBio";
import { Award, Crown, Scale, Flag, Building2, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("background");

  const iconsMap: { [key: string]: React.ReactNode } = {
    background: <Scale className="w-5 h-5 text-emerald-800" />,
    lineage: <Crown className="w-5 h-5 text-orange-600" />,
    activism: <Flag className="w-5 h-5 text-emerald-800" />,
    entrepreneurship: <Building2 className="w-5 h-5 text-orange-600" />,
    philanthropy: <HeartHandshake className="w-5 h-5 text-emerald-800" />
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] flex flex-col font-sans text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <section className="relative bg-[#041c14] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-30 mix-blend-luminosity">
          <Image
            src="/images/candidate-bg.png"
            alt="Prince Adewole Adebayo"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#041c14] via-[#041c14]/85 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest bg-orange-600/20 px-3.5 py-1 rounded-full border border-orange-500/30">
              Biography & Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              About Prince <span className="text-orange-500">Adewole Adebayo</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              International investment lawyer, political activist, media pioneer, and the Social Democratic Party (SDP) Presidential Candidate for Nigeria 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Card */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Candidate Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-900 to-emerald-950 border border-slate-800 flex items-center justify-center">
              <Image
                src="/images/candidate-hero.png"
                alt="Prince Adebayo Portrait"
                fill
                className="object-contain object-bottom p-2 drop-shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs">
                <p className="font-extrabold text-white">Prince Adewole Adebayo</p>
                <p className="text-[11px] text-orange-400">Born 8 Jan 1972 • Ondo Royal Kingdom</p>
              </div>
            </div>

            {/* Quick Stats & Quotes */}
            <div className="lg:col-span-7 space-y-5">
              <div className="bg-emerald-50 border-l-4 border-orange-500 p-4 sm:p-5 rounded-r-2xl">
                <p className="text-sm sm:text-base font-semibold italic text-emerald-950">
                  "The environment makes you a liar when you say you are poor. Africa's resources render poverty illogical, akin to starving at a buffet. It is poor leadership, not scarcity."
                </p>
                <span className="block text-xs font-bold text-orange-600 mt-2">— Prince Adewole Adebayo</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {candidateBio.keyStats.map((stat, idx) => (
                  <div key={idx} className="bg-[#f8faf9] p-3.5 rounded-xl border border-slate-200">
                    <span className="text-xl sm:text-2xl font-black text-orange-600 block">{stat.value}</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5">{stat.label}</span>
                    <span className="text-[10px] text-slate-500 block leading-tight mt-1">{stat.desc}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/join"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-orange-600/30"
                >
                  Join Movement With PAA
                </Link>
                <Link
                  href="/policies"
                  className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider"
                >
                  Read 2027 Manifesto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Sections Loop */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {candidateBio.sections.map((section, idx) => (
            <div key={section.id} className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-[#fafcfb] hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  {iconsMap[section.id] || <CheckCircle2 className="w-5 h-5 text-emerald-800" />}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">{section.title}</h3>
                  {section.subtitle && (
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">{section.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="space-y-3 pt-2 text-sm text-slate-600 leading-relaxed pl-1 sm:pl-13">
                {section.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Constitutional Chapter 2 Callout */}
          <div className="bg-gradient-to-r from-emerald-950 to-[#073625] text-white p-8 sm:p-10 rounded-3xl text-center space-y-3 shadow-xl">
            <span className="text-orange-400 font-bold uppercase text-xs tracking-widest">
              The Guiding Philosophy
            </span>
            <h4 className="text-xl sm:text-2xl font-black">
              Chapter 2 of the 1999 Constitution
            </h4>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto italic">
              "{candidateBio.constitutionalMotto}"
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
