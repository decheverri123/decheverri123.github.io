# Privacy Policy & Terms of Service Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create Google OAuth verification-compliant Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages with a shared website footer, verify the static export build, commit, and push.

**Architecture:** Build React components using Next.js App Router and DaisyUI styling. Create a `<Footer />` component integrated in `LayoutHeader.tsx`, and create static pages `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`.

**Tech Stack:** Next.js 15 (App Router, Static Export), React 18, Tailwind CSS, DaisyUI, React Icons.

## Global Constraints

- Site Theme: NavyPink (`data-theme="navypink"`) / DaisyUI dark theme matching existing `bg-base-100` and `bg-base-300`.
- Routes: `/privacy` and `/terms`.
- Contact Email: `decheverri123@gmail.com`.
- OAuth Non-Sharing Statement: Must explicitly state "We do not sell, rent, trade, or share user data or Google User Data with third parties."
- Account Revocation Link: Must include link to `https://myaccount.google.com/permissions`.

---

### Task 1: Create Shared Footer Component & Integrate with Layout

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/LayoutHeader.tsx:20-25`

**Interfaces:**
- Consumes: Next.js `Link` component.
- Produces: `<Footer />` component rendered on all pages.

- [ ] **Step 1: Create `src/components/Footer.tsx`**

```tsx
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
```

- [ ] **Step 2: Update `src/app/LayoutHeader.tsx` to render `<Footer />`**

Import `Footer` and add `<Footer />` inside `<div className="min-h-screen bg-base-100 flex flex-col">`:

```tsx
// src/app/LayoutHeader.tsx

"use client";

import { useState, useEffect } from "react";
import Header from "./header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.documentElement.setAttribute("data-theme", "navypink");
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-base-100">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Commit Footer changes**

```bash
git add src/components/Footer.tsx src/app/LayoutHeader.tsx
git commit -m "feat: add site footer component and integrate into global layout"
```

---

### Task 2: Create Privacy Policy Page (`/privacy`)

**Files:**
- Create: `src/app/privacy/page.tsx`

**Interfaces:**
- Consumes: `<Layout>` from `@/app/LayoutHeader`.
- Produces: Static `/privacy` route.

- [ ] **Step 1: Create `src/app/privacy/page.tsx`**

```tsx
// src/app/privacy/page.tsx

import Layout from "../LayoutHeader";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Danny Echeverri",
  description: "Privacy Policy for Danny Echeverri's website and applications.",
};

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-base-100 px-4 py-12 text-base-content sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-base-200 p-6 shadow-xl sm:p-10">
          <h1 className="mb-6 text-3xl font-bold text-secondary sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-8 text-sm opacity-70">
            Last Updated: August 10, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed sm:text-base">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                1. Overview & Scope
              </h2>
              <p>
                This Privacy Policy applies to the website operated at{" "}
                <code className="text-secondary">decheverri123.github.io</code>{" "}
                and any associated applications, tools, or services provided by
                Danny Echeverri (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed
                to protecting your privacy and ensuring transparency regarding any data accessed or processed.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                2. Information We Access & Collect
              </h2>
              <p>
                Our applications may request user authentication via third-party providers such as Google OAuth. When you authenticate:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  <strong>Account Profile Information:</strong> Basic profile details (such as email address and profile name) may be used to identify your session.
                </li>
                <li>
                  <strong>OAuth Permissions & API Scopes:</strong> Access tokens and permission scopes are requested strictly as needed to fulfill core application features requested directly by you.
                </li>
                <li>
                  <strong>Website Usage Data:</strong> Non-personally identifiable browser metadata standard to web hosting services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                3. How We Use Information
              </h2>
              <p>
                Any data accessed via OAuth permissions or user input is used exclusively to:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Provide and maintain the functional features of the application.</li>
                <li>Authenticate your identity and execute requested user actions.</li>
                <li>Ensure application security and troubleshoot technical issues.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                4. Data Storage & Retention
              </h2>
              <p>
                Authentication credentials, API tokens, and session states are stored locally on your device whenever applicable (e.g. client-side configuration or local storage). We do not maintain centralized databases of your Google account data unless explicitly stated within a specific application service.
              </p>
            </section>

            <section className="rounded-lg bg-base-300 p-4 border border-secondary/20">
              <h2 className="mb-2 text-xl font-semibold text-secondary">
                5. Third-Party Data Sharing & Disclosure
              </h2>
              <p className="font-medium text-white">
                We do not sell, rent, trade, or share your personal data or Google User Data with third parties under any circumstances.
              </p>
              <p className="mt-2">
                User data accessed via Google OAuth APIs is strictly used for the requested functionality and is never transferred to external data brokers or advertising networks.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                6. Data Deletion & Access Revocation
              </h2>
              <p>
                You may revoke our applications&apos; access to your Google Account at any time through your Google Security settings:
              </p>
              <p className="mt-2">
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-secondary underline"
                >
                  Manage Google Account Permissions (https://myaccount.google.com/permissions)
                </a>
              </p>
              <p className="mt-2">
                Revoking access immediately invalidates all active OAuth tokens. You may also clear your browser or local device storage to remove local credentials.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                7. Contact Us
              </h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please contact:
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:decheverri123@gmail.com"
                  className="link link-primary"
                >
                  decheverri123@gmail.com
                </a>
              </p>
            </section>

            <div className="mt-8 border-t border-base-300 pt-6">
              <Link href="/" className="btn btn-secondary btn-sm">
                ← Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
```

