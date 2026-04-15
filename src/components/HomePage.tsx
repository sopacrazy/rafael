import { motion } from 'motion/react';
import { Calendar, MessageCircle, Gift, MapPin, Star, Instagram } from 'lucide-react';

interface HomePageProps {
  onNavigate: () => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
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
    <div className="relative min-h-screen flex flex-col pb-10">
      {/* Hero Background */}
      <div className="absolute top-0 left-0 right-0 h-80 z-0">
        <img 
          src="/images/hero.png" 
          alt="Arena Background" 
          className="w-full h-full object-cover blur-sm opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col px-5 pt-20">
        
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 p-1 mb-4 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img 
                src="/images/avatar.png" 
                alt="RafaelZinho Logo" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <h1 className="text-2xl font-heading font-bold text-white mb-1 tracking-tight">
            @rafaelzinho_
          </h1>
          <p className="text-gray-300 text-sm mb-4 max-w-[260px]">
            O melhor complexo esportivo de Belém.
          </p>
          
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 text-xs font-medium backdrop-blur-md">
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
            className="relative group w-full bg-emerald-500 text-black rounded-2xl p-4 flex items-center justify-between shadow-[0_0_20px_rgba(16,185,129,0.3)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 border-2 border-emerald-400 rounded-2xl animate-[pulse_2s_ease-in-out_infinite] opacity-50" />
            
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-lg leading-tight">AGENDAR QUADRA ONLINE</span>
                <span className="text-xs font-medium bg-black/20 px-2 py-0.5 rounded-md mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  Aberto hoje
                </span>
              </div>
            </div>
          </motion.button>

          {/* Secondary Actions */}
          <SecondaryButton icon={MessageCircle} label="Fale no WhatsApp (Atendimento)" />
          <SecondaryButton icon={Gift} label="Nossos Eventos e Pacotes" />
          <SecondaryButton icon={MapPin} label="Como Chegar (Localização)" />
          <SecondaryButton icon={Star} label="Deixe sua Avaliação (Google)" />
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-auto pt-12 flex flex-col items-center gap-4"
        >
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <p className="text-xs text-gray-500 font-medium">
            Desenvolvido com <span className="text-emerald-500/80">SopaFlow</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}

function SecondaryButton({ icon: Icon, label }: { icon: any, label: string }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <motion.button
      variants={itemVariants}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-white/5 backdrop-blur-md border border-emerald-500/20 text-white rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 hover:border-emerald-500/40 transition-all"
    >
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium text-sm">{label}</span>
    </motion.button>
  );
}
