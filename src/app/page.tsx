// src/app/page.tsx
import Resume from "./resume";
import Apps from "./apps";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-600 to-gray-900 p-8 text-gray-300">
      {/* Main Welcome Section */}
      <header className="mb-16 flex max-w-3xl flex-col items-center text-center">
        <h1 className="mb-4 text-6xl font-thin tracking-wide text-gray-100">
          Welcome.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-gray-400">
          My name is Danny Echeverri, a Full Stack Software Engineer. I create
          high-performance software solutions with a focus on front-end,
          back-end, and mobile technologies. I thrive in collaborative and
          innovative environments.
        </p>
      </header>

      {/* Main Content Layout with Two Columns */}
      <main className="flex w-full max-w-7xl flex-col items-start gap-8 md:flex-row">
        {/* Left Column: Contact and Work History */}
        <div className="grid grid-cols-2 gap-4">
          <Resume />
          {/* <Apps /> */}
          <div className="pt-5">
            <Projects />
          </div>
        </div>

        {/* Right Column: Projects Section */}
        <div className="flex-1 self-start"></div>
      </main>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2024 Danny Echeverri |{" "}
        <a
          href="https://github.com/decheverri123"
          className="text-gray-400 transition hover:text-yellow-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/danny-echeverri/"
          className="text-gray-400 transition hover:text-yellow-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
