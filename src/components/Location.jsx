import { motion } from 'framer-motion'
import { site } from '../siteConfig'
import { HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi'

export default function Location() {
  const weekdays = site.hours.filter((h) => h.day !== 'Domingo' && h.day !== 'Sábado')
  const weekend = site.hours.filter((h) => h.day === 'Sábado' || h.day === 'Domingo')

  return (
    <section id="horarios" className="py-20 md:py-28 bg-[#1A3A4A] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#4DA6D9]/5 to-[#6DC9A0]/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#6DC9A0] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Encuéntrenos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-tight"
          >
            Horarios y{' '}
            <span className="text-[#F5C842]">Ubicación</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info column */}
          <div className="space-y-6">
            {/* Hours card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#F5C842]/20 rounded-xl flex items-center justify-center">
                  <HiClock className="text-[#F5C842] text-xl" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg">Horario de Atención</h3>
              </div>

              <div className="space-y-2">
                {weekdays.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-white/70 text-sm">{h.day}</span>
                    <span className="text-[#6DC9A0] font-semibold text-sm">{h.time}</span>
                  </div>
                ))}
                {weekend.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-white/70 text-sm">{h.day}</span>
                    <span className={`font-semibold text-sm ${h.time === 'Cerrado' ? 'text-red-400' : 'text-[#F5C842]'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-white/30 text-xs mt-4">
                * Los horarios del sábado están pendientes de confirmación.
              </p>
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 space-y-4"
            >
              <h3 className="font-heading font-bold text-white text-lg mb-2">Contacto</h3>

              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-[#4DA6D9]/20 rounded-xl flex items-center justify-center shrink-0">
                  <HiPhone className="text-[#4DA6D9] text-lg" />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Teléfono</p>
                  <p className="text-white font-semibold group-hover:text-[#4DA6D9] transition-colors">
                    {site.phone}
                  </p>
                </div>
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-[#6DC9A0]/20 rounded-xl flex items-center justify-center shrink-0 text-lg">
                  💬
                </div>
                <div>
                  <p className="text-white/50 text-xs">WhatsApp</p>
                  <p className="text-white font-semibold group-hover:text-[#6DC9A0] transition-colors">
                    Escríbanos ahora
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F5C842]/20 rounded-xl flex items-center justify-center shrink-0">
                  <HiLocationMarker className="text-[#F5C842] text-lg" />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Dirección</p>
                  <p className="text-white font-semibold">{site.address}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-[420px]"
          >
            <iframe
              title="Ubicación Guardería La Casita de los Niños"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62808.96484395286!2d-79.5800!3d9.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f06c2deced%3A0x62a6a9eba9d72c99!2sPanama%20City%2C%20Panama!5e0!3m2!1ses!2spa!4v1710000000000!5m2!1ses!2spa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
