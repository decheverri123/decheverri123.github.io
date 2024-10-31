// src/app/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 px-8 py-4 text-gray-200 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-400">
          <Link href="/" className="transition hover:text-yellow-400">
            {" "}
            Danny Echeverri{" "}
          </Link>
        </h1>
        <div className="space-x-8">
          <Link href="/" className="transition hover:text-yellow-400">
            Home
          </Link>
          <Link href="/projects" className="transition hover:text-yellow-400">
            Projects
          </Link>
          <Link href="/contact" className="transition hover:text-yellow-400">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
