import { SectionTitle } from './Logo.jsx'
import { PROCESS } from '../data.js'

export default function Process() {
  return (
    <section
      id="company"
      className="relative overflow-hidden border-y border-gold-soft bg-ink-2/60 py-20"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-4 text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[4px] text-gold-mid">
            How We Work
          </span>
        </div>
        <SectionTitle align="center" className="mb-14">
          From Concept to Mission
        </SectionTitle>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* connecting line on large screens */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold-mid/40 to-transparent lg:block" />

          {PROCESS.map((step) => (
            <div key={step.no} className="relative text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold-mid bg-ink font-display text-lg font-bold text-gold-gradient shadow-gold-sm">
                {step.no}
              </div>
              <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[200px] text-[13px] leading-snug text-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
