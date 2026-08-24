import React from "react";

import type { TimelineItemProps } from "./TimelineItem";

export const workHistory: TimelineItemProps[] = [
  {
    date: "2025 - Present",
    title: "Senior Software Engineer / Founding Mobile Engineer",
    subtitle: "Thread (YC W23 Enterprise SaaS)",
    bulletPoints: [
      <span key="th-1" className="tag">
        <strong className="text-primary">Founding mobile engineer</strong>.
        Built and shipped the company&apos;s first mobile app,{" "}
        <strong className="text-primary">iOS and Android</strong>, from empty
        repo to a live product now helping users manage millions of dollars in
        accounts, owning the whole experience: sign-in and Face ID, bank-account
        linking, and every screen users open daily for net worth, spending, and
        transactions.
      </span>,
      <span key="th-2" className="tag">
        Instrumental in building the{" "}
        <strong className="text-primary">AI assistant</strong>, including the
        proactive engine that texts and emails users personalized spending
        summaries, weekly reports, and reminders, turning a dashboard people
        forget to open into something that reaches out first.
      </span>,
      <span key="th-3" className="tag">
        Shipped the web features the business runs on, including subscriptions
        and billing, budgets, spending summaries, and an onboarding flow that
        works over both the web and text message.
      </span>,
      <span key="th-4" className="tag">
        Set the engineering bar as the team scaled, introducing the
        company&apos;s first{" "}
        <strong className="text-primary">automated testing</strong>,
        code-quality checks, and release safeguards so a fast-moving team could
        ship without shipping bugs.
      </span>,
    ],
  },

  {
    date: "2022 - 2024",
    title: "Software Engineer II",
    subtitle: "Data Innovations, Charleston, SC",
    bulletPoints: [
      <span key="di-1" className="tag">
        Migrated the frontend of Instrument Manager, the company&apos;s flagship
        lab-automation platform, from{" "}
        <strong className="text-primary">AngularJS to Angular 14</strong>,
        cutting load times{" "}
        <strong className="text-primary">85% (8s to 1.2s)</strong> for 5,000+
        daily users.
      </span>,
      <span key="di-2" className="tag">
        Moved the backend to a modern cloud architecture (
        <strong className="text-primary">AWS, Docker, Kubernetes</strong>) and
        built the release pipelines behind it, shortening the path from merge to
        production.
      </span>,
      <span key="di-3" className="tag">
        Delivered a new{" "}
        <strong className="text-primary">cross-platform mobile app</strong> from
        scratch, backed by a full automated test suite.
      </span>,
    ],
  },
  {
    date: "2020 - 2022",
    title: "Software Engineer",
    subtitle: "Microsoft, Seattle, WA",
    bulletPoints: [
      <span key="ms-1" className="tag">
        Built full-stack features for{" "}
        <strong className="text-primary">Azure DevOps</strong> in{" "}
        <strong className="text-primary">React</strong> and{" "}
        <strong className="text-primary">C#/.NET</strong>, used by{" "}
        <strong className="text-primary">2.5M+ people</strong> every day.
      </span>,
      <span key="ms-2" className="tag">
        Redesigned core services and caching to make the platform{" "}
        <strong className="text-primary">75% faster</strong> to respond at
        enterprise scale.
      </span>,
      <span key="ms-3" className="tag">
        Wrote shared components adopted by{" "}
        <strong className="text-primary">15+ Microsoft teams</strong>, held to{" "}
        <strong className="text-primary">95% test coverage</strong> and
        continuously deployed.
      </span>,
    ],
  },
  {
    date: "2015 - 2019",
    title: "Education",
    subtitle: "Amherst College - Amherst, MA",
    bulletPoints: [
      "Bachelor of Arts: Computer Science",
      "Bachelor of Arts: Neuroscience",
    ],
  },
];
