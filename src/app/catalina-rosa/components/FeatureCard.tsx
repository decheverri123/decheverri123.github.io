import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = title,
  objectFit = "cover",
}) => {
  return (
    <div className="md:card-lg lg:card-xl card card-bordered bg-base-100 shadow-lg">
      <figure className="relative h-48">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-${objectFit}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-display text-primary">{title}</h2>
        <p className="font-serif text-base-content">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
