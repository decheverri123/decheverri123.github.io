// src/app/apps/meditatio/page.tsx
import Image from "next/image";
import Layout from "../../LayoutHeader";

export default function Meditatio() {
  return (
    <Layout>
      <div className="min-h-screen w-full p-8 px-12 text-gray-300">
        <h1 className="mb-8 text-center text-4xl font-semibold">Meditatio</h1>
        {/* Description Section */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-4 text-lg">
            Transform your daily experiences into meaningful insights with
            Meditatio, a journaling app rooted in Stoic philosophy. This journal
            helps you examine your reactions to life&#39;s events and develop
            emotional resilience through structured self-reflection.
          </p>
          <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
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
                <li>
                  Anyone interested in personal growth and self-reflection
                </li>
                <li>Students of Stoic philosophy</li>
                <li>Those seeking to manage stress and emotional reactions</li>
                <li>People working to build resilience and mental clarity</li>
                <li>
                  Anyone wanting to develop a more rational approach to
                  life&#39;s challenges
                </li>
              </ul>
            </div>
          </div>
          {/* Responsive Image Gallery Section */}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-4 overflow-x-auto md:flex-nowrap md:gap-0">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="relative h-[350px] w-48 flex-shrink-0 sm:h-[500px] sm:w-60 md:h-[650px] md:w-64 lg:h-[800px] lg:w-[380px] xl:h-[700px] xl:w-[350px]"
            >
              <Image
                src={`/assets/apps/meditatio/0${num}.png`}
                alt={`Sparking Teams screenshot ${num}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
