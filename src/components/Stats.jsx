import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data.js'

function useCountUp(target, decimals = 0, run) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf
    const start = performance.now()
    const dur = 1600
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target])
  return decimals ? val.toFixed(decimals) : Math.round(val)
}

function Stat({ value, suffix, label, decimals, run }) {
  const display = useCountUp(value, decimals, run)
  return (
    <div className="text-center">
      <div className="font-display text-[clamp(34px,4vw,56px)] font-black leading-none text-gold-gradient">
        {display}
        {suffix}
      </div>
      <div className="mt-3 text-[12px] font-semibold uppercase tracking-[2px] text-muted">
        {label}
      </div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [run, setRun] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRun(true),
      { threshold: 0.4 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-[1600px] px-5 py-20 md:px-10">
      <div className="grid grid-cols-2 gap-8 rounded-2xl border border-gold-border bg-gradient-to-b from-[#15171e] to-[#0f1116] p-10 sm:p-14 lg:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  )
}
