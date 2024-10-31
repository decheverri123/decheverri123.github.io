// src/app/Projects.tsx

import Link from "next/link";

export default function Projects() {
  return (
    <aside className="flex h-48 w-full flex-col items-start rounded-lg bg-gray-800 p-6 text-gray-300">
      <h2 className="text-3xl font-semibold text-gray-100">Projects</h2>
      <div className="space-y-8 pt-4">
        <Link
          href="/apps/sparking-teams"
          className="block w-full rounded text-lg font-light text-yellow-400 transition hover:text-yellow-600"
        >
          Sparking Teams
        </Link>
        <Link
          href="/apps/meditatio"
          className="block w-full rounded text-lg font-light text-yellow-400 transition hover:text-yellow-600"
        >
          Meditatio
        </Link>
        {/* Add more project links as needed */}
      </div>
    </aside>
  );
}
