// src/app/page.tsx
import Resume from "./resume";
import Apps from "./apps";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 rounded-lg bg-gradient-to-br from-gray-600 to-gray-900 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex w-full max-w-7xl flex-col items-center gap-8 sm:items-start">
        <h1 className="text-center text-4xl font-bold sm:text-left">
          Danny Echeverri
        </h1>
        <p className="text-center text-lg sm:text-left">
          Full Stack Software Engineer with expertise across front-end,
          back-end, and mobile technologies. Specialized in crafting
          high-performance software solutions, I bring a track record of driving
          projects from concept to completion through agile methodologies and
          cross-functional team collaboration.
        </p>

        {/* Resume Section */}
        <Resume />

        {/* Apps Section */}
        <Apps />
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        {/* Footer links */}
      </footer>
    </div>
  );
}
