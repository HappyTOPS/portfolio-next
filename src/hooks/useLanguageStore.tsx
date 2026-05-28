// Simple global store to avoid prop drilling
"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type Lang, translations } from "@/i18n/translations";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "ru",
  setLang: () => {},
  t: (k: string) => translations.ru[k] || k,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored && ["hy", "ru", "en"].includes(stored)) {
      setLangState(stored);
      document.documentElement.lang =
        stored === "en" ? "en" : stored === "ru" ? "ru" : "hy";
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l === "en" ? "en" : l === "ru" ? "ru" : "hy";
  };

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
