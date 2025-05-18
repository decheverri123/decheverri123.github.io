"use client";

import Link from "next/link";
import React, { useState } from "react";
import Layout from "../LayoutHeader";

export default function CatalinaRosaPage() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [specTab, setSpecTab] = useState("Body & Neck");

  const models = [
    {
      id: "prima",
      name: "Rosa Prima",
      price: "$3,000",
      image: "/assets/apps/catalina-rosa/prima.png",
      description:
        "Fully relic'd nitro finish. PLEK'd frets. Flagship tone and feel.",
      tagline: "Handcrafted excellence with vintage soul.",
      href: "/catalina-rosa/prima",
      features: [
        "Nitro-finished relic with premium woods",
        "Custom rosebud inlays with abalone",
        "PLEK'd stainless steel frets",
        "Handwound Echeverri V1 pickups",
      ],
    },
    {
      id: "secunda",
      name: "Rosa Secunda",
      price: "$1,899",
      image: "/assets/apps/catalina-rosa/secunda.png",
      description:
        "Studio-ready classic with vintage looks and modern stability.",
      tagline: "Premium playability with artful aging.",
      href: "/catalina-rosa/secunda",
      features: [
        "Light-relic polyurethane finish",
        "Rosebud 12th fret inlay",
        "Alnico V pickups with coil-splitting",
        "Wilkinson hardware with locking tuners",
      ],
    },
    {
      id: "terza",
      name: "Rosa Terza",
      price: "$1,499",
      image: "/assets/apps/catalina-rosa/terza.png",
      description: "Affordable, sleek, and no-nonsense. Your new workhorse.",
      tagline: "Vibrant modern performance for all.",
      href: "/catalina-rosa/terza",
      features: [
        "Gloss metallic shell pink finish",
        "Gold dot inlays with Luminlay side dots",
        "Stainless steel frets with compound radius",
        "Ceramic pickups with modern output",
      ],
    },
  ];

  // Specifications data
  const specifications = {
    "Body & Neck": [
      {
        feature: "Body Wood",
        prima: "Premium Poplar",
        secunda: "Nyatoh",
        terza: "Nyatoh w/ Maple Cap",
      },
      {
        feature: "Neck Wood",
        prima: "Premium Roasted Maple",
        secunda: "Satin Maple",
        terza: "Standard Roasted Maple",
      },
      {
        feature: "Fretboard",
        prima: "Dark Ebony",
        secunda: "Indian Laurel",
        terza: "Indian Laurel",
      },
      {
        feature: "Radius",
        prima: '10"-14" Compound',
        secunda: '10"-14" Compound',
        terza: '10"-14" Compound',
      },
      {
        feature: "Frets",
        prima: "22 Jumbo Stainless (PLEKd)",
        secunda: "22 Jumbo Nickel-Silver",
        terza: "22 Medium Jumbo Stainless",
      },
    ],
    Electronics: [
      {
        feature: "Pickup Configuration",
        prima: "HSS (Custom)",
        secunda: "HSS",
        terza: "HSS",
      },
      {
        feature: "Neck Pickup",
        prima: "V1 Alnico V (Staggered)",
        secunda: "V2 Alnico SC",
        terza: "Terza Ceramic SC",
      },
      {
        feature: "Middle Pickup",
        prima: "V1 RWRP Alnico V",
        secunda: "V2 RWRP Alnico V",
        terza: "Terza RWRP Ceramic SC",
      },
      {
        feature: "Bridge Pickup",
        prima: "Custom Mini-Humbucker (Alnico V)",
        secunda: "Rail Mini-Humbucker (Alnico)",
        terza: "Rail Mini-Humbucker (Ceramic)",
      },
    ],
    Hardware: [
      {
        feature: "Bridge",
        prima: "MannMade PRS SE w/ Custom Saddles",
        secunda: "Wilkinson 2-Point (Gold)",
        terza: "Standard 2-Point (Gold)",
      },
      {
        feature: "Tuners",
        prima: "Gotoh Hybrid Locking (Black/Gold)",
        secunda: "Jin-Ho Locking (Black/Gold)",
        terza: "Die-Cast Locking (Gold)",
      },
      {
        feature: "Strap Locks",
        prima: "Schaller S-Locks (Gold)",
        secunda: "Echeverri Strap Buttons",
        terza: "Echeverri Strap Buttons",
      },
    ],
    Aesthetics: [
      {
        feature: "Pickguard",
        prima: "Brushed Gold Aluminum (Matte)",
        secunda: "Brushed Matte Gold PVC",
        terza: "Gold Anodized Aluminum (Std)",
      },
      {
        feature: "Inlays",
        prima: "White Rosebuds (Abalone)",
        secunda: "White Rosebud @ 12th Fret",
        terza: "Gold Dot Inlays",
      },
      {
        feature: "Hardware Finish",
        prima: "Anodized Gold & Brushed Black",
        secunda: "Gold-Plated Zinc + Black Accents",
        terza: "Full Gold Hardware",
      },
      {
        feature: "Case",
        prima: "Molded Flight Case (Pink Plush)",
        secunda: "Deluxe Gig Bag (Pink Interior)",
        terza: "Padded Gig Bag (Embroidered)",
      },
    ],
  };

  const filteredModels =
    selectedTab === "all"
      ? models
      : models.filter((model) => model.id === selectedTab);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative flex min-h-[300px] items-center justify-center bg-gradient-to-r from-pink-900 to-pink-700 text-white">
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
            Catalina <span className="text-pink-300">Rosa</span>
          </h1>
          <p className="text-lg italic">
            "For those who want to shimmer while they shred."
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-base-100 px-4 py-10 sm:px-8">
        <p className="mx-auto mb-10 max-w-2xl text-center text-base-content">
          Explore a collection of handcrafted electric guitars blending timeless
          elegance and modern performance. Each model offers its own unique
          character while maintaining our signature aesthetic.
        </p>

        {/* Model Filter Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="tabs-boxed tabs">
            <button
              onClick={() => setSelectedTab("all")}
              className={`tab ${selectedTab === "all" ? "tab-active bg-primary text-primary-content" : ""}`}
            >
              All Models
            </button>
            <button
              onClick={() => setSelectedTab("prima")}
              className={`tab ${selectedTab === "prima" ? "tab-active bg-primary text-primary-content" : ""}`}
            >
              Prima
            </button>
            <button
              onClick={() => setSelectedTab("secunda")}
              className={`tab ${selectedTab === "secunda" ? "tab-active bg-primary text-primary-content" : ""}`}
            >
              Secunda
            </button>
            <button
              onClick={() => setSelectedTab("terza")}
              className={`tab ${selectedTab === "terza" ? "tab-active bg-primary text-primary-content" : ""}`}
            >
              Terza
            </button>
          </div>
        </div>

        {/* Model Cards - Using DaisyUI's image-full card */}
        <div
          className={`grid grid-cols-1 gap-6 ${filteredModels.length === 1 ? "place-items-center" : "sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {filteredModels.map((model) => (
            <div
              key={model.name}
              className="group relative h-[400px] overflow-hidden rounded-lg bg-base-100 shadow-lg transition-all duration-300"
            >
              <img
                src={model.image}
                alt={model.name}
                className="h-full w-full object-cover"
              />

              {/* Title always visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <h2 className="card-title text-error">{model.name}</h2>
                </div>
              </div>

              {/* Content only visible on hover */}
              <div className="absolute inset-0 flex flex-col justify-between bg-black/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="card-title text-white">{model.name}</h2>
                    <div className="badge badge-primary badge-lg">
                      {model.price}
                    </div>
                  </div>
                  <p className="mt-2 text-sm italic text-gray-200">
                    {model.tagline}
                  </p>
                  <p className="mt-2 text-gray-100">{model.description}</p>

                  <div className="mt-4 space-y-1">
                    {model.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-200"
                      >
                        <span className="mr-2 text-secondary">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <Link href={model.href} className="btn btn-secondary">
                    View Model
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications Section */}
        <div className="mb-10 mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">
            Compare Models
          </h2>

          {/* Spec Tabs using DaisyUI's tabs-boxed component */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex justify-center">
              <div className="tabs-boxed tabs">
                {Object.keys(specifications).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSpecTab(tab)}
                    className={`tab ${specTab === tab ? "tab-active bg-primary text-primary-content" : ""}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-base-300 bg-base-100 p-6">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th className="bg-base-300">Feature</th>
                      <th className="bg-base-300">Prima</th>
                      <th className="bg-base-300">Secunda</th>
                      <th className="bg-base-300">Terza</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications[specTab as keyof typeof specifications].map(
                      (row, rowIndex) => (
                        <tr key={rowIndex}>
                          <td className="font-medium">{row.feature}</td>
                          <td>{row.prima}</td>
                          <td>{row.secunda}</td>
                          <td>{row.terza}</td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="card mx-auto mt-16 max-w-2xl bg-base-200 p-8 text-center shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-primary">
            Ready to Experience Echeverri Craftsmanship?
          </h3>
          <p className="mb-6">
            Contact us to discuss custom options or to place an order for your
            Catalina Rosa guitar.
          </p>
          <div className="justify-center">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
