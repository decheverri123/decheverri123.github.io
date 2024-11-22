// src/app/contact/page.tsx

import Layout from "../LayoutHeader";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-8 text-base-content">
        <div className="relative mx-auto max-w-7xl">
          {/* Subtle decorative elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-primary/20 opacity-30"></div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-secondary/20 opacity-30"></div>

          <h1 className="mb-8 text-center text-4xl font-semibold text-primary">
            Contact
          </h1>

          <p className="mx-auto mb-12 max-w-xl text-center text-lg text-base-content/75">
            Let&#39;s connect! Feel free to reach out through any of these
            platforms.
          </p>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/danny-echeverri/"
              target="_blank"
              rel="noopener noreferrer"
              className="group card bg-base-200 shadow-xl transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="card-body items-center text-center">
                <FaLinkedin className="group-hover:text-accent-focus mb-4 text-5xl text-accent transition-colors" />
                <h2 className="group-hover:text-secondary-focus card-title text-secondary transition-colors">
                  LinkedIn
                </h2>
                <p className="text-base-content/75 transition-colors group-hover:text-base-content">
                  Professional Network
                </p>
              </div>
            </a>

            {/* Email Link */}
            <a
              href="mailto:decheverri123@gmail.com"
              className="group card bg-base-200 shadow-xl transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="card-body items-center text-center">
                <FaEnvelope className="group-hover:text-accent-focus mb-4 text-5xl text-accent transition-colors" />
                <h2 className="group-hover:text-secondary-focus card-title text-secondary transition-colors">
                  Email
                </h2>
                <p className="text-base-content/75 transition-colors group-hover:text-base-content">
                  Direct Communication
                </p>
              </div>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/decheverri123"
              target="_blank"
              rel="noopener noreferrer"
              className="group card bg-base-200 shadow-xl transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="card-body items-center text-center">
                <FaGithub className="group-hover:text-accent-focus mb-4 text-5xl text-accent transition-colors" />
                <h2 className="group-hover:text-secondary-focus card-title text-secondary transition-colors">
                  GitHub
                </h2>
                <p className="text-base-content/75 transition-colors group-hover:text-base-content">
                  Code & Projects
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
