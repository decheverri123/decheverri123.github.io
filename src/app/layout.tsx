import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://decheverri123.github.io"),
  title: {
    default: "Danny Echeverri | Software Engineer",
    template: "%s | Danny Echeverri",
  },
  description:
    "Senior Full Stack Engineer with 6+ YOE building products at Microsoft, in health-tech, and at YC-backed startups. Founding mobile engineer, React, React Native, C#/.NET, and Cloud.",
  keywords: [
    "Danny Echeverri",
    "Software Engineer",
    "Full Stack Engineer",
    "Founding Mobile Engineer",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "C#",
    ".NET",
    "AWS",
    "iOS",
    "SwiftUI",
  ],
  authors: [
    { name: "Danny Echeverri", url: "https://decheverri123.github.io" },
  ],
  creator: "Danny Echeverri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://decheverri123.github.io",
    title: "Danny Echeverri | Software Engineer",
    description:
      "Senior Full Stack Engineer with 6+ YOE building products at Microsoft, health-tech, and YC-backed startups.",
    siteName: "Danny Echeverri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danny Echeverri | Software Engineer",
    description:
      "Senior Full Stack Engineer with 6+ YOE building products at Microsoft, health-tech, and YC-backed startups.",
  },
  verification: {
    google: "google9acbbcbe05c38a81",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
