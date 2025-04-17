import React from "react";

export default function RNCDefinition({
  memoryLayer,
}: {
  memoryLayer: number;
}) {
  return (
    <>
      <h2 className="text-2xl font-semibold text-secondary">Definition</h2>
      <p
        className={`text-lg text-base-content transition-all duration-700 ${memoryLayer === 2 ? "translate-x-1 blur-[0.3px]" : ""}`}
      >
        <strong className="text-accent">
          <em>Reconsolidative Narrative Collapse </em>
        </strong>
        is a storytelling lens in which memory retrieval becomes a core
        structural device for narrative disintegration. It draws from the
        neuroscience principle of memory reconsolidation—where recalling a
        memory renders it temporarily unstable and vulnerable to change. RNC
        applies this mechanism directly to how stories unfold, letting memory
        itself erode, revise, and destabilize the narrative.
      </p>
      <p
        className={`text-lg text-base-content transition-opacity duration-500 ${memoryLayer === 0 ? "opacity-100" : "opacity-80"}`}
      >
        While the idea that memory is unreliable isn't new, RNC aims to push it
        further—making memory not just a theme or motif but the architecture of
        narrative decay itself. It builds on traditions of nonlinear
        storytelling and unreliable narrators, but seeks to systematize a
        specific kind of narrative collapse rooted in trauma psychology and
        perceptual instability.
      </p>
    </>
  );
}
