// src/app/apps/meditatio/page.tsx

import Layout from "../../LayoutHeader";
import Link from "next/link";

export default function Meditatio() {
  return (
    <Layout>
      <div className="min-h-screen w-full p-8 px-12 text-gray-300">
        <h1 className="mb-8 flex flex-row items-center justify-center text-center text-4xl font-bold">
          Meditatio
        </h1>

        <Link href="https://apps.apple.com/us/app/meditat-io/id6737626840">
          <button className="btn btn-primary mx-auto mb-12 flex w-64">
            View on App Store
          </button>
        </Link>

        {/* Two-Column Layout for Description and Technical Overview */}
        <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column: App Description and Key Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              App Description
            </h2>
            <p className="text-lg">
              Transform your daily experiences into meaningful insights with
              Meditatio, a journaling app rooted in Stoic philosophy. This
              journal helps you examine your reactions to life&#39;s events and
              develop emotional resilience through structured self-reflection.
            </p>
            <h2 className="text-2xl font-semibold text-gray-200">
              Key Features
            </h2>

            <div className="text-left text-gray-400">
              {/* Three-Step Reflection Process */}
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-100">
                  Three-Step Reflection Process
                </h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>Record the event that occurred</li>
                  <li>Examine your opinions and judgments about it</li>
                  <li>Analyze your emotional reactions</li>
                  <li>Reflect on the rationality of your responses</li>
                </ul>
              </div>

              {/* Daily Stoic Wisdom */}
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-100">
                  Daily Stoic Wisdom
                </h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Curated collection of quotes from ancient Stoic philosophers
                  </li>
                  <li>Save your favorite quotes for easy reference</li>
                  <li>Daily inspiration to guide your practice</li>
                </ul>
              </div>

              {/* Privacy & Security */}
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-100">
                  Privacy & Security
                </h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>Your reflections stay private and protected</li>
                  <li>No third-party tracking</li>
                </ul>
              </div>

              {/* Perfect for Section */}
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-100">
                  Perfect for:
                </h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Anyone interested in personal growth and self-reflection
                  </li>
                  <li>Students of Stoic philosophy</li>
                  <li>
                    Those seeking to manage stress and emotional reactions
                  </li>
                  <li>People working to build resilience and mental clarity</li>
                  <li>
                    Anyone wanting to develop a more rational approach to
                    life&#39;s challenges
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Overview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              Technical Overview
            </h2>

            {/* Architecture & Core Technologies */}
            <div className="text-gray-400">
              <h3 className="mb-2 text-xl font-semibold text-gray-100">
                Architecture & Core Technologies
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4">
                <li>Built with SwiftUI and structured using MVVM pattern</li>
                <li>
                  Leverages SwiftData for persistent storage and data modeling
                </li>
              </ul>
            </div>

            {/* Authentication & Security */}
            <div className="text-gray-400">
              <h3 className="mb-2 text-xl font-semibold text-gray-100">
                Authentication & Security
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4">
                <li>Multi-provider authentication system supporting:</li>
                <ul className="list-inside list-disc space-y-1 pl-6">
                  <li>Sign in with Apple using AuthenticationServices</li>
                  <li>Google Sign-In via GoogleSignIn-iOS</li>
                </ul>

                <li>
                  Implements proper OAuth flow handling and token management
                </li>
              </ul>
            </div>

            {/* Data Layer */}
            <div className="text-gray-400">
              <h3 className="mb-2 text-xl font-semibold text-gray-100">
                Data Layer
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4">
                <li>Robust data modeling using SwiftData @Model macro</li>
                <li>Efficient querying with @Query property wrapper</li>
              </ul>
            </div>
            {/* Data Layer */}
            <div className="text-gray-400">
              <h3 className="mb-2 text-xl font-semibold text-gray-100">
                Widget Support
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4">
                <li>
                  Uses WidgetKit to allow for home screen customization and
                  quick app launch.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsive Image Gallery Carousel */}
        <div className="carousel carousel-center mx-auto max-w-7xl space-x-4 rounded-box bg-neutral p-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="carousel-item">
              <img
                src={`/assets/apps/meditatio/0${num}.png`}
                alt={`Meditatio screenshot ${num}`}
                className="h-96 w-auto rounded-box"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
