// src/app/Layout.tsx

"use client";

import { useState, useEffect } from "react";
import Header from "./header";

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
    <div className="min-h-screen bg-base-100">
      <Header />
      <main>{children}</main>
    </div>
  );
}
