import { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Sun, Users, Calendar as CalendarIcon } from 'lucide-react';

const SPORTS = [
  { id: 'beach', name: 'Beach Tennis', icon: Sun },
  { id: 'futevolei', name: 'Futevôlei', icon: Trophy },
  { id: 'volei', name: 'Vôlei de Areia', icon: Users },
];

const TIMES = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export function BookingSection() {
  const [selectedSport, setSelectedSport] = useState('beach');
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate next 7 days
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      day: d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
      date: d.getDate(),
    };
  });

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="px-4 mb-8"
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl">
        <div className="flex items-center gap-2 mb-5">
          <CalendarIcon className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-heading font-semibold text-white">Agende sua Quadra</h2>
        </div>

        {/* Sport Selection */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
          {SPORTS.map((sport) => {
            const Icon = sport.icon;
            const isSelected = selectedSport === sport.id;
            return (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl whitespace-nowrap transition-all ${
                  isSelected 
                    ? 'bg-emerald-500 text-black font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {sport.name}
              </button>
            );
          })}
        </div>

        {/* Date Selection */}
        <div className="mt-2 mb-6">
          <h3 className="text-sm text-gray-400 mb-3 font-medium">Data</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {dates.map((d, i) => {
              const isSelected = selectedDate === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(i)}
                  className={`flex flex-col items-center justify-center min-w-[64px] h-[72px] rounded-2xl transition-all ${
                    isSelected
                      ? 'bg-white/10 border border-emerald-500/50 text-white'
                      : 'bg-transparent border border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300'
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider mb-1">{d.day}</span>
                  <span className={`text-xl font-heading font-bold ${isSelected ? 'text-emerald-400' : ''}`}>
                    {d.date}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="text-sm text-gray-400 mb-3 font-medium">Horários Disponíveis</h3>
          <div className="flex flex-wrap gap-2">
            {TIMES.map((time) => {
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : 'bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          className={`w-full mt-6 py-4 rounded-2xl font-semibold text-lg transition-all ${
            selectedTime 
              ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400' 
              : 'bg-white/5 text-gray-500 cursor-not-allowed'
          }`}
        >
          {selectedTime ? 'Confirmar Agendamento' : 'Selecione um horário'}
        </motion.button>
      </div>
    </motion.section>
  );
}
