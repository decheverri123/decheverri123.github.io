"use client";

import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import Layout from "../../LayoutHeader";
import SpecificationsTable from "../components/SpecificationsTable";
import FeatureCard from "../components/FeatureCard";
import ImageGallery from "../components/ImageGallery";
import DetailedFeatureSection from "../components/DetailedFeatureSection";

export default function RosaTerzaPage() {
  notFound();
  return null;
  const guitarData = {
    name: "Rosa Terza",
    price: "$1,600",
    tagline: "Minimal by design, maximal in character.",
    description:
      "The most stripped-down Rosa. Pure feel. Pure sound. No distractions.",
    heroImage: "/assets/apps/catalina-rosa/terza.png",
    detailImages: [
      "/assets/apps/catalina-rosa/terza.png",
      "/assets/apps/catalina-rosa/secunda.png",
      "/assets/apps/catalina-rosa/prima.png",
    ],
    features: [
      "Open-pore satin finish",
      "Rose-themed dot inlays",
      "Standard nickel frets",
      "Custom Serena and Corazon pickups",
    ],
    specifications: {
      body: "Poplar or Swamp Ash",
      neck: "Roasted Maple",
      fretboard: "Maple or Rosewood",
      radius: '10"–14" Compound',
      frets: "22 Medium Nickel",
      pickups: "HSS (Custom)",
      bridge: "Wilkinson Tremolo",
      tuners: "Vintage-Style",
      finish: "Open-Pore Satin",
      weight: "7.1 lbs",
      case: "Gig Bag",
    },
    testimonials: [
      {
        quote:
          "The Terza nails that vintage-meets-modern vibe. It’s raw and honest, just like the best music.",
        author: "Julian Vega, Producer & Guitarist",
      },
      {
        quote:
          "This thing punches way above its price. Lightweight, expressive, and totally inspiring.",
        author: "Cameron Lee, Touring Musician",
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
              Minimal Form, Maximum Vibe
            </h2>

            <div className="mb-8">
              <p className="mb-4 text-base-content/80">
                The Catalina Rosa Terza is the most stripped-down entry in the
                lineup—focused on essential feel, bold tone, and unmistakable
                identity. With an open-pore satin finish and no frills to hide
                behind, the Terza invites players to connect directly with their
                sound.
              </p>
              <p className="mb-4 text-base-content/80">
                Powered by our signature Serena and Corazon pickup pairing, it
                delivers expressive clarity, bell-like highs, and vintage-voiced
                punch in a clean and honest platform that rewards subtlety as
                much as fire.
              </p>
              <p className="mb-4 text-base-content/80">
                The Terza may be minimal in looks, but it’s massive in soul.
                Every detail—from the weight-balanced poplar body to the
                vintage-style tuners—is chosen for tone, comfort, and character.
              </p>
              <p className="mb-4 text-base-content/80">
                If you believe a great guitar shouldn’t get in the way, the
                Terza is your perfect match.
              </p>
            </div>
          </div>

          <div className="divider mb-10"></div>

          <DetailedFeatureSection
            title="Terza Features"
            features={[
              {
                title: "Refined Essentials",
                description: (
                  <>
                    <p className="mb-4 text-base-content/80">
                      The Terza's open-pore satin finish and simplified hardware
                      setup create an instrument that feels direct and dynamic.
                      Its resonance is immediate, its tone responsive, and its
                      look timeless.
                    </p>
                    <p className="text-base-content/80">
                      Everything you need, nothing you don't. This is
                      Rosa—distilled.
                    </p>
                  </>
                ),
                imageSrc: "/assets/apps/catalina-rosa/terza-03.png",
                imageAlt: "Rosa Terza Body",
                textPosition: "left",
              },
              {
                title: "Signature Rosa Pickups",
                description: (
                  <>
                    <p className="mb-4 text-base-content/80">
                      The Serena and Corazon pickups come standard in all
                      Catalina Rosa models. They're expressive, warm, and built
                      for clarity.
                    </p>
                    <p className="mb-4 text-base-content/80">
                      Serena single coils deliver that bell-like shimmer heard
                      in tracks like "Dancing in a Burning Room," while the
                      Corazon humbucker in the bridge sings with creamy mids and
                      harmonically rich presence.
                    </p>
                    <p className="text-base-content/80">
                      Balanced, responsive, and musical in every setting, these
                      pickups make the Terza a natural voice for expressive
                      players.
                    </p>
                  </>
                ),
                imageSrc: "/assets/apps/catalina-rosa/pickups.png",
                imageAlt: "Rosa Terza Pickups",
                imageComponent: (
                  <Image
                    src="/assets/apps/catalina-rosa/pickups.png"
                    alt="Advanced Weight Relief"
                    className="object-cover"
                    fill
                  />
                ),
                imageColumnWidth: 7,
                textPosition: "right",
              },
              {
                title: "Honest Construction, Timeless Tone",
                description: (
                  <p className="mb-4 text-base-content/80">
                    Built with modern reliability and vintage flavor, the
                    Terza's no-nonsense design includes a comfortable roasted
                    maple neck, vintage-style tuners, and a Wilkinson tremolo
                    for classic pitch modulation and smooth bends. It's simple,
                    expressive, and ready for anything.
                  </p>
                ),
                imageSrc: "/assets/apps/catalina-rosa/terza-02.png",
                imageAlt: "Rosa Terza Hardware",
                textPosition: "left",
                imageComponent: (
                  <Image
                    src="/assets/apps/catalina-rosa/terza-full-body.png"
                    alt="Advanced Weight Relief"
                    className="object-cover"
                    fill
                  />
                ),
                imageColumnWidth: 8,
              },
            ]}
          />

          <div className="mb-10 mt-20">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-primary">
              Premium Components
            </h2>
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureCard
                title="Open-Pore Satin Finish"
                description="Lightweight and breathable, this finish enhances resonance and feels natural in hand—distinct from the relic’d satin finish of the Prima and Secunda."
                imageSrc="/assets/apps/catalina-rosa/terza-back.png"
                imageAlt="Open-Pore Finish"
              />

              <FeatureCard
                title="Vintage-Style Tuners"
                description="Classic look, reliable functionality. These tuners complete the Terza’s vintage-modern aesthetic and keep weight balanced at the headstock."
                imageSrc="/assets/apps/catalina-rosa/tuners.webp"
                imageAlt="Vintage Tuners"
              />

              <FeatureCard
                title="Wilkinson Tremolo"
                description="Smooth bends, vintage feel. The Wilkinson tremolo provides expressive control with dependable tuning—distinct from the Gotoh systems used on other Rosa models."
                imageSrc="/assets/apps/catalina-rosa/hardware.png"
                imageAlt="Wilkinson Trem"
              />
            </div>
          </div>

          <div className="divider mb-10"></div>

          <div className="mx-auto mb-16 max-w-5xl">
            <h2 className="mb-8 text-center font-serif text-4xl font-bold text-primary">
              Gallery
            </h2>
            <ImageGallery
              mainImage="/assets/apps/catalina-rosa/terza.png"
              thumbnails={[
                "/assets/apps/catalina-rosa/terza.png",
                "/assets/apps/catalina-rosa/terza-back.png",
                "/assets/apps/catalina-rosa/terza-back.png",
                "/assets/apps/catalina-rosa/tuners.webp",
                "/assets/apps/catalina-rosa/neck.png",
                "/assets/apps/catalina-rosa/pickups.png",
                "/assets/apps/catalina-rosa/terza-headstock.png",
                "/assets/apps/catalina-rosa/terza-full-body.png",
              ]}
              altText="Rosa Prima Guitar"
              className="mb-12"
            />
          </div>

          <div className="mx-auto mb-16 max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-primary">
              Specifications
            </h2>
            <SpecificationsTable specifications={guitarData.specifications} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
