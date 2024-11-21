// src/app/Header.tsx

"use client";

import Link from "next/link";
import { useTheme } from "./contexts/ThemeContext";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  // List of available themes
  const themes = [
    "armchair",
    "chordsurfer",
    "teal",
    "seafoam",
    "navypink",
    "organic",
    "steps",
    "terminology",
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dropdownRef.current.removeAttribute("open");
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Hamburger menu for small screens */}
        <div className="dropdown inline-block lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Brand/Logo */}
        <a href="/" className="btn btn-ghost text-xl">
          Danny Echeverri
        </a>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <details className="dropdown" ref={dropdownRef}>
            <summary
              className="btn btn-ghost"
              onClick={() => setIsOpen(!isOpen)}
            >
              Theme
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{
                  transform: isOpen ? "rotate(-90deg)" : "rotate(-180deg)",
                }}
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </summary>
            <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              {themes.map((themeName) => (
                <li key={themeName}>
                  <button
                    onClick={() => setTheme(themeName)}
                    className={`flex items-center gap-2 ${theme === themeName ? "active" : ""}`}
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      data-theme={themeName}
                    >
                      <div className="h-full w-full rounded-full bg-primary"></div>
                    </div>
                    <span className="capitalize">{themeName}</span>
                  </button>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}
