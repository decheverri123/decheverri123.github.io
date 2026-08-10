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
