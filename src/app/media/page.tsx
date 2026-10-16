"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trendingVideos, VideoItem, getYouTubeEmbedUrl } from "@/data/mediaData";
import { Play, Radio, Clock, Eye, ArrowRight, Tv, Flame, Video } from "lucide-react";
import { YouTubeIcon, XIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(trendingVideos[0]);
  const playerRef = useRef<HTMLDivElement>(null);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    // Smooth scroll back up to the video player on mobile so user doesn't have to scroll manually
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] flex flex-col font-sans text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <section className="relative bg-[#041c14] text-white py-10 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-25 mix-blend-luminosity">
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
          <div className="max-w-3xl space-y-2 sm:space-y-4">
            <span className="text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-orange-600/20 px-3 py-1 rounded-full border border-orange-500/30 inline-flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              Campaign Broadcasts & Live Media
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Watch Prince Adebayo <span className="text-orange-500">Live & Unfiltered</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Watch key interviews, policy analyses, and town hall sessions from Channels TV, Arise News, and KAFTAN TV.
            </p>
          </div>
        </div>
      </section>

      {/* Main Video Hub */}
      <section className="py-8 sm:py-12 bg-[#06241a] text-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Active Video Screen (Col 8 on Desktop, Top on Mobile) */}
            <div ref={playerRef} className="lg:col-span-8 bg-black/70 rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-800/80 shadow-2xl scroll-mt-20">
              <div className="relative aspect-video w-full bg-slate-950">
                <iframe
                  src={getYouTubeEmbedUrl(activeVideo.youtubeId)}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="p-4 sm:p-7 space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-950 pb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="bg-orange-600 text-white text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                      {activeVideo.category}
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1 font-semibold">
                      <Radio className="w-3.5 h-3.5 text-orange-400" />
                      {activeVideo.network}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {activeVideo.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> {activeVideo.views}
                    </span>
                  </div>
                </div>

                <h2 className="text-base sm:text-2xl font-black text-white leading-snug">
                  {activeVideo.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeVideo.description}
                </p>

                <div className="pt-1 flex items-center justify-between">
                  <a
                    href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
                  >
                    Watch on YouTube <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="lg:hidden text-[11px] text-emerald-300 font-medium">
                    Tap any video below to switch
                  </span>
                </div>
              </div>
            </div>

            {/* Playlist: 2x2 Grid on Mobile, Vertical Sidebar on Desktop */}
            <div className="lg:col-span-4 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-orange-400" />
                  <span>Other Broadcasts</span>
                </h3>
                <span className="text-[11px] text-slate-400">({trendingVideos.length} Episodes)</span>
              </div>

              {/* 2x2 grid on mobile (<1024px), vertical column on desktop (>=1024px) */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
                {trendingVideos.map((video) => {
                  const isSelected = activeVideo.id === video.id;
                  return (
                    <div
                      key={video.id}
                      onClick={() => handleSelectVideo(video)}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-emerald-900/90 border-orange-500 shadow-lg ring-2 ring-orange-500/40"
                          : "bg-emerald-950/40 border-emerald-800/40 hover:bg-emerald-900/40 hover:border-emerald-700"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="font-extrabold text-orange-400 uppercase tracking-wider truncate mr-1">
                            {video.trendingTopic}
                          </span>
                          <span className="text-slate-400 shrink-0 hidden sm:inline">{video.duration}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                          {video.title}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[9px] sm:text-[10px] text-slate-400">
                        <span className="truncate mr-1">{video.network}</span>
                        <span className="text-orange-300 font-semibold shrink-0">
                          {isSelected ? "▶ Now Playing" : "Play"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Official Channel Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-orange-600/20 to-emerald-950/50 border border-orange-500/30 text-xs text-slate-300 space-y-1.5 mt-2">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Tv className="w-4 h-4 text-orange-400" />
                  Prince Adewole Adebayo Official Channel
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Subscribe to get full broadcasts and rally recordings.
                </p>
                <a
                  href="https://www.youtube.com/@PrinceAdewoleAdebayo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-400 hover:underline pt-1"
                >
                  Visit Official Channel <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Grid Section */}
      <section className="py-10 sm:py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Connect & Follow</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Official Campaign Channels</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <a
              href="https://x.com/Pres_Adebayo"
              target="_blank"
              rel="noreferrer"
              className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-[#f8faf9] flex flex-col items-center text-center hover:border-emerald-600 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white flex items-center justify-center text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-colors mb-2.5 shadow-xs">
                <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h5 className="font-bold text-xs sm:text-sm text-slate-900">X (Twitter)</h5>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">@Pres_Adebayo</p>
            </a>

            <a
              href="https://www.instagram.com/princeadewoleadebayo"
              target="_blank"
              rel="noreferrer"
              className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-[#f8faf9] flex flex-col items-center text-center hover:border-emerald-600 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white flex items-center justify-center text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-colors mb-2.5 shadow-xs">
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h5 className="font-bold text-xs sm:text-sm text-slate-900">Instagram</h5>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">@princeadewoleadebayo</p>
            </a>

            <a
              href="https://www.facebook.com/PrinceAdewoleAdebayoOfficial"
              target="_blank"
              rel="noreferrer"
              className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-[#f8faf9] flex flex-col items-center text-center hover:border-emerald-600 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white flex items-center justify-center text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-colors mb-2.5 shadow-xs">
                <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h5 className="font-bold text-xs sm:text-sm text-slate-900">Facebook</h5>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate max-w-full">Prince Adewole Adebayo</p>
            </a>

            <a
              href="https://www.youtube.com/@PrinceAdewoleAdebayo"
              target="_blank"
              rel="noreferrer"
              className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-[#f8faf9] flex flex-col items-center text-center hover:border-emerald-600 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white flex items-center justify-center text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-colors mb-2.5 shadow-xs">
                <YouTubeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h5 className="font-bold text-xs sm:text-sm text-slate-900">YouTube</h5>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate max-w-full">Official Channel</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
