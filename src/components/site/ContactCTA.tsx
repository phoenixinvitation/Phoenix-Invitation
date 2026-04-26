import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_NUMBER = "919999999999";

export const ContactCTA = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", event: t("cta.form.event.wedding"), date: "" });

  const schema = z.object({
    name: z.string().trim().min(2, t("cta.err.name")).max(80),
    event: z.string().trim().min(2, t("cta.err.event")).max(40),
    date: z.string().trim().min(2, t("cta.err.date")).max(40),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    const msg = `${t("cta.wa.greeting")}%0A%0A${t("cta.wa.name")}: ${encodeURIComponent(form.name)}%0A${t("cta.wa.event")}: ${encodeURIComponent(form.event)}%0A${t("cta.wa.date")}: ${encodeURIComponent(form.date)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    toast.success(t("cta.toast.opening"));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden">
          {/* warm gradient panel */}
          <div className="absolute inset-0" style={{ background: "var(--gradient-warm)" }} />
          <div className="absolute inset-0 grain opacity-40" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-50 bg-card" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "hsl(350 60% 35%)" }} />

          <div className="relative grid md:grid-cols-2 gap-12 p-8 md:p-14 lg:p-16 text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-[0.25em] opacity-90 font-medium">
                {t("cta.eyebrow")}
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.05]">
                {t("cta.title")}
                <br />
                <em>{t("cta.title.accent")}</em>
              </h2>
              <p className="mt-5 text-base md:text-lg opacity-90 max-w-md">
                {t("cta.desc")}
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 mt-8 bg-[#25D366] text-white px-7 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-warm"
              >
                <MessageCircle className="w-5 h-5" />
                {t("cta.whatsapp")}
              </a>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="bg-card text-foreground rounded-3xl p-7 md:p-8 space-y-5 shadow-warm"
            >
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block font-medium">
                  {t("cta.form.name")}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t("cta.form.name.placeholder")}
                  className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/60"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block font-medium">
                  {t("cta.form.event")}
                </label>
                <select
                  value={form.event}
                  onChange={(e) => setForm({ ...form, event: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary transition-colors"
                >
                  <option>{t("cta.form.event.wedding")}</option>
                  <option>{t("cta.form.event.birthday")}</option>
                  <option>{t("cta.form.event.engagement")}</option>
                  <option>{t("cta.form.event.anniversary")}</option>
                  <option>{t("cta.form.event.other")}</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block font-medium">
                  {t("cta.form.date")}
                </label>
                <input
                  type="text"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  placeholder={t("cta.form.date.placeholder")}
                  className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/60"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-3 bg-primary text-primary-foreground rounded-full py-4 px-6 inline-flex items-center justify-center gap-2 font-medium hover:bg-accent hover:text-accent-foreground transition-colors group"
              >
                {t("cta.form.submit")}
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>
              <p className="text-xs text-center text-muted-foreground">
                {t("cta.form.note")}
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
