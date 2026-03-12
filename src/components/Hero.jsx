import { motion } from 'framer-motion'
import { site } from '../siteConfig'
import { HiPhone } from 'react-icons/hi'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80)',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A4A]/90 via-[#1A3A4A]/75 to-[#4DA6D9]/40" />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#F5C842]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#6DC9A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div>
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#F5C842]/20 border border-[#F5C842]/40 text-[#F5C842] text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            <span>🌟</span> Ciudad de Panamá
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
          >
            Un hogar
            <br />
            <span className="text-[#F5C842]">fuera del</span>
            <br />
            hogar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            En <strong className="text-white">La Casita de los Niños</strong>, su hijo crece, aprende
            y se divierte en un ambiente seguro, cálido y lleno de amor — de 7 a.m. a 6 p.m.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6DC9A0] hover:bg-[#3DA87A] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <span>💬</span> Agenda una Visita
            </a>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <HiPhone /> {site.phone}
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-8 mt-10"
          >
            {[
              { num: '11h', label: 'Horas de atención' },
              { num: '0–6', label: 'Años de edad' },
              { num: '100%', label: 'Cuidado con amor' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading font-extrabold text-2xl md:text-3xl text-[#F5C842]">
                  {s.num}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Photo card side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#F5C842]/30 to-[#6DC9A0]/30 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/maps_photo_1.jpg"
                alt="Guardería La Casita de los Niños"
                className="w-full h-80 object-cover"
              />
              {/* Card overlay badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A3A4A]/90 to-transparent p-6">
                <p className="font-heading font-bold text-white text-lg">
                  Guardería La Casita de los Niños
                </p>
                <p className="text-[#6DC9A0] text-sm">Ciudad de Panamá</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-[#F5C842] text-[#1A3A4A] font-bold text-sm px-4 py-2 rounded-full shadow-lg">
              ¡Cupos disponibles!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-[#1A3A4A] font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <span>🛡️</span> Ambiente Seguro
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-white/50 text-xs">Descubra más</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-5 border-2 border-white/30 border-t-[#F5C842] rounded-full"
        />
      </motion.div>
    </section>
  )
}
