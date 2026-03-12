import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { site } from '../siteConfig'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A3A4A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo / Brand */}
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center text-[#1A3A4A] font-bold text-lg font-heading shadow-md">
            🏠
          </div>
          <div className="leading-tight">
            <p className="font-heading font-bold text-white text-base leading-none">La Casita</p>
            <p className="text-[#6DC9A0] text-xs font-medium">de los Niños</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#F5C842] text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6DC9A0] hover:bg-[#3DA87A] text-white font-bold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            ¡Contáctenos!
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A3A4A]/97 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-[#F5C842] font-medium py-1 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="bg-[#6DC9A0] text-white font-bold px-5 py-3 rounded-full text-center mt-2 shadow"
              >
                ¡Contáctenos por WhatsApp!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
