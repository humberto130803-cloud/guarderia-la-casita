import { motion } from 'framer-motion'
import { site } from '../siteConfig'

export default function TrustBar() {
  return (
    <section className="bg-[#F5C842] py-4 overflow-hidden">
      <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
        {[...site.trustPoints, ...site.trustPoints].map((p, i) => (
          <div key={i} className="inline-flex items-center gap-2 text-[#1A3A4A] font-bold text-sm shrink-0">
            <span className="text-lg">{p.icon}</span>
            <span>{p.label}</span>
            <span className="text-[#1A3A4A]/30 ml-4">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
