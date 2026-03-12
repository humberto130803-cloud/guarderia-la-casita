import { motion } from 'framer-motion'
import { site } from '../siteConfig'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#F5C842] text-lg">★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-[#F9F9F7] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Background accent */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#4DA6D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#4DA6D9] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Lo que dicen las familias
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl text-[#1A3A4A] leading-tight mb-4"
          >
            Testimonios de{' '}
            <span className="text-[#4DA6D9]">padres felices</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#2E2E2E]/60 text-lg"
          >
            La confianza de las familias es nuestra mayor recompensa
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {site.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote mark */}
              <div className="text-5xl text-[#4DA6D9]/20 font-heading font-extrabold leading-none mb-3">
                "
              </div>

              <p className="text-[#2E2E2E]/80 text-base leading-relaxed mb-6 italic">
                {t.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-[#4DA6D9] to-[#6DC9A0] rounded-full flex items-center justify-center text-white font-bold font-heading">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-[#1A3A4A] text-sm">{t.name}</p>
                  <Stars count={t.stars} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#2E2E2E]/40 text-xs mt-8"
        >
          * Testimonios de padres de la comunidad. Próximamente reseñas verificadas en Google.
        </motion.p>
      </div>
    </section>
  )
}
