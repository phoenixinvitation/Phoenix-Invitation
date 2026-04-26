import { Heart, Instagram, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative pt-20 pb-10 border-t border-border bg-card">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-soft shrink-0">
                <img src="/logo.jpeg" alt="Phoenix Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-3xl text-foreground">
                Phoenix-Invitation
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium">
              {t("footer.studio")}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#showcase" className="hover:text-primary transition-colors">{t("nav.designs")}</a></li>
              <li><a href="#how" className="hover:text-primary transition-colors">{t("nav.process")}</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{t("nav.pricing")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium">
              {t("footer.connect")}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#contact" className="hover:text-primary transition-colors">WhatsApp</a></li>
              <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=phoenixxinvitation@gmail.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">phoenixxinvitation@gmail.com</a></li>
              <li>
                <a href="https://www.instagram.com/phoenixxinvitations?igsh=Y3BxMHRnc25yeXYx" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  <Instagram className="w-4 h-4" /> @phoenixxinvitation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-warm mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Phoenix-Invitation. {t("footer.rights")}</p>
          <p className="inline-flex items-center gap-1.5">
            {t("footer.madewith")} <Heart className="w-3 h-3 text-primary fill-primary" /> {t("footer.inindia")}
          </p>
        </div>
      </div>
    </footer>
  );
};
