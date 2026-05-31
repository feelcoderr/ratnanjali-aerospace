import { Quote } from 'lucide-react'
import { SectionTitle } from './Logo.jsx'
import { TESTIMONIALS } from '../data.js'

function initials(name) {
  return name
    .replace(/^(Col\.|Mr\.|Ms\.|Dr\.)\s*/, '')
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Testimonials() {
  return (
    <section className="border-y border-gold-soft bg-ink-2/60 py-20">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionTitle align="center" className="mb-12">
          What Partners Say
        </SectionTitle>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-gold-border bg-gradient-to-b from-[#15171e] to-[#0f1116] p-8 transition duration-300 hover:border-gold hover:shadow-card"
            >
              <Quote className="mb-4 text-gold/50" size={30} fill="currentColor" />
              <blockquote className="flex-1 text-[15px] leading-relaxed text-[#d4d7dc]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-gold-soft pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-grad font-display text-sm font-bold text-[#1a1407]">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{t.name}</span>
                  <span className="block text-[12px] text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
