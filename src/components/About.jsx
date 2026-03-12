import { motion } from 'framer-motion'
import { site } from '../siteConfig'

const values = [
  { icon: '🏡', title: 'Como en casa', desc: 'Creamos un ambiente familiar donde cada niño se siente seguro, querido y feliz.' },
  { icon: '📖', title: 'Aprendizaje activo', desc: 'Combinamos juego y aprendizaje para desarrollar habilidades de manera natural y divertida.' },
  { icon: '👩‍🏫', title: 'Personal dedicado', desc: 'Nuestro equipo está comprometido con el bienestar y el desarrollo integral de cada niño.' },
]

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative py-20 md:py-28 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-[#F9F9F7]/95" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-[#4DA6D9]/20 to-[#6DC9A0]/20 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540479859555-17af45c78602?w=800&q=80"
                alt="Niños aprendiendo en La Casita"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A4A]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#F5C842] rounded-full flex items-center justify-center text-2xl">
                      🏠
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[#1A3A4A] text-sm">
                        Guardería La Casita de los Niños
                      </p>
                      <p className="text-[#4DA6D9] text-xs font-medium">{site.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5C842] rounded-full opacity-20 blur-2xl" />
          </motion.div>

          {/* Text column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#4DA6D9] font-bold text-sm uppercase tracking-widest mb-3"
            >
              ¿Quiénes somos?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl md:text-5xl text-[#1A3A4A] leading-tight mb-6"
            >
              Más que una{' '}
              <span className="text-[#4DA6D9]">guardería</span>,
              <br />
              una familia
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#2E2E2E]/80 text-lg leading-relaxed mb-8"
            >
              En <strong className="text-[#1A3A4A]">La Casita de los Niños</strong> creemos que los
              primeros años de vida son los más importantes. Por eso, nos dedicamos a crear un
              ambiente lleno de amor, seguridad y estímulos positivos donde cada niño puede crecer
              y desarrollarse al máximo de su potencial.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[#2E2E2E]/70 text-base leading-relaxed mb-10"
            >
              Sabemos que dejar a su hijo en manos de otros requiere mucha confianza. Nuestra
              misión es ganarnos esa confianza cada día, tratando a cada niño como si fuera de la
              familia.
            </motion.p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start bg-white rounded-2xl p-4 shadow-sm border border-[#4DA6D9]/10"
                >
                  <div className="w-12 h-12 bg-[#4DA6D9]/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#1A3A4A] mb-0.5">{v.title}</p>
                    <p className="text-[#2E2E2E]/70 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
