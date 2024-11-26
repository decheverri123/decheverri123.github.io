import SkillCard from "./SkillCard";
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
  SiSwift,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-base-200 p-6 shadow-xl">
      <h2 className="mb-4 text-center text-2xl font-semibold text-secondary">
        Skills & Tech
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <SkillCard icon={SiCsharp} label="C#" iconColor="#512BD4" />
        <SkillCard icon={SiPython} label="Python" iconColor="#3776AB" />
        <SkillCard icon={FaJava} label="Java" iconColor="#007396" />
        <SkillCard icon={SiTypescript} label="TypeScript" iconColor="#3178C6" />
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
        <SkillCard icon={SiTailwindcss} label="Tailwind" iconColor="#06B6D4" />
        <SkillCard icon={SiFlutter} label="Flutter" iconColor="#02569B" />
        <SkillCard icon={SiAmazonwebservices} label="AWS" iconColor="#FF9900" />
        <SkillCard icon={SiDocker} label="Docker" iconColor="#2496ED" />
        <SkillCard icon={SiKubernetes} label="Kubernetes" iconColor="#326CE5" />
        <SkillCard icon={SiDotnet} label=".NET" iconColor="#B794F4" />
        <SkillCard icon={SiJenkins} label="Jenkins" iconColor="#D24939" />
        <SkillCard
          icon={SiAzuredevops}
          label="Azure DevOps"
          iconColor="#B794F4"
        />
        <SkillCard icon={SiSwift} label="Swift/SwiftUI" iconColor="#F05138" />
        <SkillCard icon={SiReact} label="React Native" iconColor="#61DAFB" />
      </div>
    </section>
  );
}
