import React from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  altPrefix: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altPrefix }) => {
  return (
    <div className="carousel carousel-center rounded-box h-96 w-full">
      {images.map((image, index) => (
        <div key={index} className="carousel-item relative h-full w-full">
          <Image
            src={image}
            alt={`${altPrefix} view ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
