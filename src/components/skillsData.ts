import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiDart,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpo,
  SiApple,
  SiSwift,
  SiFlutter,
  SiAnthropic,
  SiOllama,
  SiStripe,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiPrisma,
  SiDotnet,
  SiGithubactions,
  SiVitest,
  SiXcode,
  SiJenkins,
} from "react-icons/si";
import { FaJava, FaAws, FaUniversity, FaRobot } from "react-icons/fa";
import { TbBrandOpenai, TbBrandTwilio, TbBrandCSharp } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

import { IconType } from "react-icons";

export interface Skill {
  icon: IconType;
  label: string;
  iconColor: string;
  secondaryIcon?: IconType;
  secondaryIconColor?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      {
        icon: SiJavascript,
        secondaryIcon: SiTypescript,
        label: "TypeScript/JavaScript",
        iconColor: "#F7DF1E",
        secondaryIconColor: "#3178C6",
      },
      { icon: TbBrandCSharp, label: "C#", iconColor: "#239120" },
      { icon: SiPython, label: "Python", iconColor: "#3776AB" },
      { icon: SiSwift, label: "Swift", iconColor: "#F05138" },
      { icon: SiDart, label: "Dart", iconColor: "#0175C2" },
      { icon: FaJava, label: "Java", iconColor: "#007396" },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      {
        icon: SiReact,
        secondaryIcon: SiNextdotjs,
        label: "React/Next.js",
        iconColor: "#61DAFB",
        secondaryIconColor: "#FFFFFF",
      },
      { icon: SiAngular, label: "Angular", iconColor: "#DD0031" },
      { icon: SiNodedotjs, label: "Node.js", iconColor: "#339933" },
      { icon: SiTailwindcss, label: "TailwindCSS", iconColor: "#06B6D4" },
    ],
  },
  {
    name: "Mobile App Development",
    skills: [
      {
        icon: SiReact,
        secondaryIcon: SiExpo,
        label: "React Native/Expo",
        iconColor: "#61DAFB",
        secondaryIconColor: "#FFFFFF",
      },
      {
        icon: SiApple,
        secondaryIcon: SiSwift,
        label: "iOS/SwiftUI",
        iconColor: "#FFFFFF",
        secondaryIconColor: "#F05138",
      },
      { icon: SiFlutter, label: "Flutter", iconColor: "#02569B" },
    ],
  },
  {
    name: "AI",
    skills: [
      {
        icon: TbBrandOpenai,
        secondaryIcon: SiAnthropic,
        label: "OpenAI & Anthropic Claude",
        iconColor: "#10A37F",
        secondaryIconColor: "#D97706",
      },
      {
        icon: SiOllama,
        secondaryIcon: FaRobot,
        label: "Ollama/Local LLMs",
        iconColor: "#FFFFFF",
        secondaryIconColor: "#38BDF8",
      },
      { icon: FaRobot, label: "OpenRouter", iconColor: "#FFFFFF" },
    ],
  },
  {
    name: "Integrations",
    skills: [
      { icon: FaUniversity, label: "Plaid", iconColor: "#FFFFFF" },
      { icon: SiStripe, label: "Stripe", iconColor: "#635BFF" },
      { icon: TbBrandTwilio, label: "Twilio", iconColor: "#F22F46" },
    ],
  },
  {
    name: "Cloud & Data",
    skills: [
      { icon: FaAws, label: "AWS", iconColor: "#FF9900" },
      { icon: SiDocker, label: "Docker", iconColor: "#2496ED" },
      { icon: SiKubernetes, label: "Kubernetes", iconColor: "#326CE5" },
      { icon: SiPostgresql, label: "PostgreSQL", iconColor: "#4169E1" },
      { icon: SiPrisma, label: "Prisma", iconColor: "#FFFFFF" },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { icon: SiDotnet, label: ".NET Core", iconColor: "#512BD4" },
      { icon: SiNodedotjs, label: "Node.js", iconColor: "#339933" },
      { icon: SiExpo, label: "Expo", iconColor: "#FFFFFF" },
    ],
  },
  {
    name: "CI/CD",
    skills: [
      { icon: SiGithubactions, label: "GitHub Actions", iconColor: "#2088FF" },
      { icon: SiVitest, label: "Vitest", iconColor: "#FCC72B" },
      { icon: SiXcode, label: "Xcode Cloud", iconColor: "#147EFB" },
      { icon: SiJenkins, label: "Jenkins", iconColor: "#D24939" },
      { icon: VscAzureDevops, label: "Azure DevOps", iconColor: "#0078D7" },
    ],
  },
];
