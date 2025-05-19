"use client";

import React from "react";
import Link from "next/link";
import Layout from "../../LayoutHeader";
import ImageCarousel from "../../../components/ImageCarousel";
import SpecificationsTable from "../../../components/SpecificationsTable";

export default function RosaSecundaPage() {
  // Dummy data for the Secunda model
  const guitarData = {
    name: "Rosa Secunda",
    price: "$2000",
    tagline: "Premium playability with artful aging.",
    description:
      "Studio-ready classic with vintage looks and modern stability.",
    heroImage: "/assets/apps/catalina-rosa/secunda.png", // Replace with actual image path
    detailImages: [
      "/assets/apps/catalina-rosa/secunda.png",
      "/assets/apps/catalina-rosa/prima.png",
      "/assets/apps/catalina-rosa/terza.png",
    ],
    features: [
      "Light-relic polyurethane finish",
      "Rosebud 12th fret inlay",
      "Alnico V pickups with coil-splitting",
      "Wilkinson hardware with locking tuners",
    ],
    specifications: {
      body: "Nyatoh",
      neck: "Satin Maple",
      fretboard: "Indian Laurel",
      radius: '10"-14" Compound',
      frets: "22 Jumbo Nickel-Silver",
      pickups: "HSS",
      bridge: "Wilkinson 2-Point (Gold)",
      tuners: "Jin-Ho Locking (Black/Gold)",
      finish: "Light-relic polyurethane",
      weight: "7.8 lbs",
      case: "Deluxe Gig Bag (Pink Interior)",
    },
    testimonials: [
      {
        quote:
          "The Secunda strikes the perfect balance between quality and affordability. It's my go-to studio guitar.",
        author: "James Wilson, Producer",
      },
      {
        quote:
          "I've used my Secunda on three tours now. Reliable, versatile, and always sounds great.",
        author: "Sophia Chen, Touring Musician",
      },
    ],
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage: "url(/assets/apps/catalina-rosa/secunda.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-secondary">
              {guitarData.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-base-100 px-4 py-10 text-base-content sm:px-8">
        {/* Overview Section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-6 font-display text-3xl font-bold text-primary">
            Overview
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-6 font-serif text-lg">
                {guitarData.description}
              </p>
              <p className="mb-6 font-serif">
                The Rosa Secunda delivers professional-grade performance at a
                mid-tier price point. With carefully selected components and
                meticulous setup, it's the perfect instrument for the working
                musician who demands reliability and versatility.
              </p>
              <div className="mt-6 space-y-2">
                <h3 className="font-display text-xl font-semibold text-secondary">
                  Key Features
                </h3>
                <ul className="space-y-2 font-serif">
                  {guitarData.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-secondary">•</span>
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
            Ready to Experience the Rosa Secunda?
          </h3>
          <p className="mb-6">
            Contact us to discuss custom options or to place an order for your
            Rosa Secunda guitar.
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
