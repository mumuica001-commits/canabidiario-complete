import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export const WHATSAPP = "https://wa.me/5518992027116";

export function Eyebrow({
  children,
  tone = "amber",
  center = false,
}: {
  children: ReactNode;
  tone?: "amber" | "soft";
  center?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.12em] ${
        tone === "amber"
          ? "border-amber-600/30 bg-amber-500/10 text-amber-900"
          : "border-paper/30 bg-paper/10 text-amber-200"
      } ${center ? "justify-center" : ""}`}
    >
      <span
        className={`inline-block h-[7px] w-[7px] rounded-full ${
          tone === "amber" ? "bg-amber-600" : "bg-amber-300"
        }`}
      />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-10">
      <div>
        <Eyebrow tone={tone === "dark" ? "soft" : "amber"}>{eyebrow}</Eyebrow>
        <h2
          className={`mt-4 text-[clamp(28px,3.4vw,44px)] font-serif font-medium leading-[1.05] ${
            tone === "dark" ? "text-paper" : "text-pine"
          }`}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={`max-w-[420px] text-[15px] leading-relaxed ${
            tone === "dark" ? "text-paper/80" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-sm font-semibold tracking-[-0.01em] transition-all duration-200 ease-out shadow-xs";

const variants = {
  primary:
    "bg-emerald-800 text-white shadow-sm hover:bg-emerald-900 hover:shadow-md",
  amber:
    "bg-emerald-800 text-white shadow-sm hover:bg-emerald-900 hover:shadow-md",
  ghost:
    "border border-border bg-card text-ink hover:border-emerald-800 hover:bg-card-soft",
  ghostDark:
    "border border-paper/30 bg-paper/10 text-paper hover:border-paper hover:bg-paper/20",
} as const;

type Variant = keyof typeof variants;

export function ActionLink({
  to,
  href,
  variant = "primary",
  children,
  className = "",
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}

export function ArrowRight({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper-deep py-16 md:py-24">
      <div className="wrap relative z-[2] space-y-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[860px] font-serif text-[clamp(34px,5vw,56px)] font-medium leading-[1.05] text-pine">
          {title}
        </h1>
        {lede ? <p className="max-w-[620px] text-[16px] sm:text-[18px] leading-relaxed text-ink-soft">{lede}</p> : null}
        {children ? <div className="flex flex-wrap items-center gap-4 pt-2">{children}</div> : null}
      </div>
    </section>
  );
}
