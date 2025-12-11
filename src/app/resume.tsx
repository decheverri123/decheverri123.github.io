// src/app/Resume.tsx

import Link from "next/link";

export default function Resume() {
  return (
    <div className="mt-6 flex w-full max-w-6xl flex-col gap-6">
      {/* Contact Section */}
      <section className="w-full rounded-lg bg-gray-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
        <p>Location: Mt. Pleasant, South Carolina, 29464</p>
        <p>
          Email:{" "}
          <Link
            href="mailto:decheverri123@gmail.com"
            className="text-blue-400 underline"
          >
            decheverri123@gmail.com
          </Link>
        </p>
        <p>
          GitHub:{" "}
          <Link
            href="https://github.com/decheverri123"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/decheverri123
          </Link>
        </p>
        <p>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/danny-echeverri/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/danny-echeverri/
          </Link>
        </p>
      </section>

      {/* Work History Section */}
      <section className="w-full rounded-lg bg-gray-800 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Work History</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Senior Systems Engineer (Consulting)
          </h3>
          <p className="text-gray-400">
            2025 - Current | Thread (YC W23 Enterprise SaaS)
          </p>
          <ul className="mt-2 list-inside list-disc space-y-2">
            <li>
              Architected Enterprise SaaS platform for meal prep delivery with
              high-volume order processing and inventory synchronization across
              external e-commerce platforms (Shopify), managing complete
              engagement from proposal through delivery.
            </li>
            <li>
              Implemented Gen AI solution using Retrieval Augmented Generation
              (RAG) and Vector Databases for incident management, with native
              integrations to Jira, Slack, GitHub, and Datadog.
            </li>
            <li>
              Designed dynamic pricing engine using TypeScript and Redis
              caching, reducing menu change friction while optimizing
              performance for high-concurrency operations.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Software Engineer</h3>
          <p className="text-gray-400">
            2022 - 2024 | Data Innovations, Charleston, SC
          </p>
          <ul className="mt-2 list-inside list-disc space-y-2">
            <li>
              Spearheaded Angular modernization of Data Innovation's flagship
              Instrument Manager, leading complete migration from legacy
              AngularJS to Angular 14 across 250,000+ line codebase serving
              5,000+ daily users with zero downtime.
            </li>
            <li>
              Architected high-performance Angular UI with lazy loading, code
              splitting, and D3.js integration, reducing load times from 8
              seconds to 1.2 seconds while building responsive dashboards for
              500+ connected laboratory instruments.
            </li>
            <li>
              Drove full-stack cloud transformation supporting Angular frontend
              by transitioning backend infrastructure to cloud-native
              architecture using AWS, Docker, and Kubernetes.
            </li>
            <li>
              Designed robust Jenkins-powered CI/CD pipelines for Angular
              deployments, drastically improving release efficiency and reducing
              time-to-market.
            </li>
            <li>
              Developed greenfield Flutter mobile application with comprehensive
              testing suite for cross-platform deployment.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Software Engineer</h3>
          <p className="text-gray-400">2020 – 2022 | Microsoft, Seattle, WA</p>
          <ul className="mt-2 list-inside list-disc space-y-2">
            <li>
              Architected enterprise-scale .NET Core microservices serving 2.5M+
              daily users with 99.9% uptime, implementing Redis caching
              strategies that reduced API response times by 75% across Azure
              DevOps platform.
            </li>
            <li>
              Developed high-performance C# solutions and custom middleware
              components adopted across 15+ Microsoft teams, achieving 95% code
              coverage through comprehensive unit testing with xUnit framework.
            </li>
            <li>
              Built robust .NET-powered CI/CD pipelines in Azure DevOps ensuring
              quality and availability for changes impacting every engineer at
              Microsoft, while collaborating with cross-functional teams on
              scalable backend solutions.
            </li>
            <li>
              Enhanced Azure DevOps frontend using ReactJS to deliver features
              for thousands of users and companies worldwide, supporting the
              platform's core functionality.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
