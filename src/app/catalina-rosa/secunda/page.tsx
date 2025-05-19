"use client";

import React from "react";
import Link from "next/link";
import Layout from "../../LayoutHeader";
import ImageCarousel from "../../../components/ImageCarousel";

export default function RosaSecundaPage() {
  // Dummy data for the Secunda model
  const guitarData = {
    name: "Rosa Secunda",
    price: "$1,899",
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
      <div className="relative flex min-h-[400px] items-center justify-center bg-gradient-to-r from-pink-800 to-pink-600">
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: "url('/assets/apps/catalina-rosa/prima.jpg')",
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
                The Rosa Secunda delivers professional-grade performance at a
                mid-tier price point. With carefully selected components and
                meticulous setup, it's the perfect instrument for the working
                musician who demands reliability and versatility.
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
        <div className="mx-auto mb-16 max-w-4xl rounded-lg bg-base-200 p-6">
          <h2 className="mb-6 text-3xl font-bold">Specifications</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Object.entries(guitarData.specifications).map(([key, value]) => (
              <div key={key} className="flex border-b border-base-300 py-2">
                <span className="w-1/3 font-semibold capitalize">{key}:</span>
                <span className="w-2/3">{value}</span>
              </div>
            ))}
          </div>
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
