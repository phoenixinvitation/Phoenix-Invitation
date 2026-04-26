import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#showcase", label: t("nav.designs") },
    { href: "#how", label: t("nav.process") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-background/40 backdrop-blur-sm"
          }`}
        >
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-soft shrink-0 ring-2 ring-transparent group-hover:ring-warm transition-all duration-300">
              <img src="/logo.jpeg" alt="Phoenix Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-xl md:text-2xl tracking-tight text-foreground whitespace-nowrap">
              Phoenix-Invitation
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              {t("nav.cta")}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-px bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-px bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-3xl p-6 space-y-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-3 rounded-full bg-primary text-primary-foreground"
            >
              {t("nav.cta")}
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
