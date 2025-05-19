"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../LayoutHeader";

export default function RosaTerzaPage() {
  // Dummy data for the Terza model
  const guitarData = {
    name: "Rosa Terza",
    price: "$1,499",
    tagline: "Vibrant modern performance for all.",
    description: "Affordable, sleek, and no-nonsense. Your new workhorse.",
    heroImage: "/assets/apps/catalina-rosa/terza-hero.png", // Replace with actual image path
    detailImages: [
      "/assets/apps/catalina-rosa/terza-detail1.png",
      "/assets/apps/catalina-rosa/terza-detail2.png",
      "/assets/apps/catalina-rosa/terza-detail3.png",
    ],
    features: [
      "Gloss metallic shell pink finish",
      "Gold dot inlays with Luminlay side dots",
      "Stainless steel frets with compound radius",
      "Ceramic pickups with modern output",
    ],
    specifications: {
      body: "Nyatoh w/ Maple Cap",
      neck: "Standard Roasted Maple",
      fretboard: "Indian Laurel",
      radius: '10"-14" Compound',
      frets: "22 Medium Jumbo Stainless",
      pickups: "HSS",
      bridge: "Standard 2-Point (Gold)",
      tuners: "Die-Cast Locking (Gold)",
      finish: "Gloss metallic shell pink",
      weight: "7.9 lbs",
      case: "Padded Gig Bag (Embroidered)",
    },
    testimonials: [
      {
        quote:
          "The Terza is the perfect entry into boutique guitars. Incredible value for the price.",
        author: "David Lee, Guitar Instructor",
      },
      {
        quote:
          "I bought the Terza as my first 'real' guitar and couldn't be happier. It plays like instruments twice its price.",
        author: "Emma Taylor, Emerging Artist",
      },
    ],
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative flex min-h-[400px] items-center justify-center bg-gradient-to-r from-pink-600 to-pink-400">
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
                The Rosa Terza makes Echeverri quality accessible to more
                players. With smart design choices and focused craftsmanship, it
                delivers exceptional playability and tone while maintaining an
                attractive price point.
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
              <div className="carousel carousel-center h-96 w-full rounded-box">
                {guitarData.detailImages.map((image, index) => (
                  <div
                    key={index}
                    className="carousel-item relative h-full w-full"
                  >
                    <Image
                      src={image}
                      alt={`${guitarData.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
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
            Ready to Experience the Rosa Terza?
          </h3>
          <p className="mb-6">
            Contact us to discuss custom options or to place an order for your
            Rosa Terza guitar.
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
