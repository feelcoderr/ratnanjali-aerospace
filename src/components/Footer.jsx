import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Logo } from "./Logo.jsx";
import { FOOTER } from "../data.js";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gold-soft bg-ink pt-16">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.4fr_2fr_1.4fr]">
          {/* Brand + blurb */}
          <div>
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-auto" />
              <span className="leading-none">
                <span className="block font-display text-lg font-bold tracking-[2px] text-gold-gradient">
                  RATNANJALI
                </span>
                <span className="mt-1 block text-[11px] font-semibold tracking-[6px] text-gold-mid">
                  AEROSPACE
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-[320px] text-[13.5px] leading-relaxed text-muted">
              Designing, manufacturing and operating advanced autonomous drones
              for the missions that matter most.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-gold-soft text-gold transition hover:border-gold-mid"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER.columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[2px] text-gold">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13.5px] text-muted transition hover:text-gold-pale"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[2px] text-gold">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-[13.5px] text-muted">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-mid" />
                <span className="whitespace-pre-line">{FOOTER.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold-mid" />
                {FOOTER.email}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold-mid" />
                {FOOTER.phone}
              </li>
            </ul>

            <div className="mt-6 flex overflow-hidden rounded-lg border border-gold-soft bg-panel">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-muted-2 focus:outline-none"
              />
              <button
                aria-label="Subscribe"
                className="grid w-12 place-items-center bg-gold-grad text-[#1a1407]"
              >
                <ArrowRight size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gold-soft py-6 text-[12px] text-muted-2 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Ratnanjali Aerospace Pvt. Ltd. All
            rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
