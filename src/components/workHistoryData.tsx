import React from "react";

import type { TimelineItemProps } from "./TimelineItem";

export const workHistory: TimelineItemProps[] = [
  {
    date: "2025 - Current",
    title: "Senior Systems Engineer (Consulting)",
    subtitle: "Thread (YC W23 Enterprise SaaS)",

    bulletPoints: [
      <span key="thread-1" className="tag">
        Architected Enterprise SaaS platform for meal prep delivery with
        high-volume order processing and inventory synchronization across
        external e-commerce platforms (
        <strong className="text-primary">Shopify</strong>), managing complete
        engagement from proposal through delivery.
      </span>,
      <span key="thread-2" className="tag">
        Implemented Gen AI solution using{" "}
        <strong className="text-primary">
          Retrieval Augmented Generation (RAG)
        </strong>{" "}
        and <strong className="text-primary">Vector Databases</strong> for
        incident management, with native integrations to Jira, Slack, GitHub,
        and Datadog.
      </span>,
      <span key="thread-3" className="tag">
        Designed dynamic pricing engine using{" "}
        <strong className="text-primary">TypeScript</strong> and{" "}
        <strong className="text-primary">Redis</strong> caching, reducing menu
        change friction while optimizing performance for high-concurrency
        operations.
      </span>,
    ],
  },

  {
    date: "2022 - 2024",
    title: "Software Engineer",
    subtitle: "Data Innovations, Charleston, SC",

    bulletPoints: [
      <span key="di-1" className="tag">
        Spearheaded <strong className="text-primary">Angular</strong>{" "}
        modernization of Data Innovation's flagship Instrument Manager, leading
        complete migration from legacy AngularJS to Angular 14 across 250,000+
        line codebase serving 5,000+ daily users with zero downtime.
      </span>,
      <span key="di-2" className="tag">
        Architected high-performance{" "}
        <strong className="text-primary">Angular</strong> UI with lazy loading,
        code splitting, and <strong className="text-primary">D3.js</strong>{" "}
        integration, reducing load times from 8 seconds to 1.2 seconds while
        building responsive dashboards for 500+ connected laboratory
        instruments.
      </span>,
      <span key="di-3" className="tag">
        Drove full-stack cloud transformation supporting Angular frontend by
        transitioning backend infrastructure to cloud-native architecture using{" "}
        <strong className="text-primary">AWS</strong>,{" "}
        <strong className="text-primary">Docker</strong>, and{" "}
        <strong className="text-primary">Kubernetes</strong>.
      </span>,
      <span key="di-4" className="tag">
        Designed robust <strong className="text-primary">Jenkins</strong>
        -powered <strong className="text-primary">CI/CD</strong> pipelines for
        Angular deployments, drastically improving release efficiency and
        reducing time-to-market.
      </span>,
      <span key="di-5" className="tag">
        Developed greenfield <strong className="text-primary">Flutter</strong>{" "}
        mobile application with comprehensive testing suite for cross-platform
        deployment.
      </span>,
    ],
  },
  {
    date: "2020 - 2022",
    title: "Software Engineer",
    subtitle: "Microsoft, Seattle, WA",

    bulletPoints: [
      <span key="ms-1" className="tag">
        Architected enterprise-scale{" "}
        <strong className="text-primary">.NET Core</strong> microservices
        serving 2.5M+ daily users with 99.9% uptime, implementing{" "}
        <strong className="text-primary">Redis</strong> caching strategies that
        reduced API response times by 75% across Azure DevOps platform.
      </span>,
      <span key="ms-2" className="tag">
        Developed high-performance <strong className="text-primary">C#</strong>{" "}
        solutions and custom middleware components adopted across 15+ Microsoft
        teams, achieving 95% code coverage through comprehensive unit testing
        with <strong className="text-primary">xUnit</strong> framework.
      </span>,
      <span key="ms-3" className="tag">
        Built robust <strong className="text-primary">.NET</strong>-powered{" "}
        <strong className="text-primary">CI/CD</strong> pipelines in{" "}
        <strong className="text-primary">Azure DevOps</strong> ensuring quality
        and availability for changes impacting every engineer at Microsoft,
        while collaborating with cross-functional teams on scalable backend
        solutions.
      </span>,
      <span key="ms-4" className="tag">
        Enhanced <strong className="text-primary">Azure DevOps</strong> frontend
        using <strong className="text-primary">ReactJS</strong> to deliver
        features for thousands of users and companies worldwide, supporting the
        platform's core functionality.
      </span>,
    ],
  },
  {
    date: "2015 - 2019",
    title: "Education",
    subtitle: "Amherst College",

    bulletPoints: [
      "Bachelor of Arts: Computer Science",
      "Bachelor of Arts: Neuroscience",
    ],
  },
];
