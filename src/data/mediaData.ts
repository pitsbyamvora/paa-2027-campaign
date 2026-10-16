export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string; // The 11-character YouTube video ID (or full URL)
  title: string;
  category: string;
  network: string;
  duration: string;
  views: string;
  description: string;
  trendingTopic: string;
  date: string;
}

// Helper function so you can paste ANY YouTube link (normal, share link, or just the ID)
export function getYouTubeEmbedUrl(input: string): string {
  if (!input) return "";
  let videoId = input.trim();

  // If you pasted a full link like: https://www.youtube.com/watch?v=dQw4w9WgXcQ
  const watchMatch = videoId.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) {
    videoId = watchMatch[1];
  } else {
    // If you pasted a short share link like: https://youtu.be/dQw4w9WgXcQ
    const shortMatch = videoId.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) {
      videoId = shortMatch[1];
    } else {
      // If you pasted an embed link like: https://www.youtube.com/embed/dQw4w9WgXcQ
      const embedMatch = videoId.match(/embed\/([a-zA-Z0-9_-]{11})/);
      if (embedMatch) {
        videoId = embedMatch[1];
      }
    }
  }

  // Clean any extra query strings if just the 11-char ID was passed
  if (videoId.length > 11) {
    const rawId = videoId.match(/([a-zA-Z0-9_-]{11})/);
    if (rawId) videoId = rawId[1];
  }

  return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
}

export const candidateSocials: SocialLink[] = [
  {
    platform: "X (Twitter)",
    handle: "@Pres_Adebayo",
    url: "https://x.com/Pres_Adebayo",
    icon: "Twitter"
  },
  {
    platform: "Instagram",
    handle: "@princeadewoleadebayo",
    url: "https://www.instagram.com/princeadewoleadebayo",
    icon: "Instagram"
  },
  {
    platform: "Facebook",
    handle: "Prince Adewole Adebayo Official",
    url: "https://www.facebook.com/PrinceAdewoleAdebayoOfficial",
    icon: "Facebook"
  },
  {
    platform: "YouTube",
    handle: "Prince Adewole Adebayo",
    url: "https://www.youtube.com/@PrinceAdewoleAdebayo",
    icon: "Youtube"
  },
  {
    platform: "Linktree",
    handle: "princeadewoleadebayo",
    url: "https://linktr.ee/princeadewoleadebayo",
    icon: "ExternalLink"
  }
];

/* =========================================================================
   PASTE YOUR YOUTUBE LINKS HERE:
   You can paste ANY format:
   - Full link:  "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
   - Short link: "https://youtu.be/YOUR_VIDEO_ID"
   - Just ID:    "YOUR_VIDEO_ID"
========================================================================= */
export const trendingVideos: VideoItem[] = [
  {
    id: "video-1",
    youtubeId: "https://youtu.be/-7Nn9BkrhWo?si=vbpgCd9OFmIQVxAH", // <-- PASTE VIDEO 1 LINK HERE
    title: "'Give Tinubu Time, He'll Tax the Air We Breathe' — Critical Economic Assessment",
    category: "Economic Policy",
    network: "Channels Television (Politics Today)",
    duration: "24:15",
    views: "450K+ Views",
    trendingTopic: "Taxation & Cost of Living",
    date: "Recent Broadcast",
    description: "Prince Adewole Adebayo breaks down why continuous taxation on citizens without reciprocal public welfare, social safety nets, or job creation suffocates the real economy."
  },
  {
    id: "video-2",
    youtubeId: "https://youtu.be/YyyfL35xRXw?si=-LCJkmSOu8uVJO6L", // <-- PASTE VIDEO 2 LINK HERE
    title: "Subsidy Debates & State of Petroleum Refining in Nigeria",
    category: "Energy & Infrastructure",
    network: "Channels Television",
    duration: "18:40",
    views: "320K+ Views",
    trendingTopic: "Energy & Local Refining",
    date: "Trending Interview",
    description: "A hard-hitting policy deconstruction on why exporting crude while importing refined products drains national reserves and how modular and domestic refining can fix fuel pricing."
  },
  {
    id: "video-3",
    youtubeId: "https://youtu.be/y0w6_wVuc2Y?si=9erSO1NrcqiwaIHJ", // <-- PASTE VIDEO 3 LINK HERE
    title: "National Sovereignty & The Rule of Law in Democratic Nigeria",
    category: "Governance & Justice",
    network: "Arise News (Prime Time)",
    duration: "31:02",
    views: "290K+ Views",
    trendingTopic: "Constitutional Governance",
    date: "Featured Address",
    description: "Analyzing the separation of powers, judicial independence, and enforcing Chapter 2 of the Nigerian Constitution to guarantee citizen welfare over political privilege."
  },
  {
    id: "video-4",
    youtubeId: "https://youtu.be/_A5UIRE5rK4?si=QjsV6-xUd9jpRe8X", // <-- PASTE VIDEO 4 LINK HERE
    title: "Full 2027 Blueprint: 30 Million Jobs & Ending Poverty in One Generation",
    category: "2027 Manifesto",
    network: "KAFTAN TV News",
    duration: "42:10",
    views: "580K+ Views",
    trendingTopic: "2027 Presidential Race",
    date: "Flagship Keynote",
    description: "Prince Adebayo delivers the complete Social Democratic Party (SDP) roadmap to achieve single-digit unemployment through agriculture, industrialization, and STEM education."
  }
];
