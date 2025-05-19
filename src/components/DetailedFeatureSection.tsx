import React, { ReactNode } from "react";
import FeatureSection from "./FeatureSection";

interface DetailedFeatureSectionProps {
  title: string;
  features: {
    title: string;
    description: ReactNode;
    imageSrc: string;
    imageAlt: string;
    textPosition: "left" | "right";
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
      <h1 className={`mb-4 text-center text-4xl font-bold text-secondary`}>
        {title}
      </h1>

      {features.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
          textPosition={feature.textPosition}
        />
      ))}
    </div>
  );
};

export default DetailedFeatureSection;
