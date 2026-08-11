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
      className={`flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] ${
        tone === "amber" ? "text-amber-deep" : "text-amber-soft"
      } ${center ? "justify-center" : ""}`}
    >
      <span
        className={`inline-block h-px w-[22px] ${
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
          className={`mt-3.5 text-[clamp(28px,3.4vw,42px)] leading-[1.1] ${
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
  "inline-flex items-center gap-2 whitespace-nowrap rounded-[3px] border border-transparent px-[22px] py-[11px] text-sm font-semibold transition-[transform,background-color,border-color,color] duration-250";

const variants = {
  primary: "bg-pine text-paper hover:bg-pine-2 hover:-translate-y-0.5",
  amber: "bg-amber-deep text-accent-foreground hover:bg-amber hover:-translate-y-0.5",
  ghost: "border-border-strong text-ink hover:border-pine hover:bg-pine/5",
  ghostDark: "border-paper/30 text-paper hover:border-paper hover:bg-paper/10",
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
    <section className="border-b border-border bg-paper-deep py-20 md:py-24">
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-[860px] text-[clamp(32px,4.6vw,56px)] leading-[1.06]">{title}</h1>
        {lede ? <p className="mt-6 max-w-[560px] text-[17px] text-ink-soft">{lede}</p> : null}
        {children ? <div className="mt-9 flex flex-wrap items-center gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
