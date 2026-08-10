// src/app/apps/ai-email/page.tsx

import Layout from "@/app/LayoutHeader";
import Link from "next/link";
import {
  FaRobot,
  FaEnvelope,
  FaListCheck,
  FaShieldHalved,
} from "react-icons/fa6";

export const metadata = {
  title: "ai-email | Application Purpose & Details",
  description:
    "ai-email is an AI-powered email productivity assistant that helps summarize, organize, and draft emails using Google Workspace APIs.",
};

export default function AiEmailAppPage() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-base-100 px-4 py-12 text-base-content sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-base-200 p-6 shadow-xl sm:p-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-2xl bg-secondary/15 p-4 text-4xl text-secondary">
              <FaRobot />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                ai-email
              </h1>
              <p className="font-medium text-secondary">
                AI-Powered Email Management & Productivity Assistant
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm leading-relaxed sm:text-base">
            <section className="rounded-xl border border-secondary/20 bg-base-300 p-6">
              <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                <FaEnvelope className="text-secondary" /> Application Purpose
              </h2>
              <p className="text-base-content/90">
                <strong>ai-email</strong> is designed to solve email overload
                for professionals and developers. By connecting with Google
                Workspace / Gmail via user-authorized OAuth,{" "}
                <strong>ai-email</strong> automates repetitive inbox tasks,
                condenses long message threads into actionable summaries, and
                helps compose context-aware response drafts tailored to your
                communication style.
              </p>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                <FaListCheck className="text-secondary" /> Key Application
                Features
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-base-300 p-4">
                  <h3 className="mb-1 font-semibold text-white">
                    Thread Summarization
                  </h3>
                  <p className="text-xs text-base-content/80">
                    Extracts key decisions, questions, and action items from
                    multi-reply email chains instantly.
                  </p>
                </div>
                <div className="rounded-lg bg-base-300 p-4">
                  <h3 className="mb-1 font-semibold text-white">
                    Smart Response Drafting
                  </h3>
                  <p className="text-xs text-base-content/80">
                    Generates polished email reply drafts based on brief user
                    prompts and historical context.
                  </p>
                </div>
                <div className="rounded-lg bg-base-300 p-4">
                  <h3 className="mb-1 font-semibold text-white">
                    Automated Categorization
                  </h3>
                  <p className="text-xs text-base-content/80">
                    Sorts incoming messages by priority, urgency, and subject
                    matter for faster inbox processing.
                  </p>
                </div>
                <div className="rounded-lg bg-base-300 p-4">
                  <h3 className="mb-1 font-semibold text-white">
                    Google Workspace OAuth
                  </h3>
                  <p className="text-xs text-base-content/80">
                    Secure authentication via official Google OAuth consent flow
                    with granular scope permissions.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-primary/20 bg-base-300 p-6">
              <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                <FaShieldHalved className="text-primary" /> Google Data Usage &
                Privacy
              </h2>
              <p className="mb-3">
                <strong>ai-email</strong> accesses user Gmail / Google Workspace
                data strictly to perform requested AI assistant functions on
                behalf of the authenticated user.
              </p>
              <ul className="list-disc space-y-2 pl-6 text-xs text-base-content/90 sm:text-sm">
                <li>
                  <strong>Scope Limitation:</strong> Data accessed via Google
                  APIs is used exclusively for summarizing messages and
                  generating draft replies.
                </li>
                <li>
                  <strong>No Third-Party Sharing:</strong> User data and Google
                  Account information are never sold, rented, or shared with
                  third parties or data brokers.
                </li>
                <li>
                  <strong>Local Control:</strong> Users may revoke OAuth
                  permissions at any time via their{" "}
                  <a
                    href="https://myaccount.google.com/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-secondary"
                  >
                    Google Security Settings
                  </a>
                  .
                </li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-base-300 pt-6">
              <Link href="/" className="btn btn-secondary btn-sm">
                ← Return to Home
              </Link>
              <div className="flex gap-4 text-xs">
                <Link
                  href="/privacy"
                  className="link-hover link text-secondary"
                >
                  Privacy Policy
                </Link>
                <Link href="/terms" className="link-hover link text-secondary">
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
