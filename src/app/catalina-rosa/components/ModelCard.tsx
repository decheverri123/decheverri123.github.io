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
          <h2 className="card-title font-display font-bold text-error">
            {name}
          </h2>

          {/* Mobile-only View Model button */}
          <Link href={href} className="btn btn-secondary btn-sm lg:hidden">
            View Model
          </Link>
        </div>
      </div>

      {/* Content only visible on hover with bottom-to-top animation - hidden on mobile */}
      <div className="absolute inset-0 hidden translate-y-8 flex-col justify-between bg-black/80 p-6 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between transition-transform delay-[5ms] duration-300 ease-out">
            <h2 className="card-title font-display">{name}</h2>
            <div className="badge badge-primary badge-outline badge-lg">
              {price}
            </div>
          </div>
          <p className="mt-2 font-serif text-sm italic transition-transform delay-[100ms] duration-300 ease-out">
            {tagline}
          </p>
          <p className="mt-2 font-serif transition-transform delay-[150ms] duration-300 ease-out">
            {description}
          </p>

          <div className="mt-4 space-y-1 transition-transform delay-[200ms] duration-300 ease-out">
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

        <div className="card-actions justify-center transition-transform delay-[400ms] duration-300 ease-out">
          <Link
            href={href}
            className="btn btn-primary transition-all duration-300"
          >
            View Model
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
