// src/app/Layout.tsx

"use client";

import Header from "./header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useTheme } from "./contexts/ThemeContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className="min-h-screen bg-base-100">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}
