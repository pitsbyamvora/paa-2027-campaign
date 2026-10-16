"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  TrendingUp,
  GraduationCap,
  HeartPulse,
  Scale,
  ShieldCheck,
  Building2,
  Users,
  Calendar,
  MapPin,
  ChevronRight,
  Play,
  Download,
  Quote,
  Sparkles,
  HelpCircle,
  Radio,
  Flame,
  CheckCircle2
} from "lucide-react";
import { candidateBio } from "@/data/candidateBio";
import { trendingVideos, getYouTubeEmbedUrl } from "@/data/mediaData";
import { XIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/SocialIcons";

export default function CampaignHome() {
  const [quickJoinEmail, setQuickJoinEmail] = useState("");
  const [quickJoinPhone, setQuickJoinPhone] = useState("");
  const [quickJoinName, setQuickJoinName] = useState("");
  const [joined, setJoined] = useState(false);

  const policyPillars = [
    { title: "A Stronger Economy", icon: TrendingUp, href: "/policies" },
    { title: "Quality Education", icon: GraduationCap, href: "/policies" },
    { title: "Universal Healthcare", icon: HeartPulse, href: "/policies" },
    { title: "Good Governance", icon: Scale, href: "/policies" }
  ];

  const handleQuickJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { supabase } = await import("@/lib/supabase");
      if (supabase) {
        await supabase.from("movement_members").insert({
          full_name: quickJoinName,
          email: quickJoinEmail,
          phone: quickJoinPhone,
          state: "National (Quick Register)",
          volunteer_interests: ["General Movement Member"]
        });
      }
    } catch (err) {
      console.warn("Supabase quick join error:", err);
    } finally {
      setJoined(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] text-slate-800 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* 1. HERO SECTION WITH USER UPLOADED BACKGROUND BANNER */}
      <section className="relative bg-[#041c14] text-white overflow-hidden py-12 sm:py-20 lg:py-24">
        {/* User supplied banner as ambient watermark background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-30 mix-blend-luminosity">
          <Image
            src="/images/candidate-bg.png"
            alt="Prince Adewole Adebayo"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d14] via-[#041c14]/90 to-[#06291d]/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                A Better Nigeria is Possible
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                The People’s <br />
                <span className="text-white">Choice for </span>
                <span className="text-orange-500 underline decoration-emerald-400 decoration-wavy decoration-2 underline-offset-8">
                  2027
                </span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed">
                A united, competent, and people-focused leadership for a prosperous Nigeria.
                The <strong>Social Democratic Party (SDP)</strong> is here to build a humane, secure, and industrially productive nation that works for everyone.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <Link
                  href="/join"
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-95"
                >
                  Join Movement
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/survey"
                  className="w-full sm:w-auto bg-emerald-900/90 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-200 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-orange-400" />
                  Take Citizen Survey
                </Link>
              </div>

              {/* Tagline Badges */}
              <div className="pt-4 border-t border-emerald-800/60 flex items-center gap-4 sm:gap-6 text-xs tracking-wider uppercase font-bold text-emerald-300">
                <div className="flex items-center gap-1.5">
                  <span className="text-orange-400">✓</span> Competence
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-orange-400">✓</span> Integrity
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-orange-400">✓</span> Results
                </div>
              </div>
            </div>

            {/* Right Candidate Cutout */}
            <div className="lg:col-span-5 relative flex justify-center items-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-[340px] sm:h-[460px] lg:h-[520px]">
                <Image
                  src="/images/candidate-hero.png"
                  alt={candidateBio.fullName}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                />

                <div className="absolute bottom-4 right-2 sm:right-6 bg-black/80 backdrop-blur-md border border-orange-500/50 px-4 py-2.5 rounded-2xl shadow-2xl">
                  <p className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
                    SDP Presidential Candidate
                  </p>
                  <p className="text-sm font-black text-white">{candidateBio.fullName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS BAR */}
      <section className="bg-white border-b border-slate-100 py-5 relative z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {policyPillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 p-2.5 sm:p-3 rounded-2xl hover:bg-emerald-50/70 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium hidden sm:block">Explore Pillar →</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER SECTION */}
      <section className="py-16 sm:py-20 bg-[#fafcfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
                Meet The Candidate
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Leadership with <span className="text-emerald-800">Vision, Courage & Purpose</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Born on <strong>8 January 1972</strong> into the 500-year royal lineage of the Ondo Kingdom and ancient Oyo monarchy, <strong>{candidateBio.fullName}</strong> is an international jurist, media founder of KAFTAN TV, former UN/ECOWAS Commissioner, and lifelong social democrat.
              </p>

              {/* Quote Block */}
              <div className="bg-emerald-950/5 border-l-4 border-orange-500 p-4 rounded-r-2xl">
                <Quote className="w-5 h-5 text-orange-500 mb-1" />
                <p className="text-xs sm:text-sm italic font-semibold text-slate-800">
                  "The environment makes you a liar when you say you are poor. Africa's resources render poverty illogical, akin to starving at a buffet. It is poor leadership, not scarcity."
                </p>
                <span className="block text-xs text-emerald-900 font-bold mt-1.5">— Prince Adewole Adebayo</span>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2"
                >
                  Read Full Biography & Heritage
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/policies"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider"
                >
                  Explore 2027 Manifesto
                </Link>
              </div>
            </div>

            {/* Right Card: Rebuilding Nigeria */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/80 group">
                <div className="relative h-[340px] sm:h-[400px] w-full">
                  <Image
                    src="/images/building-nigeria.jpg"
                    alt="Prince Adewole Adebayo - Rebuilding Nigeria Brick by Brick"
                    fill
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="bg-orange-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                      The National Reconstruction
                    </span>
                    <h3 className="text-base sm:text-lg font-black mt-1 text-white">
                      Rebuilding Nigeria Brick by Brick
                    </h3>
                    <p className="text-[11px] text-slate-300">
                      Laying honest foundations for unity, industry, and shared prosperity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SURVEY CALLOUT SECTION (NEW) */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-orange-200 text-xs font-bold uppercase tracking-widest bg-black/20 px-3.5 py-1 rounded-full">
                Your Voice Counts
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Your Voice is Important — Make It Heard!
              </h2>
              <p className="text-orange-100 text-xs sm:text-sm leading-relaxed">
                What matters most to your household? Security, lower food costs, reliable power, or jobs for young people? Take our 2-minute citizen survey and shape the 2027 campaign priorities.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto text-center">
              <Link
                href="/survey"
                className="w-full sm:w-auto inline-block bg-white hover:bg-slate-100 text-orange-600 font-black py-4 px-8 rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all active:scale-95"
              >
                Take Citizen Survey Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED MEDIA & TRENDING VIDEO PREVIEW */}
      <section className="py-16 bg-[#041c14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                Featured Broadcast
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Watch Prince Adebayo in Action
              </h3>
            </div>
            <Link
              href="/media"
              className="mt-3 sm:mt-0 text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
            >
              View All 4 Broadcasts in Video Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 rounded-3xl p-5 sm:p-8 border border-emerald-900/60 shadow-2xl">
            <div className="lg:col-span-7 aspect-video w-full rounded-2xl overflow-hidden bg-slate-950">
              <iframe
                src={getYouTubeEmbedUrl(trendingVideos[0].youtubeId)}
                title={trendingVideos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="bg-orange-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                {trendingVideos[0].category}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {trendingVideos[0].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {trendingVideos[0].description}
              </p>
              <div className="pt-2">
                <Link
                  href="/media"
                  className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-2.5 px-5 rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Explore Full Video Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. JOIN MOVEMENT FAST CAPTURE SECTION (Replaces Get Involved) */}
      <section id="join-movement" className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8faf9] border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left pitch */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-full">
                Grassroots Organizing
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                Join the Movement for a Better Nigeria
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The 2027 election is a turning point for Nigeria. Become a registered member of the Social Democratic Party movement in your polling ward today.
              </p>
              <div className="space-y-2 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Receive direct campaign strategy dispatches from Prince Adebayo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Connect with local ward coordinators and polling unit teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Attend regional rallies, town halls, and policy listening sessions</span>
                </div>
              </div>
            </div>

            {/* Right form (Name, Email, Phone) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              {joined ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Thank You, {quickJoinName}!</h4>
                  <p className="text-xs text-slate-600">
                    You have successfully joined the Prince Adewole Adebayo 2027 Movement.
                  </p>
                  <Link
                    href="/survey"
                    className="inline-block bg-orange-600 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-xl mt-2"
                  >
                    Take Citizen Survey Next →
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleQuickJoin} className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-base">Quick Registration</h4>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={quickJoinName}
                      onChange={(e) => setQuickJoinName(e.target.value)}
                      placeholder="e.g. Prince Adeolu"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={quickJoinEmail}
                      onChange={(e) => setQuickJoinEmail(e.target.value)}
                      placeholder="e.g. name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number (WhatsApp)</label>
                    <input
                      type="tel"
                      required
                      value={quickJoinPhone}
                      onChange={(e) => setQuickJoinPhone(e.target.value)}
                      placeholder="e.g. +234 800 000 0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-orange-600/30 transition-all active:scale-95"
                  >
                    Join Movement Now
                  </button>
                  <p className="text-[10px] text-center text-slate-400">
                    Want to specify your volunteering role or local ward? <Link href="/join" className="underline font-bold text-emerald-800">Use Full Registration Form</Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
