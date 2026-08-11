import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ActionLink, WHATSAPP } from "./ui";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 3C16 3 20 9 20 15C20 18.5 18.5 21 16 23C13.5 21 12 18.5 12 15C12 9 16 3 16 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M16 23V29" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 15C16 15 12 12 8 13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 15C16 15 20 12 24 13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 19C16 19 13 17 10 17.6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 19C16 19 19 17 22 17.6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

const links = [
  { to: "/institucional", label: "Institucional" },
  { to: "/patologias", label: "Patologias" },
  { to: "/profissionais", label: "Profissionais" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-pine px-5 py-2 text-center font-mono text-[12.5px] tracking-[0.02em] text-paper">
        Associação sem fins lucrativos — orientação e acompanhamento{" "}
        <b className="font-medium text-amber-soft">com profissionais habilitados</b>, conforme a
        legislação vigente.
      </div>

      <header className="sticky top-0 z-100 border-b border-border bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 md:px-8 md:py-[18px]">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-serif text-[22px] font-medium text-pine"
          >
            <Logo className="h-[26px] w-[26px] shrink-0" />
            Canabidiário
          </Link>

          <nav className="hidden items-center gap-8 text-[14.5px] font-medium lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative py-1 text-ink-soft transition-colors hover:text-pine after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-amber-deep after:transition-all hover:after:w-full"
                activeProps={{ className: "text-pine after:w-full" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-flex">
              <ActionLink to="/contato" variant="ghost">
                Fale conosco
              </ActionLink>
            </span>
            <span className="hidden sm:inline-flex">
              <ActionLink href={WHATSAPP} variant="primary">
                Agendar consulta
              </ActionLink>
            </span>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="flex flex-col gap-[5px] p-1.5 lg:hidden"
            >
              <span className="block h-0.5 w-[22px] bg-pine" />
              <span className="block h-0.5 w-[22px] bg-pine" />
              <span className="block h-0.5 w-[22px] bg-pine" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-200 flex flex-col gap-8 bg-paper px-6 py-6 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2.5 font-serif text-[22px] font-medium text-pine">
            <Logo className="h-[26px] w-[26px]" />
            Canabidiário
          </span>
          <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="p-1.5 text-3xl leading-none text-pine">
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-serif text-2xl text-pine"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <ActionLink href={WHATSAPP} variant="amber" className="justify-center">
          Agendar consulta
        </ActionLink>
      </div>
    </>
  );
}
