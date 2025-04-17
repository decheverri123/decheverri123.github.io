import React from "react";

export default function RNCMemoryMechanisms() {
  return (
    <>
      <h3 className="mt-6 text-xl font-semibold text-primary">
        🧬 Synaptic Consolidation
      </h3>
      <p className="text-lg text-base-content">
        Immediately after learning, calcium influx via NMDA and voltage-gated
        channels triggers kinase pathways (PKA, MAPK/ERK), activating CREB, a
        transcription factor that drives the expression of memory-related genes
        like zif268 and Arc. These genes initiate spine growth and receptor
        trafficking. “Synaptic tagging” ensures only recently activated synapses
        capture the protein synthesis that stabilizes the memory.
      </p>
      <h3 className="mt-6 text-xl font-semibold text-primary">
        🧠 System Consolidation
      </h3>
      <p className="text-lg text-base-content">
        Over days to years, hippocampal-cortical replay shifts memory reliance
        from the hippocampus to the neocortex. Reactivations—often during
        sleep—induce secondary rounds of local synaptic consolidation.
        Ultimately, long-term storage resides in distributed neocortical
        circuits.
      </p>
      <h3 className="mt-6 text-xl font-semibold text-primary">
        🔁 Reconsolidation
      </h3>
      <p className="text-lg text-base-content">
        Nader et al. demonstrated that retrieval reopens a memory trace and
        makes it labile. Unless re-stabilized by fresh protein synthesis in the
        amygdala, the memory degrades. Reconsolidation mimics the molecular
        cascade of initial encoding—CREB activation, immediate early genes, and
        new plasticity.
      </p>
      <p className="text-lg text-base-content">
        Dudai proposes reconsolidation exists to allow new learning to modify
        old memory. From an evolutionary standpoint, it's a compromise between
        stability and adaptability. But it means memory is inherently risky—the
        act of remembering is also the act of rewriting.
      </p>
    </>
  );
}
