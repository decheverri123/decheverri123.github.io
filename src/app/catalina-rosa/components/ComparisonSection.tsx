import React from "react";
import ComparisonTable from "./ComparisonTable";

interface SpecificationItem {
  feature: string;
  prima: string;
  secunda: string;
  terza: string;
}

interface ComparisonSectionProps {
  specifications: Record<string, SpecificationItem[]>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  specifications,
  activeTab,
  setActiveTab,
  className = "mx-auto max-w-4xl",
}) => {
  return (
    <div className={className}>
      <h1 className="mb-8 text-center font-display text-3xl font-bold text-primary">
        Compare Models
      </h1>
      <div className="mb-4 flex justify-center">
        <div
          className="b rounded-ful relative min-h-12 min-w-full"
          style={{ display: "inline-flex", padding: "2px" }}
        >
          {/* Active tab indicator (animated pill) */}
          <div
            className="absolute rounded-full bg-primary transition-all duration-300 ease-in-out"
            style={{
              height: "calc(100% - 4px)",
              top: "2px",
              left: (() => {
                const tabIndex = Object.keys(specifications).indexOf(activeTab);
                const tabWidth = 100 / Object.keys(specifications).length;
                return `${tabIndex * tabWidth}%`;
              })(),
              width: `${100 / Object.keys(specifications).length}%`,
            }}
          />

          {/* Tab buttons */}
          {Object.keys(specifications).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative z-10 px-3 py-0.5 text-base-content transition-colors duration-300 xs:text-xs xs:font-normal sm:text-sm sm:font-bold md:text-sm ${
                activeTab === tab ? "text-primary-content" : ""
              }`}
              style={{ flex: 1 }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <ComparisonTable
        specifications={
          specifications[activeTab as keyof typeof specifications]
        }
      />
    </div>
  );
};

export default ComparisonSection;
