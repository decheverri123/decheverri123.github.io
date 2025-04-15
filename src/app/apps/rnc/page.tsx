"use client";

import { useEffect, useState } from "react";
import Layout from "../../LayoutHeader";

export default function RNC() {
  // State to track which memory layer we're currently viewing
  const [memoryLayer, setMemoryLayer] = useState(0);

  // Subtle visual glitch effect that randomly changes every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setMemoryLayer((prev) => (prev + 1) % 3);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-8 px-12 text-base-content">
        <h1
          className={`mb-8 flex flex-row items-center justify-center text-center text-4xl font-bold text-white transition-opacity duration-1000 ${memoryLayer === 1 ? "opacity-90" : "opacity-100"}`}
        >
          Reconsolidative Narrative Collapse
        </h1>

        <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="relative space-y-6">
            {/* Decorative element */}
            <div className="absolute -left-4 -top-4 h-16 w-16 border-l-4 border-t-4 border-primary opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b-4 border-r-4 border-secondary opacity-30"></div>

            <h2 className="text-2xl font-semibold text-white">Definition</h2>
            <p
              className={`text-lg text-base-content transition-all duration-700 ${memoryLayer === 2 ? "translate-x-1 blur-[0.3px]" : ""}`}
            >
              <strong>Reconsolidative Narrative Collapse</strong> is a paradigm
              of storytelling in which memory retrieval becomes the primary
              engine of narrative disintegration. Rooted in the neuroscience
              principle of memory reconsolidation—the process by which recalled
              memories become temporarily unstable and susceptible to
              distortion—this structure reimagines narrative not as a linear
              recounting of events, but as a recursive, emotionally-driven
              reconstruction of meaning.
            </p>
            <p
              className={`text-lg text-base-content transition-opacity duration-500 ${memoryLayer === 0 ? "opacity-100" : "opacity-80"}`}
            >
              In works that employ Reconsolidative Narrative Collapse, the
              boundary between past and present, truth and perception, begins to
              blur as characters—and readers—navigate a story that actively
              rewrites itself through grief, trauma, and unstable recollection.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              Origin & Development
            </h2>
            <p
              className={`text-lg text-base-content transition-all duration-500 ${memoryLayer === 2 ? "opacity-95 blur-[0.2px]" : ""}`}
            >
              Reconsolidative Narrative Collapse emerged from the intersection
              of neuroscience research on memory retrieval and literary
              explorations of trauma. The term was first developed during the
              writing of <em>Blackport</em>, my debut novel, which serves as the
              foundational text for this emerging literary framework.
            </p>
            <p className="text-lg text-base-content">
              RNC goes beyond unreliable narration or conventional flashbacks by
              creating perceptual slippage that mirrors how traumatic memory
              actually functions in the brain—not as distant recollection but as
              lived experience that temporarily overwrites present perception.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              Excerpt from <em>Blackport</em>
            </h2>
            <blockquote
              className={`border-l-4 pl-4 text-lg italic text-base-content transition-all duration-700 ${memoryLayer === 0 ? "border-primary" : "border-gray-500"}`}
            >
              &ldquo;The dish is finished with dehydrated hibiscus powder,
              crystallized elder flowers, and gold leaf from the Wheeler private
              reserve,&rdquo; Bernard continued, his cadence becoming almost
              hypnotic. &ldquo;We&apos;ve incorporated molecular techniques to
              transform a simple family recipe into—&rdquo;
              <br />
              <br />
              &ldquo;—blueberries, flour, milk, egg, sugar, and that&apos;s it!
              Pretty simple but I love it.&rdquo;
            </blockquote>
            <p className="mt-4 text-lg text-base-content">
              In this excerpt, a formal dinner scene dissolves mid-sentence into
              an intimate kitchen memory without warning or explanation.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Key Principles
            </h2>
            <ul className="list-inside list-disc space-y-6 text-lg text-base-content">
              <li
                className={`transition-all duration-300 ${memoryLayer === 1 ? "text-primary" : ""}`}
              >
                <strong>Memory as Mechanism, Not Content:</strong> Memories are
                not presented as static backstory but as active, unstable agents
                in the narrative. Each recall subtly alters the present
                timeline, emotional context, or reader understanding.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 2 ? "text-primary" : ""}`}
              >
                <strong>Emotional Truth Over Objective Fact:</strong> The
                &quot;truth&quot; of a scene is not based on what objectively
                happened, but on how the character feels about what happened.
                The reader is encouraged to accept emotional resonance as
                narrative authority, even when it contradicts prior scenes.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 0 ? "text-primary" : ""}`}
              >
                <strong>Recursive Flashbacks Without Signposting:</strong>{" "}
                Transitions into memory are intentionally seamless, often using
                identical sensory cues or mirrored language to blur the border
                between past and present. These flashbacks function less as
                exposition and more as recursive emotional loops.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 1 ? "text-primary" : ""}`}
              >
                <strong>Perceptual Unreliability:</strong> The
                protagonist&apos;s perception of reality is fluid and
                emotionally reactive, but so is the reader&apos;s. The narrative
                destabilizes traditional reader trust by creating moments where
                both character and reader question the authenticity of shared
                events.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 2 ? "text-primary" : ""}`}
              >
                <strong>Co-hallucination Between Reader and Character:</strong>{" "}
                The story is designed to make the reader experience the
                protagonist&apos;s psychological state. As the
                protagonist&apos;s memory fractures, the reader&apos;s ability
                to orient themselves within the story does too.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 0 ? "text-primary" : ""}`}
              >
                <strong>Structural Glitches as Meaning:</strong> Repetition,
                recursion, or dialogue &quot;errors&quot; are not mistakes but
                intentional formal devices meant to simulate the recursive
                distortion of memory.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              Theoretical Foundations
            </h2>
            <div className="text-lg text-base-content">
              RNC draws from several disciplines:
              <ul className="mt-4 list-inside list-disc space-y-2 text-lg text-base-content">
                <li>
                  <strong>Neuroscience:</strong> Research on memory
                  reconsolidation demonstrates how memories become temporarily
                  unstable during recall
                </li>
                <li>
                  <strong>Trauma Theory:</strong> Understanding of how traumatic
                  memories intrude upon consciousness without permission
                </li>
                <li>
                  <strong>Literary Theory:</strong> Builds upon but
                  distinguishes itself from unreliable narration and
                  stream-of-consciousness techniques
                </li>
              </ul>
            </div>

            <div className="mt-16 border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-400">
                © Danny Echeverri, 2024. Reconsolidative Narrative Collapse
                (RNC) is a literary paradigm developed by Danny Echeverri. First
                defined and implemented in the novel <em>Blackport</em>. This
                framework represents a pioneering approach to narrative
                structure that transforms neurological understanding into
                literary technique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
