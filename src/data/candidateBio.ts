export interface BioData {
  fullName: string;
  party: string;
  electionYear: string;
  slogan: string;
  birthDate: string;
  origin: string;
  constitutionalMotto: string;
  keyStats: { label: string; value: string; desc: string }[];
  sections: {
    id: string;
    title: string;
    subtitle?: string;
    icon: string;
    content: string[];
    bullets?: string[];
  }[];
  pillars: {
    number: string;
    title: string;
    description: string;
  }[];
}

export const candidateBio: BioData = {
  fullName: "Prince Adewole Adebayo",
  party: "Social Democratic Party (SDP)",
  electionYear: "2027",
  slogan: "A Better Nigeria is Possible",
  birthDate: "8 January 1972",
  origin: "Ondo Kingdom (Oyo & Ondo Royal Lineage - 500+ years)",
  constitutionalMotto: "The security and welfare of the people shall be the primary purpose of Government. — Chapter 2, Section 14(b)",
  keyStats: [
    { label: "New Jobs Planned", value: "30M+", desc: "Across agriculture, digital innovation, & local manufacturing" },
    { label: "Out-of-School Children", value: "20M", desc: "Targeted enrolment through dormitories, nutrition & foster care" },
    { label: "Women Entrepreneurs", value: "1M", desc: "Direct enterprise creation & funding across Nigeria and Africa" },
    { label: "Green Tech Youth", value: "5M", desc: "Horticulture, reforestation, and ecological preservation" }
  ],
  pillars: [
    {
      number: "01",
      title: "Clean & Accountable Governance",
      description: "Appointing solely ethical, competent ministers and advisers while dismantling rent-seeking and corruption."
    },
    {
      number: "02",
      title: "Productivity to Eradicate Poverty",
      description: "Enforcing Chapter 2 constitutional social investments over presidential extravagances."
    },
    {
      number: "03",
      title: "Transparent, Rule-Based Markets",
      description: "Replacing contact-based cronyism with predictable rules to attract $1Tn+ in ethical infrastructure investments."
    },
    {
      number: "04",
      title: "Independent Judiciary & Justice",
      description: "Separated powers ensuring enforceable business contracts, human rights, and depoliticized justice."
    },
    {
      number: "05",
      title: "Full Employment Mandate",
      description: "Single-digit unemployment as a non-negotiable benchmark: once everyone works, poverty disappears."
    }
  ],
  sections: [
    {
      id: "background",
      title: "Distinguished Background & Global Legal Practice",
      subtitle: "International Investment Jurist & Arbitrator",
      icon: "Scale",
      content: [
        "Prince Adewole Adebayo is a political activist, seasoned statesman, and distinguished legal practitioner licensed to practice in Nigeria and the United States of America (including New York and California).",
        "His core legal expertise is in international investment law, having litigated and advised on high-stakes cases spanning Australia, England, Nigeria, the US, and mainland Europe.",
        "A Fellow of the Chartered Institute of Arbitrators, in 2006 he was appointed by the United Nations Organisation (UNO) and ECOWAS as Commissioner on the historic Truth and Reconciliation Commission in Liberia. He also chairs the Africa Dialogue Mission (ADM)."
      ]
    },
    {
      id: "lineage",
      title: "Royal Lineage & Historic Heritage",
      subtitle: "Centuries of Service and Leadership",
      icon: "Crown",
      content: [
        "Born on 8 January 1972, Prince Adebayo hails from the Ondo Kingdom where his royal lineage has held authority for over five hundred (500) years, tracing its lineage back to around 1510 AD from the ancient Oyo monarchy.",
        "He is a direct descendant of Osemawe Odunola, grandson of Osemawe Lamele, and direct descendant of Alaafin Onigbogi and Alaafin Sango of Oyo Ile and Elempe, Etsu of Nupe and Oba of Bini."
      ]
    },
    {
      id: "activism",
      title: "Early Political Activism & SDP Ideology",
      subtitle: "Three Decades of Consistent Social Democratic Conviction",
      icon: "Flag",
      content: [
        "At the youthful age of 19, Adewole Adebayo joined the Social Democratic Party (SDP) in 1991 during the Third Republic.",
        "After carefully contrasting the SDP manifesto (which prioritized social investment in public education, healthcare, housing, and infrastructure) with the market-driven NRC, he recognized that building human capital must precede free-market efficiency.",
        "His return as the SDP Presidential Flagbearer builds upon his historic 2023 race, championing a generational shift led by private-sector competence."
      ]
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship, KAFTAN TV & Job Creation",
      subtitle: "A Builder of Scalable African Enterprises",
      icon: "Building2",
      content: [
        "Prince Adebayo has founded thriving enterprises across media, agriculture, and pharmaceuticals. He is the founder of KAFTAN TV (headquartered in Ondo, with modern studios in Abuja, Lagos, and Washington DC), broadcasting across 20+ countries into 6+ million homes.",
        "Under his leadership, KAFTAN TV has trained over 1,022 NYSC members, retaining over 103 on full-time careers and winning NYSC's 'Best Corps Employer' Award.",
        "He is Chairman of SAI Phytochemical (producing breakthrough therapies for sickle cell anaemia), CEO of Blueprint Global Group (Washington DC), Board Adviser to the US National Black Chambers of Commerce, and Chairman of Agbede Agric Projects."
      ]
    },
    {
      id: "philanthropy",
      title: "Philanthropy & Humanitarian Impact",
      subtitle: "Investing in the Next Generation",
      icon: "HeartHandshake",
      content: [
        "Prince Adebayo has personally sponsored tertiary education for over 2,000 Nigerian students in domestic and prestigious foreign universities.",
        "He has funded grassroots economic empowerment initiatives for hundreds of female-led households and smallholder farmers.",
        "An active environmentalist, his personal hobby of tree planting has inspired nationwide ecological awareness campaigns."
      ]
    }
  ]
};
