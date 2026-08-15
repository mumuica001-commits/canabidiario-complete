import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ActionLink, WHATSAPP } from "./ui";

// Mantenha a exportação do Logo para não quebrar outros arquivos que importam { Logo }
export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="https://canabidiario.com.br/wp-content/uploads/2024/09/Canabidiario.png"
      alt="Canabidiário Logo"
      className={`h-9 w-auto object-contain ${className}`}
    />
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
      <header className="sticky top-0 z-100 px-3 pt-3">
        <div className="glass mx-auto flex max-w-[1180px] items-center justify-between rounded-full px-5 py-2.5 shadow-[0_8px_30px_-14px_oklch(0.17_0.02_155_/_0.35)] md:px-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-[22px] font-semibold text-pine"
          >
            <Logo className="h-8" />
          </Link>

          <nav className="hidden items-center gap-1 text-[14px] font-medium lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-4 py-2 text-ink-soft transition-colors hover:bg-pine/8 hover:text-pine"
                activeProps={{ className: "bg-pine/10 text-pine" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-flex">
              <ActionLink to="/contato" variant="ghost" className="!px-5 !py-2.5">
                Fale conosco
              </ActionLink>
            </span>
            <span className="hidden sm:inline-flex">
              <ActionLink href={WHATSAPP} variant="primary" className="!px-5 !py-2.5">
                Agendar consulta
              </ActionLink>
            </span>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="flex flex-col gap-[5px] p-2 lg:hidden"
            >
              <span className="block h-0.5 w-[20px] rounded-full bg-pine" />
              <span className="block h-0.5 w-[20px] rounded-full bg-pine" />
              <span className="block h-0.5 w-[20px] rounded-full bg-pine" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 z-200 flex flex-col gap-8 bg-paper/95 px-6 py-6 backdrop-blur-xl transition-all duration-400 ease-out lg:hidden ${
          open ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo className="h-8" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-pine/8 text-2xl leading-none text-pine"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 text-2xl font-semibold text-pine"
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