// src/app/Layout.tsx

"use client";

import { useState, useEffect } from "react";
import Header from "./header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.documentElement.setAttribute("data-theme", "navypink");
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-base-100">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

