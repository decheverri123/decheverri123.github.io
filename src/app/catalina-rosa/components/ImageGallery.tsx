import React, { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  mainImage: string;
  thumbnails: string[];
  altText: string;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  mainImage: initialMainImage,
  thumbnails,
  altText,
  className = "",
}) => {
  const [mainImage, setMainImage] = useState(initialMainImage);

  return (
    <div className={`grid grid-cols-1 gap-2 md:grid-cols-2 ${className}`}>
      {/* Main large image with fixed dimensions */}
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-base-100">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={mainImage}
            alt={altText}
            width={400}
            height={500}
            className="max-h-[500px] w-auto rounded-lg border-2 border-secondary object-cover"
            priority
          />
        </div>
      </div>

      {/* Thumbnail grid with consistent dimensions */}
      <div className="flex flex-col justify-between pt-2">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {thumbnails.map((thumb, index) => (
            <button
              key={index}
              className={`group relative h-24 w-full overflow-hidden rounded-md border-2 bg-base-100 transition-all ${
                thumb === mainImage
                  ? "border-primary"
                  : "border-pink-200 hover:border-pink-400"
              }`}
              onClick={() => setMainImage(thumb)}
            >
              <div className="flex h-full w-full items-center justify-center">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={thumb}
                    alt={`${altText} thumbnail ${index + 1}`}
                    fill
                    className="max-h-[100px] w-auto object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
