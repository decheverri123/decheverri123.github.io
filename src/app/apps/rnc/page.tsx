"use client";

// import { useEffect, useState, useRef } from "react";
// import Layout from "../../LayoutHeader";
// import RNCVisualization from "@/components/RNCVisualization";
// import RNCDefinition from "./components/RNCDefinition";
// import RNCNoteFromAuthor from "./components/RNCNoteFromAuthor";
// import RNCLiteraryContext from "./components/RNCLiteraryContext";
// import RNCOriginDevelopment from "./components/RNCOriginDevelopment";
// import RNCReaderConspirator from "./components/RNCReaderConspirator";
// import RNCPerceptionHorror from "./components/RNCPerceptionHorror";
// import RNCMemoryMechanisms from "./components/RNCMemoryMechanisms";
// import RNCReferences from "./components/RNCReferences";
// import RNCEthicalQuestion from "./components/RNCEthicalQuestion";
// import React from "react";
// import BlackportCaseStudy from "./components/BlackportCaseStudy";
// import ExcerptBlock from "./components/ExcerptBlock";
// import KeyPrinciples from "./components/KeyPrinciples";
// import RNCGenres from "./components/RNCGenres";
// import RNCNeuroscience from "./components/RNCNeuroscience";

import { notFound } from "next/navigation";

export default function RNC() {
  // const excerptRef = useRef<HTMLDivElement | null>(null);
  // const [memoryLayer, setMemoryLayer] = useState(0);
  // const [showExcerpt, setShowExcerpt] = useState(false);
  // const excerptHeaderRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (Math.random() > 0.7) {
  //       setMemoryLayer((prev) => (prev + 1) % 3);
  //     }
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   if (showExcerpt && excerptRef.current) {
  //     excerptRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // }, [showExcerpt]);

  // const handleShowLess = () => {
  //   setShowExcerpt(false);
  //   if (excerptHeaderRef.current) {
  //     setTimeout(() => {
  //       if (excerptHeaderRef.current) {
  //         excerptHeaderRef.current.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //       }
  //     }, 300);
  //   }
  // };

  // Always return 404 for this route
  notFound();
  return null;
}
