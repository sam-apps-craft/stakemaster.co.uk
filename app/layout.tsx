import "./globals.css";
import type { Metadata } from "next";
import PixelTracker from "@/components/PixelTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://stakemaster.co.uk"),
  title: "StakeMaster",
  description:
    "Master The Odds with StakeMaster - Your Ultimate Betting Companion",
  openGraph: {
    title: "StakeMaster",
    description:
      "Master The Odds with StakeMaster - Your Ultimate Betting Companion",
    url: "https://stakemaster.co.uk",
    siteName: "StakeMaster",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StakeMaster",
    description:
      "Master The Odds with StakeMaster - Your Ultimate Betting Companion",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PixelTracker />
        {children}
      </body>
    </html>
  );
}
