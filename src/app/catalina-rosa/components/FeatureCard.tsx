import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  badge?: string;
  tags?: string[];
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = title,
  badge,
  tags = [],
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
        <h2 className="card-title font-display text-primary">
          {title}
          {badge && <div className="badge badge-secondary">{badge}</div>}
        </h2>
        <p className="font-serif text-base-content">{description}</p>
        {tags.length > 0 && (
          <div className="card-actions justify-end">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
