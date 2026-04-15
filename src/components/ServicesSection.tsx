import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Aulas para Iniciantes',
    desc: 'Aprenda do zero com nossos professores.',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=800',
  },
  {
    id: 2,
    title: 'Locação de Quadras',
    desc: 'Reserve seu horário e jogue com amigos.',
    image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=800',
  },
  {
    id: 3,
    title: 'Day Use & Lazer',
    desc: 'Aproveite a estrutura o dia todo.',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800',
  },
];

export function ServicesSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="pb-24"
    >
      <h2 className={`text-lg font-heading font-bold mb-4 px-1 uppercase tracking-tight ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Nossos Serviços
      </h2>
      <div className="flex flex-col gap-4">
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            className={`relative h-36 rounded-3xl overflow-hidden group cursor-pointer border transition-all ${
              theme === 'dark' ? 'border-white/10' : 'border-emerald-100 shadow-md'
            }`}
          >
            <img 
              src={service.image} 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
              theme === 'dark' ? 'from-black/90 via-black/40 to-transparent' : 'from-emerald-900/40 via-transparent to-transparent opacity-80'
            }`} />
            
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div>
                <h3 className="text-lg font-heading font-bold text-white mb-1 drop-shadow-md">{service.title}</h3>
                <p className="text-sm text-gray-100 drop-shadow-md">{service.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
