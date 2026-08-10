import type { Metadata } from "next";
import "./globals.css";

// Font configuration is now handled in tailwind.config.ts

export const metadata: Metadata = {
  title: "Danny Echeverri",
  description: "Danny Echeverri - Portfolio & Applications",
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
      <body className="font-serif">{children}</body>
    </html>
  );
}
