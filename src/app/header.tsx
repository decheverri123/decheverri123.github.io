// src/app/Header.tsx

"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-300 px-4 py-2 text-base-content shadow-md">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            aria-label="Open Navigation Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-base-content shadow"
          >
            <li>
              <Link href="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="font-medium">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="font-medium">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Brand/Logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold text-white">
          Danny Echeverri
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          <li>
            <Link
              href="/"
              className="font-semibold transition-colors hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="font-semibold transition-colors hover:text-primary"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className="font-semibold transition-colors hover:text-primary"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-semibold transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
