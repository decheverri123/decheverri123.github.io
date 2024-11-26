// src/app/page.tsx

import Layout from "./LayoutHeader";
import Image from "next/image";
import TimelineItem from "@/components/TimelineItem";
import SkillCard from "@/components/SkillCard";
import {
  SiCsharp,
  SiPython,
  SiTypescript,
  SiDart,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiDocker,
  SiKubernetes,
  SiDotnet,
  SiJenkins,
  SiAzuredevops,
  SiAmazonwebservices,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GB, ES } from "country-flag-icons/react/3x2";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen w-full p-4 text-white sm:p-8 md:px-16 lg:px-24">
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
          <h2 className="mb-4 text-center text-2xl font-semibold text-secondary">
            Skills & Tech
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <SkillCard icon={SiCsharp} label="C#" iconColor="#512BD4" />
            <SkillCard icon={SiPython} label="Python" iconColor="#3776AB" />
            <SkillCard icon={FaJava} label="Java" iconColor="#007396" />
            <SkillCard
              icon={SiTypescript}
              label="TypeScript"
              iconColor="#3178C6"
            />
            <SkillCard icon={SiDart} label="Dart" iconColor="#0175C2" />
            <SkillCard
              icon={SiHtml5}
              secondaryIcon={SiCss3}
              label="HTML/CSS"
              iconColor="#E34F26"
              secondaryIconColor="#1572B6"
            />
            <SkillCard icon={SiAngular} label="Angular" iconColor="#DD0031" />
            <SkillCard
              icon={SiReact}
              secondaryIcon={SiNextdotjs}
              label="React/Next.js"
              iconColor="#61DAFB"
              secondaryIconColor="#FFFFFF"
            />
            <SkillCard
              icon={SiTailwindcss}
              label="Tailwind"
              iconColor="#06B6D4"
            />
            <SkillCard icon={SiFlutter} label="Flutter" iconColor="#02569B" />
            <SkillCard
              icon={SiAmazonwebservices}
              label="AWS"
              iconColor="#FF9900"
            />
            <SkillCard icon={SiDocker} label="Docker" iconColor="#2496ED" />
            <SkillCard
              icon={SiKubernetes}
              label="Kubernetes"
              iconColor="#326CE5"
            />
            <SkillCard icon={SiDotnet} label=".NET" iconColor="#B794F4" />
            <SkillCard icon={SiJenkins} label="Jenkins" iconColor="#D24939" />
            <SkillCard
              icon={SiAzuredevops}
              label="Azure DevOps"
              iconColor="#B794F4"
            />
          </div>
        </section>

        {/* Languages Section */}
        <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-base-200 p-6 shadow-xl">
          <h2 className="mb-4 text-center text-2xl font-semibold text-secondary">
            Languages
          </h2>
          <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-2">
            <SkillCard
              icon={GB}
              label="English - Native"
              iconColor="#FFFFFF"
              customSize={{ width: "80px", height: "80px" }}
            />
            <SkillCard
              icon={ES}
              label="Spanish - Native"
              iconColor="#FFFFFF"
              customSize={{ width: "80px", height: "80px" }}
            />
          </div>
        </section>

        <div className="flex flex-row items-center justify-center gap-4">
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
              width={70}
              height={70}
              className="object-contain"
            />
            <Image
              src="/daisy.svg"
              alt="Daisy UI Logo"
              width={110}
              height={110}
              className="object-contain"
            />
          </div>
        </div>
        <div className="mx-auto my-10 max-w-2xl text-center text-lg">
          <strong className="font-extralight text-base-content">
            This website is a work in progress and still under construction.
          </strong>
        </div>
      </div>
    </Layout>
  );
}
