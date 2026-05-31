import { PenTool, Factory, Radar, Check } from 'lucide-react'
import { SectionTitle } from './Logo.jsx'
import { SERVICES, IMG } from '../data.js'

const ICONS = { pen: PenTool, factory: Factory, radar: Radar }

export default function Services() {
  return (
    <section id="solutions" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10">
      <div className="mb-4 text-center">
        <span className="text-[12px] font-semibold uppercase tracking-[4px] text-gold-mid">
          What We Do
        </span>
      </div>
      <SectionTitle align="center" className="mb-4">
        Design. Build. Operate.
      </SectionTitle>
      <p className="mx-auto mb-12 max-w-[640px] text-center text-[15px] leading-relaxed text-muted">
        One partner across the full lifecycle — we engineer the aircraft, manufacture it to spec,
        and fly the missions that turn it into results.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon]
          return (
            <article
              key={s.no}
              className="group overflow-hidden rounded-2xl border border-gold-border bg-gradient-to-b from-[#15171e] to-[#0f1116] transition duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-card"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={IMG[s.img]}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1116] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 font-display text-3xl font-black text-gold/80">
                  {s.no}
                </span>
                <div className="absolute -bottom-6 right-5 grid h-14 w-14 place-items-center rounded-xl border border-gold-mid bg-ink text-gold shadow-gold-sm">
                  <Icon size={24} strokeWidth={1.6} />
                </div>
              </div>

              <div className="p-7 pt-9">
                <h3 className="mb-3 text-lg font-extrabold uppercase tracking-wide">{s.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">{s.text}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[13px] text-[#c4c8ce]">
                      <Check size={15} className="shrink-0 text-gold" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
