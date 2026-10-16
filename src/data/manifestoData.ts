export interface ManifestoPart {
  partNumber: string;
  partTitle: string;
  theme: string;
  pageRange: string;
  executiveSummary: string;
  chapters: {
    sectionNumber: string;
    sectionTitle: string;
    keyDeliverables: string[];
    targets2031?: string;
  }[];
}

export const manifestoMeta = {
  title: "FAREWELL TO POVERTY AND INSECURITY",
  subtitle: "Governance & Accelerated Development Blueprint of a New Nigeria (2027 – 2031)",
  ticket: {
    president: "Prince (Dr.) Adewole Adebayo, Esq.",
    vicePresident: "Dr. Usman Bugaje",
    slogan: "ADEquate FOR NIGERIA",
    party: "Social Democratic Party (SDP)"
  },
  triadMotto: "SECURITY • PRODUCTIVITY • PROSPERITY",
  coreCovenant: "Government exists first for the security and welfare of the people (Chapter II, Section 14(2)(b)). An Adewole Presidency regards public office as a constitutional trust.",
  presidentialContacts: {
    email: "farewell2poverty@gmail.com",
    whatsapp: "+234-803-764-4582"
  },
  fourYearDeliveryPhases: [
    {
      phase: "First 100 Days",
      title: "Establish Presidential Delivery & Baseline Audits",
      desc: "Establish Presidential Delivery and Performance Office; issue Chapter II compliance directives; complete security, power, food, health baseline audits; publish first Presidential Delivery Dashboard."
    },
    {
      phase: "Year One (2027)",
      title: "Stabilise and Mobilise",
      desc: "Restore security in priority corridors; accelerate domestic refining & energy logistics; expand farming & power quick wins; roll out youth skills and public service digitalization."
    },
    {
      phase: "Years Two & Three (2028–2029)",
      title: "Build and Scale",
      desc: "Scale industrial clusters, distributed power, irrigation, local pharmaceutical manufacturing, MRO aviation hubs, railway engineering, and broadband expansion."
    },
    {
      phase: "Year Four (2030–2031)",
      title: "Consolidate and Institutionalise",
      desc: "Lock successful programmes into permanent funding frameworks, publish audited outcome reports, correct underperforming agencies, and present the 2031 National Scorecard."
    }
  ]
};

