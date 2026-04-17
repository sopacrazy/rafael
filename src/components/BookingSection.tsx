import { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Sun, Users, Calendar as CalendarIcon, Loader2 } from 'lucide-react';

const SPORTS = [
  { id: 'beach', name: 'Beach Tennis', icon: Sun, price: 80 },
  { id: 'futevolei', name: 'Futevôlei', icon: Trophy, price: 70 },
  { id: 'volei', name: 'Vôlei de Areia', icon: Users, price: 60 },
];

const TIMES = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export function BookingSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [selectedSport, setSelectedSport] = useState('beach');
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<'selecting' | 'payment' | 'confirmed'>('selecting');
  const [isProcessing, setIsProcessing] = useState(false);

  const currentSport = SPORTS.find(s => s.id === selectedSport);
  const totalPrice = currentSport?.price || 0;
  const depositPrice = totalPrice / 2;

  // Generate next 7 days
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      day: d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
      date: d.getDate(),
    };
  });

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBookingStatus('confirmed');
    }, 2000);
  };

  if (bookingStatus === 'confirmed') {
    return (
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8"
      >
        <div className={`backdrop-blur-xl border rounded-3xl p-8 text-center shadow-2xl transition-all ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-emerald-100 shadow-emerald-500/5'
        }`}>
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CalendarIcon className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Reserva Confirmada!
          </h2>
          <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Seu horário foi agendado com sucesso. Enviamos os detalhes para o seu WhatsApp.
          </p>
          <div className={`p-4 rounded-2xl mb-8 text-left ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500 text-xs uppercase font-bold">Esporte</span>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{currentSport?.name}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500 text-xs uppercase font-bold">Data</span>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {dates[selectedDate].day}, {dates[selectedDate].date}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs uppercase font-bold">Horário</span>
              <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{selectedTime}</span>
            </div>
          </div>
          <button
            onClick={() => {
              setBookingStatus('selecting');
              setSelectedTime(null);
            }}
            className="w-full py-4 bg-emerald-500 text-black rounded-2xl font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
          >
            Fazer Novo Agendamento
          </button>
        </div>
      </motion.section>
    );
  }

  if (bookingStatus === 'payment') {
    return (
      <motion.section 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <div className={`backdrop-blur-xl border rounded-3xl p-5 shadow-2xl transition-all ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-emerald-100 shadow-emerald-500/5'
        }`}>
          <button 
            onClick={() => setBookingStatus('selecting')}
            className={`text-xs font-bold uppercase mb-4 flex items-center gap-1 ${theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-emerald-600'}`}
          >
            ← Voltar
          </button>
          
          <h2 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Pagamento via PIX
          </h2>
          <p className={`text-xs mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Para confirmar sua reserva, realize o pagamento de no mínimo 50% do valor.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            <div className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-emerald-50 border border-emerald-100'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className={`text-xs font-bold uppercase ${theme === 'dark' ? 'text-gray-500' : 'text-emerald-700/60'}`}>Valor Total</span>
                <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-emerald-900'}`}>
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase text-emerald-500">Mínimo para reserva (50%)</span>
                <span className="text-lg font-bold text-emerald-500">
                  R$ {depositPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <div className={`p-6 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-emerald-100'
            }`}>
              <div className={`w-40 h-40 rounded-2xl mb-4 p-2 ${theme === 'dark' ? 'bg-white' : 'bg-white shadow-sm'}`}>
                {/* QR Code Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-black relative">
                  <motion.div
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute"
                  >
                    <Sun className="w-24 h-24 text-black opacity-10" />
                  </motion.div>
                  <div className="grid grid-cols-4 grid-rows-4 gap-1 w-full h-full p-2 relative z-10">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className={`rounded-sm ${(i * 7 + 3) % 4 === 0 ? 'bg-black' : 'bg-transparent'}`} />
                    ))}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 p-1">
                       {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className={`rounded-[1px] ${(i * 13 + 7) % 3 === 0 ? 'bg-black' : 'bg-transparent'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className={`text-[10px] uppercase font-bold mb-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                Escaneie o QR Code acima
              </p>
              <button 
                className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${
                  theme === 'dark' ? 'border-white/10 text-white hover:bg-white/10' : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50'
                }`}
                onClick={() => {
                  navigator.clipboard.writeText("00020126360014BR.GOV.BCB.PIX0114+5591999999999520400005303986540540.005802BR5920RafaelZinho Arena6005Belem62070503***6304E2D2");
                  alert("Código PIX copiado!");
                }}
              >
                Copiar Código PIX
              </button>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            disabled={isProcessing}
            onClick={handleConfirmPayment}
            className={`w-full py-4 bg-emerald-500 text-black rounded-2xl font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 ${
              isProcessing ? 'opacity-80 cursor-not-allowed' : ''
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Validando Pagamento...
              </>
            ) : (
              'Confirmar Pagamento Simulado'
            )}
          </motion.button>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8"
    >
      <div className={`backdrop-blur-xl border rounded-3xl p-5 shadow-2xl transition-all ${
        theme === 'dark' 
          ? 'bg-white/5 border-white/10' 
          : 'bg-white border-emerald-100 shadow-emerald-500/5'
      }`}>
        <div className="flex items-center gap-2 mb-5">
          <CalendarIcon className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} />
          <h2 className={`text-lg font-heading font-bold uppercase tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Agende sua Quadra
          </h2>
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl whitespace-nowrap transition-all uppercase text-xs font-bold ${
                  isSelected 
                    ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                    : theme === 'dark'
                      ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
                      : 'bg-gray-50 text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 border border-emerald-100'
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
          <h3 className={`text-xs uppercase font-bold mb-3 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Data</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {dates.map((d, i) => {
              const isSelected = selectedDate === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(i)}
                  className={`flex flex-col items-center justify-center min-w-[64px] h-[72px] rounded-2xl transition-all ${
                    isSelected
                      ? theme === 'dark'
                        ? 'bg-white/10 border border-emerald-500/50 text-white shadow-lg shadow-emerald-500/10'
                        : 'bg-emerald-50 border border-emerald-500 text-emerald-600 shadow-md transition-shadow'
                      : theme === 'dark'
                        ? 'bg-transparent border border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300'
                        : 'bg-transparent border border-gray-100 text-gray-400 hover:border-emerald-200 hover:text-emerald-600'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold mb-1 opacity-70">{d.day}</span>
                  <span className={`text-xl font-heading font-bold ${isSelected ? (theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600') : ''}`}>
                    {d.date}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className={`text-xs uppercase font-bold mb-3 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Horários Disponíveis</h3>
          <div className="flex flex-wrap gap-2">
            {TIMES.map((time) => {
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : theme === 'dark'
                        ? 'bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10'
                        : 'bg-gray-50 text-gray-600 border border-emerald-100 hover:bg-emerald-50'
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
          onClick={() => selectedTime && setBookingStatus('payment')}
          className={`w-full mt-8 py-4 rounded-2xl font-bold text-base uppercase tracking-wider transition-all ${
            selectedTime 
              ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 hover:bg-emerald-400' 
              : theme === 'dark'
                ? 'bg-white/5 text-gray-600 cursor-not-allowed border border-white/5'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
          }`}
        >
          {selectedTime ? 'Confirmar Agendamento' : 'Selecione um horário'}
        </motion.button>
      </div>
    </motion.section>
  );
}
