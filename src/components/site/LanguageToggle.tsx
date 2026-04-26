import { useLanguage } from "@/i18n/LanguageContext";

export const LanguageToggle = ({ compact = false }: { compact?: boolean }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-background/60 backdrop-blur p-1 text-xs ${
        compact ? "" : ""
      }`}
      role="group"
      aria-label="Language toggle"
    >
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ta")}
        className={`px-3 py-1.5 rounded-full transition-colors font-tamil ${
          lang === "ta"
            ? "bg-primary text-primary-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={lang === "ta"}
      >
        தமிழ்
      </button>
    </div>
  );
};
