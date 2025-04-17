import SkillCard from "./SkillCard";
import { skillCategories } from "./skillsData";

export default function SkillsSection() {
  return (
    <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-base-200 p-6 shadow-xl">
      <h2 className="mb-4 text-center text-2xl font-semibold text-secondary">
        Skills & Tech
      </h2>
      <div className="flex flex-col gap-8">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-4 text-xl font-medium text-primary">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {category.skills.map((skill) => (
                <SkillCard
                  key={skill.label}
                  icon={skill.icon}
                  label={skill.label}
                  iconColor={skill.iconColor}
                  secondaryIcon={skill.secondaryIcon}
                  secondaryIconColor={skill.secondaryIconColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
