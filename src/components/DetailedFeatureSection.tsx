import React, { ReactNode } from "react";
import FeatureSection from "./FeatureSection";

interface DetailedFeatureSectionProps {
  title: string;
  sectionTitle: string;
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
  sectionTitle,
  features,
  titleColor = "text-secondary",
}) => {
  return (
    <div>
      {/* Main section title */}
      <h1 className={`mb-4 text-center text-5xl font-bold text-primary`}>
        {title}
      </h1>
      {/* Secondary section title */}
      <h2 className={`mb-8 text-center text-4xl font-bold ${titleColor}`}>
        {sectionTitle}
      </h2>

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
