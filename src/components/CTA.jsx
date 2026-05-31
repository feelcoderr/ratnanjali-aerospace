import { ArrowRight } from "lucide-react";
import { IMG } from "../data.js";

export default function CTA() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-gold-border">
        <img
          src={IMG.field}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#0a0c10 0%,rgba(10,12,16,.9) 45%,rgba(10,12,16,.5) 100%)",
          }}
        />
        <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
          <h2 className="max-w-[640px] font-display text-[clamp(26px,3.2vw,44px)] font-black uppercase leading-tight">
            Ready to put advanced{" "}
            <span className="text-gold-gradient">aerial systems</span> to work?
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-[#c2c6cc]">
            Tell us about your mission and our engineers will design the right
            platform — from a single airframe to a full operational fleet.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-[10px] bg-gold-grad px-7 py-3.5 text-[13px] font-bold uppercase tracking-[2px] text-[#1a1407] transition hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#drones"
              className="inline-flex items-center rounded-[10px] border border-gold-mid px-7 py-3.5 text-[13px] font-bold uppercase tracking-[2px] text-gold-pale transition hover:bg-white/5"
            >
              View the Fleet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
