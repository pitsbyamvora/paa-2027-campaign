import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://paa4president2027.com");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#041c14",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prince Adewole Adebayo (PAA) 2027 | Social Democratic Party (SDP)",
    template: "%s | Prince Adewole Adebayo 2027",
  },
  description:
    "Official 2027 Presidential Campaign of Prince (Dr.) Adewole Adebayo, Esq. & Dr. Usman Bugaje. 'Farewell to Poverty and Insecurity' — Governance & Accelerated Development Blueprint.",
  keywords: [
    "Prince Adewole Adebayo",
    "PAA 2027",
    "Social Democratic Party",
    "SDP Nigeria",
    "Nigeria Presidential Election 2027",
    "Farewell to Poverty and Insecurity",
    "Usman Bugaje",
    "ADEquate For Nigeria",
    "Nigerian politics",
    "KAFTAN TV",
    "Nigeria Economic Transformation",
  ],
  authors: [{ name: "Prince Adewole Adebayo Presidential Campaign Organization" }],
  creator: "Social Democratic Party (SDP)",
  publisher: "Social Democratic Party (SDP)",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    title: "Prince Adewole Adebayo for President | SDP 2027",
    description:
      "Official 2027 Presidential Ticket: Prince (Dr.) Adewole Adebayo & Dr. Usman Bugaje. The New Nigeria Begins With Us — Farewell to Poverty and Insecurity.",
    siteName: "PAA 2027 Presidential Campaign",
    images: [
      {
        url: `${siteUrl}/images/og-share-card.jpg`, // <-- Added ${siteUrl}
        width: 1200,
        height: 675,
        type: "image/jpeg",
        alt: "Prince Adewole Adebayo for President & Usman M. Bugaje for Vice President - SDP 2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Adewole Adebayo for President | SDP 2027",
    description:
      "Official 2027 Presidential Ticket: Prince (Dr.) Adewole Adebayo & Dr. Usman Bugaje. The New Nigeria Begins With Us.",
    site: "@Pres_Adebayo",
    creator: "@Pres_Adebayo",
    images: [`${siteUrl}/images/og-share-card.jpg`], // <-- Added ${siteUrl}
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PoliticalParty",
    "name": "Social Democratic Party (SDP) - Prince Adewole Adebayo 2027",
    "alternateName": "PAA 2027 Presidential Campaign",
    "url": "https://paa4president2027.com",
    "logo": "https://paa4president2027.com/images/logo.png",
    "image": "https://paa4president2027.com/images/og-share-card.jpg",
    "description": "Official 2027 Presidential Campaign of Prince (Dr.) Adewole Adebayo and Dr. Usman Bugaje on the platform of the Social Democratic Party (SDP).",
    "founder": {
      "@type": "Person",
      "name": "Prince Adewole Adebayo",
      "jobTitle": "Presidential Candidate 2027",
      "sameAs": [
        "https://x.com/Pres_Adebayo",
        "https://www.instagram.com/princeadewoleadebayo",
        "https://www.facebook.com/PrinceAdewoleAdebayoOfficial",
        "https://www.youtube.com/@PrinceAdewoleAdebayo"
      ]
    },
    "sameAs": [
      "https://x.com/Pres_Adebayo",
      "https://www.instagram.com/princeadewoleadebayo",
      "https://www.facebook.com/PrinceAdewoleAdebayoOfficial",
      "https://www.youtube.com/@PrinceAdewoleAdebayo"
    ]
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
