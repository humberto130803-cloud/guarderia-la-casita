import { site } from '../siteConfig'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0F2333] text-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#F5C842] flex items-center justify-center text-[#1A3A4A] text-xl font-bold font-heading shadow">
                🏠
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg leading-none">La Casita de los Niños</p>
                <p className="text-[#6DC9A0] text-xs">Guardería • Ciudad de Panamá</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Un hogar fuera del hogar — donde los niños crecen, aprenden y se divierten en un
              ambiente seguro y lleno de amor.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold text-[#F5C842] mb-4 text-sm uppercase tracking-wider">
              Horarios
            </h4>
            <ul className="space-y-1.5">
              <li className="text-white/50 text-xs">Lun–Vie: 7:00 a.m. – 6:00 p.m.</li>
              <li className="text-white/50 text-xs">Sábado: Por confirmar</li>
              <li className="text-white/50 text-xs">Domingo: Cerrado</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-[#F5C842] mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-2 text-white/60 hover:text-[#4DA6D9] text-sm transition-colors"
                >
                  <HiPhone className="shrink-0" /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-[#6DC9A0] text-sm transition-colors"
                >
                  <span className="shrink-0">💬</span> WhatsApp
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-white/60 text-sm">
                  <HiLocationMarker className="shrink-0 mt-0.5" /> {site.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {year} Guardería La Casita de los Niños. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right">
            Desarrollado por{' '}
            <a
              href="https://axiomsais.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4DA6D9] hover:text-[#6DC9A0] transition-colors"
            >
              Axiom Software &amp; AI Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
