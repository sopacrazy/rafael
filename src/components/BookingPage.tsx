import { Header } from './Header';
import { BookingSection } from './BookingSection';
import { ServicesSection } from './ServicesSection';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { motion } from 'motion/react';

interface BookingPageProps {
  onBack: () => void;
}

export function BookingPage({ onBack }: BookingPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="relative min-h-screen pb-20"
    >
      <Header onBack={onBack} />
      <BookingSection />
      <ServicesSection />
      <FloatingWhatsApp />
    </motion.div>
  );
}
