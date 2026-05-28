"use client";

import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/hooks/useLanguageStore";

const projects = [
  {
    key: "proj1",
    gradient: "from-blue-500 to-violet-500",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/HappyTOPS/portfolio-next",
    demo: "https://happytops.github.io/portfolio-next/",
  },
  {
    key: "proj2",
    gradient: "from-emerald-500 to-cyan-500",
    tags: ["React", "Node.js", "Open Source"],
    github: "https://github.com/HappyTOPS",
    demo: "#",
  },
  {
    key: "proj3",
    gradient: "from-orange-500 to-rose-500",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/HappyTOPS",
    demo: "#",
  },
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
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-foreground/20 hover:-translate-y-1 transition-all duration-500">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className={`h-32 sm:h-44 bg-gradient-to-br ${proj.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative overflow-hidden flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
                    {proj.key === "proj1" && (
                      <svg className="relative w-16 h-16 sm:w-20 sm:h-20 text-white/30 group-hover:text-white/60 transition-colors duration-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="8" width="40" height="24" rx="2" />
                        <line x1="12" y1="36" x2="36" y2="36" />
                        <line x1="18" y1="40" x2="30" y2="40" />
                        <line x1="24" y1="36" x2="24" y2="40" />
                      </svg>
                    )}
                    {proj.key === "proj2" && (
                      <svg className="relative w-16 h-16 sm:w-20 sm:h-20 text-white/30 group-hover:text-white/60 transition-colors duration-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M24 4C13 4 4 13 4 24c0 8.8 5.7 16.3 13.7 19 .6.1 1-.3 1-.7v-3.4c-5.6 1.2-6.7-2.7-6.7-2.7-.9-2.3-2.2-3-2.2-3-1.8-1.2.1-1.2.1-1.2 2 .1 3.1 2 3.1 2 1.8 3 4.7 2.2 5.8 1.7.2-1.3.7-2.2 1.3-2.7-4.4-.5-9.1-2.2-9.1-9.8 0-2.2.8-4 2-5.4-.2-.5-.9-2.6.2-5.4 0 0 1.7-.5 5.5 2.1A19.3 19.3 0 0124 14.5c1.7 0 3.4.2 5 .7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8.4 4.9.2 5.4 1.3 1.4 2 3.2 2 5.4 0 7.7-4.7 9.3-9.2 9.8.7.6 1.4 1.9 1.4 3.8v5.7c0 .4.4.8 1 .7 8-2.7 13.7-10.2 13.7-19C44 13 35 4 24 4z" />
                      </svg>
                    )}
                    {proj.key === "proj3" && (
                      <svg className="relative w-16 h-16 sm:w-20 sm:h-20 text-white/30 group-hover:text-white/60 transition-colors duration-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 8 24 16 30" />
                        <polyline points="32 18 40 24 32 30" />
                        <line x1="28" y1="14" x2="20" y2="34" />
                      </svg>
                    )}
                  </div>
                </a>
                <div className="p-5">
                  <h3 className="font-semibold mb-1.5 group-hover:text-foreground transition-colors">
                    {t(`projects.${proj.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(`projects.${proj.key}.desc`)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {proj.github !== "#" && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source
                      </a>
                    )}
                    {proj.demo !== "#" && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
