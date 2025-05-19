"use client";

"use client";

import React from "react";
import Image from "next/image";
import Layout from "../../LayoutHeader";
import SpecificationsTable from "../../../components/SpecificationsTable";
import FeatureSection from "../../../components/FeatureSection";

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
      <div className="min-h-screen bg-base-100 px-4 py-10 sm:px-8 md:px-12 lg:px-16">
        {/* Feature Sections with Reusable Component */}
        <div className="mx-auto max-w-5xl">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-primary">
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
                  The Catalina Rosa Prima set combines two custom single
                  coils—Flor—and a commanding bridge humbucker—Corazón—to
                  deliver a spectrum of tones that bloom with clarity, depth,
                  and emotion. Flor offers glassy highs, scooped mids, and
                  articulate lows—perfect for clean rhythms and expressive
                  leads. Corazón brings the fire, with a vocal midrange, smooth
                  attack, and tight low-end punch that cuts through without
                  overpowering.
                </p>
                <p className="text-base-content/80">
                  Together, they create a dynamic, modern sound that feels
                  timeless—one part velvet, one part voltage.
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
            additionalText="Wrapped in a signature rose-pink housing with subtle aging
              details, the Catalina Rosa Prima isn't just heard. It's felt and
              admired as a true work of functional art."
            imageSrc="/assets/apps/catalina-rosa/secunda.png"
            imageAlt="Rosa Prima Hardware"
            textPosition="left"
          />
          {/* Premium Hardware Features */}
          <div className="mb-10 mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Premium Components
            </h2>
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="card bg-base-100 shadow-sm">
                <figure className="relative h-48">
                  <Image
                    src="/assets/apps/catalina-rosa/prima.png"
                    alt="Rosewood or Maple Fingerboard"
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Rosewood or Maple Fingerboard
                    <div className="badge badge-secondary">CHOICE</div>
                  </h2>
                  <p>
                    Rosewood fingerboards are valued for their warm tone and
                    smooth attack, whereas maple fingerboards provide a brighter
                    tone and snappier attack.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Tonewoods</div>
                    <div className="badge badge-outline">Playability</div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="card bg-base-100 shadow-sm">
                <figure className="relative h-48">
                  <Image
                    src="/assets/apps/catalina-rosa/secunda.png"
                    alt="Medium Stainless-Steel Frets"
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Medium Stainless-Steel Frets
                    <div className="badge badge-secondary">PREMIUM</div>
                  </h2>
                  <p>
                    Stainless-steel frets are exceptionally durable, while also
                    lessening resistance when bending strings.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Hardware</div>
                    <div className="badge badge-outline">Durability</div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="card bg-base-100 shadow-sm">
                <figure className="relative h-48">
                  <Image
                    src="/assets/apps/catalina-rosa/pickups.png"
                    alt="Premium Gotoh Hardware"
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Premium Gotoh Hardware
                    <div className="badge badge-secondary">QUALITY</div>
                  </h2>
                  <p>
                    Gotoh locking tuners, combined with the Gotoh 2-point
                    tremolo bridge, ensure smooth operation and exceptional
                    pitch stability.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Hardware</div>
                    <div className="badge badge-outline">Tuning Stability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Specifications Section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Specifications
          </h2>
          <SpecificationsTable specifications={guitarData.specifications} />
        </div>
      </div>
    </Layout>
  );
}
