// src/app/apps/sparking-teams/page.tsx
import Image from "next/image";

export default function SparkingTeams() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-600 to-gray-900 p-8 px-12 text-gray-300">
      <h1 className="mb-8 text-center text-4xl font-semibold text-yellow-400">
        Sparking Teams
      </h1>

      {/* Two-Column Layout for Feature Description and Technical Overview */}
      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left Column: Feature Description */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-yellow-400">
            Key Features
          </h2>
          <p>
            <strong>Complete Character Database:</strong> View the complete
            roster and every character&#39;s complete moveset, including Skills,
            Blasts, and Ultimate techniques.
          </p>
          <p>
            <strong>Advanced Search & Filtering:</strong> Easily find characters
            with convenient search and filter.
          </p>
          <p>
            <strong>Team Builder:</strong> Plan, build, and save your favorite
            teams with the convenient team creator.
          </p>
        </div>

        {/* Right Column: Technical Overview */}
        <div className="text-gray-400">
          <h2 className="mb-4 text-2xl font-semibold text-yellow-400">
            Technical Overview
          </h2>

          {/* Architecture Section */}
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-semibold text-gray-100">
              Architecture
            </h3>
            <ul className="list-inside list-disc space-y-1 pl-4">
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
                Uses dependency injection through SwiftUI environment for better
                testability
              </li>
            </ul>
          </div>

          {/* Data Management Section */}
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-semibold text-gray-100">
              Data Management
            </h3>
            <ul className="list-inside list-disc space-y-1 pl-4">
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
            <h3 className="mb-2 text-xl font-semibold text-gray-100">
              Memory Optimization
            </h3>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>Implements custom image caching system using NSCache</li>
              <li>Lazy loading of grid items and views</li>
              <li>Memory-efficient cell reuse in grid layouts</li>
              <li>Optimized view hierarchies to minimize memory footprint</li>
            </ul>
          </div>

          {/* UI Components Section */}
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-100">
              UI Components
            </h3>
            <ul className="list-inside list-disc space-y-1 pl-4">
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

      {/* Responsive Image Gallery Section */}
      <div className="flex flex-wrap justify-center gap-4 overflow-x-auto md:flex-nowrap md:gap-0">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="relative h-[250px] w-48 flex-shrink-0 sm:h-[500px] sm:w-60 md:h-[650px] md:w-64 lg:h-[800px] lg:w-[380px] xl:h-[700px] xl:w-[350px]"
          >
            <Image
              src={`/assets/apps/sparking/0${num}.png`}
              alt={`Sparking Teams screenshot ${num}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
