// src/app/apps/meditatio/page.tsx
import Image from "next/image";

export default function Meditatio() {
  return (
    <div className="min-h-screen w-full bg-gray-900 p-8 px-12 text-gray-300">
      <h1 className="mb-8 text-center text-4xl font-semibold text-yellow-400">
        Meditatio
      </h1>

      {/* Image Gallery Section */}
      <div className="grid grid-cols-6 items-center justify-center">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="relative mx-auto h-[600px] w-[250px] flex-shrink-0"
          >
            <Image
              src={`/assets/apps/meditatio/0${num}.png`}
              alt={`Meditatio screenshot ${num}`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="mb-4 text-lg">
          Transform your daily experiences into meaningful insights with
          Meditatio, a journaling app rooted in Stoic philosophy. This journal
          helps you examine your reactions to life&#39;s events and develop
          emotional resilience through structured self-reflection.
        </p>

        <h2 className="mb-4 text-2xl font-semibold text-yellow-400">
          Key Features
        </h2>

        <div className="text-left text-gray-400">
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

          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold text-gray-100">
              Privacy & Security
            </h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Your reflections stay private and protected</li>
              <li>No third-party tracking</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-100">
              Perfect for:
            </h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Anyone interested in personal growth and self-reflection</li>
              <li>Students of Stoic philosophy</li>
              <li>Those seeking to manage stress and emotional reactions</li>
              <li>People working to build resilience and mental clarity</li>
              <li>
                Anyone wanting to develop a more rational approach to life&#39;s
                challenges
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
