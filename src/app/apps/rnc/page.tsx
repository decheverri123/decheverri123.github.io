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
          &ldquo;Perception Horror: Where the act of remembering itself becomes
          dangerous&rdquo;
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
              History & Background
            </h2>
            <p className="text-lg text-base-content">
              RNC is grounded in the neuroscience of{" "}
              <em>memory reconsolidation</em>—a process wherein retrieved
              memories become temporarily labile and susceptible to change
              before being restored. Initially studied in PTSD research, it
              revealed how memory is not a fixed archive but a dynamic process.
            </p>
            <p className="text-lg text-base-content">
              While elements of nonlinear memory distortion appear in modernist
              and postmodernist literature—Woolf&apos;s stream-of-consciousness,
              Faulkner&apos;s broken timelines, Borges&apos; recursive
              metaphysics—
              <strong>Reconsolidative Narrative Collapse</strong> is the first
              paradigm to deliberately translate this neurocognitive model into
              formal literary structure. It was coined and implemented in{" "}
              <em>Blackport</em>, the debut novel by Danny Echeverri.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              Origin & Development
            </h2>
            <p
              className={`text-lg text-base-content transition-all duration-500 ${memoryLayer === 2 ? "opacity-95 blur-[0.2px]" : ""}`}
            >
              Reconsolidative Narrative Collapse emerged during the development
              of <em>Blackport</em>, where conventional flashbacks and traumatic
              memory needed a more immersive, destabilizing form. The result was
              a method where structure, style, and reader experience mirror the
              instability of recall itself.
            </p>
            <p className="text-lg text-base-content">
              Unlike traditional flashbacks or unreliable narration, RNC creates
              seamless perceptual shifts that destabilize reader orientation in
              tandem with the protagonist’s mental state—mimicking the emotional
              vertigo of unresolved trauma.
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
              In this excerpt, a formal dinner transitions mid-sentence into a
              memory without warning. The result is not exposition, but an
              emotional rupture that pulls the reader into a co-hallucinated
              timeline—an example of how memory overwrites reality.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              The Ethical Question
            </h2>
            <p className="text-lg text-base-content">
              If memories are rewritten with every recall, what is truth? Is
              factual chronology more trustworthy than emotional resonance? RNC
              invites us to interrogate the narrative authority of
              recollection—and whether remembering itself can become a kind of
              harm.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Key Principles
            </h2>
            <ul className="list-inside list-disc space-y-6 text-lg text-base-content">
              <li
                className={`transition-all duration-300 ${memoryLayer === 1 ? "text-primary" : ""}`}
              >
                <strong>Memory as Mechanism, Not Content:</strong> Memories are
                active forces that bend and reshape the story as they appear.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 2 ? "text-primary" : ""}`}
              >
                <strong>Emotional Truth Over Objective Fact:</strong> The
                feeling of a moment takes precedence over its exact factual
                configuration.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 0 ? "text-primary" : ""}`}
              >
                <strong>Recursive Flashbacks Without Signposting:</strong>{" "}
                Memories bleed into present action without clear boundaries or
                formatting.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 1 ? "text-primary" : ""}`}
              >
                <strong>Perceptual Unreliability:</strong> Reader and character
                undergo the same breakdown in spatial, temporal, and narrative
                coherence.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 2 ? "text-primary" : ""}`}
              >
                <strong>Co-hallucination:</strong> The reader is not a passive
                witness but an active participant in the protagonist’s fractured
                recall.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 0 ? "text-primary" : ""}`}
              >
                <strong>Structural Glitches:</strong> Repetitions, recursion,
                and intentional formatting &ldquo;errors&rdquo; mirror how
                memory deteriorates.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 1 ? "text-primary" : ""}`}
              >
                <strong>Emotionally Weighted Objects as Anchors:</strong> Items
                that reappear across timelines gain emotional weight—and
                entropy.
              </li>
              <li
                className={`transition-all duration-300 ${memoryLayer === 2 ? "text-primary" : ""}`}
              >
                <strong>Objects Corrupt When Recalled:</strong> With each memory
                pass, objects become more symbolic, less literal—until they
                break reality.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              Narrative Rules
            </h2>
            <ul className="list-inside list-disc space-y-4 text-lg text-base-content">
              <li>
                <strong>Anchor Before You Fracture:</strong> Ground the reader
                emotionally before distorting perception.
              </li>
              <li>
                <strong>Every Distortion Must Echo a Prior Beat:</strong> All
                narrative fractures must be thematically rooted.
              </li>
              <li>
                <strong>Time Can Warp—Emotion Cannot:</strong> Character
                psychology remains emotionally consistent despite structural
                chaos.
              </li>
              <li>
                <strong>Reader Realizes Collapse Mid-Fall:</strong> Let the
                reader feel destabilized before they understand why.
              </li>
              <li>
                <strong>The Reader Is a Co-Conspirator:</strong> Structure
                invites complicity in collapsing memory and trust.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold text-white">
              Applications & Future Directions
            </h2>
            <p className="text-lg text-base-content">
              RNC offers radical potential for narrative forms outside
              literature—interactive fiction, VR, trauma therapy storytelling,
              and nonlinear cinema. As readers learn to trust feeling over
              chronology, RNC may form the narrative grammar of how we tell
              stories in the post-reality age.
            </p>
            <p className="text-lg text-base-content">
              Future RNC stories may explore not just personal trauma, but
              collective amnesia, AI memory, or the emotional distortion of
              history itself.
            </p>

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
