// src/app/Layout.tsx

import Header from "./header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-gray-900 text-gray-300">
      <Header />
      <main className="p-8">{children}</main>
    </div>
  );
}
