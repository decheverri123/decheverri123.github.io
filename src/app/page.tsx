// src/app/page.tsx
import Resume from "./resume";
import Apps from "./apps";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Danny Echeverri
        </h1>
        <p className="text-lg text-center sm:text-left">
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

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer links */}
      </footer>
    </div>
  );
}
