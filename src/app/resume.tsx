// src/app/Resume.tsx

import Link from "next/link";

export default function Resume() {
  return (
    <div className="mt-6 flex w-full max-w-6xl flex-col gap-6">
      {/* Contact Section */}
      <section className="w-full rounded-lg bg-gray-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
        <p>Location: Mt. Pleasant, South Carolina, 29464</p>
        <p>
          Email:{" "}
          <Link
            href="mailto:decheverri123@gmail.com"
            className="text-blue-400 underline"
          >
            decheverri123@gmail.com
          </Link>
        </p>
        <p>
          GitHub:{" "}
          <Link
            href="https://github.com/decheverri123"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/decheverri123
          </Link>
        </p>
        <p>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/danny-echeverri/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/danny-echeverri/
          </Link>
        </p>
      </section>

      {/* Work History Section */}
      <section className="w-full rounded-lg bg-gray-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Work History</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Software Engineer II</h3>
          <p className="text-gray-400">
            2022 - Current | Data Innovations, Charleston, SC
          </p>
          <ul className="mt-2 list-inside list-disc space-y-2">
            <li>
              Revitalized Data Innovation’s flagship product, transitioning the
              UI to Angular and the backend to a cloud-native architecture.
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
          <p className="text-gray-400">2020 – 2022 | Microsoft, Seattle, WA</p>
          <ul className="mt-2 list-inside list-disc space-y-2">
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
    </div>
  );
}
