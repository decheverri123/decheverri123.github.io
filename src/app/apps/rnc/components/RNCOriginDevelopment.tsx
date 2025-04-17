import React from "react";

export default function RNCOriginDevelopment({
  memoryLayer,
}: {
  memoryLayer: number;
}) {
  return (
    <>
      <h2 className="mt-10 text-2xl font-semibold text-secondary">
        Origin & Development
      </h2>
      <p
        className={`text-lg text-base-content transition-all duration-500 ${memoryLayer === 2 ? "opacity-95 blur-[0.2px]" : ""}`}
      >
        Reconsolidative Narrative Collapse emerged from the intersection of
        neuroscience research on memory retrieval and literary explorations of
        trauma. The term was first developed during the writing of{" "}
        <em>Blackport</em>, my debut novel, which serves as the foundational
        text for this emerging literary framework.
      </p>
      <p className="text-lg text-base-content">
        RNC goes beyond unreliable narration or conventional flashbacks by
        creating perceptual slippage that mirrors how traumatic memory actually
        functions in the brain—not as distant recollection but as lived
        experience that temporarily overwrites present perception.
      </p>
    </>
  );
}
