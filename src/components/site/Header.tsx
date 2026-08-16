import { Link } from "@tanstack/react-router";
import { WHATSAPP } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur-md">
      <div className="wrap flex h-20 items-center justify-between">
        {/* LOGO DA MARCA */}
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <img
            src="/logo.png"
            alt="Logo Canabidiário"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/patologias"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-pine transition-colors"
          >
            Patologias
          </Link>
          <Link
            to="/profissionais"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-pine transition-colors"
          >
            Corpo Clínico
          </Link>
          <Link
            to="/institucional"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-pine transition-colors"
          >
            Sobre Nós
          </Link>
          <Link
            to="/noticias"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-pine transition-colors"
          >
            Artigos
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-pine transition-colors"
          >
            Fale Conosco
          </a>
        </nav>

        {/* CTA HEADER */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-800 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-900 transition-colors shadow-xs"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
}
