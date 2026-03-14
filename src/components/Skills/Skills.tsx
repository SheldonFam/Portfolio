import { SKILL_CATEGORIES } from "../../data/skills";
import { SectionHeader } from "../common/SectionHeader";
import { SkillCard } from "./SkillCard";
import { useInView } from "../../hooks/useInView";

export function Skills() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className={`max-w-[1100px] mx-auto px-8 py-24 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <SectionHeader
        tag="Tech Stack"
        title="Skills"
        description="Technologies I work with daily to build production-grade applications."
      />
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-grid ${isVisible ? "visible" : ""}`}>
        {SKILL_CATEGORIES.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  );
}
