# ai-email Application Showcase & Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Feature the app name `ai-email` and its application purpose on the homepage and create a dedicated `/apps/ai-email` page to pass Google OAuth verification.

**Architecture:** Create `<FeaturedAppsSection />` in `src/components/FeaturedAppsSection.tsx`, render it on `src/app/page.tsx`, and create a static page at `src/app/apps/ai-email/page.tsx`.

**Tech Stack:** Next.js 15 (App Router, Static Export), React 18, Tailwind CSS, DaisyUI, React Icons.

## Global Constraints
- Application Name: Must be explicitly written as `ai-email`.
- Application Purpose: Must outline that `ai-email` is an AI-powered email productivity assistant that helps summarize, organize, and draft emails using Google Workspace / Gmail APIs.
- Route: `/apps/ai-email`.

---

### Task 1: Create Featured Apps Section & Integrate into Homepage

**Files:**
- Create: `src/components/FeaturedAppsSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create `src/components/FeaturedAppsSection.tsx`**

```tsx
// src/components/FeaturedAppsSection.tsx

"use client";

import Link from "next/link";
import { FaRobot, FaEnvelopeOpenText, FaShieldAlt } from "react-icons/fa";

export default function FeaturedAppsSection() {
  return (
    <section className="mx-auto my-12 max-w-5xl px-4">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="relative z-10 bg-base-100 px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary">
            Featured Applications
          </h2>
          <p className="mt-1 text-sm text-base-content/75">
            Tools and applications built for productivity and AI workflows
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
        {/* ai-email Card */}
        <div className="card bg-base-200 shadow-xl border border-secondary/20 transition hover:border-secondary/50">
          <div className="card-body p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-secondary/10 p-4 text-3xl text-secondary">
                  <FaRobot />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ai-email</h3>
                  <p className="text-sm font-medium text-secondary">
                    AI-Powered Email & Productivity Assistant
                  </p>
                </div>
              </div>
              <Link
                href="/apps/ai-email"
                className="btn btn-secondary btn-sm self-start sm:self-center"
              >
                Learn More & Details
              </Link>
            </div>

            <div className="mt-6 border-t border-base-300 pt-4">
              <h4 className="font-semibold text-white mb-2">Application Purpose:</h4>
              <p className="text-sm leading-relaxed text-base-content/90">
                <strong>ai-email</strong> is an intelligent email assistant designed to streamline inbox management. It securely connects to user-authorized Google Workspace / Gmail APIs to summarize long email threads, extract key action items, automatically categorize messages, and draft context-aware email replies using artificial intelligence.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-base-content/75">
              <span className="flex items-center gap-1">
                <FaEnvelopeOpenText className="text-secondary" /> Gmail / Google Workspace API Integration
              </span>
              <span className="flex items-center gap-1">
                <FaShieldAlt className="text-success" /> Strict Client-Side Privacy & Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `src/app/page.tsx` to render `<FeaturedAppsSection />`**

```tsx
// src/app/page.tsx

import Layout from "./LayoutHeader";
import WorkHistory from "@/components/WorkHistory";
import SkillsSection from "@/components/SkillsSection";
import LanguagesSection from "@/components/LanguagesSection";
import PoweredBySection from "@/components/PoweredBySection";
import FeaturedAppsSection from "@/components/FeaturedAppsSection";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen w-full p-4 text-white sm:p-8 md:px-16 lg:px-24">
        <h1 className="mb-4 text-center text-2xl font-semibold text-secondary sm:mb-8 sm:text-3xl md:text-4xl">
          Danny Echeverri
        </h1>
        <p className="mx-auto mb-8 max-w-xl px-4 text-center text-sm text-base-content sm:mb-4 sm:max-w-2xl sm:px-0 sm:text-base md:text-lg">
          Hey! I&apos;m a software engineer who loves building things across the
          full stack. Whether it&apos;s crafting a mobile app for my favorite
          game, designing robust backend systems, or bringing web interfaces to
          life, I&apos;m always up for a good technical challenge. When I&apos;m
          not coding, you&apos;ll find me writing music and exploring new
          technologies just for the fun of it.
        </p>

        <div className="mb-8 flex justify-center space-x-6">
          <a
            href="https://github.com/decheverri123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:decheverri123@gmail.com"
            className="text-3xl transition-colors hover:text-primary"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/danny-echeverri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors hover:text-primary"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Featured Applications Section (ai-email) */}
        <FeaturedAppsSection />

        {/* Work History Section */}
        <WorkHistory />

        {/* Skills & Tech Section */}
        <SkillsSection />

        {/* Languages Section */}
        <LanguagesSection />

        {/* Powered By Section */}
        <PoweredBySection />

        <div className="mx-auto my-10 max-w-2xl text-center text-lg">
          <strong className="font-extralight text-base-content">
            This website is a work in progress and still under construction.
          </strong>
        </div>
      </div>
    </Layout>
  );
}
```

- [ ] **Step 3: Commit Task 1**

```bash
git add src/components/FeaturedAppsSection.tsx src/app/page.tsx
git commit -m "feat: add ai-email featured application section to homepage"
```

---

### Task 2: Create Dedicated `ai-email` Application Page (`/apps/ai-email`)

**Files:**
- Create: `src/app/apps/ai-email/page.tsx`

- [ ] **Step 1: Create `src/app/apps/ai-email/page.tsx`**

```tsx
// src/app/apps/ai-email/page.tsx

import Layout from "@/app/LayoutHeader";
import Link from "next/link";
import { FaRobot, FaEnvelope, FaListCheck, FaShieldHalved } from "react-icons/fa6";

export const metadata = {
  title: "ai-email | Application Purpose & Details",
  description: "ai-email is an AI-powered email productivity assistant that helps summarize, organize, and draft emails using Google Workspace APIs.",
};

export default function AiEmailAppPage() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-base-100 px-4 py-12 text-base-content sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-base-200 p-6 shadow-xl sm:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-2xl bg-secondary/15 p-4 text-4xl text-secondary">
              <FaRobot />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                ai-email
              </h1>
              <p className="text-secondary font-medium">
                AI-Powered Email Management & Productivity Assistant
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm leading-relaxed sm:text-base">
            <section className="rounded-xl bg-base-300 p-6 border border-secondary/20">
              <h2 className="mb-3 text-xl font-bold text-white flex items-center gap-2">
                <FaEnvelope className="text-secondary" /> Application Purpose
              </h2>
              <p className="text-base-content/90">
                <strong>ai-email</strong> is designed to solve email overload for professionals and developers. By connecting with Google Workspace / Gmail via user-authorized OAuth, <strong>ai-email</strong> automates repetitive inbox tasks, condenses long message threads into actionable summaries, and helps compose context-aware response drafts tailored to your communication style.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white flex items-center gap-2">
                <FaListCheck className="text-secondary" /> Key Application Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg bg-base-300 p-4">
                  <h3 className="font-semibold text-white mb-1">Thread Summarization</h3>
                  <p className="text-xs text-base-content/80">
                    Extracts key decisions, questions, and action items from multi-reply email chains instantly.
                  </p>
                </div>
                <div className="rounded-lg bg-base-300 p-4">
                  <h3 className="font-semibold text-white mb-1">Smart Response Drafting</h3>
                  <p className="text-xs text-base-content/80">
                    Generates polished email reply drafts based on brief user prompts and historical context.
                  </p>
                </div>
                <div className="rounded-lg bg-base-300 p-4">
                  <h3 className="font-semibold text-white mb-1">Automated Categorization</h3>
                  <p className="text-xs text-base-content/80">
                    Sorts incoming messages by priority, urgency, and subject matter for faster inbox processing.
                  </p>
                </div>
                <div className="rounded-lg bg-base-300 p-4">
                  <h3 className="font-semibold text-white mb-1">Google Workspace OAuth</h3>
                  <p className="text-xs text-base-content/80">
                    Secure authentication via official Google OAuth consent flow with granular scope permissions.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-xl bg-base-300 p-6 border border-primary/20">
              <h2 className="mb-3 text-xl font-bold text-white flex items-center gap-2">
                <FaShieldHalved className="text-primary" /> Google Data Usage & Privacy
              </h2>
              <p className="mb-3">
                <strong>ai-email</strong> accesses user Gmail / Google Workspace data strictly to perform requested AI assistant functions on behalf of the authenticated user.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-base-content/90">
                <li>
                  <strong>Scope Limitation:</strong> Data accessed via Google APIs is used exclusively for summarizing messages and generating draft replies.
                </li>
                <li>
                  <strong>No Third-Party Sharing:</strong> User data and Google Account information are never sold, rented, or shared with third parties or data brokers.
                </li>
                <li>
                  <strong>Local Control:</strong> Users may revoke OAuth permissions at any time via their <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="link link-secondary">Google Security Settings</a>.
                </li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-base-300 pt-6">
              <Link href="/" className="btn btn-secondary btn-sm">
                ← Return to Home
              </Link>
              <div className="flex gap-4 text-xs">
                <Link href="/privacy" className="link link-hover text-secondary">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="link link-hover text-secondary">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
```

- [ ] **Step 2: Commit Task 2**

```bash
git add src/app/apps/ai-email/page.tsx
git commit -m "feat: add dedicated ai-email application details page"
```

---

### Task 3: Build & Deploy

- [ ] **Step 1: Test Next.js static build**

Run: `./node_modules/.bin/next build`

- [ ] **Step 2: Push changes and deploy to GitHub Pages**

Run: `git push origin main && npm run deploy`
