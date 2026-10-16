"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  HelpCircle,
  ShieldCheck,
  Search,
  Filter,
  Download,
  RefreshCw,
  Lock,
  Eye,
  CheckCircle2,
  Calendar,
  MapPin,
  TrendingUp,
  BarChart3
} from "lucide-react";

export default function AdminDashboardPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"members" | "surveys">("members");
  const [members, setMembers] = useState<any[]>([]);
  const [surveys, setSurveys] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const correctPin = process.env.NEXT_PUBLIC_ADMIN_PIN || "2027";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === correctPin) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert("Invalid campaign pass-key. Default pin is 2027");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      if (supabase) {
        // Fetch members
        const { data: memberData } = await supabase
          .from("movement_members")
          .select("*")
          .order("created_at", { ascending: false });

        if (memberData) setMembers(memberData);

        // Fetch surveys
        const { data: surveyData } = await supabase
          .from("citizen_surveys")
          .select("*")
          .order("created_at", { ascending: false });

        if (surveyData) setSurveys(surveyData);
      } else {
        // Mock sample data if Supabase keys not added yet
        setMembers([
          {
            id: "1",
            created_at: new Date().toISOString(),
            full_name: "Chukwuma Olufemi",
            email: "chukwuma@example.com",
            phone: "+234 803 111 2233",
            state: "Lagos",
            volunteer_interests: ["Grassroots Ward Mobilizer", "Youth / Campus Ambassador"]
          },
          {
            id: "2",
            created_at: new Date(Date.now() - 3600000).toISOString(),
            full_name: "Amina Danjuma",
            email: "amina@example.com",
            phone: "+234 802 444 5566",
            state: "Kano",
            volunteer_interests: ["Digital & Social Media Advocate"]
          }
        ]);

        setSurveys([
          {
            id: "s1",
            created_at: new Date().toISOString(),
            email: "chukwuma@example.com",
            zone: "South West",
            age_range: "26-34",
            gender: "Male",
            direction: "Wrong Direction",
            national_mission: "Jobs and Enterprise: millions of new jobs, especially for young people",
            security_policy: "Ending banditry and kidnapping in rural areas and on highways",
            cost_of_living: "Lower fuel and diesel prices through more refining in Nigeria",
            youth_plan: "Youth job programmes in agriculture, technology, creative industries and manufacturing",
            welfare_commitment: "Ending extreme poverty within four years",
            support_likelihood: "Very likely"
          }
        ]);
      }
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredMembers = members.filter(
    (m) =>
      m.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.phone?.includes(searchTerm) ||
      m.state?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSurveys = surveys.filter(
    (s) =>
      s.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.zone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.national_mission?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#041c14] flex flex-col justify-center items-center px-4 font-sans text-white">
        <div className="max-w-md w-full bg-[#072d20] border border-emerald-700/60 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
          <div className="relative h-14 w-32 mx-auto">
            <Image src="/images/logo.png" alt="PAA Logo" fill className="object-contain" />
          </div>

          <div className="space-y-1">
            <span className="text-orange-400 font-extrabold text-xs uppercase tracking-widest">
              Restricted Area
            </span>
            <h2 className="text-2xl font-black">Campaign Admin Login</h2>
            <p className="text-xs text-slate-300">
              Enter your campaign director pass-key to view movement members and survey analytics.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Access PIN (Default: 2027)"
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-emerald-600/60 text-white text-center font-bold tracking-widest text-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30"
            >
              Access Dashboard
            </button>
          </form>

          <Link href="/" className="inline-block text-xs text-slate-400 hover:text-white pt-2">
            ← Return to Campaign Website
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafcfb] flex flex-col font-sans text-slate-800">
      {/* Top Admin Header */}
      <header className="bg-[#031d14] text-white border-b border-emerald-950 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-24">
              <Image src="/images/logo.png" alt="PAA" fill className="object-contain" />
            </div>
            <div className="border-l border-emerald-800 pl-3">
              <h1 className="text-sm font-extrabold tracking-tight text-white uppercase">
                PAA 2027 Campaign Control Center
              </h1>
              <p className="text-[10px] text-orange-400 font-bold">Admin Intelligence Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-xs text-emerald-200 inline-flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh Data</span>
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-3 py-1.5 rounded-lg bg-red-600/20 text-red-300 hover:bg-red-600 hover:text-white text-xs font-bold transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Registered Members</span>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{members.length}</p>
              <span className="text-[11px] text-emerald-700 font-medium">Join Movement submissions</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Citizen Surveys</span>
              <p className="text-2xl sm:text-3xl font-black text-orange-600 mt-1">{surveys.length}</p>
              <span className="text-[11px] text-orange-700 font-medium">Completed questionnaires</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Top Priority Mission</span>
              <p className="text-sm font-black text-slate-900 mt-1 truncate max-w-[170px]">Jobs & Enterprise</p>
              <span className="text-[11px] text-slate-500">Leading policy choice</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Database Status</span>
              <p className="text-sm font-black text-emerald-700 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Live & Connected
              </p>
              <span className="text-[10px] text-slate-400">Supabase DB</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("members")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "members"
                  ? "bg-emerald-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Users className="w-4 h-4" />
              Movement Members ({members.length})
            </button>
            <button
              onClick={() => setActiveTab("surveys")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "surveys"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Citizen Surveys ({surveys.length})
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search name, email, phone, state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-[#f8faf9]"
            />
          </div>
        </div>

        {/* Members Table */}
        {activeTab === "members" && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f8faf9] text-slate-500 font-extrabold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Full Name</th>
                    <th className="py-3.5 px-4">Contact Info</th>
                    <th className="py-3.5 px-4">State</th>
                    <th className="py-3.5 px-4">Interests</th>
                    <th className="py-3.5 px-4 sm:px-6">Date Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredMembers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-10 text-slate-400">
                        No members found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                          {member.full_name}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          <div>{member.email}</div>
                          <div className="text-[11px] text-emerald-800 font-semibold">{member.phone}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md text-[10px]">
                            {member.state || "National"}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {member.volunteer_interests && member.volunteer_interests.length > 0 ? (
                              member.volunteer_interests.map((it: string, i: number) => (
                                <span key={i} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-full">
                                  {it}
                                </span>
                              ))
                            ) : (
                              <span className="text-slate-400 text-[10px]">General Volunteer</span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-[11px]">
                          {new Date(member.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Surveys Table */}
        {activeTab === "surveys" && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f8faf9] text-slate-500 font-extrabold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Citizen Email</th>
                    <th className="py-3.5 px-4">Demographics</th>
                    <th className="py-3.5 px-4">Country Direction</th>
                    <th className="py-3.5 px-4">Top National Mission</th>
                    <th className="py-3.5 px-4">2027 Likelihood</th>
                    <th className="py-3.5 px-4 sm:px-6">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredSurveys.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-10 text-slate-400">
                        No surveys found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredSurveys.map((survey) => (
                      <tr key={survey.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                          {survey.email}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          <div><strong>Zone:</strong> {survey.zone}</div>
                          <div className="text-[11px] text-slate-500">{survey.age_range} • {survey.gender}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`font-bold px-2.5 py-1 rounded-md text-[10px] ${
                              survey.direction === "Right Direction"
                                ? "bg-emerald-50 text-emerald-800"
                                : "bg-red-50 text-red-700"
                            }`}
                          >
                            {survey.direction}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 max-w-xs truncate" title={survey.national_mission}>
                          {survey.national_mission}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-extrabold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md text-[10px]">
                            {survey.support_likelihood || "Undecided"}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-[11px]">
                          {new Date(survey.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
