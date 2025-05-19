"use client";

import Link from "next/link";
import React, { useState } from "react";
import Layout from "../LayoutHeader";
import ComparisonTable from "../../components/ComparisonTable";
import FeatureSection from "../../components/FeatureSection";
import FeatureCard from "../../components/FeatureCard";

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

      <div className="mx-auto max-w-5xl text-center lg:px-48">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          The Catalina Rosa Line
        </h1>
        <p className="text-md mb-8 leading-relaxed sm:text-xl">
          The <span className="font-semibold text-primary">Catalina Rosa</span>{" "}
          line is a modern love letter to expressive players—bold instruments
          built for those who want to be heard and seen. From guitars that
          shimmer with boutique elegance to hand-voiced pickups that breathe
          with emotion, every piece in the Rosa collection is crafted to feel
          personal, sound alive, and look unforgettable.
        </p>
        <p className="text-md leading-relaxed sm:text-xl">
          Whether you're chasing pristine cleans, gritty edge-of-breakup tones,
          or soaring leads that cut through the noise, the Catalina Rosa line
          delivers with clarity, confidence, and character. Finished in
          signature shell pink with gold appointments, these tools of expression
          are as unapologetic as the artists who wield them.
        </p>
      </div>

      <div className="divider lg:px-48"></div>

      <div className="min-h-screen bg-base-100 px-4 lg:px-64">
        {/* Model Cards - Using DaisyUI's image-full card */}
        <h1 className="mb-8 text-center text-4xl font-bold text-primary">
          Models
        </h1>
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
          <div className="divider"></div>
        </div>

        {/* Feature Sections with Reusable Component */}
        <div className="py-8 xs:px-1 sm:px-2 md:px-12 lg:px-48">
          <h2 className="mb-12 text-3xl font-bold text-secondary">
            Guitar Features
          </h2>
          {/* Section 1: Acoustic Design Technology */}

          <FeatureSection
            title="Advanced Weight Relief for Comfort and Resonance"
            description="Through precision 3D modeling and iterative prototyping, Catalina Rosa models feature a refined weight-relief system that reduces fatigue without sacrificing tone. Carefully placed internal chambers preserve structural integrity while enhancing resonance and sustain—making each guitar feel lighter, livelier, and more responsive."
            imageSrc="/assets/apps/catalina-rosa/body-relief.jpg"
            imageAlt="Advanced Weight Relief"
            textPosition="left"
          />
          <FeatureSection
            title="Custom-Voiced Pickups"
            description={
              <>
                <p className="mb-4 text-base-content/80">
                  At the heart of every Catalina Rosa model lies a pair of
                  custom-voiced pickups—built not to chase trends, but to
                  capture feeling.
                </p>
                <p className="mb-4 text-base-content/80">
                  The Serena single coils are designed for chime, nuance, and
                  that elusive bell-like clarity—the kind you hear in tracks
                  like "Dancing in a Burning Room." Articulate and expressive,
                  Serena pickups reward subtlety and dynamics, delivering lush
                  cleans and glassy breakup with effortless grace.
                </p>
                <p className="mb-4 text-base-content/80">
                  In the bridge, the Corazón humbucker provides the warmth and
                  punch of a vintage PAF, tuned for soulful mids, singing highs,
                  and tight lows. It's the emotional anchor of the Catalina Rosa
                  line—ideal for expressive solos, saturated leads, or
                  vintage-inspired rhythm work.
                </p>
              </>
            }
            imageSrc="/assets/apps/catalina-rosa/pickups-detailed.png"
            imageAlt="Custom-Voiced Pickups"
            textPosition="right"
          />
          {/* Section 2: Exceptional Playability */}
          <FeatureSection
            title="Exceptional Playability"
            description={
              <p>
                With its slim C-shape neck, carved neck joint heel, beveled
                body, and 10"–14" compound radius fingerboard radius, the
                Catalina Rosa models are exceptionally easy and comfortable to
                play.
              </p>
            }
            imageSrc="/assets/apps/catalina-rosa/secunda.png"
            imageAlt="Exceptional Playability"
            textPosition="left"
          />
          {/* Section 3: Three Feature Cards */}
          <div className="mb-16 grid grid-cols-1 gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <FeatureCard
              title="Flamed Maple Neck"
              description="The neck is made of flamed maple, which is a type of wood that is prized for its warm tone and smooth attack."
              imageSrc="/assets/apps/catalina-rosa/neck.png"
              imageAlt="Flamed Maple Neck"
            />

            <FeatureCard
              title="Medium Stainless-Steel Frets"
              description="Stainless-steel frets are exceptionally durable, while also lessening resistance when bending strings."
              imageSrc="/assets/apps/catalina-rosa/secunda.png"
              imageAlt="Medium Stainless-Steel Frets"
            />

            <FeatureCard
              title="Premium Gotoh Hardware"
              description="Gotoh locking tuners, combined with the Gotoh 2-point tremolo bridge, ensure smooth operation and exceptional pitch stability."
              imageSrc="/assets/apps/catalina-rosa/hardware.png"
              imageAlt="Premium Gotoh Hardware"
            />

            <FeatureCard
              title="Compound Radius Fingerboard"
              description={
                'A 10"–14" compound radius allows effortless chording near the nut and fluid bends up high, giving players the best of both worlds.'
              }
              imageSrc="/assets/apps/catalina-rosa/fingerboard.jpg"
              imageAlt="Compound Radius Fingerboard"
            />
          </div>
        </div>
        <h2 className="mb-8 text-center text-3xl font-bold">Compare Models</h2>

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
    </Layout>
  );
}
