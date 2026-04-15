import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Aulas para Iniciantes',
    desc: 'Aprenda do zero com nossos professores.',
    image: '/images/aulas.png',
  },
  {
    id: 2,
    title: 'Locação de Quadras',
    desc: 'Reserve seu horário e jogue com amigos.',
    image: '/images/locacao.png',
  },
  {
    id: 3,
    title: 'Day Use & Lazer',
    desc: 'Aproveite a estrutura o dia todo.',
    image: '/images/lazer.png',
  },
];

export function ServicesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="px-4 pb-24"
    >
      <h2 className="text-xl font-heading font-bold text-white mb-4 px-1">Nossos Serviços</h2>
      <div className="flex flex-col gap-4">
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            className="relative h-36 rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img 
              src={service.image} 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div>
                <h3 className="text-lg font-heading font-bold text-white mb-1">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