- [ ] **Step 2: Commit Privacy Policy page**

```bash
git add src/app/privacy/page.tsx
git commit -m "feat: add Privacy Policy page compliant with Google OAuth verification"
```

---

### Task 3: Create Terms of Service Page (`/terms`)

**Files:**
- Create: `src/app/terms/page.tsx`

**Interfaces:**
- Consumes: `<Layout>` from `@/app/LayoutHeader`.
- Produces: Static `/terms` route.

- [ ] **Step 1: Create `src/app/terms/page.tsx`**

```tsx
// src/app/terms/page.tsx

import Layout from "../LayoutHeader";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Danny Echeverri",
  description: "Terms of Service for Danny Echeverri's website and applications.",
};

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-base-100 px-4 py-12 text-base-content sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-base-200 p-6 shadow-xl sm:p-10">
          <h1 className="mb-6 text-3xl font-bold text-secondary sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mb-8 text-sm opacity-70">
            Last Updated: August 10, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed sm:text-base">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website at{" "}
                <code className="text-secondary">decheverri123.github.io</code> or any applications and tools provided by Danny Echeverri (&quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Services.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                2. Use of Services
              </h2>
              <p>
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of any application complies with applicable local, national, and international laws.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                3. Intellectual Property Rights
              </h2>
              <p>
                All original content, source code, logos, and materials provided on this website and within associated software applications are owned by Danny Echeverri unless explicitly stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                4. Disclaimer of Warranties
              </h2>
              <p>
                The Services are provided on an <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS AVAILABLE&quot;</strong> basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                5. Limitation of Liability
              </h2>
              <p>
                In no event shall Danny Echeverri be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use or inability to use the Services.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                6. Modifications to Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms of Service at any time. Any changes will be posted directly to this page with an updated &quot;Last Updated&quot; date. Continued use of the Services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-white">
                7. Contact Information
              </h2>
              <p>
                If you have questions regarding these Terms of Service, please contact:
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:decheverri123@gmail.com"
                  className="link link-primary"
                >
                  decheverri123@gmail.com
                </a>
              </p>
            </section>

            <div className="mt-8 border-t border-base-300 pt-6">
              <Link href="/" className="btn btn-secondary btn-sm">
                ← Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
```

- [ ] **Step 2: Commit Terms of Service page**

```bash
git add src/app/terms/page.tsx
git commit -m "feat: add Terms of Service page compliant with Google OAuth verification"
```

---

### Task 4: Verify Build, Commit, and Push to GitHub

**Files:**
- Repository: `decheverri123.github.io`

- [ ] **Step 1: Test Next.js static build**

Run: `npm run build`
Expected: Build succeeds with zero errors, generating static output for `/privacy` and `/terms`.

- [ ] **Step 2: Push changes to main branch**

Run: `git push origin main`

- [ ] **Step 3: Deploy to GitHub Pages (if deploy script configured)**

Run: `npm run deploy`
Expected: `gh-pages -d out` deploys the built pages to GitHub Pages.
