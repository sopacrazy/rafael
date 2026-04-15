import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-black rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition-colors"
    >
      <div className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-ping opacity-30" style={{ animationDuration: '2s' }} />
      <MessageCircle className="w-6 h-6 fill-current" />
    </motion.a>
  );
}
