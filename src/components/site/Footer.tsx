import { Link } from "@tanstack/react-router";
import { Logo } from "./Header";
import { WHATSAPP } from "./ui";

const cols = [
  {
    title: "Institucional",
    items: [
      { label: "Sobre a associação", to: "/institucional" },
      { label: "Objetivos", to: "/institucional" },
      { label: "Estatuto", to: "/institucional" },
      { label: "Contato", to: "/contato" },
    ],
  },
  {
    title: "Patologias",
    items: [
      { label: "DTM", to: "/patologias" },
      { label: "Neuralgia do trigêmeo", to: "/patologias" },
      { label: "Ansiedade", to: "/patologias" },
      { label: "Alzheimer & Parkinson", to: "/patologias" },
    ],
  },
  {
    title: "Profissionais",
    items: [
      { label: "Profissionais associados", to: "/profissionais" },
      { label: "Quero me associar", to: "/profissionais" },
      { label: "Quero colaborar", to: "/profissionais" },
    ],
  },
  {
    title: "Pacientes",
    items: [
      { label: "Quero me associar", to: "/contato" },
      { label: "Notícias", to: "/noticias" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden border-t border-border bg-pine py-16 text-paper">
      <div className="wrap relative z-[2]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div className="max-w-[320px]">
            <Link to="/" className="inline-flex items-center gap-2.5 rounded-2xl bg-paper/95 px-4 py-2.5 text-[22px] font-semibold text-pine shadow-lg">
              <Logo className="h-8" />
            </Link>
            <p className="mt-4 text-sm text-paper/65">
              Associação dedicada a conectar pacientes a profissionais prescritores de cannabis
              medicinal, com acompanhamento humano do início ao fim.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-amber-soft hover:bg-amber-soft hover:text-pine"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <path d="M12 2C6.5 2 2 6.5 2 12C2 13.9 2.5 15.7 3.5 17.2L2 22L7 20.6C8.4 21.5 10.1 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/canabidiario"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-amber-soft hover:bg-amber-soft hover:text-pine"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-amber-soft">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-sm text-paper/65 transition-colors hover:text-paper">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/12 pt-6 font-mono text-[11.5px] text-paper/55 md:flex-row md:justify-between">
          <p>© 2026 Canabidiário — Todos os direitos reservados.</p>
          <p>Conteúdo informativo. Não substitui consulta médica.</p>
        </div>
      </div>
    </footer>
  );
}
