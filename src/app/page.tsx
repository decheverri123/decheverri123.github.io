// src/app/page.tsx

import Layout from "./LayoutHeader";
import WorkHistory from "@/components/WorkHistory";
import SkillsSection from "@/components/SkillsSection";
import LanguagesSection from "@/components/LanguagesSection";
import PoweredBySection from "@/components/PoweredBySection";
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
