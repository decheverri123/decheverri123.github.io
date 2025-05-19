"use client";

import Link from "next/link";
import React, { useState } from "react";
import Layout from "../LayoutHeader";
import ComparisonTable from "../../components/ComparisonTable";
import FeatureSection from "../../components/FeatureSection";
import Image from "next/image";

export default function CatalinaRosaPage() {
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

  return (
    <Layout>
      {/* Hero Section */}

      <div
        className="hero mb-8 min-h-[500px]"
        style={{
          backgroundImage: "url(/assets/apps/catalina-rosa/full-body.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content mb-24 text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-2 text-4xl font-bold sm:text-5xl">
              Catalina <span className="text-pink-300">Rosa</span>
            </h1>
            <p className="text-lg italic">
              "For those who want to shimmer while they shred."
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-base-100 px-4 lg:px-48">
        {/* Model Cards - Using DaisyUI's image-full card */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pb-5">
                <div className="flex items-center justify-between">
                  <h2 className="card-title font-bold text-error">
                    {model.name}
                  </h2>
                </div>
              </div>

              {/* Content only visible on hover */}
              <div className="absolute inset-0 flex flex-col justify-between bg-black/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="card-title">{model.name}</h2>
                    <div className="badge badge-primary badge-lg">
                      {model.price}
                    </div>
                  </div>
                  <p className="mt-2 text-sm italic">{model.tagline}</p>
                  <p className="mt-2">{model.description}</p>

                  <div className="mt-4 space-y-1">
                    {model.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
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
          <h2 className="mb-8 text-center text-3xl font-bold">
            Compare Models
          </h2>

          {/* Custom animated tabs component */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex justify-center">
              <div
                className="relative rounded-full bg-base-300"
                style={{ display: "inline-flex", padding: "2px" }}
              >
                {/* Active tab indicator (animated pill) */}
                <div
                  className="absolute rounded-full bg-primary transition-all duration-300 ease-in-out"
                  style={{
                    height: "calc(100% - 4px)",
                    top: "2px",
                    left: (() => {
                      const tabIndex =
                        Object.keys(specifications).indexOf(specTab);
                      const tabWidth = 100 / Object.keys(specifications).length;
                      return `${tabIndex * tabWidth}%`;
                    })(),
                    width: `${100 / Object.keys(specifications).length}%`,
                  }}
                />

                {/* Tab buttons */}
                {Object.keys(specifications).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSpecTab(tab)}
                    className={`relative z-10 px-3 py-0.5 text-sm font-medium transition-colors duration-300 ${specTab === tab ? "text-primary-content" : ""}`}
                    style={{ flex: 1 }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <ComparisonTable
              specifications={
                specifications[specTab as keyof typeof specifications]
              }
            />
          </div>
        </div>

        {/* Feature Sections with Reusable Component */}
        <div className="py-8 xs:px-1 sm:px-2 md:px-12 lg:px-48">
          <h2 className="mb-12 text-3xl font-bold text-secondary">
            Guitar Features
          </h2>

          {/* Section 1: Acoustic Design Technology */}
          <FeatureSection
            title="Acoustic Design Technology Produces Balanced Tone"
            description="Catalina Rosa Design technology utilizes scientific processes such as 3D modeling to devise wood-routing techniques that increase body resonance and improve the transfer of vibrations between neck and body."
            imageSrc="/assets/apps/catalina-rosa/prima.png"
            imageAlt="Acoustic Design Technology"
            textPosition="right"
          />

          {/* Section 2: Exceptional Playability */}
          <FeatureSection
            title="Exceptional Playability"
            description={
              'With its slim C-shape neck, carved neck joint heel, beveled body, and 13.8"/350 mm fingerboard radius, the Catalina Rosa models are exceptionally easy and comfortable to play.'
            }
            imageSrc="/assets/apps/catalina-rosa/secunda.png"
            imageAlt="Exceptional Playability"
            textPosition="left"
          />

          {/* Section 3: Three Feature Cards */}
          <div className="mb-16 grid grid-cols-1 gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="card max-w-lg bg-base-100 shadow-sm">
              <figure className="relative h-48">
                <Image
                  src="/assets/apps/catalina-rosa/neck.png"
                  alt="Rosewood or Maple Fingerboard"
                  fill
                  className="object-contain"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Flamed Maple Neck</h2>
                <p>
                  The neck is made of flamed maple, which is a type of wood that
                  is prized for its warm tone and smooth attack.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card max-w-lg bg-base-100 shadow-sm">
              <figure className="relative h-48">
                <Image
                  src="/assets/apps/catalina-rosa/secunda.png"
                  alt="Medium Stainless-Steel Frets"
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">
                  Medium Stainless-Steel Frets
                </h2>
                <p>
                  Stainless-steel frets are exceptionally durable, while also
                  lessening resistance when bending strings.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card max-w-lg bg-base-100 shadow-sm">
              <figure className="relative h-48">
                <Image
                  src="/assets/apps/catalina-rosa/pickups.png"
                  alt="Premium Gotoh Hardware"
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">
                  Premium Gotoh Hardware
                </h2>
                <p>
                  Gotoh locking tuners, combined with the Gotoh 2-point tremolo
                  bridge, ensure smooth operation and exceptional pitch
                  stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
