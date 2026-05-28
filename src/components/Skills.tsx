"use client";

import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/hooks/useLanguageStore";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "Docker", level: 75 },
  { name: "PostgreSQL", level: 78 },
  { name: "Redis", level: 72 },
  { name: "Tailwind CSS", level: 93 },
  { name: "GraphQL", level: 70 },
  { name: "AWS", level: 68 },
  { name: "Framer Motion", level: 85 },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-12">
            {t("skills.title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.05}>
              <div className="group p-4 rounded-xl border border-border bg-card hover:border-foreground/30 transition-all duration-300 cursor-default">
                <p className="text-sm font-medium mb-2">{skill.name}</p>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/30 group-hover:bg-primary/60 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
