import { motion } from 'motion/react';
import { Calendar, MessageCircle, Gift, MapPin, Star, Instagram, Sun, Moon } from 'lucide-react';
import { PlaysSection } from './PlaysSection';

interface HomePageProps {
  onNavigate: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export function HomePage({ onNavigate, theme, onToggleTheme }: HomePageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className={`relative min-h-screen flex flex-col pb-10 transition-colors duration-500`}>
      {/* Hero Background */}
      <div className="absolute top-0 left-0 right-0 h-80 z-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200" 
          alt="Arena Background" 
          className={`w-full h-full object-cover blur-sm transition-opacity duration-500 ${
            theme === 'dark' ? 'opacity-40' : 'opacity-20'
          }`}
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent transition-colors duration-500 ${
           theme === 'dark' ? 'via-black/80 to-black' : 'via-emerald-50/80 to-emerald-50'
        }`} />
      </div>

      {/* Theme Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggleTheme}
        className={`absolute top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border shadow-lg transition-all ${
          theme === 'dark' 
            ? 'bg-white/5 border-white/10 text-emerald-400' 
            : 'bg-white border-emerald-100 text-emerald-600'
        }`}
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col px-5 pt-20">
        
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 p-1 mb-4 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=200" 
                alt="RafaelZinho Logo" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <h1 className={`text-2xl font-heading font-bold mb-1 tracking-tight transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Rafael<span className="text-emerald-500">Zinho</span>
          </h1>
          <p className={`text-sm mb-4 max-w-[260px] transition-colors duration-500 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            O melhor complexo esportivo de Belém.
          </p>
          
          <div className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-xs font-medium backdrop-blur-md transition-all ${
            theme === 'dark' 
              ? 'bg-white/5 text-gray-300 border-white/10' 
              : 'bg-white/50 text-gray-600 border-emerald-100 shadow-sm'
          }`}>
            <span>📍</span> Belém, PA
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 w-full max-w-sm mx-auto"
        >
          {/* Primary Action */}
          <motion.button
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            onClick={onNavigate}
            className={`relative group w-full rounded-2xl p-4 flex items-center justify-between shadow-lg overflow-hidden transition-all ${
              theme === 'dark' 
                ? 'bg-emerald-500 text-black shadow-emerald-500/20' 
                : 'bg-emerald-600 text-white shadow-emerald-600/20'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity ${
              theme === 'dark' ? 'from-emerald-400 to-emerald-500' : 'from-emerald-500 to-emerald-600'
            }`} />
            
            <div className="relative z-10 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'bg-black/10' : 'bg-white/10'
              }`}>
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-lg leading-tight uppercase">Agendar Quadra Online</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md mt-1 flex items-center gap-1 ${
                  theme === 'dark' ? 'bg-black/20 text-black' : 'bg-white/20 text-white'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                    theme === 'dark' ? 'bg-black' : 'bg-white'
                  }`} />
                  ABERTO HOJE
                </span>
              </div>
            </div>
          </motion.button>

          {/* Secondary Actions */}
          <SecondaryButton 
            icon={MessageCircle} 
            label="Fale no WhatsApp (Atendimento)" 
            theme={theme}
          />
          <SecondaryButton 
            icon={Gift} 
            label="Nossos Eventos e Pacotes" 
            theme={theme}
          />
          <SecondaryButton 
            icon={MapPin} 
            label="Como Chegar (Localização)" 
            theme={theme}
          />
          <SecondaryButton 
            icon={Star} 
            label="Deixe sua Avaliação (Google)" 
            theme={theme}
          />

          {/* New Plays Section */}
          <PlaysSection theme={theme} />
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-auto pt-10 flex flex-col items-center gap-4"
        >
          <a href="#" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
            theme === 'dark' 
              ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10' 
              : 'bg-white border-emerald-100 text-emerald-600 hover:bg-emerald-50 shadow-sm'
          }`}>
            <Instagram className="w-5 h-5" />
          </a>
          <p className={`text-[10px] font-bold transition-colors duration-500 ${
            theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            DESENVOLVIDO COM <span className="text-emerald-500/80">SOPAFLOW</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}

function SecondaryButton({ icon: Icon, label, theme }: { icon: any, label: string, theme: 'dark' | 'light' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <motion.button
      variants={itemVariants}
      whileTap={{ scale: 0.98 }}
      className={`w-full backdrop-blur-md border rounded-2xl p-4 flex items-center gap-4 transition-all ${
        theme === 'dark' 
          ? 'bg-white/5 border-emerald-500/20 text-white hover:bg-white/10 hover:border-emerald-500/40' 
          : 'bg-white border-emerald-100 text-gray-700 hover:bg-emerald-50/50 hover:border-emerald-200 shadow-sm'
      }`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
        theme === 'dark' ? 'bg-white/5 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
      }`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-bold text-sm uppercase tracking-tight">{label}</span>
    </motion.button>
  );
}
