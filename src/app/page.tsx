// src/app/page.tsx

import Layout from "./LayoutHeader";

export default function HomePage() {
  return (
    <Layout>
      <h1 className="mb-8 text-center text-4xl font-semibold text-gray-200">
        Danny Echeverri
      </h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-lg">
        Full Stack Software Engineer with expertise across front-end, back-end,
        and mobile technologies. Specialized in crafting high-performance
        software solutions, I bring a track record of driving projects from
        concept to completion through agile methodologies and cross-functional
        team collaboration. With a passion for continuous learning and
        innovation, I excel in environments that challenge my technical prowess
        and collaborative spirit.
      </p>

      {/* Work History Section */}
      <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-gray-800 p-6 shadow-md">
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

      {/* Skills & Tech Section */}
      <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-gray-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Skills & Tech</h2>
        <p>
          Programming Languages: C#, Python, Java, JavaScript/TypeScript, Visual
          Basic, Dart
        </p>
        <p>Web Technologies: HTML/CSS, Angular, React/Next.js, Tailwind</p>
        <p>Mobile App Development: Flutter</p>
        <p>Cloud Technologies: AWS, Docker, Kubernetes</p>
        <p>Frameworks: .NET Development</p>
        <p>CI/CD: Jenkins, Azure DevOps</p>
      </section>

      {/* Languages Section */}
      <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-gray-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Languages</h2>
        <p>Spanish - Native</p>
        <p>English - Native</p>
      </section>

      {/* Education Section */}
      <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-gray-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Education</h2>
        <p>
          2015 – 2019 Bachelor of Arts: Computer Science, Amherst College -
          Amherst, MA
        </p>
        <p>
          2015 – 2019 Bachelor of Arts: Neuroscience, Amherst College - Amherst,
          MA
        </p>
      </section>
      <div className="mx-auto mb-12 max-w-2xl text-center text-lg">
        <strong className="text-red-300">
          This website is a work in progress and still under construction.
        </strong>
      </div>
    </Layout>
  );
}
