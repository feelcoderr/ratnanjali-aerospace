import { Target, Camera, BatteryCharging } from 'lucide-react'
import { SectionTitle } from './Logo.jsx'
import { CAPABILITIES } from '../data.js'

const ICONS = { target: Target, camera: Camera, battery: BatteryCharging }

export default function Capabilities() {
  return (
    <section id="technology" className="py-10 lg:pr-14">
      <SectionTitle align="center" className="mb-9">
        Our Core Capabilities
      </SectionTitle>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {CAPABILITIES.map((cap) => {
          const Icon = ICONS[cap.icon]
          return (
            <div
              key={cap.title}
              className="group rounded-2xl border border-gold-border bg-gradient-to-b from-[#15171e] to-[#0f1116] p-7 text-center transition duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-card"
            >
              <div className="mx-auto mb-5 grid h-[74px] w-[74px] place-items-center rounded-full border-[1.5px] border-gold-mid text-gold shadow-[0_0_22px_rgba(216,192,144,.18),inset_0_0_18px_rgba(216,192,144,.08)]">
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 whitespace-pre-line text-base font-extrabold uppercase leading-tight tracking-wider">
                {cap.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-muted">{cap.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
