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
              <h4 className="font-semibold text-white mb-2">
                Application Purpose:
              </h4>
              <p className="text-sm leading-relaxed text-base-content/90">
                <strong>ai-email</strong> is an intelligent email assistant
                designed to streamline inbox management. It securely connects to
                user-authorized Google Workspace / Gmail APIs to summarize long
                email threads, extract key action items, automatically
                categorize messages, and draft context-aware email replies using
                artificial intelligence.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-base-content/75">
              <span className="flex items-center gap-1">
                <FaEnvelopeOpenText className="text-secondary" /> Gmail / Google
                Workspace API Integration
              </span>
              <span className="flex items-center gap-1">
                <FaShieldAlt className="text-success" /> Strict Client-Side
                Privacy & Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
