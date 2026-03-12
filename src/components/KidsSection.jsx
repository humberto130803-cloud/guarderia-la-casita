import { motion } from 'framer-motion'
import { site } from '../siteConfig'

const ageGroups = [
  {
    range: '0 – 1 año',
    label: 'Bebés',
    color: '#4DA6D9',
    icon: '👶',
    desc: 'Estimulación sensorial, masajes y atención personalizada para los más pequeños.',
  },
  {
    range: '1 – 3 años',
    label: 'Caminadores',
    color: '#6DC9A0',
    icon: '🧒',
    desc: 'Juego libre, desarrollo del lenguaje y primeras interacciones sociales.',
  },
  {
    range: '3 – 6 años',
    label: 'Preescolares',
    color: '#F5C842',
    icon: '🎒',
    desc: 'Preparación para la escuela, lectura inicial, matemáticas básicas y mucho más.',
  },
]

export default function KidsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F9F9F7] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#4DA6D9] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Para cada etapa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl text-[#1A3A4A] leading-tight mb-4"
          >
            Atención según la{' '}
            <span className="text-[#4DA6D9]">edad de su hijo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#2E2E2E]/70 text-lg max-w-2xl mx-auto"
          >
            Cada etapa de la infancia es única y merece una atención especializada. Nuestros
            programas se adaptan al desarrollo de cada niño.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ageGroups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ background: g.color }}
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ background: `${g.color}22` }}
              >
                {g.icon}
              </div>

              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{ background: `${g.color}22`, color: g.color }}
              >
                {g.range}
              </span>

              <h3 className="font-heading font-bold text-2xl text-[#1A3A4A] mb-3">{g.label}</h3>
              <p className="text-[#2E2E2E]/70 text-sm leading-relaxed">{g.desc}</p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold transition-colors duration-200"
                  style={{ color: g.color }}
                >
                  Consultar disponibilidad →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <img
            src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=1200&q=80"
            alt="Niños jugando felices"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A4A]/80 via-[#1A3A4A]/40 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <p className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-3">
                ¿Listo para conocernos?
              </p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F5C842] hover:bg-[#D4A520] text-[#1A3A4A] font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-200"
              >
                💬 Agendar visita gratuita
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
