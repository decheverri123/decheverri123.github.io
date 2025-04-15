// src/app/Header.tsx

"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Header() {
  // The ref to the dropdown element. We use a ref so that we can access the element
  // in the DOM and add an event listener to it. We also use the `useRef` hook to
  // create a ref that is persisted across rerenders.
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    /**
     * Handles the event when the user clicks outside of the dropdown.
     * We use a ref to keep track of it, which is like a special variable that we can
     * use to access the element in the DOM. We also use the MouseEvent, which is
     * an object that contains information about the event that triggered the
     * function. We use this to check if the user clicked outside of the dropdown.
     * @param {MouseEvent} event - The event that triggered the function.
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dropdownRef.current.removeAttribute("open");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Hamburger menu for small screens */}
        <div className="dropdown inline-block text-white lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-white shadow"
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
              <Link href="/apps/rnc" className="text-base font-medium">
                RNC
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-base font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Brand/Logo */}
        <Link href="/" className="btn btn-ghost text-xl text-white">
          Danny Echeverri
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
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
            <Link href="/apps/rnc" className="text-base font-semibold">
              RNC
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-base font-semibold">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">{/* Remove theme dropdown */}</div>
    </div>
  );
}
