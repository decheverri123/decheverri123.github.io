import React from "react";

import type { TimelineItemProps } from "./TimelineItem";

export const workHistory: TimelineItemProps[] = [
  {
    date: "2025",
    title: "Independent Software Engineering Consultant",
    subtitle: "Self-Employed, Greenville, South Carolina",
    position: "end",
    bulletPoints: [
      <span key="bp-1" className="tag">
        Secured e-commerce project by proactively identifying client needs and
        demonstrating online sales expertise.
      </span>,
      <span key="bp-2" className="tag">
        Implemented comprehensive{" "}
        <strong className="text-primary">Shopify</strong> store with custom
        theme, content migration, and platform configuration.
      </span>,
      <span key="bp-3" className="tag">
        Developed <strong className="text-primary">TypeScript</strong>-powered
        product configurator using{" "}
        <strong className="text-primary">Shopify Storefront API</strong> for
        custom fence specifications.
      </span>,
      <span key="bp-4" className="tag ">
        Independently managed entire client relationship and delivery lifecycle.
      </span>,
    ],
  },
  {
    date: "2022 - 2024",
    title: "Software Engineer II",
    subtitle: "Data Innovations",
    position: "start",
    bulletPoints: [
      <span key="di-1" className="tag">
        Revitalized Data Innovation's flagship product, transitioning the UI to{" "}
        <strong className="text-primary">Angular</strong> and the backend to a{" "}
        <strong className="text-primary">cloud-native</strong> architecture.
      </span>,
      <span key="di-2" className="tag">
        Implemented <strong className="text-primary">CI/CD</strong> pipelines
        with <strong className="text-primary">Jenkins</strong>,{" "}
        <strong className="text-primary">AWS</strong>,{" "}
        <strong className="text-primary">Docker</strong>, and{" "}
        <strong className="text-primary">Kubernetes</strong>, improving
        deployment efficiency and reliability.
      </span>,
      <span key="di-3" className="tag">
        Developer on a greenfield{" "}
        <strong className="text-primary">Flutter</strong> project, creating a
        cross-platform mobile app with thorough testing.
      </span>,
    ],
  },
  {
    date: "2020 - 2022",
    title: "Software Engineer",
    subtitle: "Microsoft",
    position: "end",
    bulletPoints: [
      <span key="ms-1" className="tag">
        Developed high-performance solutions in{" "}
        <strong className="text-primary">C#</strong> and{" "}
        <strong className="text-primary">.NET</strong> based on project
        requirements.
      </span>,
      <span key="ms-2" className="tag">
        Worked with cross-functional teams to deliver scalable solutions in{" "}
        <strong className="text-primary">Azure DevOps</strong> and{" "}
        <strong className="text-primary">ReactJS</strong>.
      </span>,
      <span key="ms-3" className="tag">
        Built <strong className="text-primary">CI/CD</strong> pipelines in{" "}
        <strong className="text-primary">Azure DevOps</strong>, ensuring quality
        and stability of changes for Microsoft engineers.
      </span>,
    ],
  },
  {
    date: "2015 - 2019",
    title: "Education",
    subtitle: "Amherst College",
    position: "start",
    bulletPoints: [
      "Bachelor of Arts: Computer Science",
      "Bachelor of Arts: Neuroscience",
    ],
  },
];
