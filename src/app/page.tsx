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
        <h1 className="mb-2 text-center text-3xl font-bold text-secondary sm:mb-3 sm:text-4xl md:text-5xl">
          Danny Echeverri
        </h1>
        <p className="mb-6 text-center text-lg font-medium text-primary sm:text-xl">
          Software Engineer
        </p>

        <p className="mx-auto mb-8 max-w-xl px-4 text-center text-sm leading-relaxed text-base-content sm:mb-8 sm:max-w-3xl sm:px-0 sm:text-base md:text-lg">
          Senior Full Stack Engineer with 6+ YOE building products at Microsoft,
          in health-tech, and at YC-backed startups. Founding mobile engineer on
          a consumer finance app now managing millions of dollars in user
          accounts, and instrumental in building the AI assistant at its center.
          Dual-background in Computer Science and Neuroscience, at home owning a
          product end to end, from the first commit to the release process that
          keeps it shipping.
        </p>

        <div className="mb-10 flex justify-center space-x-6">
          <a
            href="https://github.com/decheverri123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors hover:text-primary"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:decheverri123@gmail.com"
            className="text-3xl transition-colors hover:text-primary"
            aria-label="Email Contact"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/danny-echeverri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-colors hover:text-primary"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>

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
