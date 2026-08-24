// src/app/resume.tsx

import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="mt-6 flex w-full max-w-5xl flex-col gap-6 text-white">
      {/* Header & Contact Section */}
      <section className="w-full rounded-lg bg-base-200 p-6 shadow-md sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-secondary sm:text-4xl">
              DANNY ECHEVERRI
            </h1>
            <p className="text-lg font-medium text-primary sm:text-xl">
              Software Engineer
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-base-content sm:text-base">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-secondary" />
              <Link
                href="mailto:decheverri123@gmail.com"
                className="transition-colors hover:text-primary"
              >
                decheverri123@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-secondary" />
              <Link
                href="https://decheverri123.github.io"
                className="transition-colors hover:text-primary"
              >
                decheverri123.github.io
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub className="text-secondary" />
              <Link
                href="https://github.com/decheverri123"
                className="transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/decheverri123
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-secondary" />
              <Link
                href="https://www.linkedin.com/in/danny-echeverri/"
                className="transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/danny-echeverri
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-base-300 pt-4">
          <p className="text-sm leading-relaxed text-base-content sm:text-base">
            Senior Full Stack Engineer with 6+ YOE building products at
            Microsoft, in health-tech, and at YC-backed startups. Founding
            mobile engineer on a consumer finance app now managing millions of
            dollars in user accounts, and instrumental in building the AI
            assistant at its center. Dual-background in Computer Science and
            Neuroscience, at home owning a product end to end, from the first
            commit to the release process that keeps it shipping.
          </p>
        </div>
      </section>

      {/* Work History Section */}
      <section className="w-full rounded-lg bg-base-200 p-6 shadow-md sm:p-8">
        <h2 className="mb-6 text-2xl font-bold text-secondary">WORK HISTORY</h2>

        {/* Job 1 */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-bold text-white">
              Senior Software Engineer / Founding Mobile Engineer
            </h3>
            <span className="text-sm font-semibold text-secondary sm:text-base">
              2025 - Current
            </span>
          </div>
          <p className="text-sm font-medium text-primary">
            Thread (YC W23 Enterprise SaaS)
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-base-content sm:text-base">
            <li>
              <strong>Founding mobile engineer.</strong> Built and shipped the
              company&apos;s first mobile app, iOS and Android, from empty repo
              to a live product now helping users manage millions of dollars in
              accounts, owning the whole experience: sign-in and Face ID,
              bank-account linking, and every screen users open daily for net
              worth, spending, and transactions.
            </li>
            <li>
              <strong>Instrumental in building the AI assistant</strong>,
              including the proactive engine that texts and emails users
              personalized spending summaries, weekly reports, and reminders,
              turning a dashboard people forget to open into something that
              reaches out first.
            </li>
            <li>
              <strong>Shipped the web features the business runs on</strong>,
              including subscriptions and billing, budgets, spending summaries,
              and an onboarding flow that works over both the web and text
              message.
            </li>
            <li>
              <strong>Set the engineering bar as the team scaled</strong>,
              introducing the company&apos;s first automated testing,
              code-quality checks, and release safeguards so a fast-moving team
              could ship without shipping bugs.
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-bold text-white">
              Software Engineer II
            </h3>
            <span className="text-sm font-semibold text-secondary sm:text-base">
              2022 - 2024
            </span>
          </div>
          <p className="text-sm font-medium text-primary">
            Data Innovations, Charleston, SC
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-base-content sm:text-base">
            <li>
              Migrated the frontend of Instrument Manager, the company&apos;s
              flagship lab-automation platform, from AngularJS to Angular 14,
              cutting load times 85% (8s to 1.2s) for 5,000+ daily users.
            </li>
            <li>
              Moved the backend to a modern cloud architecture (AWS, Docker,
              Kubernetes) and built the release pipelines behind it, shortening
              the path from merge to production.
            </li>
            <li>
              Delivered a new cross-platform mobile app from scratch, backed by
              a full automated test suite.
            </li>
          </ul>
        </div>

        {/* Job 3 */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-bold text-white">Software Engineer</h3>
            <span className="text-sm font-semibold text-secondary sm:text-base">
              2020 - 2022
            </span>
          </div>
          <p className="text-sm font-medium text-primary">
            Microsoft, Seattle, WA
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-base-content sm:text-base">
            <li>
              Built full-stack features for Azure DevOps in React and C#/.NET,
              used by 2.5M+ people every day.
            </li>
            <li>
              Redesigned core services and caching to make the platform 75%
              faster to respond at enterprise scale.
            </li>
            <li>
              Wrote shared components adopted by 15+ Microsoft teams, held to
              95% test coverage and continuously deployed.
            </li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full rounded-lg bg-base-200 p-6 shadow-md sm:p-8">
        <h2 className="mb-4 text-2xl font-bold text-secondary">EDUCATION</h2>
        <div className="space-y-4">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-bold text-white">
                Bachelor of Arts: Computer Science
              </h3>
              <span className="text-sm font-semibold text-secondary">
                2015 - 2019
              </span>
            </div>
            <p className="text-sm text-primary">
              Amherst College - Amherst, MA
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-bold text-white">
                Bachelor of Arts: Neuroscience
              </h3>
              <span className="text-sm font-semibold text-secondary">
                2015 - 2019
              </span>
            </div>
            <p className="text-sm text-primary">
              Amherst College - Amherst, MA
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Tech Section */}
      <section className="w-full rounded-lg bg-base-200 p-6 shadow-md sm:p-8">
        <h2 className="mb-4 text-2xl font-bold text-secondary">
          SKILLS & TECH
        </h2>
        <div className="grid grid-cols-1 gap-4 text-sm sm:text-base md:grid-cols-2">
          <div>
            <span className="font-bold text-primary">
              Programming Languages:{" "}
            </span>
            <span className="text-base-content">
              TypeScript/JavaScript, C#, Python, Swift, Dart, Java
            </span>
          </div>
          <div>
            <span className="font-bold text-primary">Web Technologies: </span>
            <span className="text-base-content">
              React/Next.js, Angular, Node.js, TailwindCSS
            </span>
          </div>
          <div>
            <span className="font-bold text-primary">
              Mobile App Development:{" "}
            </span>
            <span className="text-base-content">
              React Native/Expo, iOS/SwiftUI, Flutter
            </span>
          </div>
          <div>
            <span className="font-bold text-primary">AI & Integrations: </span>
            <span className="text-base-content">
              OpenAI & Anthropic Claude, Ollama/Local LLMs, Plaid, Stripe,
              Twilio
            </span>
          </div>
          <div>
            <span className="font-bold text-primary">Cloud & Data: </span>
            <span className="text-base-content">
              AWS, Docker, Kubernetes, PostgreSQL, Prisma
            </span>
          </div>
          <div>
            <span className="font-bold text-primary">Frameworks: </span>
            <span className="text-base-content">.NET Core, Node.js, Expo</span>
          </div>
          <div className="md:col-span-2">
            <span className="font-bold text-primary">CI/CD: </span>
            <span className="text-base-content">
              GitHub Actions, Vitest, Xcode Cloud, Jenkins, Azure DevOps
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
