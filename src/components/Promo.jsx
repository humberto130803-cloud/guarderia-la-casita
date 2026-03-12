import { motion } from 'framer-motion'
import { site } from '../siteConfig'

export default function Promo() {
  return (
    <section className="py-20 md:py-28 bg-[#1A3A4A] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4DA6D9]/10 via-transparent to-[#6DC9A0]/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#F5C842]/20 border border-[#F5C842]/30 text-[#F5C842] font-bold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          >
            ✨ Ofertas Especiales
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-tight"
          >
            Beneficios para{' '}
            <span className="text-[#F5C842]">nuevas familias</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {site.promos.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-3xl p-8 text-center hover:border-[#F5C842]/40 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Number */}
              <div className="w-12 h-12 bg-[#F5C842] text-[#1A3A4A] rounded-full flex items-center justify-center font-heading font-extrabold text-xl mx-auto mb-5">
                {i + 1}
              </div>

              <h3 className="font-heading font-bold text-white text-xl mb-3">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{p.desc}</p>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6DC9A0] hover:bg-[#3DA87A] text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-200"
              >
                💬 {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
