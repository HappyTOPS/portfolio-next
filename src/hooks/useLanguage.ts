"use client";

import { useCallback, useEffect, useState } from "react";
import { type Lang, translations } from "@/i18n/translations";

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored && ["hy", "ru", "en"].includes(stored)) {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l === "en" ? "en" : l === "ru" ? "ru" : "hy";
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[lang][key] || key;
    },
    [lang]
  );

  return { lang, setLang, t };
}
