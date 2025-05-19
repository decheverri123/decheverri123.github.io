"use client";

import React from "react";
import Layout from "../../LayoutHeader";
import SpecificationsTable from "../components/SpecificationsTable";
import FeatureSection from "../components/FeatureSection";
import FeatureCard from "../components/FeatureCard";

export default function RosaSecundaPage() {
  const guitarData = {
    name: "Rosa Secunda",
    price: "$2,400",
    tagline: "Raw beauty. Refined soul.",
    description:
      "Satin relic finish. Modern neck carve. Same heart, stripped down.",
    heroImage: "/assets/apps/catalina-rosa/secunda.png",
    detailImages: [
      "/assets/apps/catalina-rosa/secunda.png",
      "/assets/apps/catalina-rosa/prima.png",
      "/assets/apps/catalina-rosa/terza.png",
    ],
    features: [
      "Satin relic finish on ash body",
      "Flor-style rose inlays",
      "Jumbo stainless steel frets",
      "Custom Serena and Corazon pickups",
    ],
    specifications: {
      body: "Lightweight Swamp Ash",
      neck: "Roasted Maple",
      fretboard: "Richlite or Maple",
      radius: '10"–14" Compound',
      frets: "22 Jumbo Stainless",
      pickups: "HSS (Custom)",
      bridge: "Gotoh 510 Tremolo",
      tuners: "Gotoh Locking",
      finish: "Satin Relic",
      weight: "7.3 lbs",
      case: "Soft Shell Deluxe Case",
    },
    testimonials: [
      {
        quote:
          "The Secunda feels like a living, breathing instrument. It responds instantly—so expressive.",
        author: "Noah James, Touring Guitarist",
      },
      {
        quote:
          "Everything you want from a boutique instrument, without the flash. It's all heart.",
        author: "Sara Kim, Indie Artist",
      },
    ],
  };

  return (
    <Layout>
      <div
        className="hero min-h-[500px]"
        style={{ backgroundImage: `url(${guitarData.heroImage})` }}
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
        <div className="mx-auto max-w-5xl">
          <div>
            <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
              Vintage Soul, Modern Muscle
            </h2>

            <div className="mb-8">
              <p className="mb-4 text-base-content/80">
                The Catalina Rosa Secunda takes the sonic DNA of the Prima and
                delivers it in a stripped-down, raw-satin package built for the
                working player. With a relic’d satin finish, swamp ash body, and
                rose-inlaid fingerboard, it brings bold character and
                feel-forward performance to the forefront.
              </p>
              <p className="mb-4 text-base-content/80">
                Equipped with our Serena single coils and Corazon humbucker, the
                Secunda retains the expressive tonal clarity and PAF-style
                warmth of its flagship sibling. Clean or overdriven, this guitar
                speaks fluently in dynamics, textures, and emotion.
              </p>
              <p className="mb-4 text-base-content/80">
                A roasted maple neck, 10"–14" compound radius, and 22 jumbo
                stainless steel frets ensure smooth playability, while Gotoh
                hardware and a Graph Tech nut provide rock-solid stability.
                Every detail is tuned for long sessions, fast inspiration, and
                lasting comfort.
              </p>
              <p className="mb-4 text-base-content/80">
                With its relic aesthetic and modern soul, the Rosa Secunda isn’t
                just a statement piece—it’s a trusted companion for the stage,
                studio, and beyond.
              </p>
            </div>
          </div>

          <div className="divider mb-10"></div>

          <FeatureSection
            title="Stripped-Back Elegance"
            description={
              <>
                <p className="mb-4 text-base-content/80">
                  The Secunda's satin relic finish highlights the grain of its
                  swamp ash body while reducing weight and enhancing resonance.
                  Its minimalist aesthetic is counterbalanced by luxurious feel
                  and tonal complexity.
                </p>
                <p className="text-base-content/80">
                  Paired with hand-shaped comfort carves and a custom neck
                  profile, it’s designed to disappear in your hands so you can
                  focus on what matters—your playing.
                </p>
              </>
            }
            imageSrc="/assets/apps/catalina-rosa/secunda.png"
            imageAlt="Rosa Secunda Body"
            textPosition="left"
          />

          <FeatureSection
            title="Signature Rosa Pickups"
            description={
              <>
                <p className="mb-4 text-base-content/80">
                  The Serena and Corazon pickups come standard in all Catalina
                  Rosa models. They’re expressive, warm, and built for clarity.
                </p>
                <p className="mb-4 text-base-content/80">
                  Serena single coils deliver that bell-like shimmer heard in
                  tracks like "Dancing in a Burning Room," while the Corazon
                  humbucker in the bridge sings with creamy mids and
                  harmonically rich presence.
                </p>
                <p className="text-base-content/80">
                  Balanced, responsive, and musical in every setting, these
                  pickups make the Secunda a natural voice for expressive
                  players.
                </p>
              </>
            }
            imageSrc="/assets/apps/catalina-rosa/pickups.png"
            imageAlt="Rosa Secunda Pickups"
            textPosition="right"
          />

          <FeatureSection
            title="Boutique Feel Without the Fuss"
            description={
              <p className="mb-4 text-base-content/80">
                Every Secunda is designed with the player in mind—from roasted
                satin necks and ergonomic contours to pro-grade hardware and
                electronics. It's the kind of guitar that works as hard as you
                do, whether you're in the studio, on tour, or just chasing
                inspiration at home.
              </p>
            }
            imageSrc="/assets/apps/catalina-rosa/secunda.png"
            imageAlt="Rosa Secunda Hardware"
            textPosition="left"
          />

          <div className="mb-10 mt-20">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-primary">
              Premium Components
            </h2>
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureCard
                title="Satin Roasted Maple Neck"
                description="Smooth to the touch and resistant to warping, our satin-finished roasted maple necks are built for speed and comfort—exclusively available on the Secunda and Prima models."
                imageSrc="/assets/apps/catalina-rosa/neck.png"
                imageAlt="Roasted Neck"
                badge="FEEL"
                tags={["Playability", "Stability"]}
              />

              <FeatureCard
                title="Jumbo Stainless-Steel Frets"
                description="High-performance fretwork for effortless bends, long life, and low maintenance—standard on the Secunda and Prima, but upgraded on the Terza."
                imageSrc="/assets/apps/catalina-rosa/secunda.png"
                imageAlt="Frets"
                badge="FRETWORK"
                tags={["Durability", "Ease of Play"]}
              />

              <FeatureCard
                title="Gotoh Tremolo & Locking Tuners"
                description="Reliable tuning and smooth tremolo operation with premium Gotoh hardware—available on Secunda and Prima only."
                imageSrc="/assets/apps/catalina-rosa/hardware.png"
                imageAlt="Hardware"
                badge="RELIABILITY"
                tags={["Hardware", "Tuning Stability"]}
              />
            </div>
          </div>

          <div className="mx-auto mb-16 max-w-2xl">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Specifications
            </h2>
            <SpecificationsTable specifications={guitarData.specifications} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
