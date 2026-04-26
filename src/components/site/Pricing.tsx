import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.p1.name"),
      price: t("pricing.p1.price"),
      originalPrice: t("pricing.p1.originalPrice"),
      desc: t("pricing.p1.desc"),
      features: [
        t("pricing.p1.f1"),
        t("pricing.p1.f2"),
        t("pricing.p1.f3"),
        t("pricing.p1.f4"),
        t("pricing.p1.f5"),
      ],
      popular: false,
      custom: false,
    },
    {
      name: t("pricing.p2.name"),
      price: t("pricing.p2.price"),
      originalPrice: t("pricing.p2.originalPrice"),
      desc: t("pricing.p2.desc"),
      features: [
        t("pricing.p2.f1"),
        t("pricing.p2.f2"),
        t("pricing.p2.f3"),
        t("pricing.p2.f4"),
        t("pricing.p2.f5"),
        t("pricing.p2.f6"),
      ],
      popular: true,
      custom: false,
    },
    {
      name: t("pricing.p3.name"),
      price: t("pricing.p3.price"),
      desc: t("pricing.p3.desc"),
      features: [
        t("pricing.p3.f1"),
        t("pricing.p3.f2"),
        t("pricing.p3.f3"),
        t("pricing.p3.f4"),
        t("pricing.p3.f5"),
        t("pricing.p3.f6"),
      ],
      popular: false,
      custom: true,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            {t("pricing.eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight text-foreground">
            {t("pricing.title")}
            <br />
            <span className="text-warm italic">{t("pricing.title.accent")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-3xl p-8 md:p-9 flex flex-col ${
                p.popular
                  ? "bg-primary text-primary-foreground shadow-warm md:scale-105 md:-mt-4"
                  : "bg-card border border-border shadow-soft"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warm text-primary-foreground text-xs uppercase tracking-[0.15em] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-glow font-medium">
                  <Sparkles className="w-3 h-3" /> {t("pricing.popular")}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl md:text-3xl mb-2">{p.name}</h3>
                <p className={`text-sm ${p.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.desc}
                </p>
              </div>

              <div className="mb-8">
                <div className="font-display text-4xl md:text-5xl flex items-baseline gap-2">
                  {p.originalPrice && (
                    <span className={`text-xl md:text-2xl line-through ${p.popular ? "text-primary-foreground/50" : "text-muted-foreground/50"}`}>
                      {p.originalPrice}
                    </span>
                  )}
                  <span className={p.popular ? "text-primary-foreground" : "text-warm"}>{p.price}</span>
                </div>
                <div className={`text-xs uppercase tracking-wider mt-2 ${p.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {p.custom ? t("pricing.onrequest") : t("pricing.onetime")}
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-primary-foreground" : "text-accent"}`} />
                    <span className={p.popular ? "text-primary-foreground/90" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center px-6 py-3.5 rounded-full font-medium transition-all duration-300 ${
                  p.popular
                    ? "bg-card text-primary hover:scale-105"
                    : "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {p.custom ? t("pricing.request") : `${t("pricing.choose")} ${p.name}`}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
