import { SectionTitle } from './Logo.jsx'
import { INDUSTRIES, IMG } from '../data.js'

export default function Industries() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-10">
      <div className="mb-4 text-center">
        <span className="text-[12px] font-semibold uppercase tracking-[4px] text-gold-mid">
          Where We Fly
        </span>
      </div>
      <SectionTitle align="center" className="mb-12">
        Industries We Serve
      </SectionTitle>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.name}
            className="group relative h-52 overflow-hidden rounded-xl border border-gold-border"
          >
            <img
              src={IMG[ind.img]}
              alt={ind.name}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition group-hover:from-ink/95" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-base font-extrabold uppercase tracking-wide text-white">
                {ind.name}
              </h3>
              <p className="mt-1 max-h-0 overflow-hidden text-[13px] leading-snug text-gold-light opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                {ind.text}
              </p>
            </div>
            <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-gold shadow-gold-sm" />
          </div>
        ))}
      </div>
    </section>
  )
}
