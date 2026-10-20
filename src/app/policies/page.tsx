"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { manifestoMeta, manifestoParts } from "@/data/manifestoData";
import {
  TrendingUp,
  ShieldCheck,
  Globe2,
  HeartPulse,
  Scale,
  Download,
  ArrowRight,
  CheckCircle2,
  FileText,
  ChevronDown,
  ChevronUp,
  Cpu
} from "lucide-react";

export default function PoliciesPage() {
  const [expandedPart, setExpandedPart] = useState<string>("PART II");

  const iconsMap: { [key: string]: React.ReactNode } = {
    "PART I": <Scale className="w-5 h-5 text-emerald-800" />,
    "PART II": <TrendingUp className="w-5 h-5 text-orange-600" />,
    "PART III": <ShieldCheck className="w-5 h-5 text-emerald-800" />,
    "PART IV": <Globe2 className="w-5 h-5 text-orange-600" />,
    "PART V": <HeartPulse className="w-5 h-5 text-emerald-800" />,
    "PART VI – X": <Cpu className="w-5 h-5 text-orange-600" />
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Header with Blueprint Title */}
      <section className="relative bg-[#041c14] text-white py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-25 mix-blend-luminosity">
          <Image
            src="/images/candidate-bg.webp"
            alt="Prince Adewole Adebayo"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#041c14] via-[#041c14]/85 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Blueprint Info */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>Official 2027 – 2031 Policy Blueprint</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {manifestoMeta.title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-lg font-medium leading-relaxed max-w-2xl">
                {manifestoMeta.subtitle}
              </p>

              {/* Presidential Ticket Badge */}
              <div className="p-4 bg-emerald-950/90 border border-emerald-500/30 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div>
                  <span className="text-orange-400 font-bold block">Presidential Candidate</span>
                  <span className="text-white font-extrabold text-sm">{manifestoMeta.ticket.president}</span>
                </div>
                <div className="sm:border-l sm:border-emerald-800/80 sm:pl-4 pt-2 sm:pt-0 border-t border-emerald-900/50">
                  <span className="text-orange-400 font-bold block">Vice Presidential Candidate</span>
                  <span className="text-white font-extrabold text-sm">{manifestoMeta.ticket.vicePresident}</span>
                </div>
                <div className="sm:border-l sm:border-emerald-800/80 sm:pl-4 pt-2 sm:pt-0 border-t border-emerald-900/50">
                  <span className="text-emerald-400 font-bold block">Ticket Slogan</span>
                  <span className="text-white font-black text-sm">{manifestoMeta.ticket.slogan}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/survey"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 text-center"
                >
                  Prioritize Your Community's Needs
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/join"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider border border-white/20 text-center"
                >
                  Join the Movement
                </Link>
              </div>
            </div>

            {/* Right Pillars Triad Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#073323] to-[#041c14] border border-emerald-700/60 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                The Constitutional Anchor
              </span>
              <div className="text-xl sm:text-2xl font-black text-orange-400 tracking-wider">
                {manifestoMeta.triadMotto}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{manifestoMeta.coreCovenant}"
              </p>
              <div className="pt-3 border-t border-emerald-800/60 text-left text-xs text-slate-400 space-y-1.5">
                <p className="truncate"><strong>Direct Inquiries:</strong> {manifestoMeta.presidentialContacts.email}</p>
                <p><strong>WhatsApp:</strong> {manifestoMeta.presidentialContacts.whatsapp}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Year Implementation Roadmap Bar */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Four-Year Delivery Architecture</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">From Crisis to Measurable Outcomes (2027–2031)</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {manifestoMeta.fourYearDeliveryPhases.map((phase, idx) => (
              <div key={idx} className="bg-[#f8faf9] p-5 rounded-2xl border border-slate-200 hover:border-emerald-700 transition-all space-y-2">
                <span className="text-[11px] font-black text-orange-600 uppercase tracking-wider block">{phase.phase}</span>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">{phase.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Reconstruction Feature Banner with Full Image Display */}
      <section className="py-10 bg-[#fafcfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950 via-[#073323] to-[#041c14] rounded-3xl overflow-hidden border border-emerald-800/80 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4 text-white">
              <span className="bg-orange-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest inline-block">
                National Reconstruction Agenda
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                "Rebuilding Nigeria Brick by Brick"
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                National development is not an abstract slogan — it requires hands-on dedication, moral integrity, and practical reconstruction. Prince Adewole Adebayo's agenda repairs fractured public trust, restores security, and erects durable foundations for national enterprise.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/survey"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-md shadow-orange-600/30 text-center"
                >
                  Prioritize Your Community's Needs →
                </Link>
                <Link
                  href="/join"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider border border-white/25 text-center"
                >
                  Join the Builders
                </Link>
              </div>
            </div>

            {/* Adjusted image container to show full picture without cropping */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full bg-[#073323] p-4 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[260px]">
                <Image
                  src="/images/building-nigeria.jpg"
                  alt="Prince Adebayo Building Nigeria"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Manifesto Parts Explorer - Bento Grid 2x2x1 Placement */}
      <section className="py-12 bg-white flex-1 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Complete Document Breakdown</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Explore the 10 Policy Parts</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Click on any section to examine the detailed programmes, institutional reforms, and 2031 scorecard deliverables.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {manifestoParts.map((part, index) => {
              const isExpanded = expandedPart === part.partNumber;
              const isWide = index === 0 || index === 3 || index === 6;

              return (
                <div
                  key={part.partNumber}
                  className={`border rounded-3xl transition-all duration-200 overflow-hidden bg-white ${
                    isWide ? "lg:col-span-2" : "lg:col-span-1"
                  } ${
                    isExpanded ? "border-emerald-700 bg-[#f9fbf9] shadow-md md:col-span-2 lg:col-span-3" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Header / Click to toggle */}
                  <div
                    onClick={() => setExpandedPart(isExpanded ? "" : part.partNumber)}
                    className="p-5 sm:p-6 flex items-center justify-between cursor-pointer gap-3"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                        {iconsMap[part.partNumber] || <FileText className="w-5 h-5 text-emerald-800" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-orange-600 uppercase tracking-wider">{part.partNumber}</span>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs font-medium text-slate-500 truncate">{part.pageRange}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">{part.partTitle}</h3>
                        <p className="text-xs font-semibold text-emerald-800 mt-0.5">{part.theme}</p>
                      </div>
                    </div>

                    <div className="shrink-0 p-2 text-slate-400 hover:text-slate-700">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-orange-600" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-slate-100 space-y-5 animate-in fade-in duration-200">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 border-b border-slate-100 pb-4">
                        {part.executiveSummary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {part.chapters.map((chap, cIdx) => (
                          <div key={cIdx} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-extrabold text-orange-600">{chap.sectionNumber}</span>
                            </div>
                            <h4 className="font-bold text-sm text-slate-900">{chap.sectionTitle}</h4>
                            <div className="space-y-1.5 pt-1">
                              {chap.keyDeliverables.map((del, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                  <span>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex justify-end">
                        <Link
                          href="/survey"
                          className="text-xs font-bold text-emerald-800 hover:text-orange-600 inline-flex items-center gap-1 text-right"
                        >
                          Have thoughts on this section? Tell us in the Survey <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Download Full Manifesto Document Card */}
          <div className="mt-8 bg-[#031d14] rounded-3xl p-6 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-center md:text-left">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-3xl font-black text-white">
                Download the Complete 138-Page Manifesto
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Get the complete unedited blueprint authored by Prince (Dr.) Adewole Adebayo, Esq. with full four-year sectoral budgets and constitutional legal drafts.
              </p>
            </div>
            <button
              onClick={() => alert("Downloading the complete 138-page Manifesto: 'FAREWELL TO POVERTY AND INSECURITY'...")}
              className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 px-6 sm:px-8 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 whitespace-nowrap inline-flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Download className="w-4 h-4 shrink-0" />
              Download Full Blueprint (PDF)
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}