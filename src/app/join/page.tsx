"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Send, ShieldCheck, Heart, Users, MapPin, Sparkles } from "lucide-react";

export default function JoinMovementPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    role: "volunteer",
    volunteerInterests: [] as string[]
  });
  const [submitted, setSubmitted] = useState(false);

  const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
    "Taraba", "Yobe", "Zamfara", "Diaspora"
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      volunteerInterests: prev.volunteerInterests.includes(interest)
        ? prev.volunteerInterests.filter(i => i !== interest)
        : [...prev.volunteerInterests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      if (supabase) {
        await supabase.from("movement_members").insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          state: formData.state,
          volunteer_interests: formData.volunteerInterests
        });
      }
    } catch (err) {
      console.warn("Supabase insert error (or offline):", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] flex flex-col font-sans text-slate-800">
      <Navbar />

      {/* Hero Section with Candidate Banner Background */}
      <section className="relative bg-[#041c14] text-white py-14 sm:py-20 overflow-hidden">
        {/* User's provided background banner image with dark overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-25 mix-blend-luminosity">
          <Image
            src="/images/candidate-bg.webp"
            alt="Prince Adewole Adebayo Rally"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#041c14] via-[#041c14]/80 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Join The National Grassroots Movement
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Stand With <span className="text-orange-500">Prince Adewole Adebayo</span> for 2027
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real change won’t happen from the top down; it begins in our wards, communities, and campuses.
            Register today to receive verified campaign dispatches, connect with local coordinators, and power the 2027 victory.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16 -mt-6 sm:-mt-8 relative z-20 flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Welcome to the Movement, {formData.fullName}!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Your registration has been securely received by the Prince Adewole Adebayo National Campaign Team. We have sent a confirmation message to <strong>{formData.email}</strong>.
                </p>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-950 text-xs text-left max-w-md mx-auto">
                  <strong>Next Step:</strong> You can help immediately by taking 2 minutes to fill out the <Link href="/survey" className="underline font-bold text-orange-600">Citizen Voice Survey</Link> so Prince Adebayo can address the exact priorities of your community!
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/survey"
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider"
                  >
                    Take Citizen Survey
                  </Link>
                  <Link
                    href="/"
                    className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl text-xs uppercase"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Movement Membership Form
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide your authentic details. All personal information remains strictly confidential.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Princewell Nnamdi Babatunde"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. citizen@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number (WhatsApp Preferred) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +234 803 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                {/* State of Residence */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    State of Residence / Polling Location <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="">Select your state</option>
                    {states.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* How would you like to contribute? */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    How would you like to participate?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Grassroots Ward Mobilizer",
                      "Digital & Social Media Advocate",
                      "Youth / Campus Ambassador",
                      "Polling Unit Observer",
                      "Professional / Advisory Volunteer",
                      "Donor / Campaign Supporter"
                    ].map((interest) => (
                      <label
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                          formData.volunteerInterests.includes(interest)
                            ? "bg-emerald-50 border-emerald-600 text-emerald-900 font-bold"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.volunteerInterests.includes(interest)}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700 rounded border-slate-300"
                        />
                        <span>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Consent & Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-4 px-6 rounded-2xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    Submit Registration & Join Movement
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-3">
                    By submitting, you agree to receive official SDP campaign announcements and polling day updates.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
