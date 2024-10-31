// src/app/projects/page.tsx

import Layout from "../LayoutHeader";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <Layout>
      <h1 className="mb-8 text-center text-4xl font-semibold text-gray-200">
        Projects
      </h1>

      <div className="mx-auto grid max-w-3xl gap-8 px-4 md:grid-cols-2 lg:max-w-5xl">
        <Link href="/apps/sparking-teams">
          <div className="transform rounded-lg bg-gray-800 p-6 text-gray-300 shadow-lg transition hover:scale-105 hover:shadow-2xl">
            <h2 className="mb-2 text-2xl font-semibold text-gray-100">
              <span className="text-red-400">[iOS App]</span> Sparking Teams
            </h2>
            <p className="text-sm text-gray-400">
              Build and manage teams with a powerful character database and
              advanced filtering tools.
            </p>
          </div>
        </Link>

        <Link href="/apps/meditatio">
          <div className="transform rounded-lg bg-gray-800 p-6 text-gray-300 shadow-lg transition hover:scale-105 hover:shadow-2xl">
            <h2 className="mb-2 text-2xl font-semibold text-gray-100">
              <span className="text-red-400">[iOS App]</span> Meditatio
            </h2>
            <p className="text-sm text-gray-400">
              Reflect on daily experiences with structured journaling rooted in
              Stoic philosophy.
            </p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
