// src/components/FeaturedAppsSection.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaApple,
  FaExternalLinkAlt,
  FaHeart,
  FaGamepad,
  FaGithub,
  FaTerminal,
} from "react-icons/fa";
import { SiRust } from "react-icons/si";

export default function FeaturedAppsSection() {
  const featuredApps = [
    {
      title: "claude-shift (cshift)",
      badge: "Open Source CLI",
      subtitle: "Model & Provider Switcher for Claude Code",
      tagline: "4-Tier Architecture · Fast Rust CLI & TUI",
      description:
        "A zero-overhead Rust CLI tool and interactive TUI wizard to instantly switch models and providers for Claude Code across 4 distinct agent tiers (Haiku, Medium, Large, Epic) with sub-second presets and custom provider support.",
      tags: [
        "Rust",
        "CLI & TUI",
        "Claude Code",
        "LLM Routing",
        "DevTools",
        "Open Source",
      ],
      icon: (
        <div className="flex flex-col items-center justify-center">
          <SiRust className="text-3xl text-[#DEA584]" />
        </div>
      ),
      githubUrl: "https://github.com/decheverri123/claude-shift",
    },
    {
      title: "rust-llms-site-crawl (wcl)",
      badge: "Open Source CLI",
      subtitle: "High-Speed Website to LLM Markdown Engine",
      tagline: "Single-Binary CLI · Ratatui Live Dashboard",
      description:
        "A zero-config, high-performance Rust CLI that turns any website or documentation suite into clean, LLM-ready markdown for RAG pipelines and language models with sitemap discovery, llms.txt fast paths, and live terminal preview.",
      tags: [
        "Rust",
        "Ratatui TUI",
        "Web Scraping",
        "RAG / LLMs",
        "Markdown",
        "Open Source",
      ],
      icon: (
        <div className="flex flex-col items-center justify-center">
          <FaTerminal className="text-2xl text-secondary" />
        </div>
      ),
      githubUrl: "https://github.com/decheverri123/rust-llms-site-crawl",
    },
    {
      title: "Sparking Teams",
      badge: "iOS Application",
      subtitle: "Gaming Companion & Team Builder",
      tagline: "Built for Dragon Ball: Sparking! ZERO",
      description:
        "A full-featured iOS companion app providing a complete character database, movesets, advanced filtering, and a custom team planner. (Please note: app is currently offline since I haven't paid the $100 yearly dev fee for Apple).",
      tags: ["SwiftUI", "SwiftData", "MVVM", "iOS App Store"],
      icon: <FaGamepad className="text-secondary" />,
      image: "/assets/apps/sparking/logo.png",
      detailUrl: "/apps/sparking-teams",
      appStoreUrl: "https://apps.apple.com/us/app/sparking-teams/id6737282855",
    },
    {
      title: "Meditatio",
      badge: "iOS Application",
      subtitle: "Stoic Mindfulness & Journaling",
      tagline: "Daily Reflection & Emotional Resilience",
      description:
        "A mindful journaling application rooted in Stoic philosophy. Features structured 3-step reflection, WidgetKit widgets, Apple/Google auth, and local privacy. (Please note: app is currently offline since I haven't paid the $100 yearly dev fee for Apple).",
      tags: ["SwiftUI", "WidgetKit", "AuthenticationServices", "SwiftData"],
      icon: <FaHeart className="text-secondary" />,
      image: "/assets/apps/meditatio/logo.png",
      detailUrl: "/apps/meditatio",
      appStoreUrl: "https://apps.apple.com/us/app/meditat-io/id6737626840",
    },
  ];

  return (
    <section className="mx-auto my-12 max-w-5xl px-4">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="relative z-10 bg-base-100 px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
            Featured Projects & Open Source
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-base-content/75">
            Production iOS applications, high-performance Rust CLI tools &
            developer utilities
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredApps.map((app) => (
          <div
            key={app.title}
            className="card bg-base-200 shadow-xl border border-secondary/20 transition-all duration-300 hover:border-secondary/60 hover:scale-[1.02] flex flex-col justify-between"
          >
            <div className="card-body p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  {app.image ? (
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-secondary/30 shadow-md">
                      <Image
                        src={app.image}
                        alt={`${app.title} icon`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-secondary/30 bg-gradient-to-br from-base-300 via-base-200 to-base-300 shadow-md">
                      {app.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {app.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary">
                      {app.subtitle}
                    </p>
                    <p className="text-xs text-base-content/60">
                      {app.tagline}
                    </p>
                  </div>
                </div>
                {app.badge && (
                  <span className="badge badge-sm badge-outline border-secondary/40 text-secondary text-[10px] font-semibold whitespace-nowrap">
                    {app.badge}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-base-content/85">
                {app.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-sm badge-outline border-secondary/30 text-[11px] text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-base-300 p-4 px-6 flex items-center justify-between gap-3 bg-base-300/30 rounded-b-2xl">
              {app.detailUrl ? (
                <Link
                  href={app.detailUrl}
                  className="btn btn-ghost btn-sm text-xs text-secondary hover:text-white"
                >
                  Learn More
                </Link>
              ) : app.githubUrl ? (
                <a
                  href={app.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm text-xs text-secondary hover:text-white gap-1.5"
                >
                  <FaGithub /> GitHub
                </a>
              ) : (
                <div />
              )}

              {app.appStoreUrl ? (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm text-xs gap-1.5 shadow-sm"
                >
                  <FaApple /> App Store{" "}
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              ) : app.githubUrl ? (
                <a
                  href={app.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm text-xs gap-1.5 shadow-sm"
                >
                  <FaGithub /> View Repository{" "}
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
