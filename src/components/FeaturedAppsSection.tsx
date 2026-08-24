// src/components/FeaturedAppsSection.tsx

"use client";

export default function FeaturedAppsSection() {
  return (
    <section className="mx-auto my-12 max-w-5xl px-4">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="relative z-10 bg-base-100 px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary">
            Featured Applications
          </h2>
          <p className="mt-1 text-sm text-base-content/75">
            Tools and applications built for productivity and AI workflows
          </p>
        </div>
      </div>{" "}
    </section>
  );
}
