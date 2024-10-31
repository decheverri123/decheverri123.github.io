// src/app/contact/page.tsx

import Layout from "../LayoutHeader";

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="mb-8 text-center text-4xl font-semibold text-yellow-400">
        Contact
      </h1>
      <p className="mx-auto max-w-xl text-center">
        This is where visitors can find information to get in touch with you.
      </p>
    </Layout>
  );
}
