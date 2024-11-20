// src/app/page.tsx

import Layout from "./LayoutHeader";
import Image from "next/image";
import TimelineItem from "@/components/TimelineItem";

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
        <h1 className="font-center mb-4 text-center font-bold">Work History</h1>
        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
          <TimelineItem
            date="2022 - Current"
            title="Software Engineer II"
            subtitle="Data Innovations"
            position="start"
            bulletPoints={[
              "Revitalized Data Innovation's flagship product, transitioning the UI to Angular and the backend to a cloud-native architecture.",
              "Implemented CI/CD pipelines with Jenkins, AWS, Docker, and Kubernetes, improving deployment efficiency and reliability.",
              "Developer on a greenfield Flutter project, creating a cross-platform mobile app with thorough testing.",
            ]}
          />

          <TimelineItem
            date="2020 - 2022"
            title="Software Engineer"
            subtitle="Microsoft"
            position="end"
            bulletPoints={[
              "Developed high-performance solutions in C# and .NET based on project requirements.",
              "Worked with cross-functional teams to deliver scalable solutions in Azure DevOps and ReactJS.",
              "Built CI/CD pipelines in Azure DevOps, ensuring quality and stability of changes for Microsoft engineers.",
            ]}
          />

          <TimelineItem
            date="2015 - 2019"
            title="Education"
            subtitle="Amherst College - Amherst, MA"
            position="start"
            bulletPoints={[
              "Bachelor of Arts: Computer Science",
              "Bachelor of Arts: Neuroscience",
            ]}
          />
        </ul>
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

      <div className="flex flex-col items-center justify-center space-x-2">
        <h3 className="mb-2 text-lg font-semibold">Powered by:</h3>
        <Image src="/next.svg" alt="Next.js Logo" width={100} height={30} />
      </div>

      <div className="mx-auto my-10 max-w-2xl text-center text-lg">
        <strong className="text-red-300">
          This website is a work in progress and still under construction.
        </strong>
      </div>
    </Layout>
  );
}
