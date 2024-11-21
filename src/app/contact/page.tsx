// src/app/contact/page.tsx

import Layout from "../LayoutHeader";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
export default function ContactPage() {
  return (
    <Layout>
      <h1 className="text-base-600 mb-8 text-center text-4xl font-semibold">
        Contact
      </h1>
      <p className="text-base-500 mx-auto mb-8 max-w-xl text-center">
        Get in touch with me through any of the platforms below!
      </p>

      <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-x-10 md:space-y-0">
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/danny-echeverri/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-400 flex items-center space-x-3 transition hover:text-accent"
        >
          <FaLinkedin className="text-3xl" />
          <span className="text-lg font-medium">LinkedIn</span>
        </a>

        {/* Email Link */}
        <a
          href="mailto:decheverri123@gmail.com"
          className="text-base-400 flex items-center space-x-3 transition hover:text-accent"
        >
          <FaEnvelope className="text-3xl" />
          <span className="text-lg font-medium">Email</span>
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/decheverri123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-400 flex items-center space-x-3 transition hover:text-accent"
        >
          <FaGithub className="text-3xl" />
          <span className="text-lg font-medium">GitHub</span>
        </a>
      </div>
    </Layout>
  );
}
