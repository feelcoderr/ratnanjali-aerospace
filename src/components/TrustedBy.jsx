const CLIENTS = ['AEROCORP', 'GRIDPOWER', 'TERRASCAN', 'NDW', 'AGRIVANT', 'SKYLINE']

export default function TrustedBy() {
  return (
    <section className="border-y border-gold-soft bg-ink-2/60 py-7">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[3px] text-muted-2">
          Trusted by mission-critical teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
          {CLIENTS.map((c) => (
            <span
              key={c}
              className="font-display text-lg font-bold tracking-[3px] text-white/35 transition hover:text-gold/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
