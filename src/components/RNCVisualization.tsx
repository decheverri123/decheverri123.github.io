import { useEffect, useState } from "react";

const phrases = [
  "Memory is retrieved",
  "It rewrites perception",
  "Perception becomes new memory",
  "It destabilizes",
];

export default function RNCVisualization() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto mt-20 h-[500px] w-[500px] text-white">
      {/* Central Label */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-2xl font-bold">RNC</h2>
        <p className="text-sm text-gray-300">Always collapsing inward</p>
      </div>

      {/* Rotating Arrows */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
        <svg
          className="h-full w-full animate-[spin_15s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="rgb(244 114 182)"
                fillOpacity="0.4"
              />
            </marker>
          </defs>

          {/* Four curved arrows around the circle */}
          <path
            d="M 50,10 A 40,40 0 0 1 90,50"
            fill="none"
            stroke="rgb(244 114 182)"
            strokeWidth="1"
            strokeOpacity="0.4"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 90,50 A 40,40 0 0 1 50,90"
            fill="none"
            stroke="rgb(244 114 182)"
            strokeWidth="1"
            strokeOpacity="0.4"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 50,90 A 40,40 0 0 1 10,50"
            fill="none"
            stroke="rgb(244 114 182)"
            strokeWidth="1"
            strokeOpacity="0.4"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 10,50 A 40,40 0 0 1 50,10"
            fill="none"
            stroke="rgb(244 114 182)"
            strokeWidth="1"
            strokeOpacity="0.4"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>

      {/* Text Labels - positioned further from the circle */}
      {/* Top - Memory is retrieved */}
      <div className="absolute left-1/2 top-2 -translate-x-1/2 translate-y-8 text-center w-60">
        <span
          className={`transition-all duration-500 ${
            highlightedIndex === 0 ? "text-white" : "text-gray-300"
          }`}
        >
          {phrases[0]}
        </span>
      </div>

      {/* Right - It destabilizes */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-1/3 text-center w-60">
        <span
          className={`transition-all duration-500 ${
            highlightedIndex === 1 ? "text-white" : "text-gray-300"
          }`}
        >
          {phrases[3]}
        </span>
      </div>

      {/* Bottom - It rewrites perception */}
      <div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-center w-60 -translate-y-8">
        <span
          className={`transition-all duration-500 ${
            highlightedIndex === 2 ? "text-white" : "text-gray-300"
          }`}
        >
          {phrases[1]}
        </span>
      </div>

      {/* Left - Perception becomes new memory */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-1/3 text-center w-60">
        <span
          className={`transition-all duration-500 ${
            highlightedIndex === 3 ? "text-white" : "text-gray-300"
          }`}
        >
          {phrases[2]}
        </span>
      </div>
    </div>
  );
}
