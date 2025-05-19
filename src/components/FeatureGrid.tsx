import React from "react";
import Image from "next/image";

interface FeatureItem {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
      {features.map((feature, index) => (
        <div key={index} className="card bg-base-100 p-6 shadow-lg">
          <h4 className="mb-4 text-center text-xl font-bold">
            {feature.title}
          </h4>
          <div className="mb-4 relative aspect-video rounded-lg bg-base-200 overflow-hidden">
            {feature.imageSrc ? (
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt || feature.title}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-16 w-16 text-base-content/30"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>
          <p className="text-center text-base-content/80">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
