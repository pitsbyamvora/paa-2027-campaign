"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Send, HelpCircle, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export default function SurveyPage() {
  const [formData, setFormData] = useState({
    zone: "",
    ageRange: "",
    gender: "",
    direction: "",
    nationalMission: "",
    securityPolicy: "",
    costOfLiving: "",
    youthPlan: "",
    welfareCommitment: "",
    supportLikelihood: "",
    email: "",
    newsletterConsent: true
  });

  const [submitted, setSubmitted] = useState(false);

  const zones = [
    "North Central",
    "North East",
    "North West",
    "South East",
    "South South",
    "South West"
  ];

  const ageRanges = [
    "Under 18",
    "18-25",
    "26-34",
    "35-44",
    "45-54",
    "55-64",
    "65+"
  ];

  const genders = [
    "Male",
    "Female"
  ];

  const directions = [
    "Right Direction",
    "Wrong Direction"
  ];

  const nationalMissions = [
    "Secure Nigeria: ending terrorism, banditry and kidnapping",
    "Feed Nigeria: more food grown at home and lower food prices",
    "Power Nigeria: reliable electricity, including solar and local power",
    "Affordable Energy: lower fuel prices through refining in Nigeria",
    "Jobs and Enterprise: millions of new jobs, especially for young people",
    "Educate and Skill: better schools and technical training",
    "Healthy Nigeria: stronger primary healthcare and health insurance",
    "Transparent Government: tackling corruption and publishing results"
  ];

  const securityPolicies = [
    "State police that meet national standards for training and conduct",
    "Ending banditry and kidnapping in rural areas and on highways",
    "Protecting schools, markets, farms and transport routes",
    "Better pay, equipment and welfare for police and soldiers",
    "Intelligence and early-warning technology to stop attacks before they happen"
  ];

  const costOfLivingOptions = [
    "Lower fuel and diesel prices through more refining in Nigeria",
    "Cheaper food through better farming, storage and processing",
    "Reliable electricity, including affordable home solar systems",
    "Cheaper loans for small businesses and traders",
    "More goods made in Nigeria to cut import costs"
  ];

  const youthPlans = [
    "Youth job programmes in agriculture, technology, creative industries and manufacturing",
    "Technical and vocational training linked to real jobs and apprenticeships",
    "Loans and support for youth-led and women-led businesses",
    "A National Volunteer and Community Service Corps that builds skills and experience"
  ];

  const welfareCommitments = [
    "Ending extreme poverty within four years",
    "Health insurance for poor households and upgraded primary healthcare centres",
    "At least 3 million affordable homes across the country",
    "Free and compulsory basic education for every child",
    "Income support for older people, widows and people with disabilities"
  ];

  const likelihoods = [
    "Very likely",
    "Fairly likely",
    "Undecided",
    "Fairly unlikely",
    "Very unlikely"
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      if (supabase) {
        await supabase.from("citizen_surveys").insert({
          email: formData.email,
          zone: formData.zone,
          age_range: formData.ageRange,
          gender: formData.gender,
          direction: formData.direction,
          national_mission: formData.nationalMission,
          security_policy: formData.securityPolicy,
          cost_of_living: formData.costOfLiving,
          youth_plan: formData.youthPlan,
          welfare_commitment: formData.welfareCommitment,
          support_likelihood: formData.supportLikelihood,
          newsletter_consent: formData.newsletterConsent
        });
      }
    } catch (err) {
      console.warn("Supabase survey insert error (or offline):", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] flex flex-col font-sans text-slate-800">
      <Navbar />

      {/* Header Banner with Candidate Background */}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            2027 Citizen Voice Initiative
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Your Voice is Important — <br />
            <span className="text-orange-500">Make It Heard!</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Prince Adewole Adebayo and the Social Democratic Party believe government belongs to the people.
            Tell us about your community’s real priorities so we can shape our presidential policies around what matters to you.
          </p>
        </div>
      </section>

      {/* Survey Form Section */}
      <section className="py-12 sm:py-16 -mt-6 sm:-mt-8 relative z-20 flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Thank You for Making Your Voice Heard!
                </h3>
                <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                  Your feedback has been logged directly into our national policy data matrix for the <strong>{formData.zone || "Nigerian"}</strong> zone.
                  Prince Adewole Adebayo will use your recommendations to advocate for genuine solutions.
                </p>
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 text-orange-950 text-xs text-left max-w-md mx-auto">
                  <strong>Take the Next Step:</strong> Join thousands of active citizens organizing across all 774 Local Government Areas!
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/join"
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-7 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-orange-600/30"
                  >
                    Join The Movement
                  </Link>
                  <Link
                    href="/"
                    className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-7 rounded-xl text-xs uppercase"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Introduction Note */}
                <div className="border-b border-slate-100 pb-5">
                  <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Official Campaign Questionnaire
                  </p>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    National Priorities & Governance Survey
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Takes approximately 2 minutes. Questions marked with <span className="text-red-500 font-bold">*</span> are required.
                  </p>
                </div>

                {/* 1. Zone */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900">
                    1. What zone is your state in? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {zones.map((zone) => (
                      <label
                        key={zone}
                        onClick={() => setFormData({ ...formData, zone })}
                        className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-2.5 ${
                          formData.zone === zone
                            ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="zone"
                          required
                          checked={formData.zone === zone}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700"
                        />
                        <span>{zone}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2. Age Range */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900">
                    2. What is your age range? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {ageRanges.map((age) => (
                      <label
                        key={age}
                        onClick={() => setFormData({ ...formData, ageRange: age })}
                        className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-2.5 ${
                          formData.ageRange === age
                            ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="ageRange"
                          required
                          checked={formData.ageRange === age}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700"
                        />
                        <span>{age}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 3. Gender */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900">
                    3. What is your gender? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {genders.map((g) => (
                      <label
                        key={g}
                        onClick={() => setFormData({ ...formData, gender: g })}
                        className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-2.5 ${
                          formData.gender === g
                            ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="gender"
                          required
                          checked={formData.gender === g}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700"
                        />
                        <span>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 4. Direction of Nigeria */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900">
                    4. Do you think the current government is taking Nigeria in the right direction or the wrong direction? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {directions.map((dir) => (
                      <label
                        key={dir}
                        onClick={() => setFormData({ ...formData, direction: dir })}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center gap-3 ${
                          formData.direction === dir
                            ? dir === "Right Direction"
                              ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                              : "bg-red-50 border-red-500 text-red-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="direction"
                          required
                          checked={formData.direction === dir}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700"
                        />
                        <span>{dir}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 5. National Missions */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900 leading-snug">
                    5. Prince Adebayo's plan is built around national missions. Which one matters most to you? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {nationalMissions.map((mission) => (
                      <label
                        key={mission}
                        onClick={() => setFormData({ ...formData, nationalMission: mission })}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center gap-3 ${
                          formData.nationalMission === mission
                            ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="nationalMission"
                          required
                          checked={formData.nationalMission === mission}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700 shrink-0"
                        />
                        <span>{mission}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 6. Security Policy */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900 leading-snug">
                    6. Which security policy would make the biggest difference where you live? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {securityPolicies.map((sec) => (
                      <label
                        key={sec}
                        onClick={() => setFormData({ ...formData, securityPolicy: sec })}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center gap-3 ${
                          formData.securityPolicy === sec
                            ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="securityPolicy"
                          required
                          checked={formData.securityPolicy === sec}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700 shrink-0"
                        />
                        <span>{sec}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 7. Cost of Living */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900 leading-snug">
                    7. Which of these would most reduce the cost of living for your household?
                  </label>
                  <div className="space-y-2">
                    {costOfLivingOptions.map((opt) => (
                      <label
                        key={opt}
                        onClick={() => setFormData({ ...formData, costOfLiving: opt })}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center gap-3 ${
                          formData.costOfLiving === opt
                            ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="costOfLiving"
                          checked={formData.costOfLiving === opt}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700 shrink-0"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 8. Youth Plan */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900 leading-snug">
                    8. Which plan would do the most for young people?
                  </label>
                  <div className="space-y-2">
                    {youthPlans.map((plan) => (
                      <label
                        key={plan}
                        onClick={() => setFormData({ ...formData, youthPlan: plan })}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center gap-3 ${
                          formData.youthPlan === plan
                            ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="youthPlan"
                          checked={formData.youthPlan === plan}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700 shrink-0"
                        />
                        <span>{plan}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 9. Welfare Commitment */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900 leading-snug">
                    9. Which welfare commitment matters most to you?
                  </label>
                  <div className="space-y-2">
                    {welfareCommitments.map((welfare) => (
                      <label
                        key={welfare}
                        onClick={() => setFormData({ ...formData, welfareCommitment: welfare })}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center gap-3 ${
                          formData.welfareCommitment === welfare
                            ? "bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="welfareCommitment"
                          checked={formData.welfareCommitment === welfare}
                          onChange={() => {}}
                          className="w-4 h-4 text-emerald-700 shrink-0"
                        />
                        <span>{welfare}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 10. Likelihood to support */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900 leading-snug">
                    10. Having read about these plans, how likely are you to support Prince Adebayo in 2027?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {likelihoods.map((like) => (
                      <label
                        key={like}
                        onClick={() => setFormData({ ...formData, supportLikelihood: like })}
                        className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-2.5 ${
                          formData.supportLikelihood === like
                            ? "bg-orange-50 border-orange-500 text-orange-950 font-bold shadow-xs"
                            : "bg-[#f8faf9] border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="supportLikelihood"
                          checked={formData.supportLikelihood === like}
                          onChange={() => {}}
                          className="w-4 h-4 text-orange-600 shrink-0"
                        />
                        <span>{like}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 11. Email Address & Consent */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      What is your best email? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. yourname@domain.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#f9fbf9] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.newsletterConsent}
                      onChange={(e) => setFormData({ ...formData, newsletterConsent: e.target.checked })}
                      className="w-4 h-4 text-emerald-700 rounded border-slate-300 mt-0.5"
                    />
                    <span className="text-xs text-slate-600">
                      Sign up for campaign news, policy releases, and town hall updates from Prince Adewole Adebayo.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-4 px-6 rounded-2xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    Submit Survey & Make Your Voice Heard
                  </button>
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
