"use client";

import React from "react";
import Link from "next/link";
import Layout from "../../LayoutHeader";
import ImageCarousel from "../../../components/ImageCarousel";
import SpecificationsTable from "../../../components/SpecificationsTable";

export default function RosaPrimaPage() {
  // Dummy data for the Prima model
  const guitarData = {
    name: "Rosa Prima",
    price: "$3,000",
    tagline: "Handcrafted excellence with vintage soul.",
    description:
      "Fully relic'd nitro finish. PLEK'd frets. Flagship tone and feel.",
    heroImage: "/assets/apps/catalina-rosa/prima.png", // Replace with actual image path
    detailImages: [
      "/assets/apps/catalina-rosa/prima.png",
      "/assets/apps/catalina-rosa/secunda.png",
      "/assets/apps/catalina-rosa/terza.png",
    ],
    features: [
      "Nitro-finished relic with premium woods",
      "Custom rosebud inlays with abalone",
      "PLEK'd stainless steel frets",
      "Handwound Echeverri V1 pickups",
    ],
    specifications: {
      body: "Premium Poplar",
      neck: "Premium Roasted Maple",
      fretboard: "Dark Ebony",
      radius: '10"-14" Compound',
      frets: "22 Jumbo Stainless (PLEK'd)",
      pickups: "HSS (Custom)",
      bridge: "MannMade PRS SE w/ Custom Saddles",
      tuners: "Gotoh Hybrid Locking (Black/Gold)",
      finish: "Nitro-finished relic",
      weight: "7.5 lbs",
      case: "Molded Flight Case (Pink Plush)",
    },
    testimonials: [
      {
        quote:
          "The Prima is the finest guitar I've played in years. The attention to detail is remarkable.",
        author: "Alex Johnson, Session Guitarist",
      },
      {
        quote:
          "Tone for days and playability that makes you forget you're holding an instrument.",
        author: "Maria Rodriguez, Recording Artist",
      },
    ],
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative flex min-h-[400px] items-center justify-center bg-gradient-to-r from-pink-900 to-pink-700">
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: "url('/assets/apps/catalina-rosa/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        ></div>
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl">
            {guitarData.name}
          </h1>
          <p className="text-lg italic">{guitarData.tagline}</p>
          <div className="badge badge-primary badge-lg mt-4">
            {guitarData.price}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-base-100 px-4 py-10 sm:px-8">
        {/* Overview Section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">Overview</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg">{guitarData.description}</p>
              <p className="mb-6">
                The Rosa Prima represents the pinnacle of Echeverri
                craftsmanship. Each instrument is meticulously handcrafted to
                deliver an unparalleled playing experience that combines vintage
                aesthetics with modern reliability.
              </p>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="space-y-2">
                  {guitarData.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-base-200 p-4">
              <ImageCarousel
                images={guitarData.detailImages}
                altPrefix={guitarData.name}
              />
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">Specifications</h2>
          <SpecificationsTable specifications={guitarData.specifications} />
        </div>

        {/* Testimonials */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">What Players Say</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {guitarData.testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <p className="italic">"{testimonial.quote}"</p>
                  <p className="mt-4 text-right font-semibold">
                    — {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="card mx-auto mt-16 max-w-2xl bg-base-200 p-8 text-center shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">
            Ready to Experience the Rosa Prima?
          </h3>
          <p className="mb-6">
            Contact us to discuss custom options or to place an order for your
            Rosa Prima guitar.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/catalina-rosa" className="btn btn-outline">
              Back to Models
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
