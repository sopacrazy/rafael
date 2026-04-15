import { Header } from './Header';
import { BookingSection } from './BookingSection';
import { ServicesSection } from './ServicesSection';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { motion } from 'motion/react';

interface BookingPageProps {
  onBack: () => void;
  theme: 'dark' | 'light';
}

export function BookingPage({ onBack, theme }: BookingPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="relative min-h-screen pb-20"
    >
      <Header onBack={onBack} theme={theme} />
      <div className="px-5">
        <BookingSection theme={theme} />
        <ServicesSection theme={theme} />
      </div>
      <FloatingWhatsApp />
    </motion.div>
  );
}
