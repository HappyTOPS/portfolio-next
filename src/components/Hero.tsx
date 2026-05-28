"use client";

import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLanguageStore";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase"
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4 text-primary"
        >
          {t("hero.name")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-muted-foreground mb-3 font-medium"
        >
          {t("hero.title")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-muted-foreground mb-8 leading-relaxed"
        >
          {t("hero.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-full bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            {t("hero.cta")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-full border border-primary/50 text-sm font-medium hover:bg-primary/10 transition-colors duration-200"
          >
            {t("hero.projects")}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => {
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] text-muted-foreground/60 tracking-widest uppercase mb-1">
            Scroll
          </span>
          {[0, 1, 2].map((i) => (
            <motion.svg
              key={i}
              animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
              className="w-5 h-5 -my-1 text-muted-foreground/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
