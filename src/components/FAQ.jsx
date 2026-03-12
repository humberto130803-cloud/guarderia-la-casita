import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { site } from '../siteConfig'

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white/5 hover:bg-white/10 transition-colors duration-200"
      >
        <span className="font-heading font-semibold text-white text-base">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <HiChevronDown className="text-[#6DC9A0] text-xl" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-5 text-white/70 text-sm leading-relaxed bg-white/3 border-t border-white/5">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F9F9F7] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#4DA6D9] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Preguntas Frecuentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl text-[#1A3A4A] leading-tight mb-4"
          >
            Resolvemos sus{' '}
            <span className="text-[#4DA6D9]">dudas</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1A3A4A] rounded-3xl overflow-hidden shadow-xl p-2 space-y-2"
        >
          {site.faqs.map((f, i) => (
            <FAQItem
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-[#2E2E2E]/60 mb-4">¿No encontró la respuesta que buscaba?</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A3A4A] hover:bg-[#4DA6D9] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          >
            💬 Pregúntenos directamente
          </a>
        </motion.div>
      </div>
    </section>
  )
}
