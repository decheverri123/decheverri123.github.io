import React, { ReactNode } from "react";

interface IntroSectionProps {
  title: string;
  children: ReactNode;
  maxWidth?: string;
  titleColor?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  title,
  children,
  maxWidth = "max-w-2xl",
  titleColor = "text-primary",
}) => {
  return (
    <div className={`mx-auto ${maxWidth} text-center`}>
      <h1
        className={`mb-6 text-4xl font-bold tracking-tight ${titleColor} sm:text-5xl`}
      >
        {title}
      </h1>
      {children}
    </div>
  );
};

export default IntroSection;
