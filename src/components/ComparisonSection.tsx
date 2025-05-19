import React from "react";
import ComparisonTable from "./ComparisonTable";

// Define the type for specification items
interface SpecificationItem {
  feature: string;
  prima: string;
  secunda: string;
  terza: string;
  [key: string]: string; // Allow additional properties
}

interface ComparisonSectionProps {
  title?: string;
  specifications: Record<string, SpecificationItem[]>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  title = "Compare Models",
  specifications,
  activeTab,
  setActiveTab,
  className = "mx-auto max-w-4xl",
}) => {
  return (
    <div className={className}>
      {title && (
        <h2 className="mb-8 text-center text-4xl font-bold text-primary">
          {title}
        </h2>
      )}
      <div className="mb-4 flex justify-center">
        <div
          className="relative rounded-full bg-base-300"
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
              className={`relative z-10 px-3 py-0.5 text-sm font-medium transition-colors duration-300 ${
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
