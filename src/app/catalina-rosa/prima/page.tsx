"use client";

import React from "react";
import Layout from "../../LayoutHeader";
import SpecificationsTable from "../components/SpecificationsTable";
import FeatureSection from "../components/FeatureSection";
import FeatureCard from "../components/FeatureCard";
import ImageGallery from "../components/ImageGallery";

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
      {/* Hero Section using DaisyUI Hero component */}
      <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage: "url(/assets/apps/catalina-rosa/prima.png)",
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
      <div className="min-h-screen bg-base-100 px-4 py-10 text-base-content sm:px-8 md:px-12 lg:px-16">
        {/* Feature Sections with Reusable Component */}
        <div className="mx-auto max-w-5xl">
          <div>
            <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
              Emotion, Refined
            </h2>

            <div className="mb-8">
              <p className="mb-4 text-base-content/80">
                The Catalina Rosa Prima is a bold reimagining of the modern
                player’s guitar—blending boutique-level craftsmanship with
                unmistakable visual flair. Finished in shell pink and shaped for
                comfort and control, it offers a deeply expressive experience
                that favors feel as much as form.
              </p>
              <p className="mb-4 text-base-content/80">
                At its core is the Flor single coil—featured in the neck and
                middle positions—voiced for chime, clarity, and subtle scoop,
                ideal for ambient textures, clean funk, and soulful lead work.
                Anchoring the bridge is the Corazón humbucker, powered by Alnico
                V magnets for a vocal midrange, smooth highs, and a tight,
                focused low end. Together, they create a dynamic HSS
                configuration that shifts effortlessly from whispering cleans to
                harmonically rich overdrive.
              </p>
              <p className="mb-4 text-base-content/80">
                The roasted maple neck features a satin finish, compound radius
                fretboard, and 22 jumbo stainless steel frets for effortless
                playability and long-term durability. Locking tuners, a Gotoh
                510 tremolo, and a Graph Tech nut ensure modern tuning
                stability, while push-pull coil splitting expands the tonal
                range without sacrificing simplicity.
              </p>
              <p className="mb-4 text-base-content/80">
                From studio nuance to stage power, the Catalina Rosa Prima is a
                modern classic—built to feel personal, sound alive, and leave a
                lasting impression.
              </p>
            </div>
          </div>
          <div className="divider mb-10"></div>

          {/* Section 1: Image Left, Text Right */}
          <FeatureSection
            title="Handcrafted Excellence"
            description={
              <>
                <p className="mb-4 text-base-content/80">
                  Each Rosa Prima is meticulously crafted with premium
                  tonewoods, selected for both their resonant qualities and
                  aesthetic beauty. The body features a carefully chambered
                  design that enhances resonance while maintaining perfect
                  balance.
                </p>
                <p className="text-base-content/80">
                  The neck is hand-shaped to our exclusive profile, offering
                  effortless playability from the first fret to the last. Every
                  curve and contour is designed to disappear in your hands,
                  letting you focus entirely on your music.
                </p>
              </>
            }
            imageSrc="/assets/apps/catalina-rosa/prima.png"
            imageAlt="Rosa Prima Body"
            textPosition="left"
          />

          {/* Section 2: Image Right, Text Left */}
          <FeatureSection
            title="Prima Pickups"
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
                <p className="text-base-content/80">
                  Together, Serena and Corazón form a versatile, musical pairing
                  that makes each Catalina Rosa feel more like an instrument of
                  expression than just a guitar. Clean or driven, soft or
                  aggressive—they speak your language.
                </p>
              </>
            }
            imageSrc="/assets/apps/catalina-rosa/pickups.png"
            imageAlt="Rosa Prima Pickups"
            textPosition="right"
          />

          {/* Section 3: Image Left, Text Right */}
          <FeatureSection
            title="Vintage-Inspired Finishing"
            description={
              <p className="mb-4 text-base-content/80">
                The Rosa Prima features our signature nitrocellulose finish,
                applied in thin, carefully built-up layers and then artfully
                aged to simulate decades of play. This process not only creates
                a stunning visual aesthetic but also allows the wood to breathe
                and resonate more freely.
              </p>
            }
            imageSrc="/assets/apps/catalina-rosa/secunda.png"
            imageAlt="Rosa Prima Hardware"
            textPosition="left"
          />
          {/* Premium Hardware Features */}
          <div className="mb-10 mt-20">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-primary">
              Premium Components
            </h2>
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureCard
                title="Rosewood or Maple Fingerboard"
                description="Rosewood fingerboards are valued for their warm tone and smooth attack, whereas maple fingerboards provide a brighter tone and snappier attack."
                imageSrc="/assets/apps/catalina-rosa/prima.png"
                imageAlt="Rosewood or Maple Fingerboard"
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
                imageSrc="/assets/apps/catalina-rosa/pickups.png"
                imageAlt="Premium Gotoh Hardware"
              />
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="divider mb-10"></div>
        <div className="mx-auto mb-16 max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-4xl font-bold text-primary">
            Gallery
          </h2>
          <ImageGallery
            mainImage="/assets/apps/catalina-rosa/prima.png"
            thumbnails={[
              "/assets/apps/catalina-rosa/prima.png",
              "/assets/apps/catalina-rosa/terza-back.png",
              "/assets/apps/catalina-rosa/tuners.webp",
              "/assets/apps/catalina-rosa/neck.png",
              "/assets/apps/catalina-rosa/pickups.png",
              "/assets/apps/catalina-rosa/terza-headstock.png",
            ]}
            altText="Rosa Prima Guitar"
            className="mb-12"
          />
        </div>

        {/* Specifications Section */}
        <div className="divider mb-10"></div>
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-6 text-center font-display text-3xl font-bold text-primary">
            Specifications
          </h2>
          <SpecificationsTable specifications={guitarData.specifications} />
        </div>
      </div>
    </Layout>
  );
}
