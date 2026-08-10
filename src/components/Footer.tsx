// src/components/Footer.tsx

"use client";

import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 p-8 text-base-content shadow-inner">
      <nav className="grid grid-flow-col gap-4 text-sm font-medium sm:gap-6">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/projects" className="hover:text-primary transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
        <Link href="/privacy" className="hover:text-primary transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-primary transition-colors">
          Terms of Service
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-6 text-xl">
          <a
            href="https://github.com/decheverri123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:decheverri123@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/danny-echeverri/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-xs opacity-75">
          © {new Date().getFullYear()} Danny Echeverri. All rights reserved.
        </p>
      </aside>
    </footer>
  );
}
