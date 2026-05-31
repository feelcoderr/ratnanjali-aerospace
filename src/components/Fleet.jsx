import { ArrowRight, Sparkle } from 'lucide-react'
import { SectionTitle } from './Logo.jsx'
import { FLEET, IMG } from '../data.js'

export default function Fleet() {
  return (
    <section
      id="drones"
      className="relative overflow-hidden rounded-[20px] border border-gold-border p-7 shadow-card sm:p-10"
      style={{
        background:
          'radial-gradient(120% 120% at 90% 0%,rgba(216,192,144,.06),transparent 55%),linear-gradient(160deg,#16191f,#0f1116)',
      }}
    >
      {/* Hex / circuit texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 600 400"
      >
        <defs>
          <pattern id="hex" width="46" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M23 1 L44 13 L44 35 L23 47 L2 35 L2 13 Z"
              fill="none"
              stroke="rgba(216,192,144,.10)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#hex)" />
      </svg>

      <SectionTitle align="left" className="relative z-10 mb-7">
        Our Drone Fleet
      </SectionTitle>

      <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {FLEET.map((d) => (
          <div
            key={d.name}
            className="group rounded-[14px] border border-gold-border bg-gradient-to-b from-[#1b1e25] to-[#101218] p-3.5 pb-5 transition duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-card"
          >
            <div className="mb-3.5 h-[104px] overflow-hidden rounded-[10px] border border-gold-soft">
              <img
                src={IMG[d.img]}
                alt={`${d.name} drone`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="font-display text-lg font-bold tracking-tight text-gold-gradient">
              {d.name}
            </h4>
            <div className="mb-3 mt-1 text-[12.5px] font-medium text-[#c4c8ce]">{d.role}</div>
            <div className="mb-3.5 rounded-md border border-gold-soft bg-gold/[0.06] px-2 py-1.5 text-center text-[9.5px] leading-relaxed text-muted-2">
              <b className="font-semibold text-gold-light">Range</b> {d.range} ·{' '}
              <b className="font-semibold text-gold-light">Flight</b> {d.flight} ·{' '}
              <b className="font-semibold text-gold-light">Payload</b> {d.payload}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.5px] text-gold transition-all hover:gap-2.5 hover:text-gold-pale"
            >
              LEARN MORE <ArrowRight size={12} strokeWidth={3} />
            </a>
          </div>
        ))}
      </div>

      <Sparkle
        className="absolute bottom-4 right-5 z-10 text-gold-mid/60"
        size={28}
        fill="currentColor"
      />
    </section>
  )
}
