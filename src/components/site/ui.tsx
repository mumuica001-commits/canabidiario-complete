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
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.12em] ${
        tone === "amber"
          ? "border-amber-deep/25 bg-amber-soft/40 text-amber-deep"
          : "border-paper/25 bg-paper/10 text-amber-soft"
      } ${center ? "justify-center" : ""}`}
    >
      <span
        className={`inline-block h-[7px] w-[7px] rounded-full ${
          tone === "amber" ? "bg-amber-deep" : "bg-amber-soft"
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
          className={`mt-4 text-[clamp(28px,3.4vw,44px)] leading-[1.05] ${
            tone === "dark" ? "text-paper" : ""
          }`}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={`max-w-[360px] text-[15px] ${
            tone === "dark" ? "text-paper/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const base =
  "relative inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-transparent px-6 py-3 text-sm font-semibold tracking-[-0.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-out";

const variants = {
  primary:
    "bg-pine text-paper shadow-[0_10px_30px_-12px_oklch(0.298_0.07_155_/_0.6)] hover:bg-pine-2 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_oklch(0.298_0.07_155_/_0.7)]",
  amber:
    "bg-gradient-to-br from-amber to-amber-deep text-accent-foreground shadow-[var(--shadow-glow-amber)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_oklch(0.6_0.16_53_/_0.6)]",
  ghost:
    "border-border-strong text-ink hover:border-pine hover:bg-pine/5 hover:-translate-y-0.5",
  ghostDark: "border-paper/30 text-paper hover:border-paper hover:bg-paper/10 hover:-translate-y-0.5",
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
    <a href={href} target="_blank" rel="noopener" className={cls}>
      {children}
    </a>
  );
}

export function ArrowRight({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.3" />
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
    <section className="grain relative overflow-hidden border-b border-border bg-paper-deep py-20 md:py-28">
      <div className="mesh-ambient">
        <span className="b1" />
        <span className="b2" />
      </div>
      <div className="wrap relative z-[2]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-[860px] text-[clamp(34px,5vw,60px)] leading-[1.02]">{title}</h1>
        {lede ? <p className="mt-6 max-w-[560px] text-[17px] text-ink-soft">{lede}</p> : null}
        {children ? <div className="mt-9 flex flex-wrap items-center gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
