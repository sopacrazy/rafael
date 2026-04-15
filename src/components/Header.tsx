import { motion } from 'motion/react';
import { MapPin, Clock, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onBack?: () => void;
  theme?: 'dark' | 'light';
}

export function Header({ onBack, theme = 'dark' }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex flex-col items-center pt-10 pb-6 px-4 text-center"
    >
      {onBack && (
        <button 
          onClick={onBack}
          className={`absolute left-4 top-10 w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
            theme === 'dark' 
              ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
              : 'bg-white border-emerald-100 text-emerald-600 hover:bg-emerald-50 shadow-sm'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 p-1 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=200" 
            alt="RafaelZinho Logo" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      <h1 className={`text-3xl font-heading font-bold mb-3 tracking-tight ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Rafael<span className="text-emerald-500">Zinho</span>
      </h1>
      
      <div className="flex items-center gap-3 text-sm font-medium">
        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
          theme === 'dark' 
            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
            : 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm'
        }`}>
          <Clock className="w-3.5 h-3.5" />
          Aberto agora
        </span>
        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
          theme === 'dark' 
            ? 'bg-white/5 text-gray-300 border-white/10' 
            : 'bg-white text-gray-600 border-emerald-100 shadow-sm'
        }`}>
          <MapPin className="w-3.5 h-3.5" />
          Belém, PA
        </span>
      </div>
    </motion.header>
  );
}
