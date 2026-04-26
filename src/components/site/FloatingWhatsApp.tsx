import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_NUMBER = "919999999999";

export const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("cta.wa.greeting"))}`}
      target="_blank"
      rel="noopener"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-warm animate-pulse-glow"
      aria-label={t("wa.float")}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};
