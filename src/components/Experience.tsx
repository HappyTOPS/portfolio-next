"use client";

import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/hooks/useLanguageStore";

const jobs = [
  { key: "job1" },
  { key: "job2" },
  { key: "job3" },
];

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-12">
            {t("exp.title")}
          </h2>
        </ScrollReveal>

        <div className="space-y-12">
          {jobs.map((job, i) => (
            <ScrollReveal key={job.key} delay={i * 0.1}>
              <div className="group relative pl-8 before:absolute before:left-0 before:top-2 before:w-[2px] before:h-[calc(100%+1rem)] before:bg-border before:last:hidden">
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2 border-border bg-background group-hover:border-foreground transition-colors duration-300" />
                <p className="text-xs text-muted-foreground mb-1">
                  {t(`exp.${job.key}.date`)}
                </p>
                <h3 className="text-lg font-semibold mb-0.5">
                  {t(`exp.${job.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {t(`exp.${job.key}.company`)}
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {t(`exp.${job.key}.desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
