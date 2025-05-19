// src/app/Header.tsx

"use client";

import Link from "next/link";

export default function Header() {
  // The ref to the dropdown element. We use a ref so that we can access the element
  // in the DOM and add an event listener to it. We also use the `useRef` hook to
  // create a ref that is persisted across rerenders.

  return (
    <div className="navbar bg-base-300 px-4 py-2 shadow-md">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          {" "}
          {/* Hide the entire dropdown on large screens */}
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/" className="text-base font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-base font-medium">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-base font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/catalina-rosa">Catalina Rosa Line</Link>
              <ul className="p-2">
                <li>
                  <Link href="/catalina-rosa/prima">Prima Model</Link>
                </li>
                <li>
                  <Link href="/catalina-rosa/secunda">Secunda Model</Link>
                </li>
                <li>
                  <Link href="/catalina-rosa/terza">Terza Model</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Brand/Logo */}
        <Link href="/" className="btn btn-ghost text-xl text-white">
          Danny Echeverri
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="text-base font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-base font-semibold">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-base font-semibold">
              Contact
            </Link>
          </li>
          <li className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="flex items-center gap-1">
              <Link
                href="/catalina-rosa"
                className="text-base font-semibold hover:text-primary"
              >
                Catalina Rosa Line
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content left-0 top-full z-[1] mt-1 min-w-[200px] rounded-box bg-base-100 p-2 shadow-lg"
            >
              <li>
                <Link
                  href="/catalina-rosa"
                  className="block px-4 py-2 hover:bg-base-200 hover:text-primary"
                >
                  All Models
                </Link>
              </li>
              <li>
                <Link
                  href="/catalina-rosa/prima"
                  className="block px-4 py-2 hover:bg-base-200 hover:text-primary"
                >
                  Prima
                </Link>
              </li>
              <li>
                <Link
                  href="/catalina-rosa/secunda"
                  className="block px-4 py-2 hover:bg-base-200 hover:text-primary"
                >
                  Secunda
                </Link>
              </li>
              <li>
                <Link
                  href="/catalina-rosa/terza"
                  className="block px-4 py-2 hover:bg-base-200 hover:text-primary"
                >
                  Terza
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
