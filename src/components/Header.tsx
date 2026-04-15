import { motion } from 'motion/react';
import { MapPin, Clock, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onBack?: () => void;
}

export function Header({ onBack }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex flex-col items-center pt-10 pb-6 px-4 text-center"
    >
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute left-4 top-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 p-1 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=200&auto=format&fit=crop" 
            alt="RafaelZinho Logo" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      <h1 className="text-3xl font-heading font-bold text-white mb-3 tracking-tight">
        Rafael<span className="text-emerald-400">Zinho</span>
      </h1>
      
      <div className="flex items-center gap-3 text-sm font-medium">
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Clock className="w-3.5 h-3.5" />
          Aberto agora
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
          <MapPin className="w-3.5 h-3.5" />
          Belém, PA
        </span>
      </div>
    </motion.header>
  );
}
