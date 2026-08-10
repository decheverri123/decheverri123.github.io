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
