// src/app/Resume.tsx

export default function Resume() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mt-6">
      {/* Contact Section */}
      <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full">
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

      {/* Work History Section */}
      <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Work History</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Software Engineer II</h3>
          <p className="text-gray-400">
            2022 - Current | Data Innovations, Charleston, SC
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
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
    </div>
  );
}
