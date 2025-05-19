import React from "react";
import FeatureCard from "./FeatureCard";

export interface FeatureCardData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  badge?: string;
  tags?: string[];
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

interface FeatureCardSectionProps {
  features: FeatureCardData[];
  title?: string;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  className?: string;
  gap?: string;
}

const FeatureCardSection: React.FC<FeatureCardSectionProps> = ({
  features,
  title,
  columns = { xs: 1, sm: 2, lg: 3, xl: 5 },
  className = "",
  gap = "gap-3",
}) => {
  // Build the grid columns class based on the provided column configuration
  const gridColsClass = `
    grid-cols-${columns.xs || 1} 
    ${columns.sm ? `sm:grid-cols-${columns.sm}` : ""} 
    ${columns.md ? `md:grid-cols-${columns.md}` : ""} 
    ${columns.lg ? `lg:grid-cols-${columns.lg}` : ""}
    ${columns.xl ? `xl:grid-cols-${columns.xl}` : ""}
  `;

  return (
    <div className={className}>
      {title && (
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">
          {title}
        </h2>
      )}
      <div className={`grid ${gap} ${gridColsClass}`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={
              feature.imageAlt ||
              (typeof feature.title === "string"
                ? feature.title
                : "Feature image")
            }
            badge={feature.badge}
            tags={feature.tags}
            objectFit={feature.objectFit}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCardSection;
