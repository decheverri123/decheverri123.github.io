import React from "react";
import { excerptTextSections } from "./excerptText";
import ShowLessButton from "./ShowLessButton";

interface ExcerptBlockProps {
  excerptHeaderRef: React.RefObject<HTMLHeadingElement>;
  excerptRef: React.RefObject<HTMLDivElement>;
  showExcerpt: boolean;
  setShowExcerpt: (show: boolean) => void;
  memoryLayer: number;
  handleShowLess: () => void;
}

export default function ExcerptBlock({
  excerptHeaderRef,
  excerptRef,
  showExcerpt,
  setShowExcerpt,
  memoryLayer,
  handleShowLess,
}: ExcerptBlockProps) {
  return (
    <>
      <h2
        ref={excerptHeaderRef}
        className="mt-10 text-2xl font-semibold text-secondary"
      >
        Excerpt from <em>Blackport</em>
      </h2>
      <blockquote
        className={`border-l-4 pl-4 text-lg italic text-base-content transition-all duration-700 ${memoryLayer === 0 ? "border-primary" : "border-base-300"}`}
      >
        “And for dessert,” he announced, his accent somehow even more
        theatrically French than before, “we present Lait Brûlé de
        Famille—Helen’s favorite.”
        <br />
        <br />
        The name hung in the air like a held breath. I felt Marilyn stiffen
        beside me, her fork suspended midway to her mouth, then carefully placed
        against her plate with deliberate control. Jennifer's expression
        remained perfectly composed, though her eyes flicked briefly toward
        Marilyn, then away—a predator gauging the impact of a calculated strike.
        <br />
        <br />
        “We begin with Tahitian vanilla bean custard infused with lavender
        harvested from the estate gardens, layered with yuzu gelée for
        brightness. The caramel has been cold-smoked over white cedar—”
        <br />
        <br />
        Because nothing honors your dead wife like wood and gelée.
        <br />
        <br />
        {!showExcerpt && (
          <div className="text-right">
            <span
              className="cursor-pointer text-accent underline"
              onClick={() => setShowExcerpt(true)}
            >
              Read more ↴
            </span>
          </div>
        )}
        <div
          ref={excerptRef}
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showExcerpt ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
          } backdrop-blur-sm`}
        >
          {showExcerpt && (
            <>
              {excerptTextSections.map((section, i) => (
                <React.Fragment key={i}>{section}</React.Fragment>
              ))}
              <ShowLessButton onClick={handleShowLess} />
            </>
          )}
        </div>
      </blockquote>
    </>
  );
}
