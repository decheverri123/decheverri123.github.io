import React, { ReactNode } from "react";
import FeatureSection from "./FeatureSection";

interface DetailedFeatureSectionProps {
  title: string;
  features: {
    title: string;
    description: ReactNode;
    textPosition: "left" | "right";
    // Allow either an image source string OR a custom image component
    imageSrc?: string;
    imageAlt?: string;
    imageComponent?: ReactNode;
    // Column width control
    imageColumnWidth?: 3 | 4 | 5 | 6 | 7 | 8; // Out of 12 columns (default: 4)
  }[];
  titleColor?: string;
}

const DetailedFeatureSection: React.FC<DetailedFeatureSectionProps> = ({
  title,
  features,
}) => {
  return (
    <div>
      {/* Main section title */}
      <h1
        className={`mb-4 text-center text-4xl font-bold text-secondary font-display`}
      >
        {title}
      </h1>

      {features.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
          imageComponent={feature.imageComponent}
          textPosition={feature.textPosition}
          imageColumnWidth={feature.imageColumnWidth}
        />
      ))}
    </div>
  );
};

export default DetailedFeatureSection;
