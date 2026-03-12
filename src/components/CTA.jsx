import { motion } from 'framer-motion'
import { site } from '../siteConfig'
import { HiPhone } from 'react-icons/hi'

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A4A]/95 via-[#1A3A4A]/85 to-[#4DA6D9]/60" />

      {/* Decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F5C842]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#6DC9A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-3xl p-10 md:p-14"
        >
          <div className="text-5xl mb-5">🏠</div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5"
          >
            ¿Listo para dar el{' '}
            <span className="text-[#F5C842]">primer paso</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Agende una visita de conocimiento gratuita. Conozca nuestras instalaciones, converse
            con nuestro equipo y descubra por qué somos la opción de confianza para tantas
            familias en Ciudad de Panamá.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6DC9A0] hover:bg-[#3DA87A] text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
            >
              💬 Agendar Visita Gratis
            </a>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-10 py-5 rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <HiPhone /> Llamar Ahora
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white/40 text-sm mt-6"
          >
            Sin compromiso — solo queremos conocerle 🙂
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
