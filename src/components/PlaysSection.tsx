import { motion } from 'motion/react';
import { Video, Clock, CheckCircle2, History } from 'lucide-react';

interface PlayRequest {
  id: string;
  time: string;
  court: string;
  status: 'requested' | 'processing' | 'available';
  timestamp: Date;
}

interface PlaysSectionProps {
  theme: 'dark' | 'light';
}

export function PlaysSection({ theme }: PlaysSectionProps) {
  // Mock data for demonstration
  const recentPlays: PlayRequest[] = [
    {
      id: '1',
      time: '19:30',
      court: 'Quadra 01',
      status: 'available',
      timestamp: new Date()
    },
    {
      id: '2',
      time: '20:15',
      court: 'Quadra 02',
      status: 'requested',
      timestamp: new Date()
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="mt-8 px-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <History className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} />
          <h2 className={`font-heading font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Minhas Jogadas
          </h2>
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          theme === 'dark' ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-500'
        }`}>
          Últimas 24h
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {recentPlays.map((play) => (
          <motion.div
            key={play.id}
            variants={itemVariants}
            className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                : 'bg-white border-emerald-100 shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                play.status === 'available'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-amber-500/10 text-amber-500'
              }`}>
                <Video className="w-6 h-6" />
              </div>
              
              <div className="flex flex-col">
                <span className={`font-bold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                   Jogada {play.time}
                </span>
                <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {play.court}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
               {play.status === 'available' ? (
                 <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold bg-emerald-500/10 px-2 py-1 rounded-lg">
                   <CheckCircle2 className="w-3 h-3" />
                   DISPONÍVEL
                 </div>
               ) : (
                 <div className="flex items-center gap-1.5 text-amber-500 text-[10px] font-bold bg-amber-500/10 px-2 py-1 rounded-lg">
                    <Clock className="w-3 h-3 animate-pulse" />
                    SOLICITADA
                 </div>
               )}
               <span className={`text-[9px] ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                 Expira em 2h
               </span>
            </div>
          </motion.div>
        ))}
      </div>

      {recentPlays.length === 0 && (
        <div className={`text-center py-8 rounded-2xl border-2 border-dashed ${
          theme === 'dark' ? 'border-white/5 text-gray-500' : 'border-gray-100 text-gray-400'
        }`}>
          <Video className="w-8 h-8 mx-auto mb-2 opacity-20" />
          <p className="text-sm font-medium">Nenhuma jogada solicitada recentemente.</p>
        </div>
      )}
    </div>
  );
}
