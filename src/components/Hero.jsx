import { ArrowRight } from "lucide-react";
import { IMG } from "../data.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[420px] overflow-hidden pt-[78px]"
    >
      {/* Photo background */}
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: `url(${IMG.hero})` }}
        // style={{ backgroundImage: `url()` }}
      />
      {/* Dark gradient so text stays readable on the left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#0a0c10 0%,rgba(10,12,16,.9) 16%,rgba(10,12,16,.5) 38%,rgba(10,12,16,.18) 62%,rgba(10,12,16,.1) 100%),linear-gradient(180deg,rgba(10,12,16,.0) 100%,transparent 100%,rgba(10,12,16,.3) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-16 pt-20 md:px-10">
        <h1 className="max-w-[620px] animate-rise font-display text-[clamp(34px,4.1vw,62px)] font-black uppercase leading-none tracking-wide drop-shadow-[0_4px_30px_rgba(0,0,0,.6)]">
          Aerospace Excellence Through Indigenous Innovation
        </h1>

        <p className="mt-5 max-w-[560px] animate-rise-1 font-display text-[clamp(15px,1.5vw,21px)] font-medium leading-snug tracking-wide text-gold-gradient">
          HIGH-PERFORMANCE AEROSPACE
          <br />& DRONE SOLUTIONS.
        </p>

        <p className="mt-5 max-w-[500px] animate-rise-2 text-[15px] leading-relaxed text-[#c2c6cc] drop-shadow-[0_2px_12px_rgba(0,0,0,.6)]">
          Ratnanjali Aerospace is an Indian aerospace engineering and advanced
          manufacturing company developing mission-specific unmanned aerial
          systems for industrial, agricultural, infrastructure, surveying,
          defense-support, and specialized operational requirements.
        </p>

        <div className="mt-8 flex animate-rise-3 flex-wrap gap-4">
          <a
            href="#drones"
            className="group inline-flex items-center gap-3 rounded-[10px] bg-gold-grad px-7 py-3.5 text-[13px] font-bold uppercase tracking-[2px] text-[#1a1407] transition hover:-translate-y-0.5"
          >
            Explore Our Fleet
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-[10px] border border-gold-mid px-7 py-3.5 text-[13px] font-bold uppercase tracking-[2px] text-gold-pale transition hover:bg-white/5"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
