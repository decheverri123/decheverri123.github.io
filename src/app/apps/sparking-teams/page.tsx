// src/app/apps/sparking-teams/page.tsx
import Image from "next/image";
import Layout from "../../LayoutHeader";
import Link from "next/link";

export default function SparkingTeams() {
  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-8 px-12 text-base-content">
        <h1 className="mb-8 text-center text-4xl font-semibold text-primary">
          Sparking Teams
        </h1>

        <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="relative space-y-6">
            {/* Decorative element */}
            <div className="absolute -left-4 -top-4 h-16 w-16 border-l-4 border-t-4 border-primary opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b-4 border-r-4 border-secondary opacity-30"></div>

            <h2 className="text-2xl font-semibold text-secondary">
              Key Features
            </h2>
            <p className="text-base-content">
              <strong className="text-accent">Companion app</strong> for the new
              Dragon Ball Sparking Zero game.
            </p>
            <p className="text-base-content">
              <strong className="text-accent">
                Complete Character Database:
              </strong>{" "}
              View the complete roster and every character&#39;s complete
              moveset, including Skills, Blasts, and Ultimate techniques.
            </p>
            <p className="text-base-content">
              <strong className="text-accent">
                Advanced Search & Filtering:
              </strong>{" "}
              Easily find characters with convenient search and filter.
            </p>
            <p className="text-base-content">
              <strong className="text-accent">Team Builder:</strong> Plan,
              build, and save your favorite teams with the convenient team
              creator.
            </p>
          </div>

          {/* Right Column */}
          <div className="relative space-y-6">
            {/* Decorative element */}
            <div className="absolute -right-4 -top-4 h-16 w-16 border-r-4 border-t-4 border-secondary opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 border-b-4 border-l-4 border-primary opacity-30"></div>

            <h2 className="mb-4 text-2xl font-semibold text-secondary">
              Technical Overview
            </h2>

            <div className="mb-6 rounded-lg bg-base-200 p-4 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-accent">
                Architecture
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-base-content">
                <li>
                  Built with SwiftUI and SwiftData for a modern, declarative UI
                </li>
                <li>
                  Follows MVVM (Model-View-ViewModel) architectural pattern
                </li>
                <li>Leverages Swift concurrency for efficient data handling</li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-base-200 p-4 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-accent">
                Data Management
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-base-content">
                <li>Persistent data storage using SwiftData</li>
                <li>Efficient querying with @Query property wrapper</li>
                <li>Local caching of game character data</li>
              </ul>
            </div>

            <div className="rounded-lg bg-base-200 p-4 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-accent">
                User Experience
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-base-content">
                <li>Intuitive, responsive UI design</li>
                <li>Dark and light mode support</li>
                <li>Accessibility features implemented</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-8 max-w-4xl text-center">
          <Link
            href="/ipa/Sparking Teams-v1.0.ipa"
            download
            className="btn btn-secondary mx-auto mb-12 flex w-64 text-secondary-content"
          >
            Download Sparking Teams v1.0
          </Link>
        </div>

        {/* Image Gallery */}
        <div className="flex w-full justify-center">
          <div className="carousel carousel-center max-w-7xl space-x-4 rounded-box p-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="carousel-item">
                <Image
                  src={`/assets/apps/sparking/0${num}.png`}
                  alt={`Sparking Teams screenshot ${num}`}
                  width={400}
                  height={800}
                  className="h-[600px] w-auto rounded-box"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
