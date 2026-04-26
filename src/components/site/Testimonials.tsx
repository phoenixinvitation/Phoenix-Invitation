import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import a1 from "@/assets/avatar_1.png";
import a2 from "@/assets/avatar_2.png";
import a3 from "@/assets/avatar_3.png";
import { useLanguage } from "@/i18n/LanguageContext";

export const Testimonials = () => {
  const { t } = useLanguage();

  const reviews = [
    { name: t("tst.r1.name"), role: t("tst.r1.role"), quote: t("tst.r1.quote"), img: a2 },
    { name: t("tst.r2.name"), role: t("tst.r2.role"), quote: t("tst.r2.quote"), img: a1 },
    { name: t("tst.r3.name"), role: t("tst.r3.role"), quote: t("tst.r3.quote"), img: a3 },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/40">
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
            {t("tst.eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight text-foreground">
            {t("tst.title")}
            <br />
            <span className="text-warm italic">{t("tst.title.accent")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-card rounded-3xl p-8 md:p-9 shadow-soft hover:shadow-warm transition-shadow duration-500 relative"
            >
              <Quote className="w-8 h-8 text-accent/50 mb-5" />
              <blockquote className="font-display text-xl md:text-2xl leading-snug mb-7 text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-4 pt-5 border-t border-border">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30"
                />
                <div>
                  <div className="font-medium text-sm text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground italic">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
