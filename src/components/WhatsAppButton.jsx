import { motion } from 'framer-motion'
import { site } from '../siteConfig'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center"
      style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.4)' }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.8 6.77L2 30l7.46-1.76A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5c-2.17 0-4.21-.6-5.96-1.63l-.43-.26-4.43 1.04 1.06-4.3-.28-.45A11.44 11.44 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.3-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.22-.4.25-.74.08-.34-.17-1.44-.53-2.74-1.68-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.22-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59l-.65-.01c-.23 0-.6.08-.91.4-.31.32-1.19 1.16-1.19 2.83 0 1.67 1.22 3.29 1.39 3.52.17.23 2.4 3.66 5.82 5.14.81.35 1.44.56 1.93.71.81.26 1.55.22 2.13.13.65-.1 2.02-.82 2.3-1.62.28-.79.28-1.47.2-1.62-.08-.14-.31-.23-.65-.4z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  )
}
