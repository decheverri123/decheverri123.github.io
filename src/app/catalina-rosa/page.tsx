/* eslint-disable */
// @ts-nocheck
// @ts-ignore
import { notFound } from "next/navigation";
import React, { useState } from "react";
import Layout from "../LayoutHeader";
import ModelSection from "./components/ModelSection";
import IntroSection from "./components/IntroSection";
import DetailedFeatureSection from "./components/DetailedFeatureSection";
import ComparisonSection from "./components/ComparisonSection";
import FeatureCardSection from "./components/FeatureCardSection";
import Image from "next/image";

export default function CatalinaRosaPage() {
  notFound();
  return null;
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
        prima: "Premium Poplar with extensive weight relief chambering",
        secunda: "Poplar with standard weight relief",
        terza: "Poplar with minimal chambering",
      },
      {
        feature: "Body Finish",
        prima: "Nitrocellulose shell pink with premium relic treatment",
        secunda: "Satin polyurethane shell pink with light relic",
        terza: "Open-pore satin shell pink, non-relic",
      },
      {
        feature: "Neck Wood",
        prima: "Roasted quarter-sawn maple",
        secunda: "Roasted maple",
        terza: "Roasted maple",
      },
      {
        feature: "Neck Profile",
        prima: "Custom slim C-shape with hand-finished contour",
        secunda: "Modern C-shape",
        terza: "Standard C-shape",
      },
      {
        feature: "Fretboard",
        prima: "Dark Indian rosewood with ebony treatment",
        secunda: "Indian rosewood",
        terza: "Indian rosewood",
      },
      {
        feature: "Radius",
        prima: '10"-14" Compound',
        secunda: '10"-14" Compound',
        terza: '10"-14" Compound',
      },
      {
        feature: "Frets",
        prima: "22 Jumbo stainless steel, PLEK'd",
        secunda: "22 Jumbo stainless steel, PLEK'd",
        terza: "22 Jumbo stainless steel",
      },
      {
        feature: "Inlays",
        prima: "Custom rosebud abalone-look inlays",
        secunda: "Single rosebud inlay at 12th fret, pearl dots elsewhere",
        terza: "Pearl dots",
      },
      {
        feature: "Neck Finish",
        prima: "Satin with hand-rubbed oil feel",
        secunda: "Satin",
        terza: "Satin",
      },
    ],
    Electronics: [
      {
        feature: "Nut",
        prima: "Bone",
        secunda: "TUSQ",
        terza: "TUSQ",
      },
      {
        feature: "Pickup Configuration",
        prima: "HSS (Corazón bridge, Serena middle/neck)",
        secunda: "HSS (Corazón bridge, Serena middle/neck)",
        terza: "HSS (Corazón bridge, Serena middle/neck)",
      },
      {
        feature: "Controls",
        prima: "Volume, two tone (one push-pull), 5-way switch",
        secunda: "Volume, two tone (one push-pull), 5-way switch",
        terza: "Volume, two tone (one push-pull), 5-way switch",
      },
      {
        feature: "Electronics",
        prima: "CTS pots, Orange Drop caps, premium switch, shielded cavity",
        secunda: "CTS pots, quality caps, shielded cavity",
        terza: "Alpha pots, quality caps, shielded cavity",
      },
    ],
    Hardware: [
      {
        feature: "Bridge",
        prima: "Echeverri Custom Bridge w/ GraphTech saddles",
        secunda: "Echeverri Custom Bridge w/ GraphTech saddles",
        terza: "Two-point tremolo w/ GraphTech saddles",
      },
      {
        feature: "Tuners",
        prima: "Echeverri Custom Locking Tuners (gold-plated)",
        secunda: "Echeverri Custom Locking Tuners (gold-plated)",
        terza: "Standard sealed tuners (gold-plated)",
      },
      {
        feature: "Strap Buttons",
        prima: "Schaller Strap Locks (gold)",
        secunda: "Schaller Strap Locks (gold)",
        terza: "Schaller Strap Locks (gold)",
      },
      {
        feature: "String Gauge",
        prima: "10-46 premium brand",
        secunda: "10-46 premium brand",
        terza: "10-46 premium brand",
      },
    ],
    Aesthetics: [
      {
        feature: "Pickguard",
        prima: "Brushed gold aluminum",
        secunda: "Brushed gold anodized aluminum-look plastic",
        terza: "Gold anodized plastic",
      },
      {
        feature: "Hardware Color",
        prima: "Anodized gold with brushed black accents",
        secunda: "Gold-plated",
        terza: "Gold-plated",
      },
      {
        feature: "Case",
        prima: "Molded flight case with pink plush interior",
        secunda: "Deluxe gig bag with pink interior",
        terza: "Standard gig bag with embroidered logo",
      },
      {
        feature: "Documentation",
        prima: "Custom certificate, setup card, polish cloth",
        secunda: "Setup card, polish cloth",
        terza: "Setup card",
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
                  src="/assets/apps/catalina-rosa/pickups-alone.png"
                  alt="Custom-Voiced Pickups"
                  fill
                  className="object-cover"
                />
              ),
              imageAlt: "Custom-Voiced Pickups",
              textPosition: "right",
              imageColumnWidth: 6,
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

        {/* Pickups Section */}
        <div className="mx-auto max-w-5xl py-12">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-primary">
            Signature Pickups
          </h2>

          <div className="mb-16 grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Serena Single Coil */}
            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/assets/apps/catalina-rosa/serena-pickup.png"
                  alt="Serena Single Coil Pickup"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary">
                THE SERENA SINGLE COIL
              </h3>
              <div className="prose max-w-none text-base-content/80">
                <p>
                  The Serena has a crystalline voice that balances vintage
                  warmth with modern articulation. Its distinctive bell-like
                  chime and exceptional note definition create a sound that's
                  immediately recognizable yet infinitely versatile.
                </p>
                <p>
                  Handwound with precision and voiced for expressive players,
                  each Serena pickup features carefully calibrated Alnico V
                  magnets and vintage-correct 42 AWG plain enamel wire. The
                  result is a single coil that delivers exceptional clarity and
                  dynamic range while avoiding the harsh ice-pick highs that
                  plague many bright-sounding pickups.
                </p>
                <p>
                  Clean tones shimmer with three-dimensional presence—each note
                  blooms with a rounded initial attack followed by crystalline
                  sustain. The midrange offers remarkable depth that allows
                  complex chord voicings to retain their character, while the
                  treble frequencies produce that elusive bell-like quality
                  heard in recordings like "Dancing in a Burning Room"—clear
                  without being clinical, sweet without being dark.
                </p>
                <p>
                  Available in neck and RWRP middle positions, with
                  period-correct formvar bobbins and cloth-covered lead wire.
                </p>
              </div>
            </div>

            {/* Corazón Mini Humbucker */}
            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/assets/apps/catalina-rosa/corazon-pickup.png"
                  alt="Corazón Mini Humbucker Pickup"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary">
                THE CORAZÓN MINI HUMBUCKER
              </h3>
              <div className="prose max-w-none text-base-content/80">
                <p>
                  The Corazón delivers the legendary warmth and authority of
                  classic PAFs in a focused mini-humbucker format. This pickup
                  speaks with a voice that's both vintage in character and
                  thoroughly modern in capability.
                </p>
                <p>
                  Each Corazón is handwound to exacting specifications using
                  sand-cast Alnico IV magnets—a deliberate choice that provides
                  faster bass response, richer midrange, and smoother treble
                  than the more common Alnico V. The traditional nickel-silver
                  baseplate and precision-machined pole pieces complete a
                  package that honors classic design while pursuing exceptional
                  tone.
                </p>
                <p>
                  The Corazón's voice is immediately recognizable—clean tones
                  exhibit remarkable depth and dimension, with a percussive
                  attack that never overpowers the fundamental note. When driven
                  into overdrive territory, smooth harmonic feedback emerges
                  naturally, saturated with overtones even at modest gain
                  settings.
                </p>
                <p>
                  Meticulously built with vintage-correct materials including
                  butyrate bobbins, maple spacers, and nickel-plated slugs
                  secured with traditional Fillister no.5 pole screws.
                </p>
              </div>
            </div>
          </div>

          {/* Handcrafted Excellence */}
          <h3 className="mb-4 font-display text-xl font-semibold text-primary">
            HANDCRAFTED EXCELLENCE
          </h3>
          <div className="prose max-w-none text-base-content/80">
            <p>
              Every Serena and Corazón pickup is individually hand-built in our
              workshop with the same attention to detail found in our Catalina
              Rosa guitars. We use only period-correct materials and winding
              techniques to ensure each pickup delivers the distinctive voice
              that defines our instruments.
            </p>
            <p>
              The Serena-Corazón combination creates the signature voice of the
              Catalina Rosa line—clear, expressive, and versatile without ever
              sounding sterile or generic. From crystalline cleans to singing
              overdrive, these pickups provide the sonic foundation for
              instruments designed to inspire rather than merely perform.
            </p>
            <p className="mb-0">
              Both models are available exclusively in our Catalina Rosa
              guitars, where they form an integral part of our "no compromises
              on what matters" philosophy.
            </p>
          </div>
        </div>
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
