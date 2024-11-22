// src/app/projects/page.tsx

import Layout from "../LayoutHeader";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="min-h-screen w-full p-8">
        <h1 className="mb-8 text-center text-4xl font-semibold text-base-content">
          Projects
        </h1>

        <h2 className="mb-4 py-4 text-center text-2xl font-semibold text-base-content/80">
          iOS Apps
        </h2>

        <div className="mx-auto grid max-w-3xl items-center justify-items-center gap-8 px-4 md:grid-cols-1 lg:max-w-5xl lg:grid-cols-2">
          {/* Sparking Teams Card */}
          <div className="card image-full w-96 bg-base-200 shadow-xl transition hover:scale-105">
            <figure>
              <img
                src="/assets/apps/sparking/logo.png"
                alt="Sparking Teams logo"
                suppressHydrationWarning={true}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base-content/90">Sparking Teams</h2>
              <p className="text-md font-medium text-base-content/75">
                Build and manage teams with a powerful character database and
                advanced filtering tools for the new Sparking Teams game.
              </p>
              <div className="card-actions justify-center">
                <Link href="/apps/sparking-teams">
                  <button className="btn btn-secondary rounded-lg text-secondary-content hover:opacity-90">
                    View Specs
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Meditatio Card */}
          <div className="card image-full w-96 bg-base-200 shadow-xl transition hover:scale-105">
            <figure>
              <img
                src="/assets/apps/meditatio/logo.png"
                alt="Meditatio logo"
                suppressHydrationWarning={true}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base-content/90">Meditatio</h2>
              <p className="text-md font-medium text-base-content/75">
                Reflect on daily experiences with structured journaling rooted
                in Stoic philosophy.
              </p>
              <div className="card-actions justify-center space-x-4">
                <Link href="/apps/meditatio">
                  <button className="btn btn-secondary w-[140px] rounded-lg text-secondary-content hover:opacity-90">
                    View Specs
                  </button>
                </Link>
                <Link href="https://apps.apple.com/us/app/meditat-io/id6737626840">
                  <button className="btn btn-secondary w-[140px] rounded-lg text-secondary-content hover:opacity-90">
                    View on App Store
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
