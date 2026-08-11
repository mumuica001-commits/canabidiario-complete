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
      {/* Barra de topo sem o termo 'Associação sem fins lucrativos' */}
      <div className="bg-pine px-5 py-2 text-center font-mono text-[12.5px] tracking-[0.02em] text-paper">
        Canabidiário — orientação e acompanhamento{" "}
        <b className="font-medium text-amber-soft">com profissionais habilitados</b>, conforme a
        legislação vigente.
      </div>

      <header className="sticky top-0 z-100 border-b border-border bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3 md:px-8">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-serif text-[22px] font-medium text-pine"
          >
            <Logo className="h-9" />
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

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 z-200 flex flex-col gap-8 bg-paper px-6 py-6 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo className="h-8" />
          </Link>
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