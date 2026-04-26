import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/0 to-background" />
      </div>

      {/* Floating warm orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full blur-3xl opacity-40 animate-float" style={{ background: "var(--gradient-warm)" }} />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl opacity-30 animate-float" style={{ background: "var(--gradient-warm)", animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 glass-warm rounded-full px-4 py-2 mb-8"
          >
            <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-xs uppercase tracking-[0.15em] text-primary font-medium">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-8 text-foreground"
          >
            {t("hero.title")}
            <br />
            <span className="text-warm italic">{t("hero.title.accent")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#showcase"
              className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-warm hover:scale-105 transition-transform duration-500"
            >
              {t("hero.cta.primary")}
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-card text-foreground hover:bg-secondary transition-all duration-300"
            >
              {t("hero.cta.secondary")}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { n: t("hero.stat1.n"), l: t("hero.stat1.l") },
              { n: t("hero.stat2.n"), l: t("hero.stat2.l") },
              { n: t("hero.stat3.n"), l: t("hero.stat3.l") },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-warm">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground text-xs uppercase tracking-[0.3em]"
        >
          {t("hero.scroll")}
        </motion.div>
      </div>
    </section>
  );
};
