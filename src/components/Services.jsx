import { motion } from 'framer-motion'
import { site } from '../siteConfig'

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#1A3A4A] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4DA6D9]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#6DC9A0]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#6DC9A0] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Lo que ofrecemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-tight mb-4"
          >
            Nuestros{' '}
            <span className="text-[#F5C842]">Servicios</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Diseñados para el bienestar integral de su hijo — cuerpo, mente y corazón.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4DA6D9]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#4DA6D9]/15 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">¿Tiene preguntas sobre nuestros servicios?</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#6DC9A0] hover:bg-[#3DA87A] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            💬 Consulte por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
