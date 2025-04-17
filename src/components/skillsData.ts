import {
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
  SiApple,
  SiGithubactions,
  SiXcode,
  SiSwift,
} from "react-icons/si";
import { FaCode, FaJava } from "react-icons/fa";

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
      { icon: FaCode, label: "C#", iconColor: "#512BD4" },
      { icon: SiPython, label: "Python", iconColor: "#4B8BBE" },
      { icon: FaJava, label: "Java", iconColor: "#007396" },
      {
        icon: FaCode,
        secondaryIcon: SiTypescript,
        label: "JavaScript/TypeScript",
        iconColor: "#F7DF1E",
        secondaryIconColor: "#3178C6",
      },
      { icon: SiDotnet, label: "Visual Basic", iconColor: "#512BD4" },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      {
        icon: SiHtml5,
        secondaryIcon: SiCss3,
        label: "HTML/CSS",
        iconColor: "#E34F26",
        secondaryIconColor: "#1572B6",
      },
      { icon: SiAngular, label: "Angular", iconColor: "#DD0031" },
      {
        icon: SiReact,
        secondaryIcon: SiNextdotjs,
        label: "React/Next.js",
        iconColor: "#61DAFB",
        secondaryIconColor: "#FFFFFF",
      },
      { icon: SiTailwindcss, label: "Tailwind", iconColor: "#06B6D4" },
    ],
  },
  {
    name: "Mobile Development",
    skills: [
      { icon: SiSwift, label: "Swift/SwiftUI", iconColor: "#F05138" },
      { icon: SiApple, label: "iOS Development", iconColor: "#666666" },
      { icon: SiReact, label: "React Native", iconColor: "#61DAFB" },
      { icon: SiDart, label: "Dart", iconColor: "#0175C2" },
      { icon: SiFlutter, label: "Flutter", iconColor: "#02569B" },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { icon: SiDocker, label: "Docker", iconColor: "#2496ED" },
      { icon: SiKubernetes, label: "Kubernetes", iconColor: "#326CE5" },
      { icon: SiDotnet, label: ".NET", iconColor: "#B794F4" },
      { icon: FaCode, label: "AWS", iconColor: "#FF9900" },
    ],
  },
  {
    name: "CI/CD & Tools",
    skills: [
      { icon: SiJenkins, label: "Jenkins", iconColor: "#D24939" },
      { icon: FaCode, label: "Azure DevOps", iconColor: "#B794F4" },
      { icon: SiGithubactions, label: "GitHub Actions", iconColor: "#2088FF" },
      { icon: SiXcode, label: "Xcode Cloud", iconColor: "#147EFB" },
    ],
  },
];
