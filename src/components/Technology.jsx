import { Cpu, Lock, Layers, Network } from 'lucide-react'
import { TECH_FEATURES, IMG } from '../data.js'

const ICONS = [Cpu, Lock, Layers, Network]

export default function Technology() {
  return (
    <section className="relative overflow-hidden border-y border-gold-soft bg-ink-2/60 py-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
        {/* Image side */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-gold-border shadow-card">
            <img
              src={IMG.droneCloseup}
              alt="Ratnanjali drone technology"
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-gold-mid bg-ink/90 px-6 py-4 shadow-gold sm:block">
            <div className="font-display text-2xl font-black text-gold-gradient">AI-Core v4</div>
            <div className="text-[11px] uppercase tracking-[2px] text-muted-2">
              Onboard Intelligence
            </div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <span className="text-[12px] font-semibold uppercase tracking-[4px] text-gold-mid">
            The Technology
          </span>
          <h2 className="mt-3 font-display text-[clamp(26px,3vw,40px)] font-black uppercase leading-tight">
            Engineered to <span className="text-gold-gradient">outthink</span> the mission.
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">
            Every Ratnanjali airframe is built around a software-defined core — sensing, deciding
            and adapting in real time so operators stay focused on outcomes, not controls.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TECH_FEATURES.map((f, i) => {
              const Icon = ICONS[i]
              return (
                <div key={f.title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold-soft bg-gold/[0.06] text-gold">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold tracking-wide">{f.title}</h4>
                    <p className="text-[13px] leading-snug text-muted">{f.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
