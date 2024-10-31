// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center   sm:text-left">
          Danny Echeverri
        </h1>
        <p className="text-lg text-center sm:text-left">
          Full Stack Software Engineer with expertise across
          front-end,back-end,and mobile technologies. Specialized in crafting
          high-performance software solutions, I bring a track record of driving
          projects from concept to completion through agile methodologies and
          cross-functional team collaboration. With a passion for continuous
          learning and innovation, I excel in environments that challenge my
          technical prowess and collaborative spirit.
        </p>

        <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Location: Mt. Pleasant, South Carolina, 29464</p>
          <p>
            Email:{" "}
            <a
              href="mailto:decheverri123@gmail.com"
              className="text-blue-400 underline"
            >
              decheverri123@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/decheverri123"
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/decheverri123
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/danny-echeverri/"
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/danny-echeverri/
            </a>
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl mt-6">
          <h2 className="text-2xl font-semibold mb-4">Work History</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Software Engineer II</h3>
            <p className="text-gray-400">
              2022 - Current | Data Innovations, Charleston, SC
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                Revitalized Data Innovation’s flagship product, transitioning
                the UI to Angular and the backend to a cloud-native
                architecture.
              </li>
              <li>
                Implemented CI/CD pipelines with Jenkins, AWS, Docker, and
                Kubernetes, improving deployment efficiency and reliability.
              </li>
              <li>
                Developer on a greenfield Flutter project, creating a
                cross-platform mobile app with thorough testing.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-400">
              2020 – 2022 | Microsoft, Seattle, WA
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                Developed high-performance solutions in C# and .NET based on
                project requirements.
              </li>
              <li>
                Worked with cross-functional teams to deliver scalable solutions
                in Azure DevOps and ReactJS.
              </li>
              <li>
                Built CI/CD pipelines in Azure DevOps, ensuring quality and
                stability of changes for Microsoft engineers.
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl mt-6">
          <h2 className="text-2xl font-semibold mb-4">Skills & Tech</h2>
          <p>
            Programming Languages: C#, Python, Java, JavaScript/TypeScript,
            Visual Basic, Dart
          </p>
          <p>Web Technologies: HTML/CSS, Angular, React/Next.js, Tailwind</p>
          <p>Mobile App Development: Flutter</p>
          <p>Cloud Technologies: AWS, Docker, Kubernetes</p>
          <p>Frameworks: .NET Development</p>
          <p>CI/CD: Jenkins, Azure DevOps</p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl mt-6">
          <h2 className="text-2xl font-semibold mb-4">Languages</h2>
          <p>Spanish - Native</p>
          <p>English - Native</p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl mt-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p>
            2015 – 2019 Bachelor of Arts: Computer Science, Amherst College -
            Amherst, MA
          </p>
          <p>
            2015 – 2019 Bachelor of Arts: Neuroscience, Amherst College -
            Amherst, MA
          </p>
        </section>
      </main>

      {/* Apps Section */}
      <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Apps</h2>
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="relative w-full h-32">
              <Image
                src={`/assets/apps/sparking/0${num}.png`}
                alt={`App screenshot ${num}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
