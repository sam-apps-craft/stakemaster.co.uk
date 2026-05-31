import "./globals.css";

import type { Metadata } from "next";

import PixelTracker from "@/components/PixelTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://stakemaster.co.uk"),

  title: {
    default: "StakeMaster",
    template: "%s | StakeMaster",
  },

  description:
    "StakeMaster is the ultimate betting companion for horse racing and football betting, helping users compare odds and master the odds.",

  keywords: [
    "StakeMaster",
    "betting app",
    "sports betting",
    "horse racing betting",
    "football betting",
    "odds comparison",
    "betting tools",
    "UK betting app",
  ],

  applicationName: "StakeMaster",

  authors: [
    {
      name: "Apps-Craft Ltd",
      url: "https://www.apps-craft.com",
    },
  ],

  creator: "Apps-Craft Ltd",

  publisher: "Apps-Craft Ltd",

  category: "Sports Betting",

  alternates: {
    canonical: "https://stakemaster.co.uk",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "StakeMaster",

    description:
      "Master The Odds with StakeMaster - Your Ultimate Betting Companion",

    url: "https://stakemaster.co.uk",

    siteName: "StakeMaster",

    locale: "en_GB",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StakeMaster",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "StakeMaster",

    description:
      "Master The Odds with StakeMaster - Your Ultimate Betting Companion",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,

    title: "StakeMaster",

    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <PixelTracker />

        {children}
      </body>
    </html>
  );
}
