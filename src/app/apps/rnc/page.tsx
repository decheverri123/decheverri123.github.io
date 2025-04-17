"use client";

import { useEffect, useState, useRef } from "react";
import Layout from "../../LayoutHeader";
import RNCVisualization from "@/components/RNCVisualization";
import RNCDefinition from "./components/RNCDefinition";
import RNCNoteFromAuthor from "./components/RNCNoteFromAuthor";
import RNCLiteraryContext from "./components/RNCLiteraryContext";
import RNCOriginDevelopment from "./components/RNCOriginDevelopment";
import RNCReaderConspirator from "./components/RNCReaderConspirator";
import RNCPerceptionHorror from "./components/RNCPerceptionHorror";
import RNCMemoryMechanisms from "./components/RNCMemoryMechanisms";
import RNCReferences from "./components/RNCReferences";
import RNCEthicalQuestion from "./components/RNCEthicalQuestion";
import React from "react";
import BlackportCaseStudy from "./components/BlackportCaseStudy";
import ExcerptBlock from "./components/ExcerptBlock";
import KeyPrinciples from "./components/KeyPrinciples";
import RNCGenres from "./components/RNCGenres";
import RNCNeuroscience from "./components/RNCNeuroscience";

export default function RNC() {
  const excerptRef = useRef<HTMLDivElement | null>(null);
  const [memoryLayer, setMemoryLayer] = useState(0);
  const [showExcerpt, setShowExcerpt] = useState(false);
  const excerptHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setMemoryLayer((prev) => (prev + 1) % 3);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showExcerpt && excerptRef.current) {
      excerptRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showExcerpt]);

  const handleShowLess = () => {
    setShowExcerpt(false);
    if (excerptHeaderRef.current) {
      setTimeout(() => {
        if (excerptHeaderRef.current) {
          excerptHeaderRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-8 px-12 text-base-content">
        <h1
          className={`mb-8 flex flex-row items-center justify-center text-center text-4xl font-bold text-primary transition-opacity duration-1000 ${memoryLayer === 1 ? "opacity-90" : "opacity-100"}`}
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

            <RNCDefinition memoryLayer={memoryLayer} />

            <RNCNoteFromAuthor />

            <RNCLiteraryContext />
            <RNCOriginDevelopment memoryLayer={memoryLayer} />

            <RNCReaderConspirator />

            <RNCPerceptionHorror />

            <BlackportCaseStudy />

            <RNCVisualization />
            <p className="mt-8 text-lg text-base-content">
              Each memory loop fragments the timeline further, transforming the
              structure into emotional recursion instead of chronological
              sequence. Linear narrative dissolves into a recursive cycle of
              perception and rewriting.
            </p>
          </div>

          <div className="space-y-6">
            <ExcerptBlock
              excerptHeaderRef={excerptHeaderRef}
              excerptRef={excerptRef}
              showExcerpt={showExcerpt}
              setShowExcerpt={setShowExcerpt}
              memoryLayer={memoryLayer}
              handleShowLess={handleShowLess}
            />
            <KeyPrinciples />

            <RNCGenres />

            <RNCNeuroscience />

            <RNCReferences />

            <RNCMemoryMechanisms />

            <RNCEthicalQuestion />
          </div>
        </div>
      </div>
    </Layout>
  );
}
