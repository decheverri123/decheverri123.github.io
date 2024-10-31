// src/app/projects/page.tsx

import Layout from "../LayoutHeader";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <Layout>
      <h1 className="mb-8 text-center text-4xl font-semibold text-gray-200">
        Projects
      </h1>

      <div className="center space-y-8 text-center">
        <Link
          href="/apps/sparking-teams"
          className="block w-full rounded text-lg font-light text-yellow-300 transition hover:text-yellow-600"
        >
          Sparking Teams
        </Link>
        <Link
          href="/apps/meditatio"
          className="block w-full rounded text-lg font-light text-yellow-300 transition hover:text-yellow-600"
        >
          Meditatio
        </Link>
      </div>
    </Layout>
  );
}
