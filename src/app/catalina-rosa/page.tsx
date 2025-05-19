"use client";

import React, { useState } from "react";
import Layout from "../LayoutHeader";
import ModelSection from "./components/ModelSection";
import IntroSection from "./components/IntroSection";
import DetailedFeatureSection from "./components/DetailedFeatureSection";
import ComparisonSection from "./components/ComparisonSection";
import FeatureCardSection from "./components/FeatureCardSection";
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
      price: "$2,000",
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
      <div>
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
      </div>

      {/* Everything Else */}
      <div className="mx-auto xs:px-12 md:px-6 lg:max-w-7xl xl:px-2">
        <IntroSection title="The Catalina Rosa Line">
          <p className="mb-8 font-display text-lg leading-relaxed text-base-content">
            The{" "}
            <span className="font-semibold text-primary">Catalina Rosa</span>{" "}
            line is a modern love letter to expressive players—bold instruments
            built for those who want to be heard and seen. From guitars that
            shimmer with boutique elegance to hand-voiced pickups that breathe
            with emotion, every piece in the Rosa collection is crafted to feel
            personal, sound alive, and look unforgettable.
          </p>
          <p className="font-serif text-lg leading-relaxed text-base-content">
            Whether you're chasing pristine cleans, gritty edge-of-breakup
            tones, or soaring leads that cut through the noise, the Catalina
            Rosa line delivers with clarity, confidence, and character. Finished
            in signature shell pink with gold appointments, these tools of
            expression are as unapologetic as the artists who wield them.
          </p>
        </IntroSection>
        <div className="divider"></div>
        {/* Model Cards Section */}
        <ModelSection models={models} />
        <div className="divider"></div>
        {/* Feature Sections with Reusable Component */}
        <DetailedFeatureSection
          title="Features"
          features={[
            {
              title: "Advanced Weight Relief for Comfort and Resonance",
              description:
                "Through precision 3D modeling and iterative prototyping, Catalina Rosa models feature a refined weight-relief system that reduces fatigue without sacrificing tone. Carefully placed internal chambers preserve structural integrity while enhancing resonance and sustain—making each guitar feel lighter, livelier, and more responsive.",
              imageSrc: "/assets/apps/catalina-rosa/body-relief.jpg",
              imageAlt: "Advanced Weight Relief",
              textPosition: "left",
              imageComponent: (
                <Image
                  src="/assets/apps/catalina-rosa/body-relief.jpg"
                  alt="Advanced Weight Relief"
                  className="object-cover"
                  fill
                />
              ),
              imageColumnWidth: 6,
            },
            {
              title: "Custom-Voiced Pickups",
              description: (
                <div className="text-lg text-base-content">
                  <p className="mb-4">
                    At the heart of every Catalina Rosa model lies a pair of
                    custom-voiced pickups—built not to chase trends, but to
                    capture feeling. Each pickup is wound to deliver clarity
                    without sacrificing warmth, and presence without harshness.
                  </p>
                  <p className="mb-4">
                    The Serena (neck) and Corazón (bridge) pickups are voiced to
                    complement each other—from crystalline cleans to saturated
                    leads—while maintaining exceptional note separation and
                    dynamic response. They're sensitive enough to capture the
                    subtleties in your playing but robust enough to drive an amp
                    into harmonic-rich breakup.
                  </p>
                  <p>
                    Every pickup is tested and adjusted before installation,
                    ensuring that what you hear is exactly what we intended—a
                    voice that's distinctly Catalina Rosa.
                  </p>
                </div>
              ),
              imageComponent: (
                <Image
                  src="/assets/apps/catalina-rosa/pickups-detailed.png"
                  alt="Custom-Voiced Pickups"
                  fill
                  className="object-cover"
                />
              ),
              imageAlt: "Custom-Voiced Pickups",
              textPosition: "right",
              imageColumnWidth: 4,
            },
            {
              title: "Exceptional Playability",
              description: (
                <div className="text-lg text-base-content">
                  <p className="mb-4">
                    With its slim C-shape neck, carved neck joint heel, and
                    10"–14" compound radius fingerboard, every Catalina Rosa
                    model is built for players who value effortless movement
                    across the fretboard. Whether you're comping chords near the
                    nut or bending high up the neck, transitions feel smooth and
                    natural.
                  </p>
                  <p className="mb-4">
                    The roasted maple neck is finished in satin, giving it a
                    dry, fast feel that won't get sticky under stage lights or
                    sweaty palms. It's stable, comfortable, and tuned for long
                    sessions without fatigue.
                  </p>
                  <p>
                    A contoured belly cut and forearm bevel round out the
                    ergonomic profile—making the guitar feel like it was carved
                    specifically for you. From seated practice to full-length
                    gigs, Catalina Rosa guitars are built to disappear in your
                    hands and let the music lead.
                  </p>
                </div>
              ),
              imageComponent: (
                <Image
                  src="/assets/apps/catalina-rosa/full-body.png"
                  alt="Exceptional Playability"
                  className="object-cover"
                  fill
                />
              ),
              imageAlt: "Exceptional Playability",
              textPosition: "left",
              imageColumnWidth: 6,
            },
          ]}
        />
        {/* Feature Cards Section */}
        <FeatureCardSection
          title=""
          features={[
            {
              title: "Satin Roasted Maple Neck",
              description:
                "The neck is roasted for increased stability and finished in satin for a smooth, fast feel with no sticky lacquer drag—even during long sessions.",
              imageSrc: "/assets/apps/catalina-rosa/neck.jpg",
              imageAlt: "Satin Roasted Maple Neck",
            },
            {
              title: "Jumbo Stainless-Steel Frets",
              description:
                "Stainless-steel frets are exceptionally durable, while also lessening resistance when bending strings.",
              imageSrc: "/assets/apps/catalina-rosa/secunda.png",
              imageAlt: "Jumbo Stainless-Steel Frets",
            },
            {
              title: "Premium Gotoh Hardware",
              description:
                "Gotoh locking tuners, combined with the Gotoh 2-point tremolo bridge, ensure smooth operation and exceptional pitch stability.",
              imageSrc: "/assets/apps/catalina-rosa/hardware.png",
              imageAlt: "Premium Gotoh Hardware",
            },
            {
              title: "Compound Radius Fingerboard",
              description:
                'A 10"–14" compound radius allows effortless chording near the nut and fluid bends up high, giving players the best of both worlds.',
              imageSrc: "/assets/apps/catalina-rosa/fingerboard.jpg",
              imageAlt: "Compound Radius Fingerboard",
            },
            {
              title: "Contour Body",
              description:
                "A contoured belly cut and forearm bevel round out the ergonomic profile—making the guitar feel like it was carved specifically for you.",
              imageSrc: "/assets/apps/catalina-rosa/contour.jpg",
              imageAlt: "Contour Body",
            },
          ]}
        />
        <div className="divider"></div>
        {/* Comparison Section */}
        <ComparisonSection
          specifications={specifications}
          activeTab={specTab}
          setActiveTab={setSpecTab}
        />
      </div>
    </Layout>
  );
}
