import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import wedding from "@/assets/template-wedding.jpg";
import birthday from "@/assets/template-birthday.jpg";
import engagement from "@/assets/template-engagement.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export const Showcase = () => {
  const { t } = useLanguage();

  const templates = [
    {
      title: t("showcase.t1.name"),
      category: t("showcase.wedding"),
      desc: t("showcase.t1.desc"),
      img: wedding,
      demoUrl: "https://wedding-website-pied-gamma.vercel.app/",
    },
    {
      title: t("showcase.t2.name"),
      category: t("showcase.birthday"),
      desc: t("showcase.t2.desc"),
      img: birthday,
    },
    {
      title: t("showcase.t3.name"),
      category: t("showcase.engagement"),
      desc: t("showcase.t3.desc"),
      img: engagement,
    },
  ];

  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden bg-secondary/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            {t("showcase.eyebrow")}
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight text-foreground">
            {t("showcase.title")}
            <br />
            <span className="text-warm italic">{t("showcase.title.accent")}</span>{" "}
            {t("showcase.title.end")}
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">{t("showcase.desc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {templates.map((tpl, i) => (
            <motion.article
              key={tpl.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-card rounded-3xl p-3 shadow-soft hover:shadow-warm transition-shadow duration-500"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <img
                  src={tpl.img}
                  alt={`${tpl.title} ${tpl.category} invitation`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-card text-primary text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full font-medium shadow-soft">
                    {tpl.category}
                  </span>
                </div>
              </div>

              <div className="px-3 pb-3">
                <h3 className="font-display text-2xl md:text-3xl mb-2 text-foreground">{tpl.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{tpl.desc}</p>

                <div className="flex gap-2">
                  {tpl.demoUrl ? (
                    <a href={tpl.demoUrl} target="_blank" rel="noreferrer" className="flex-1 border border-border rounded-full py-2.5 px-3 text-sm flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors">
                      <Eye className="w-3.5 h-3.5" /> {t("showcase.preview")}
                    </a>
                  ) : (
                    <button className="flex-1 border border-border rounded-full py-2.5 px-3 text-sm flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors">
                      <Eye className="w-3.5 h-3.5" /> {t("showcase.preview")}
                    </button>
                  )}
                  <a
                    href="#contact"
                    className="flex-1 bg-primary text-primary-foreground rounded-full py-2.5 px-3 text-sm flex items-center justify-center gap-1.5 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {t("showcase.get")} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
