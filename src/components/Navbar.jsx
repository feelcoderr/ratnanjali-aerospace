import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { Logo, LogoName } from "./Logo.jsx";
import { NAV } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-ink/90 border-gold-soft" : "bg-ink/60 border-transparent"
      } backdrop-blur-xl`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1600px] items-center justify-between gap-6 px-5 md:px-10">
        {/* Brand */}
        <a href="#home" className="flex items-center ">
          <Logo className="w-[100px] h-auto drop-shadow-[0_2px_6px_rgba(216,192,144,.25)]" />
          <span className="leading-none">
            {/* <span className="block font-display text-[21px] font-bold tracking-[3px] text-gold-gradient">
              RATNANJALI
            </span>
            <span className="mt-1 block text-[12px] font-semibold tracking-[7px] text-gold-mid">
              AEROSPACE
            </span> */}
            <LogoName className="w-[auto] h-[70px] drop-shadow-[0_2px_6px_rgba(216,192,144,.25)]" />
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative py-1.5 text-sm font-semibold tracking-wide transition-colors hover:text-gold-pale ${
                i === 0 ? "text-gold" : "text-[#c9ccd1]"
              }`}
            >
              {item.toUpperCase()}
              {i === 0 && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-gold-grad" />
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            aria-label="Search"
            className="grid h-11 w-11 place-items-center rounded-lg border border-gold-soft bg-gradient-to-b from-[#1c1e25] to-[#121319] text-gold transition hover:border-gold-mid"
          >
            <Search size={18} />
          </button>
          <button className="hidden rounded-lg border border-gold-mid px-6 py-3 text-[13px] font-bold tracking-[1.5px] text-gold-pale transition hover:bg-gold-grad hover:text-[#1a1407] sm:block">
            REQUEST QUOTE
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-gold-soft text-gold lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gold-soft bg-ink/95 px-5 py-4 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold tracking-wide text-[#c9ccd1] hover:text-gold"
            >
              {item.toUpperCase()}
            </a>
          ))}
          <button className="mt-3 w-full rounded-lg bg-gold-grad px-6 py-3 text-[13px] font-bold tracking-[1.5px] text-[#1a1407]">
            REQUEST QUOTE
          </button>
        </nav>
      )}
    </header>
  );
}
