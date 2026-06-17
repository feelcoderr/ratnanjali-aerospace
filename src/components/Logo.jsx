// Winged emblem logo image
export function Logo({ className = "w-12 h-auto" }) {
  return (
    <img
      src="/images/logo.png"
      alt="Ratnanjali Aerospace"
      className={className}
    />
  );
}

export function LogoName({ className = "h-auto" }) {
  return (
    <img
      src="/images/logoname.png"
      alt="Ratnanjali Aerospace"
      className={className}
    />
  );
}

// Section heading with flanking gold rule lines.
export function SectionTitle({ children, align = "center", className = "" }) {
  if (align === "left") {
    return (
      <h2
        className={`flex items-center gap-5 font-extrabold uppercase tracking-[3px] text-xl sm:text-2xl ${className}`}
      >
        <span>{children}</span>
        <span className="rule-line flex-1" />
      </h2>
    );
  }
  return (
    <h2
      className={`flex items-center justify-center gap-5 font-extrabold uppercase tracking-[3px] text-xl sm:text-2xl ${className}`}
    >
      <span className="rule-line flex-1 max-w-[120px]" />
      <span className="text-center">{children}</span>
      <span className="rule-line flex-1 max-w-[120px]" />
    </h2>
  );
}
