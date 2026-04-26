import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, TranslationKey } from "./translations";

export type Lang = "en" | "ta";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem("phoenix-invitation-lang") as Lang | null;
    return stored === "ta" || stored === "en" ? stored : "en";
  });

  useEffect(() => {
    localStorage.setItem("phoenix-invitation-lang", lang);
    document.documentElement.lang = lang === "ta" ? "ta" : "en";
    if (lang === "ta") {
      document.documentElement.classList.add("lang-ta");
    } else {
      document.documentElement.classList.remove("lang-ta");
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (key: TranslationKey) => translations[lang][key] ?? translations.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
