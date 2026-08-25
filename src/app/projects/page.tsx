// src/app/projects/page.tsx

import type { Metadata } from "next";
import Layout from "../LayoutHeader";
import Link from "next/link";
import Image from "next/image";
import {
  FaYoutube,
  FaTiktok,
  FaApple,
  FaExternalLinkAlt,
  FaGithub,
  FaTerminal,
} from "react-icons/fa";
import { SiRust } from "react-icons/si";

const description =
  "Side projects by Danny Echeverri — open source Rust CLI tools, iOS apps, guitar performance videos, and independent builds.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  openGraph: {
    title: "Projects | Danny Echeverri",
    description,
  },
};

export default function ProjectsPage() {
  const videos = [
    {
      id: "S5vAe1xonH4",
      title: "Not Like Us",
      subtitle: "Guitar Cover",
    },
    {
      id: "xMhKqeG9IHQ",
      title: "Reminiscence (ft. Minna Akutsu)",
      subtitle: "Original",
    },
    {
      id: "GP7YnSJktv4",
      title: "Don't Cry",
      subtitle: "YouTube Short",
    },
  ];

  const openSourceProjects = [
    {
      title: "claude-shift (cshift)",
      subtitle: "Model & Provider Switcher for Claude Code",
      description:
        "A zero-overhead Rust CLI tool and interactive TUI wizard to instantly switch models and providers for Claude Code across 4 distinct agent tiers (Haiku, Medium, Large, Epic) with sub-second presets and custom provider support.",
      tags: ["Rust", "CLI & TUI", "Claude Code", "LLM Routing", "Open Source"],
      icon: <SiRust className="text-3xl text-[#DEA584]" />,
      githubUrl: "https://github.com/decheverri123/claude-shift",
    },
    {
      title: "rust-llms-site-crawl (wcl)",
      subtitle: "High-Speed Website to LLM Markdown Engine",
      description:
        "A zero-config, high-performance Rust CLI that turns any website or documentation suite into clean, LLM-ready markdown for RAG pipelines and language models with sitemap discovery, llms.txt fast paths, and live TUI preview.",
      tags: ["Rust", "Ratatui TUI", "Web Scraping", "RAG / LLMs", "Markdown"],
      icon: <FaTerminal className="text-2xl text-secondary" />,
      githubUrl: "https://github.com/decheverri123/rust-llms-site-crawl",
    },
  ];

  const appProjects = [
    {
      title: "Sparking Teams",
      subtitle: "Dragon Ball Sparking Zero Companion",
      description:
        "Complete character database, movesets, advanced roster search, and custom team builder built for passionate fighting game players.",
      tags: ["SwiftUI", "SwiftData", "MVVM", "Concurrency", "iOS"],
      image: "/assets/apps/sparking/logo.png",
      detailUrl: "/apps/sparking-teams",
      appStoreUrl: "https://apps.apple.com/us/app/sparking-teams/id6737282855",
    },
    {
      title: "Meditatio",
      subtitle: "Stoic Mindfulness & Daily Journal",
      description:
        "Transform daily reactions into emotional resilience through structured 3-step Stoic reflection, daily philosopher wisdom, and home screen widgets.",
      tags: [
        "SwiftUI",
        "WidgetKit",
        "Sign in with Apple",
        "Google Sign-In",
        "SwiftData",
      ],
      image: "/assets/apps/meditatio/logo.png",
      detailUrl: "/apps/meditatio",
      appStoreUrl: "https://apps.apple.com/us/app/meditat-io/id6737626840",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-4 sm:p-8 md:px-12">
        <div className="relative mx-auto max-w-7xl">
          {/* Subtle decorative elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-primary/20 opacity-30"></div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-secondary/20 opacity-30"></div>

          <h1 className="mb-2 text-center text-3xl font-bold text-white sm:text-4xl">
            Projects & Work
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-base-content/80 sm:text-base">
            A showcase of open source developer tools, production native mobile
            applications, and creative compositions.
          </p>

          {/* Section: Open Source Tools */}
          <div className="relative my-10 flex items-center justify-center">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            <div className="relative z-10 bg-base-100 px-6 text-center">
              <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
                Open Source Tools & CLIs
              </h2>
            </div>
          </div>

          <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {openSourceProjects.map((tool) => (
              <div
                key={tool.title}
                className="card flex flex-col justify-between border border-secondary/20 bg-base-200 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-secondary/60"
              >
                <div className="card-body p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-secondary/30 bg-gradient-to-br from-base-300 via-base-200 to-base-300 shadow-md">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {tool.title}
                      </h3>
                      <p className="text-xs font-medium text-secondary sm:text-sm">
                        {tool.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-base-content/90">
                    {tool.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-outline badge-sm border-secondary/30 text-[11px] text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-b-2xl border-t border-base-300 bg-base-300/30 p-4 px-6 sm:px-8">
                  <a
                    href={tool.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm gap-1.5 text-xs text-secondary hover:text-white"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={tool.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm gap-1.5 text-xs shadow-sm"
                  >
                    <FaGithub /> View Repository{" "}
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Section: iOS Apps */}
          <div className="relative my-10 flex items-center justify-center">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            <div className="relative z-10 bg-base-100 px-6 text-center">
              <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
                iOS Applications
              </h2>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {appProjects.map((app) => (
              <div
                key={app.title}
                className="card flex flex-col justify-between border border-secondary/20 bg-base-200 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-secondary/60"
              >
                <div className="card-body p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-secondary/30 shadow-md">
                      <Image
                        src={app.image}
                        alt={`${app.title} icon`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {app.title}
                      </h3>
                      <p className="text-xs font-medium text-secondary sm:text-sm">
                        {app.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-base-content/90">
                    {app.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-outline badge-sm border-secondary/30 text-[11px] text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-b-2xl border-t border-base-300 bg-base-300/30 p-4 px-6 sm:px-8">
                  <Link
                    href={app.detailUrl}
                    className="btn btn-ghost btn-sm text-xs text-secondary hover:text-white"
                  >
                    Learn More & Architecture
                  </Link>
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm gap-1.5 text-xs shadow-sm"
                  >
                    <FaApple /> App Store{" "}
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Music */}
          <div className="relative my-16 flex items-center justify-center">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            <div className="relative z-10 bg-base-100 px-6 text-center">
              <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
                Music & Creative Works
              </h2>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group card border border-secondary/10 bg-base-200 shadow-xl transition-all duration-300 hover:scale-105 hover:border-secondary/40 hover:shadow-2xl"
              >
                <div className="card-body items-center p-4 text-center sm:p-5">
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-inner">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="group-hover:text-secondary-focus card-title mt-3 text-base text-secondary transition-colors sm:text-lg">
                    {video.title}
                  </h3>
                  <p className="text-xs text-base-content/75 transition-colors group-hover:text-base-content sm:text-sm">
                    {video.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Channels Banner */}
          <div className="mx-auto mt-16 flex flex-col items-center justify-center space-y-8 px-4">
            <div className="w-full max-w-4xl rounded-2xl border border-secondary/20 bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 p-6 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-secondary sm:text-3xl">
                Visit My Channels
              </h3>
              <p className="mt-2 text-xs text-base-content/80 sm:text-sm">
                Explore more guitar performances, covers, and original music
              </p>
            </div>

            {/* Social Media Channel Cards */}
            <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
              {/* YouTube Channel Card */}
              <a
                href="https://www.youtube.com/channel/UCbnaem81HGPMeyh3eOMSBfA?app=desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="group card border border-secondary/20 bg-base-200 p-6 shadow-xl transition-all hover:scale-105 hover:border-secondary/60 hover:shadow-2xl"
              >
                <div className="card-body items-center justify-center p-0 text-center">
                  <FaYoutube className="text-6xl text-red-600 opacity-80 transition-all group-hover:scale-110 group-hover:opacity-100 sm:text-7xl" />
                  <h4 className="card-title mt-4 text-lg text-secondary">
                    YouTube Channel
                  </h4>
                  <p className="text-xs text-base-content/70">
                    Watch guitar covers & original tracks
                  </p>
                </div>
              </a>

              {/* TikTok Channel Card */}
              <a
                href="https://www.tiktok.com/@danny.echeverri?_t=8rc7QG4J3tO&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group card border border-secondary/20 bg-base-200 p-6 shadow-xl transition-all hover:scale-105 hover:border-secondary/60 hover:shadow-2xl"
              >
                <div className="card-body items-center justify-center p-0 text-center">
                  <FaTiktok className="text-6xl text-white opacity-80 transition-all group-hover:scale-110 group-hover:opacity-100 sm:text-7xl" />
                  <h4 className="card-title mt-4 text-lg text-secondary">
                    TikTok Channel
                  </h4>
                  <p className="text-xs text-base-content/70">
                    Quick clips, riffs & short-form video
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
