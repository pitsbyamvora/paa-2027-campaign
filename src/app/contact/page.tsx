"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] flex flex-col font-sans text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <section className="relative bg-[#041c14] text-white py-14 sm:py-20 overflow-hidden">
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
          <div className="max-w-3xl space-y-4">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest bg-orange-600/20 px-3.5 py-1 rounded-full border border-orange-500/30">
              National Campaign Headquarters
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Get in Touch with <span className="text-orange-500">The Campaign Team</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We welcome press inquiries, community invitations, endorsements, and policy suggestions from citizens nationwide and in the diaspora.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 -mt-6 sm:-mt-8 relative z-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Info Cards (Col 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg space-y-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Campaign Secretariat</h3>
                  <p className="text-xs text-slate-500 mt-1">Our offices are open Monday to Friday, 8:00 AM – 6:00 PM (WAT).</p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">National Headquarters</p>
                      <p className="text-slate-500 text-xs mt-0.5">Social Democratic Party (SDP) National Secretariat, Abuja, FCT, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Official Correspondence</p>
                      <p className="text-slate-500 text-xs mt-0.5">secretariat@sdpnigeria.org / campaign@paa2027.ng</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Direct Campaign Line</p>
                      <p className="text-slate-500 text-xs mt-0.5">+234 801 234 5678 / +234 800 2027 PAA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Citizen Survey Prompt */}
              <div className="bg-[#041c14] text-white p-6 sm:p-8 rounded-3xl space-y-3 shadow-lg">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400">Citizen Input</span>
                <h4 className="text-lg font-bold">Have 2 minutes to spare?</h4>
                <p className="text-xs text-slate-300">
                  Share what security, cost of living, and youth priorities matter most to your family on our citizen survey.
                </p>
                <Link
                  href="/survey"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-5 rounded-xl text-xs uppercase tracking-wider"
                >
                  Take Citizen Survey →
                </Link>
              </div>
            </div>

            {/* Contact Form (Col 7) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. A representative from Prince Adewole Adebayo's communications office will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-emerald-900 text-white font-bold py-2.5 px-6 rounded-xl text-xs uppercase"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Send an Official Message</h3>
                    <p className="text-xs text-slate-500 mt-1">Please fill out the form below and we will get back to you promptly.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Oluwaseun Okafor"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@domain.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +234 803 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="General Inquiry">General Campaign Inquiry</option>
                      <option value="Press / Media">Press & Media Interview Request</option>
                      <option value="Town Hall Invitation">Community / Town Hall Invitation</option>
                      <option value="Policy Input">Policy Input & Contribution</option>
                      <option value="Diaspora Chapter">Diaspora Chapter Coordination</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-orange-600/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Message
                  </button>
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