export const manifestoParts: ManifestoPart[] = [
  {
    partNumber: "PART I",
    partTitle: "The Governance Philosophy of the Administration",
    theme: "Chapter II as the Operational Compass & Cooperative Federalism",
    pageRange: "Pages 1 – 7",
    executiveSummary: "Rejects treating Chapter II of the 1999 Constitution as ornamental language. Combines constitutionalism, social democracy, the Basic Needs Approach, and true cooperative federalism (drawing from the 1960 foundational principles).",
    chapters: [
      {
        sectionNumber: "1.1 – 1.4",
        sectionTitle: "Constitutional Foundation & Chapter II Compass",
        keyDeliverables: [
          "Mandatory Chapter II compliance for all Ministries, Departments and Agencies (MDAs).",
          "Basic Needs Approach: Security, food, water, energy, healthcare, education, housing, and digital connectivity as non-negotiable rights.",
          "Subsidiarity doctrine: Public responsibilities discharged by the lowest capable level of government."
        ]
      },
      {
        sectionNumber: "1.5 – 1.8",
        sectionTitle: "Results-Based Governance & Public Participation",
        keyDeliverables: [
          "Quarterly open expenditure briefs published by all MDAs for transparent citizen oversight.",
          "National planning supported by AI, reliable national statistics, GIS, and satellite intelligence.",
          "Strategic state partnership to crowd in private capital rather than crowd it out."
        ]
      }
    ]
  },
  {
    partNumber: "PART II",
    partTitle: "The Economic Transformation Blueprint",
    theme: "From Dependency to Self-Reliant Prosperity by 2031",
    pageRange: "Pages 8 – 31",
    executiveSummary: "Driven by 5 core principles: aggressive import substitution targeting the real import burden (vehicles, refined fuel, machinery), full employment, regional development by comparative advantage, 4-year speedy execution, and catalytic state investment.",
    chapters: [
      {
        sectionNumber: "2.1 – 2.3A",
        sectionTitle: "Agriculture & Agro-Processing Revolution",
        keyDeliverables: [
          "Shift from rain-fed subsistence to technology-driven mechanization, seed improvement, and irrigation clusters.",
          "Agro-processing hubs across every geopolitical zone (North: grains/livestock; Middle Belt: tubers/fruits; South: oil palm/cocoa/cassava).",
          "Elimination of food import dependence within 4 years; boosting high-value exports (ginger, cashew, cocoa, sesame)."
        ]
      },
      {
        sectionNumber: "2.3B & C",
        sectionTitle: "Automobile Industrialization, Refining & Oil/Gas",
        keyDeliverables: [
          "Automobile Import Substitution: Federal MDAs mandated to purchase Nigerian-made and assembled vehicles; phased assembly-to-manufacturing policy.",
          "Crude Supply to Domestic Refineries: Transparent, enforceable domestic crude supply obligations to end refined fuel imports and slash transport costs.",
          "Natural gas acceleration for power, CNG vehicles, and clean household cooking (LPG)."
        ]
      },
      {
        sectionNumber: "2.3D – 2.3G",
        sectionTitle: "AfCFTA Trade, SME Fund & Real Economy Banking",
        keyDeliverables: [
          "Maximizing AfCFTA single market while enforcing rules of origin to prevent foreign dumping.",
          "Specialized SME Development Fund with low-interest credit windows and risk-sharing guarantees.",
          "Reorienting Central Bank monetary policy to prioritize job creation and real sector lending over government securities."
        ]
      },
      {
        sectionNumber: "2.3H",
        sectionTitle: "Infrastructure Enabler: Power, Roads, Aviation & Rail",
        keyDeliverables: [
          "Bank of Electricity (BoE) to finance distributed generation, solar mini-grids, and local transformer/meter manufacturing.",
          "Aviation Revolution: Developing 4 major regional Maintenance, Repair and Overhaul (MRO) hubs (Lagos, Abuja, Kano, Port Harcourt) to save billions in foreign exchange, leading to indigenous aircraft assembly.",
          "National Metro Rail Programme for major metropolitan centres (Lagos, Abuja, Kano, Port Harcourt, Ibadan, Aba, etc.) and domestic manufacturing of coaches and rail tracks.",
          "Dredging Rivers Niger and Benue to expand inland waterways and port access to Onitsha, Idah, Makurdi, and Yola."
        ]
      }
    ]
  },
  {
    partNumber: "PART III",
    partTitle: "Defence and Internal Security Blueprint",
    theme: "One Republic, One Security System",
    pageRange: "Pages 32 – 43",
    executiveSummary: "Restoring the lawful authority of the state across all 774 LGAs. Rebuilding the Nigeria Police as the primary civilian authority, modernizing the Armed Forces under a joint command doctrine, and deploying intelligence-led tech.",
    chapters: [
      {
        sectionNumber: "3.1 – 3.8",
        sectionTitle: "Police Transformation & Anti-Banditry Command",
        keyDeliverables: [
          "National Anti-Kidnapping and Banditry Command with unified digital tracking, financial tracing, and victim recovery.",
          "Police transformation: Nationwide skills audit, competitive salaries, modern housing/insurance, and forensic kits for all stations.",
          "Securing schools, markets, farms, and transit corridors through rapid-response bases and aerial surveillance."
        ]
      },
      {
        sectionNumber: "3.9 – 3.14",
        sectionTitle: "State/Community Policing & Defence Industrialisation",
        keyDeliverables: [
          "State and community policing within a federal framework with national standards to prevent political abuse.",
          "Defence Industries Corporation restructuring for domestic production of ammunition, UAV drones, patrol craft, and tactical vehicles.",
          "National Joint Intelligence and Operations Platform integrating military, police, DSS, and customs with geospatial mapping.",
          "Maritime security to eliminate oil theft, pipeline sabotage, and protect the blue economy."
        ]
      }
    ]
  },
  {
    partNumber: "PART IV",
    partTitle: "Foreign Policy and International Relations",
    theme: "Diplomacy in the Service of National Renewal",
    pageRange: "Pages 44 – 52",
    executiveSummary: "Africa as the first circle of foreign policy, rebuilding trust in ECOWAS, citizen-centred consular protection, diaspora partnership, and non-aligned economic diplomacy.",
    chapters: [
      {
        sectionNumber: "4.1 – 4.7",
        sectionTitle: "Presidential Coordination & ECOWAS Leadership",
        keyDeliverables: [
          "Strategic External Relations Council to ensure Nigeria speaks with one voice on all bilateral and trade treaties.",
          "Rebuilding ECOWAS through interconnected power markets, regional transport corridors, and peaceful mediation.",
          "Permanent strategic partnership with border neighbours (Benin, Niger, Chad, Cameroon) to combat smuggling and terrorism."
        ]
      },
      {
        sectionNumber: "4.8 – 4.16",
        sectionTitle: "Diaspora Mobilization & Consular Protection",
        keyDeliverables: [
          "24-hour Global Nigerian Consular Service with emergency hotline for citizens abroad.",
          "Global Nigerian Skills & Enterprise Register to deploy diaspora talents in health, education, and tech.",
          "Diaspora Human Development Bonds linked to verifiable infrastructure and healthcare investments."
        ]
      }
    ]
  },
  {
    partNumber: "PART V",
    partTitle: "Humanitarian Affairs, Social Welfare & National Inclusion",
    theme: "A Compassionate, Inclusive & Opportunity-Driven Nigeria",
    pageRange: "Pages 53 – 101",
    executiveSummary: "Eradicating extreme poverty within four years through the National Poverty Elimination Strategy (NPES) and establishing the Universal Social Protection Framework (USPF).",
    chapters: [
      {
        sectionNumber: "5.1 – 5.3",
        sectionTitle: "Universal Social Protection Framework (USPF)",
        keyDeliverables: [
          "Establishment of the National Social Protection Authority (NSPA) and National Household Registry with biometric validation.",
          "Universal social insurance extended to informal sector artisans, traders, and smallholder farmers via mobile wallets.",
          "National Shock Response Mechanism providing emergency relief within days during floods or economic shocks."
        ]
      },
      {
        sectionNumber: "5.4 – 5.5",
        sectionTitle: "50% Women Inclusion, Child Protection & Disability Dignity",
        keyDeliverables: [
          "Not less than 50% women appointment policy at cabinet, board, and ambassadorial levels; private sector incentives.",
          "National Child Protection System with zero tolerance for child labour, street homelessness, and school dropout.",
          "National Inclusion & Vulnerable Persons Policy: mandatory accessibility for public facilities, assistive technology manufacturing, and senior citizens income support."
        ]
      },
      {
        sectionNumber: "5.7 – 5.9",
        sectionTitle: "3 Million Affordable Homes & National Volunteer Corps",
        keyDeliverables: [
          "Construction of at least 3 million affordable homes within 4 years via PPPs, mortgage reform, and satellite cities.",
          "National Employment Guarantee Programme: productive public works for unemployed youth and women.",
          "Establishment of the National Volunteer and Community Service Corps (NVCSC) for lifelong community nation-building."
        ]
      }
    ]
  },
  {
    partNumber: "PART VI – X",
    partTitle: "Sports, Education, Health, AI & Constitutional Governance",
    theme: "Human Capital, Emerging Technology & Integrity",
    pageRange: "Pages 102 – 117",
    executiveSummary: "Presidential Schools Football Cup, Free Universal Basic Education, National Malaria Eradication ($4.5B investment), National AI Strategy, and 12-month limit for court case determination.",
    chapters: [
      {
        sectionNumber: "Part VI: Sports",
        sectionTitle: "Sports Development & Presidential Schools Cup",
        keyDeliverables: [
          "Annual Presidential Schools Football Cup with modern stadium construction for the champion school.",
          "Modernizing the Nigerian Football League into Africa's premier sports league and promoting domestic sportswear manufacturing."
        ]
      },
      {
        sectionNumber: "Part VII: Education",
        sectionTitle: "Free Basic Education & Integrated School Farms",
        keyDeliverables: [
          "Free compulsory basic education; integrated school farms in rural schools to support school feeding and teach agribusiness.",
          "Modernizing technical colleges and creating Consultancy Services Directorates in all tertiary institutions for financial self-reliance."
        ]
      },
      {
        sectionNumber: "Part VIII: Health",
        sectionTitle: "Malaria Eradication & Guaranteed Medical Residency",
        keyDeliverables: [
          "National Malaria Eradication & Vaccine Industrialisation Programme ($4.5B / ₦8.1T over 4 years) to reduce malaria deaths by 90% and create 500,000 direct jobs.",
          "Guaranteed housemanship and automatic absorption of qualified medical graduates into accredited residency training to halt brain drain."
        ]
      },
      {
        sectionNumber: "Part IX: Tech & AI",
        sectionTitle: "National AI Strategy & Digital Economy Hubs",
        keyDeliverables: [
          "Adoption of a National AI Strategy; establishing innovation hubs and technology parks across all 6 geopolitical zones.",
          "Broadband nationwide expansion, supporting software engineering, robotics, and indigenous hardware manufacturing."
        ]
      },
      {
        sectionNumber: "Part X: Governance",
        sectionTitle: "12-Month Justice Determination & 774 LGA Transparency",
        keyDeliverables: [
          "Judicial reform ensuring court cases reach final determination within 12 months, ending endless litigation.",
          "Separation of the offices of Minister of Justice and Attorney-General of the Federation; operational independence for EFCC and ICPC.",
          "Mandatory quarterly digital publication of all revenues and expenditures by all 774 Local Government Areas."
        ]
      }
    ]
  }
];
