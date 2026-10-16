import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paa2027.ng";

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
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    title: "Prince Adewole Adebayo 2027 — The People's Choice for President",
    description:
      "A united, competent and people-focused leadership for a prosperous Nigeria. Explore the 2027–2031 Blueprint: Farewell to Poverty and Insecurity.",
    siteName: "PAA 2027 Presidential Campaign",
    images: [
      {
        url: "/images/candidate-bg.png",
        width: 1200,
        height: 630,
        alt: "Prince Adewole Adebayo — Presidential Candidate 2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Adewole Adebayo 2027 | SDP Presidential Candidate",
    description:
      "Official Campaign of Prince Adewole Adebayo. 'The security and welfare of the people shall be the primary purpose of Government.'",
    site: "@Pres_Adebayo",
    creator: "@Pres_Adebayo",
    images: ["/images/candidate-bg.png"],
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
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
