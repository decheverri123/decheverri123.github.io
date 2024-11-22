// src/app/page.tsx

import Layout from "./LayoutHeader";
import Image from "next/image";
import TimelineItem from "@/components/TimelineItem";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen w-full p-4 sm:p-8 md:px-16 lg:px-24">
        <h1 className="mb-4 text-center text-2xl font-semibold text-primary sm:mb-8 sm:text-3xl md:text-4xl">
          Danny Echeverri
        </h1>
        <p className="mx-auto mb-8 max-w-xl px-4 text-center text-sm text-base-content sm:mb-12 sm:max-w-2xl sm:px-0 sm:text-base md:text-lg">
          Full Stack Software Engineer with expertise across front-end,
          back-end, and mobile technologies. Specialized in crafting
          high-performance software solutions, I bring a track record of driving
          projects from concept to completion through agile methodologies and
          cross-functional team collaboration. With a passion for continuous
          learning and innovation, I excel in environments that challenge my
          technical prowess and collaborative spirit.
        </p>

        {/* Work History Section */}
        <section className="mx-auto mb-8 max-w-full rounded-lg bg-base-200 p-4 shadow-xl sm:max-w-4xl sm:p-6">
          <h1 className="font-center mb-4 text-center text-xl font-bold text-secondary sm:text-2xl">
            Work History
          </h1>
          <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
            <TimelineItem
              date="2022 - 2024"
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
        <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-base-200 p-6 shadow-xl">
          <h2 className="mb-4 text-2xl font-semibold text-secondary">
            Skills & Tech
          </h2>
          <div className="space-y-2 text-accent">
            <p className="text-base-content">
              <span className="font-semibold">Programming Languages:</span> C#,
              Python, Java, JavaScript/TypeScript, Visual Basic, Dart
            </p>
            <p className="text-base-content">
              <span className="font-semibold">Web Technologies:</span> HTML/CSS,
              Angular, React/Next.js, Tailwind
            </p>
            <p className="text-base-content">
              <span className="font-semibold">Mobile App Development:</span>{" "}
              Flutter
            </p>
            <p className="text-base-content">
              <span className="font-semibold">Cloud Technologies:</span> AWS,
              Docker, Kubernetes
            </p>
            <p className="text-base-content">
              <span className="font-semibold">Frameworks:</span> .NET
              Development
            </p>
            <p className="text-base-content">
              <span className="font-semibold">CI/CD:</span> Jenkins, Azure
              DevOps
            </p>
          </div>
        </section>

        {/* Languages Section */}
        <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-base-200 p-6 shadow-xl">
          <h2 className="mb-4 text-2xl font-semibold text-secondary">
            Languages
          </h2>
          <div className="space-y-2 text-base-content">
            <p>English - Native</p>
            <p>Spanish - Native</p>
          </div>
        </section>

        <div className="flex flex-row items-center justify-center gap-12">
          <h3 className="text-lg font-semibold text-secondary">Powered by:</h3>
          <div className="flex items-center gap-4">
            <Image
              src="/next.webp"
              alt="Next.js Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <Image
              src="/tailwind.png"
              alt="Tailwind Logo"
              width={90}
              height={90}
              className="object-contain"
            />
            <Image
              src="/daisy.svg"
              alt="Daisy UI Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        </div>
        <div className="mx-auto my-10 max-w-2xl text-center text-lg">
          <strong className="text-error">
            This website is a work in progress and still under construction.
          </strong>
        </div>
      </div>
    </Layout>
  );
}
