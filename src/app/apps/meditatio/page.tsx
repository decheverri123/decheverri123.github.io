// src/app/apps/meditatio/page.tsx

import Layout from "../../LayoutHeader";
import Link from "next/link";
import Image from "next/image";

export default function Meditatio() {
  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-8 px-12 text-base-content">
        <h1 className="mb-8 flex flex-row items-center justify-center text-center text-4xl font-bold text-white">
          Meditatio
        </h1>

        <Link href="https://apps.apple.com/us/app/meditat-io/id6737626840">
          <button className="hover:bg-secondary-focus btn btn-secondary mx-auto mb-12 flex w-64 text-secondary-content">
            View on App Store
          </button>
        </Link>

        <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="relative space-y-6">
            {/* Decorative element */}
            <div className="absolute -left-4 -top-4 h-16 w-16 border-l-4 border-t-4 border-primary opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b-4 border-r-4 border-secondary opacity-30"></div>

            <h2 className="text-2xl font-semibold text-white">
              App Description
            </h2>
            <p className="text-lg text-base-content">
              Transform your daily experiences into meaningful insights with
              Meditatio, a journaling app rooted in Stoic philosophy. This
              journal helps you examine your reactions to life&#39;s events and
              develop emotional resilience through structured self-reflection.
            </p>
            <h2 className="text-2xl font-semibold text-white">Key Features</h2>

            <div className="relative">
              {/* Three-Step Reflection Process */}
              <div className="mb-6 border-l-2 border-accent pl-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Three-Step Reflection Process
                </h3>
                <ul className="list-inside list-disc space-y-1 text-base-content">
                  <li>Record the event that occurred</li>
                  <li>Examine your opinions and judgments about it</li>
                  <li>Analyze your emotional reactions</li>
                  <li>Reflect on the rationality of your responses</li>
                </ul>
              </div>

              {/* Daily Stoic Wisdom */}
              <div className="mb-6 border-l-2 border-accent pl-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Daily Stoic Wisdom
                </h3>
                <ul className="list-inside list-disc space-y-1 text-base-content">
                  <li>
                    Curated collection of quotes from ancient Stoic philosophers
                  </li>
                  <li>Save your favorite quotes for easy reference</li>
                  <li>Daily inspiration to guide your practice</li>
                </ul>
              </div>

              {/* Privacy & Security */}
              <div className="mb-6 border-l-2 border-accent pl-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Privacy & Security
                </h3>
                <ul className="list-inside list-disc space-y-1 text-base-content">
                  <li>Your reflections stay private and protected</li>
                  <li>No third-party tracking</li>
                </ul>
              </div>

              {/* Perfect for */}
              <div className="border-l-2 border-accent pl-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Perfect for:
                </h3>
                <ul className="list-inside list-disc space-y-1 text-base-content">
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
          <div className="relative space-y-6">
            {/* Decorative element */}
            <div className="absolute -right-4 -top-4 h-16 w-16 border-r-4 border-t-4 border-secondary opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 border-b-4 border-l-4 border-primary opacity-30"></div>

            <h2 className="text-2xl font-semibold text-white">
              Technical Overview
            </h2>

            {/* Architecture & Core Technologies */}
            <div className="rounded-lg bg-base-200 p-4 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Architecture & Core Technologies
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-base-content">
                <li>Built with SwiftUI and structured using MVVM pattern</li>
                <li>
                  Leverages SwiftData for persistent storage and data modeling
                </li>
              </ul>
            </div>

            {/* Authentication & Security */}
            <div className="rounded-lg bg-base-200 p-4 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Authentication & Security
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-base-content">
                <li>Multi-provider authentication system supporting:</li>
                <ul className="list-inside list-disc space-y-1 pl-6 text-base-content">
                  <li>Sign in with Apple using AuthenticationServices</li>
                  <li>Google Sign-In via GoogleSignIn-iOS</li>
                </ul>

                <li>
                  Implements proper OAuth flow handling and token management
                </li>
              </ul>
            </div>

            {/* Data Layer */}
            <div className="rounded-lg bg-base-200 p-4 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Data Layer
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-base-content">
                <li>Robust data modeling using SwiftData @Model macro</li>
                <li>Efficient querying with @Query property wrapper</li>
              </ul>
            </div>

            {/* Widget Support */}
            <div className="rounded-lg bg-base-200 p-4 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Widget Support
              </h3>
              <ul className="list-inside list-disc space-y-1 pl-4 text-base-content">
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
