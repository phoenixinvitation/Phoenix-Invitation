import { motion } from "framer-motion";
import { Palette, MessageSquare, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Palette, n: "01", title: t("how.s1.title"), desc: t("how.s1.desc") },
    { icon: MessageSquare, n: "02", title: t("how.s2.title"), desc: t("how.s2.desc") },
    { icon: Sparkles, n: "03", title: t("how.s3.title"), desc: t("how.s3.desc") },
  ];

  return (
    <section id="how" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grain" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            {t("how.eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight text-foreground">
            {t("how.title")}
            <br />
            <span className="text-warm italic">{t("how.title.accent")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative max-w-5xl mx-auto">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.18 }}
              className="relative bg-card rounded-3xl p-8 shadow-soft text-center md:text-left"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto md:mx-0 bg-warm shadow-glow">
                <s.icon className="w-8 h-8 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 bg-card text-primary font-display text-sm w-9 h-9 rounded-full flex items-center justify-center border border-accent/30 shadow-soft">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
