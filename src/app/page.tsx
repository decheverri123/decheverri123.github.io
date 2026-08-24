// src/app/page.tsx

import Layout from "./LayoutHeader";
import WorkHistory from "@/components/WorkHistory";
import SkillsSection from "@/components/SkillsSection";
import LanguagesSection from "@/components/LanguagesSection";
import PoweredBySection from "@/components/PoweredBySection";
import FeaturedAppsSection from "@/components/FeaturedAppsSection";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  const highlights = [
    { label: "6+ YOE", desc: "Full Stack & Mobile" },
    { label: "Ex-Microsoft", desc: "Azure DevOps · 2.5M+ Users" },
    { label: "Founding Mobile Eng", desc: "YC W23 FinTech SaaS" },
    { label: "Dual Background", desc: "CS & Neuroscience (Amherst)" },
  ];

  return (
    <Layout>
      <div className="min-h-screen w-full p-4 text-white sm:p-8 md:px-16 lg:px-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-4xl pb-8 pt-4 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
            Danny Echeverri
          </h1>
          <p className="mb-6 text-lg font-medium text-primary sm:text-xl">
            Senior Full Stack & Founding Mobile Engineer
          </p>

          <p className="mx-auto mb-8 max-w-3xl px-4 text-center text-sm leading-relaxed text-base-content/90 sm:px-0 sm:text-base md:text-lg">
            Senior Full Stack Engineer with 6+ YOE building products at
            Microsoft, in health-tech, and at YC-backed startups. Founding
            mobile engineer on a consumer finance app now managing millions of
            dollars in user accounts, and instrumental in building the AI
            assistant at its center. Dual-background in Computer Science and
            Neuroscience, at home owning a product end to end, from the first
            commit to the release process that keeps it shipping.
          </p>

          {/* Quick Impact Highlight Badges */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-secondary/20 bg-base-200/80 p-3 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:border-secondary/50"
              >
                <div className="text-sm font-bold text-secondary sm:text-base">
                  {item.label}
                </div>
                <div className="text-[11px] font-medium text-base-content/75 sm:text-xs">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="/Danny_Echeverri_Resume.pdf"
              download="Danny_Echeverri_Resume.pdf"
              className="btn btn-secondary btn-sm gap-2 shadow-lg transition-transform sm:btn-md hover:scale-105"
            >
              <FaDownload /> Download Resume (PDF)
            </a>
            <Link
              href="/resume"
              className="btn btn-outline btn-sm gap-2 border-secondary/40 text-white transition-all sm:btn-md hover:border-secondary hover:bg-secondary/20"
            >
              <FaFileAlt /> View Web Resume
            </Link>
            <Link
              href="/contact"
              className="btn btn-ghost btn-sm gap-2 text-base-content transition-all sm:btn-md hover:text-primary"
            >
              <FaEnvelope /> Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/decheverri123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors hover:text-primary sm:text-3xl"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:decheverri123@gmail.com"
              className="text-2xl transition-colors hover:text-primary sm:text-3xl"
              aria-label="Email Contact"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/danny-echeverri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors hover:text-primary sm:text-3xl"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* Featured Applications Section */}
        <FeaturedAppsSection />

        {/* Work History Section */}
        <WorkHistory />

        {/* Skills & Tech Section */}
        <SkillsSection />

        {/* Languages Section */}
        <LanguagesSection />

        {/* Powered By Section */}
        <PoweredBySection />
      </div>
    </Layout>
  );
}
