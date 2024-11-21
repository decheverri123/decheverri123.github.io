// src/app/apps/meditatio/page.tsx

import Layout from "../../LayoutHeader";
import Link from "next/link";
import Image from "next/image";

export default function Meditatio() {
  return (
    <Layout>
      <div className="min-h-screen w-full p-8 px-12">
        <h1 className="text-base-600 mb-8 flex flex-row items-center justify-center text-center text-4xl font-bold">
          Meditatio
        </h1>

        <Link href="https://apps.apple.com/us/app/meditat-io/id6737626840">
          <button className="btn btn-secondary mx-auto mb-12 flex w-64 text-secondary-content">
            View on App Store
          </button>
        </Link>

        <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-base-500 text-2xl font-semibold">
              App Description
            </h2>
            <p className="text-base-600 text-lg">
              Transform your daily experiences into meaningful insights with
              Meditatio, a journaling app rooted in Stoic philosophy. This
              journal helps you examine your reactions to life&#39;s events and
              develop emotional resilience through structured self-reflection.
            </p>
            <h2 className="text-base-500 text-2xl font-semibold">
              Key Features
            </h2>

            <div>
              {/* Three-Step Reflection Process */}
              <div className="mb-6">
                <h3 className="text-base-400 mb-2 text-xl font-semibold">
                  Three-Step Reflection Process
                </h3>
                <ul className="text-base-600 list-inside list-disc space-y-1">
                  <li>Record the event that occurred</li>
                  <li>Examine your opinions and judgments about it</li>
                  <li>Analyze your emotional reactions</li>
                  <li>Reflect on the rationality of your responses</li>
                </ul>
              </div>

              {/* Daily Stoic Wisdom */}
              <div className="mb-6">
                <h3 className="text-base-400 mb-2 text-xl font-semibold">
                  Daily Stoic Wisdom
                </h3>
                <ul className="text-base-600 list-inside list-disc space-y-1">
                  <li>
                    Curated collection of quotes from ancient Stoic philosophers
                  </li>
                  <li>Save your favorite quotes for easy reference</li>
                  <li>Daily inspiration to guide your practice</li>
                </ul>
              </div>

              {/* Privacy & Security */}
              <div className="mb-6">
                <h3 className="text-base-400 mb-2 text-xl font-semibold">
                  Privacy & Security
                </h3>
                <ul className="text-base-600 list-inside list-disc space-y-1">
                  <li>Your reflections stay private and protected</li>
                  <li>No third-party tracking</li>
                </ul>
              </div>

              {/* Perfect for Section */}
              <div>
                <h3 className="text-base-400 mb-2 text-xl font-semibold">
                  Perfect for:
                </h3>
                <ul className="text-base-600 list-inside list-disc space-y-1">
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

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-base-500 text-2xl font-semibold">
              Technical Overview
            </h2>

            {/* Architecture & Core Technologies */}
            <div>
              <h3 className="text-base-400 mb-2 text-xl font-semibold">
                Architecture & Core Technologies
              </h3>
              <ul className="text-base-600 list-inside list-disc space-y-1 pl-4">
                <li>Built with SwiftUI and structured using MVVM pattern</li>
                <li>
                  Leverages SwiftData for persistent storage and data modeling
                </li>
              </ul>
            </div>

            {/* Authentication & Security */}
            <div>
              <h3 className="text-base-400 mb-2 text-xl font-semibold">
                Authentication & Security
              </h3>
              <ul className="text-base-600 list-inside list-disc space-y-1 pl-4">
                <li>Multi-provider authentication system supporting:</li>
                <ul className="text-base-600 list-inside list-disc space-y-1 pl-6">
                  <li>Sign in with Apple using AuthenticationServices</li>
                  <li>Google Sign-In via GoogleSignIn-iOS</li>
                </ul>

                <li>
                  Implements proper OAuth flow handling and token management
                </li>
              </ul>
            </div>

            {/* Data Layer */}
            <div>
              <h3 className="text-base-400 mb-2 text-xl font-semibold">
                Data Layer
              </h3>
              <ul className="text-base-600 list-inside list-disc space-y-1 pl-4">
                <li>Robust data modeling using SwiftData @Model macro</li>
                <li>Efficient querying with @Query property wrapper</li>
              </ul>
            </div>
            {/* Data Layer */}
            <div>
              <h3 className="text-base-400 mb-2 text-xl font-semibold">
                Widget Support
              </h3>
              <ul className="text-base-600 list-inside list-disc space-y-1 pl-4">
                <li>
                  Uses WidgetKit to allow for home screen customization and
                  quick app launch.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="flex w-full justify-center">
          <div className="carousel carousel-center max-w-7xl space-x-4 rounded-box p-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="carousel-item">
                <Image
                  src={`/assets/apps/meditatio/0${num}.png`}
                  alt={`Meditatio screenshot ${num}`}
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
