// src/app/apps/sparking-teams/page.tsx
import Image from "next/image";
import Layout from "../../LayoutHeader";

export default function SparkingTeams() {
  return (
    <Layout>
      <div className="min-h-screen w-full p-8 px-12">
        <h1 className="text-base-600 mb-8 text-center text-4xl font-semibold">
          Sparking Teams
        </h1>

        <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-base-500 text-2xl font-semibold">
              Key Features
            </h2>
            <p className="text-base-600">
              <strong>Companion app</strong> for the new Dragon Ball Sparking
              Zero game.
            </p>
            <p className="text-base-600">
              <strong>Complete Character Database:</strong> View the complete
              roster and every character&#39;s complete moveset, including
              Skills, Blasts, and Ultimate techniques.
            </p>
            <p className="text-base-600">
              <strong>Advanced Search & Filtering:</strong> Easily find
              characters with convenient search and filter.
            </p>
            <p className="text-base-600">
              <strong>Team Builder:</strong> Plan, build, and save your favorite
              teams with the convenient team creator.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-base-500 mb-4 text-2xl font-semibold">
              Technical Overview
            </h2>

            <div className="mb-8">
              <h3 className="text-base-400 mb-2 text-xl font-semibold">
                Architecture
              </h3>
              <ul className="text-base-600 list-inside list-disc space-y-1 pl-4">
                <li>
                  Built with SwiftUI and SwiftData for a modern, declarative UI
                  and robust data persistence
                </li>
                <li>
                  Follows MVVM architecture pattern with clear separation of
                  concerns
                </li>
                <li>
                  Implements composition over inheritance for maximum code
                  reusability
                </li>
                <li>
                  Uses dependency injection through SwiftUI environment for
                  better testability
                </li>
              </ul>
            </div>
            {/* Data Management Section */}
            <div className="mb-8">
              <h3 className="text-base-400 mb-2 text-xl font-semibold">
                Data Management
              </h3>
              <ul className="text-base-600 list-inside list-disc space-y-1 pl-4">
                <li>SwiftData models with complex relationships:</li>
                <ul className="list-inside list-disc space-y-1 pl-6">
                  <li>Characters with transformations and moves</li>
                  <li>Teams with character junctions</li>
                  <li>
                    Many-to-many relationships handled through junction tables
                  </li>
                </ul>
                <li>Efficient data loading with pagination and lazy loading</li>
                <li>
                  Custom filter and sort implementations for optimal performance
                </li>
              </ul>
            </div>
            {/* Memory Optimization Section */}
            <div className="mb-8">
              <h3 className="text-base-400 mb-2 text-xl font-semibold">
                Memory Optimization
              </h3>
              <ul className="text-base-600 list-inside list-disc space-y-1 pl-4">
                <li>Implements custom image caching system using NSCache</li>
                <li>Lazy loading of grid items and views</li>
                <li>Memory-efficient cell reuse in grid layouts</li>
                <li>Optimized view hierarchies to minimize memory footprint</li>
              </ul>
            </div>
            {/* UI Components Section */}
            <div>
              <h3 className="text-base-400 mb-2 text-xl font-semibold">
                UI Components
              </h3>
              <ul className="text-base-600 list-inside list-disc space-y-1 pl-4">
                <li>Custom grid implementation with adaptive layouts</li>
                <li>Fluid animations and transitions</li>
                <li>Dark mode support with custom color schemes</li>
                <li>iPad and iPhone adaptivity</li>
                <li>Advanced search and filtering capabilities</li>
                <li>Custom UI components:</li>
                <ul className="list-inside list-disc space-y-1 pl-6">
                  <li>Character cards with dynamic stat displays</li>
                  <li>Team management interface</li>
                  <li>Character transformation tracking</li>
                  <li>Move set visualization</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-8 max-w-4xl text-center">
          <a
            href="/ipa/Sparking Teams-v1.0.ipa"
            download
            className="btn btn-accent text-accent-content"
          >
            Download Sparking Teams v1.0
          </a>
        </div>

        {/* Image Gallery */}
        <div className="carousel carousel-center mx-auto max-w-7xl space-x-4 rounded-box p-4">
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
    </Layout>
  );
}
