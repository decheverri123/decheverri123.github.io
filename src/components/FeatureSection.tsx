import React, { ReactNode } from "react";
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string | ReactNode;
  textPosition: "left" | "right";
  // Allow either an image source string OR a custom image component
  imageSrc?: string;
  imageAlt?: string;
  imageComponent?: ReactNode;
  // Column width control
  imageColumnWidth?: 3 | 4 | 5 | 6 | 7 | 8; // Out of 12 columns (default: 4)
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Feature image",
  imageComponent,
  textPosition,
  imageColumnWidth = 4,
}) => {
  // For text on the left, image should be on the right (order-last)
  // For text on the right, image should be on the left (order-first)
  const imageColumnOrder =
    textPosition === "left" ? "md:order-last" : "md:order-first";
  const textColumnOrder =
    textPosition === "left" ? "md:order-first" : "md:order-last";

  // Get the appropriate column width classes based on the imageColumnWidth
  const getImageColumnClass = () => {
    switch (imageColumnWidth) {
      case 3:
        return "md:col-span-3";
      case 5:
        return "md:col-span-5";
      case 6:
        return "md:col-span-6";
      case 7:
        return "md:col-span-7";
      case 8:
        return "md:col-span-8";
      case 4:
      default:
        return "md:col-span-4";
    }
  };

  // Get the text column width class (12 - imageColumnWidth)
  const getTextColumnClass = () => {
    switch (imageColumnWidth) {
      case 3:
        return "md:col-span-9";
      case 5:
        return "md:col-span-7";
      case 6:
        return "md:col-span-6";
      case 7:
        return "md:col-span-5";
      case 8:
        return "md:col-span-4";
      case 4:
      default:
        return "md:col-span-8";
    }
  };

  return (
    <div className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
      {/* Image Column with configurable width */}
      <div className={`${getImageColumnClass()} ${imageColumnOrder}`}>
        <div className="overflow-hidden rounded-lg border border-base-200 bg-base-100 shadow-lg relative h-64">
          {imageComponent ? (
            // Render custom image component if provided
            imageComponent
          ) : imageSrc ? (
            // Render default Image component if imageSrc is provided
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            // Fallback if neither is provided
            <div className="flex h-full w-full items-center justify-center bg-base-200">
              <span className="text-base-content/50">No image provided</span>
            </div>
          )}
        </div>
      </div>

      {/* Text Column with dynamic width */}
      <div className={`${getTextColumnClass()} ${textColumnOrder}`}>
        <h3 className="mb-4 text-2xl font-bold text-primary font-display">
          {title}
        </h3>
        <p className="mb-4 text-base-content/80 text-md font-serif">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
