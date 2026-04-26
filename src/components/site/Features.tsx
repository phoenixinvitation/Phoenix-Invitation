import { motion } from "framer-motion";
import { Smartphone, MessageCircle, Palette, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Smartphone, title: t("features.f1.title"), desc: t("features.f1.desc") },
    { icon: MessageCircle, title: t("features.f2.title"), desc: t("features.f2.desc") },
    { icon: Palette, title: t("features.f3.title"), desc: t("features.f3.desc") },
    { icon: Zap, title: t("features.f4.title"), desc: t("features.f4.desc") },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            {t("features.eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight text-foreground">
            {t("features.title")}
            <br />
            <span className="text-warm italic">{t("features.title.accent")}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-3xl p-7 shadow-soft hover:shadow-warm transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-warm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-soft">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
