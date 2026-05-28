"use client";

import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/hooks/useLanguageStore";

const projects = [
  { key: "proj1", gradient: "from-blue-500 to-violet-500" },
  { key: "proj2", gradient: "from-emerald-500 to-cyan-500" },
  { key: "proj3", gradient: "from-orange-500 to-rose-500" },
];

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-12">
            {t("projects.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <ScrollReveal key={proj.key} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-foreground/20 transition-all duration-500">
                <div
                  className={`h-32 sm:h-48 bg-gradient-to-br ${proj.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="p-5">
                  <h3 className="font-semibold mb-1.5 group-hover:text-foreground transition-colors">
                    {t(`projects.${proj.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`projects.${proj.key}.desc`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
