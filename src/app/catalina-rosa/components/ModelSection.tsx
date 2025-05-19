import React from "react";
import ModelCard, { ModelCardProps } from "./ModelCard";

interface ModelSectionProps {
  title?: string;
  models: ModelCardProps[];
}

const ModelSection: React.FC<ModelSectionProps> = ({
  title = "Models",
  models,
}) => {
  return (
    <div>
      <h1 className="mb-8 text-center font-display text-4xl font-bold text-primary">
        {title}
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <ModelCard
            key={model.name}
            name={model.name}
            image={model.image}
            price={model.price}
            tagline={model.tagline}
            description={model.description}
            features={model.features}
            href={model.href}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelSection;
