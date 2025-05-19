import React from "react";
import Link from "next/link";

export interface ModelCardProps {
  name: string;
  image: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
}

const ModelCard: React.FC<ModelCardProps> = ({
  name,
  image,
  price,
  tagline,
  description,
  features,
  href,
}) => {
  return (
    <div className="group relative h-[400px] overflow-hidden rounded-lg bg-base-100 shadow-lg transition-all duration-300">
      <img src={image} alt={name} className="h-full w-full object-cover" />

      {/* Title always visible */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pb-5">
        <div className="flex items-center justify-between">
          <h2 className="card-title font-bold text-error font-display">
            {name}
          </h2>

          {/* Mobile-only View Model button */}
          <Link href={href} className="btn btn-secondary btn-sm md:hidden">
            View Model
          </Link>
        </div>
      </div>

      {/* Content only visible on hover with bottom-to-top animation - hidden on mobile */}
      <div className="absolute inset-0 hidden md:flex flex-col justify-between bg-black/80 p-6 opacity-0 transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between transition-transform duration-300 ease-out delay-[5ms]">
            <h2 className="card-title font-display">{name}</h2>
            <div className="badge badge-primary badge-lg">{price}</div>
          </div>
          <p className="mt-2 text-sm italic font-serif transition-transform duration-300 ease-out delay-[100ms]">
            {tagline}
          </p>
          <p className="mt-2 font-serif transition-transform duration-300 ease-out delay-[150ms]">
            {description}
          </p>

          <div className="mt-4 space-y-1 transition-transform duration-300 ease-out delay-[200ms]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm transition-transform duration-300 ease-out"
                style={{ transitionDelay: `${250 + index * 50}ms` }}
              >
                <span className="mr-2 text-secondary">•</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="card-actions justify-end transition-transform duration-300 ease-out delay-[400ms]">
          <Link
            href={href}
            className="btn btn-secondary hover:btn-primary transition-all duration-300"
          >
            View Model
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
