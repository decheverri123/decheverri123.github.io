import SkillCard from "./SkillCard";
import { GB, ES } from "country-flag-icons/react/3x2";

export default function LanguagesSection() {
  return (
    <section className="mx-auto mb-8 max-w-4xl rounded-lg bg-base-200 p-6 shadow-xl">
      <h2 className="mb-4 text-center text-2xl font-semibold text-secondary">
        Languages
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <SkillCard
          icon={GB}
          label="English - Native"
          iconColor="#FFFFFF"
          customSize={{ width: "80px", height: "80px" }}
        />
        <SkillCard
          icon={ES}
          label="Spanish - Native"
          iconColor="#FFFFFF"
          customSize={{ width: "80px", height: "80px" }}
        />
      </div>
    </section>
  );
}
