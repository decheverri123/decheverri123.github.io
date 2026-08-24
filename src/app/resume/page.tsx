// src/app/resume/page.tsx

"use client";

import Layout from "../LayoutHeader";
import Resume from "../resume";
import { FaDownload, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ResumePage() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-base-100 p-4 sm:p-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          {/* Header Action Bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <Link
              href="/"
              className="btn btn-ghost btn-sm gap-2 text-base-content hover:text-primary"
            >
              <FaArrowLeft /> Back to Home
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/Danny_Echeverri_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm gap-2 border-secondary/40 text-white hover:bg-secondary/20"
              >
                <FaExternalLinkAlt /> Open PDF
              </a>
              <a
                href="/Danny_Echeverri_Resume.pdf"
                download="Danny_Echeverri_Resume.pdf"
                className="btn btn-secondary btn-sm gap-2 shadow-md transition-transform hover:scale-105"
              >
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>

          {/* Main Resume Content */}
          <div className="flex justify-center">
            <Resume />
          </div>
        </div>
      </div>
    </Layout>
  );
}
