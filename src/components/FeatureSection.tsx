import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  textPosition: "left" | "right";
  additionalText?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  textPosition,
  additionalText,
}) => {
  // For text on the left, image should be on the right (order-last)
  // For text on the right, image should be on the left (order-first)
  const imageColumnOrder =
    textPosition === "left" ? "md:order-last" : "md:order-first";
  const textColumnOrder =
    textPosition === "left" ? "md:order-first" : "md:order-last";

  return (
    <div className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
      {/* Image Column (always 1/3 width) */}
      <div className={`md:col-span-4 ${imageColumnOrder}`}>
        <div className="overflow-hidden rounded-lg border border-base-200 bg-base-100 shadow-xl relative h-64 ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* Text Column (always 2/3 width) */}
      <div className={`md:col-span-8 ${textColumnOrder}`}>
        <h3 className="mb-4 text-2xl font-bold text-primary">{title}</h3>

        {typeof description === "string" ? (
          <p className="mb-4 text-base-content/80">{description}</p>
        ) : (
          description
        )}

        {additionalText && (
          <p className="text-base-content/80">{additionalText}</p>
        )}
      </div>
    </div>
  );
};

export default FeatureSection;
