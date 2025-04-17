import React from "react";

export default function RNCLiteraryContext() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-secondary">
        Literary Context & Comparisons
      </h2>
      <p className="text-lg text-base-content">
        RNC emerges from a long literary lineage of narrative experimentation.
        Writers like Faulkner fractured chronology to expose psychological
        depth; Proust explored involuntary memory as a gateway to the past;
        Borges built recursive metaphysics from linguistic loops. These works
        paved the way—but RNC diverges by making memory not just theme but
        architecture. Where others evoke memory, RNC mechanizes it.
      </p>
      <p className="text-lg text-base-content">
        It is often compared to nonlinear or memory-based narratives, yet its
        key innovation lies in how memory becomes the engine of narrative
        instability:
      </p>
      <ul className="list-inside list-disc space-y-6 text-lg text-base-content">
        <li>
          <strong className="text-primary">Memento (Christopher Nolan):</strong>{" "}
          While <em>Memento</em> employs a reverse structure to echo memory
          loss, its timeline is static. RNC allows each memory to rewrite
          narrative reality. It's not about presentation—it's about mutation.
        </li>
        <li>
          <strong className="text-primary">
            Eternal Sunshine of the Spotless Mind:
          </strong>{" "}
          Gondry explores erased memory; RNC explores corrupted memory. The
          former removes pain, the latter forces us to relive it inaccurately,
          shifting the narrative every time.
        </li>
        <li>
          <strong className="text-primary">
            Slaughterhouse-Five (Vonnegut):
          </strong>{" "}
          Vonnegut uses disjunction as metaphor. RNC uses memory as formal
          device. In Vonnegut, we drift through time. In RNC, time drifts
          through us.
        </li>
        <li>
          <strong className="text-primary">
            Unreliable Narrators (e.g., The Turn of the Screw, Fight Club):
          </strong>{" "}
          Those works contain unreliable characters. RNC contains an unreliable
          world. The reader, like the character, is hallucinating structure.
        </li>
      </ul>
      <p className="text-lg text-base-content">
        In short: earlier traditions asked, "How do we tell stories about
        memory?" RNC asks, "What happens to story itself when memory can’t be
        trusted?"
      </p>
    </>
  );
}
