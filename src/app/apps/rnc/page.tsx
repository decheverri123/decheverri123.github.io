// src/app/writing/rnc/page.tsx

"use client";

import { useEffect, useState } from "react";
import Layout from "../../LayoutHeader";

export default function RNC() {
  const [memoryLayer, setMemoryLayer] = useState(0);

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
        <p className="mb-8 text-center italic text-base-content">
          "Perception Horror: Where the act of remembering itself becomes
          dangerous"
        </p>

        <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative space-y-6">
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
              "The dish is finished with dehydrated hibiscus powder,
              crystallized elder flowers, and gold leaf from the Wheeler private
              reserve," Bernard continued, his cadence becoming almost hypnotic.
              "We've incorporated molecular techniques to transform a simple
              family recipe into—"
              <br />
              <br />
              "—blueberries, flour, milk, egg, sugar, and that's it! Pretty
              simple but I love it."
            </blockquote>
            <p className="mt-4 text-lg text-base-content">
              In this excerpt, a formal dinner scene dissolves mid-sentence into
              an intimate kitchen memory without warning or explanation.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              The Ethical Question
            </h2>
            <p className="text-lg text-base-content">
              If memories reconsolidate with each retrieval, what constitutes
              "truth"? Is emotional authenticity more important than factual
              accuracy? RNC forces readers to confront these questions as they
              negotiate between competing versions of reality.
            </p>
            <p className="text-lg text-base-content">
              Taken to its extreme, this paradigm questions the very foundation
              of character itself. If we define ourselves by our memory, what
              happens when memory is unstable? What does that say about us as
              people? Our identity becomes a recursion of corrupted memory—a
              self layered in revisions until the original disappears entirely.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              Influences
            </h2>
            <ul className="list-disc space-y-4 pl-5 text-lg text-base-content">
              <li>
                <em>Neuroscience: Exploring the Brain</em> by Bear, Connors, and
                Paradiso – provided the scientific foundation of memory
                reconsolidation.
              </li>
              <li>
                <em>Funes the Memorious</em> by Jorge Luis Borges – an early
                literary meditation on memory’s perfection as a kind of curse.
              </li>
              <li>
                <em>In Search of Lost Time</em> by Marcel Proust – famous for
                its involuntary memory triggered by sensory stimuli.
              </li>
              <li>
                <em>Slaughterhouse-Five</em> by Kurt Vonnegut – pioneered
                nonlinear timelines and memory-based dislocation.
              </li>
              <li>
                <em>The Sound and the Fury</em> by William Faulkner – a
                fractured structure built around conflicting recollections.
              </li>
              <li>
                <em>Eternal Sunshine of the Spotless Mind</em> (film by Michel
                Gondry, screenplay by Charlie Kaufman) – memory as emotional
                landscape and instability.
              </li>
              <li>
                <em>Memento</em> (film by Christopher Nolan) – narrative told
                through disintegrating memory and reversed structure.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Key Principles
            </h2>
            <ul className="list-inside list-disc space-y-6 text-lg text-base-content">
              <li className={`${memoryLayer === 1 ? "text-primary" : ""}`}>
                <strong>Memory as Mechanism, Not Content:</strong> Memories are
                not presented as static backstory but as active, unstable agents
                in the narrative. Each recall subtly alters the present
                timeline, emotional context, or reader understanding.
              </li>
              <li className={`${memoryLayer === 2 ? "text-primary" : ""}`}>
                <strong>Emotional Truth Over Objective Fact:</strong> The
                "truth" of a scene is not based on what objectively happened,
                but on how the character feels about what happened. The reader
                is encouraged to accept emotional resonance as narrative
                authority, even when it contradicts prior scenes.
              </li>
              <li className={`${memoryLayer === 0 ? "text-primary" : ""}`}>
                <strong>Recursive Flashbacks Without Signposting:</strong>{" "}
                Transitions into memory are intentionally seamless, often using
                identical sensory cues or mirrored language to blur the border
                between past and present. These flashbacks function less as
                exposition and more as recursive emotional loops.
              </li>
              <li>
                <strong>Flashbacks Recontextualize the Present:</strong> Memory
                sequences are not explanatory devices but narrative mutagens. A
                flashback is not a detour from the plot—it changes how the plot
                is understood. The meaning of current events reshapes itself in
                light of each recalled past.
              </li>
              <li className={`${memoryLayer === 1 ? "text-primary" : ""}`}>
                <strong>Perceptual Unreliability:</strong> The protagonist's
                perception of reality is fluid and emotionally reactive, but so
                is the reader's. The narrative destabilizes traditional reader
                trust by creating moments where both character and reader
                question the authenticity of shared events.
              </li>
              <li className={`${memoryLayer === 2 ? "text-primary" : ""}`}>
                <strong>Co-hallucination Between Reader and Character:</strong>{" "}
                The story is designed to make the reader experience the
                protagonist's psychological state. As the protagonist's memory
                fractures, the reader's ability to orient themselves within the
                story does too.
              </li>
              <li className={`${memoryLayer === 0 ? "text-primary" : ""}`}>
                <strong>Structural Glitches as Meaning:</strong> Repetition,
                recursion, or dialogue "errors" are not mistakes but intentional
                formal devices meant to simulate the recursive distortion of
                memory.
              </li>
              <li className={`${memoryLayer === 1 ? "text-primary" : ""}`}>
                <strong>Emotionally Weighted Objects as Anchors:</strong>{" "}
                Specific objects serve as touchstones whose significance shifts
                over time. These objects reveal the instability of the story's
                timeline while providing emotional continuity.
              </li>
              <li className={`${memoryLayer === 2 ? "text-primary" : ""}`}>
                <strong>Objects Corrupt When Recalled:</strong> The more a motif
                or object reappears, the more emotionally charged—and
                narratively corrupted—it becomes. Each reappearance is less
                innocent, more impossible.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              Narrative Rules
            </h2>
            <ul className="list-inside list-disc space-y-4 text-lg text-base-content">
              <li>
                <strong>Anchor Before You Fracture:</strong> Establish
                emotional, temporal, and spatial "normalcy" before bending
                reality
              </li>
              <li>
                <strong>Every Distortion Must Echo a Prior Beat:</strong> All
                glitches must trace back to something previously encountered
              </li>
              <li>
                <strong>Time Can Warp—Emotion Cannot:</strong> The timeline may
                fracture, but character psychology remains emotionally
                consistent
              </li>
              <li>
                <strong>Reader Realizes Collapse Mid-Fall:</strong> The
                transition should be seamless—but gut-punching in retrospect
              </li>
              <li>
                <strong>The Reader Is a Co-Conspirator:</strong> Readers are
                participants who must reconcile, question, and sometimes betray
                their own memory of the text
              </li>
            </ul>

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
