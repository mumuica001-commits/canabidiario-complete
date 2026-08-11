import { createFileRoute, Link } from "@tanstack/react-router";
import { ActionLink, ArrowRight, Eyebrow, SectionHead, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";
import { patologias } from "../data/patologias";
import { artigos } from "../data/artigos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canabidiário — Cannabis medicinal, guiada por ciência" },
      {
        name: "description",
        content:
          "Associação que conecta pacientes com dor orofacial, condições neurológicas e ansiedade a profissionais habilitados para prescrever cannabis medicinal.",
      },
      { property: "og:title", content: "Canabidiário — Cannabis medicinal, guiada por ciência" },
      {
        property: "og:description",
        content:
          "Do diagnóstico à farmácia: acompanhamento com profissionais habilitados em cannabis medicinal.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { num: "Dor orofacial", label: "DTM · Neuralgia do trigêmeo · Bruxismo" },
  { num: "Neurologia", label: "Alzheimer · Parkinson · Epilepsia" },
  { num: "Saúde mental", label: "Ansiedade · Insônia" },
  { num: "Acompanhamento", label: "Consulta → receita → medicamento" },
];

const steps = [
  {
    num: "01 / Consulta",
    title: "Converse com um especialista",
    text: "Agende um horário com um profissional associado para avaliar seu quadro e histórico clínico.",
  },
  {
    num: "02 / Prescrição",
    title: "Receba a receita adequada",
    text: "Com o diagnóstico em mãos, o profissional prescreve a formulação e a dosagem indicadas para o seu caso.",
  },
  {
    num: "03 / Medicamento",
    title: "Inicie o tratamento",
    text: "Adquira o produto prescrito com o apoio da associação e acompanhe sua evolução nas consultas seguintes.",
  },
];

function Index() {
  return (
    <main>
      {/* HERO */}
      <section className="overflow-hidden py-20 md:py-24 lg:pb-28">
        <div className="wrap">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <Eyebrow>Associação de cannabis medicinal</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="my-6 text-[clamp(38px,5.4vw,66px)] leading-[1.05]">
                  O alívio existe.
                  <br />A ciência <em className="italic text-amber-deep">mostra o caminho.</em>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mb-9 max-w-[480px] text-[18px] text-ink-soft">
                  Conectamos pacientes com dor orofacial, condições neurológicas e ansiedade a
                  profissionais habilitados para prescrever tratamento à base de cannabis — do
                  diagnóstico à farmácia.
                </p>
              </Reveal>
              <Reveal delay={200} className="flex flex-wrap items-center gap-5">
                <ActionLink href={WHATSAPP} variant="amber">
                  Agendar consulta
                </ActionLink>
                <ActionLink to="/patologias" variant="ghost">
                  Ver patologias tratadas
                </ActionLink>
              </Reveal>
              <Reveal delay={260} className="mt-16 grid grid-cols-2 gap-y-6 border-t border-border pt-7 lg:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.num} className="pr-5">
                    <span className="block font-serif text-[15px] italic text-pine">{s.num}</span>
                    <span className="mt-1 block font-mono text-[12px] leading-[1.5] tracking-[0.04em] text-ink-soft">
                      {s.label}
                    </span>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal delay={120} className="relative aspect-square items-center justify-center hidden lg:flex">
              <svg viewBox="0 0 420 420" fill="none" className="h-full w-full" aria-hidden="true">
                <circle cx="210" cy="210" r="170" stroke="currentColor" className="text-pine" strokeOpacity="0.14" />
                <circle cx="210" cy="210" r="120" stroke="currentColor" className="text-pine" strokeOpacity="0.14" />
                <g stroke="currentColor" className="text-pine" strokeWidth="1.3" fill="none" strokeLinecap="round">
                  <path d="M210 90C210 90 260 150 260 205C260 245 236 275 210 300C184 275 160 245 160 205C160 150 210 90 210 90Z" />
                  <path d="M210 205V300" />
                  <path d="M210 150C210 150 175 135 145 148" />
                  <path d="M210 150C210 150 245 135 275 148" />
                  <path d="M210 190C210 190 168 178 138 190" />
                  <path d="M210 190C210 190 252 178 282 190" />
                  <path d="M210 240C210 240 178 232 155 240" />
                  <path d="M210 240C210 240 242 232 265 240" />
                </g>
                <g stroke="currentColor" className="text-amber" strokeWidth="1.3" fill="none">
                  <circle cx="118" cy="300" r="7" />
                  <circle cx="90" cy="330" r="5.5" />
                  <circle cx="150" cy="332" r="5.5" />
                  <line x1="118" y1="300" x2="90" y2="330" />
                  <line x1="118" y1="300" x2="150" y2="332" />
                  <circle cx="300" cy="110" r="7" />
                  <circle cx="330" cy="80" r="5.5" />
                  <circle cx="330" cy="140" r="5.5" />
                  <line x1="300" y1="110" x2="330" y2="80" />
                  <line x1="300" y1="110" x2="330" y2="140" />
                </g>
              </svg>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-pine py-24 text-paper">
        <div className="wrap">
          <SectionHead
            tone="dark"
            eyebrow="Como funciona"
            title={
              <>
                Três etapas, um único
                <br />
                acompanhamento contínuo.
              </>
            }
            description="O processo é conduzido de ponta a ponta por profissionais associados, para que você não precise entender de burocracia — só de tratamento."
          />
          <div className="grid border-t border-paper/20 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal
                key={s.num}
                delay={i * 90}
                className={`relative py-10 pr-8 ${i < 2 ? "md:border-r md:border-paper/20" : ""}`}
              >
                <span className="mb-5 block font-mono text-[13px] text-amber-soft">{s.num}</span>
                <h3 className="mb-3 font-serif text-[22px] font-normal italic text-paper">{s.title}</h3>
                <p className="max-w-[280px] text-[14.5px] text-paper/70">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PATOLOGIAS */}
      <section className="py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Patologias"
            title="Condições que acompanhamos"
            description="Cada quadro clínico recebe um plano próprio — não existe protocolo único quando o assunto é dor crônica ou saúde neurológica."
          />
          <div className="grid gap-px border border-border-strong bg-border-strong sm:grid-cols-2 lg:grid-cols-4">
            {patologias.slice(0, 8).map((p) => (
              <Link
                key={p.slug}
                to="/patologias/$slug"
                params={{ slug: p.slug }}
                className="group flex min-h-[190px] flex-col gap-4 bg-card px-6 py-8 transition-colors hover:bg-card-soft"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-amber-deep">
                  {p.grupo}
                </span>
                <h3 className="font-sans text-[15px] font-semibold leading-[1.35] text-ink">
                  {p.nome}
                </h3>
                <span className="mt-auto flex translate-y-1 items-center gap-1.5 font-mono text-[11.5px] text-amber-deep opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  Saiba mais <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-11 text-center">
            <ActionLink to="/patologias" variant="ghost">
              Ver todas as patologias
            </ActionLink>
          </div>
        </div>
      </section>

      {/* NOTICIAS */}
      <section className="py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Notícias"
            title="Do consultório para o seu dia"
            description="Artigos assinados para ajudar você a entender diagnósticos, tratamentos e o que realmente diz a ciência sobre cannabis medicinal."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {artigos.slice(0, 3).map((a, i) => (
              <Reveal key={a.titulo} delay={i * 80}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-elegant"
                >
                  <div className="flex h-[170px] items-end bg-gradient-to-br from-pine to-pine-2 p-4">
                    <span className="rounded-[2px] bg-paper/90 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.06em] text-pine">
                      {a.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-6 pb-7 pt-5">
                    <span className="font-mono text-[11px] tracking-[0.04em] text-amber-deep">
                      {a.categoria}
                    </span>
                    <h3 className="font-serif text-[19px] leading-[1.28] text-ink">{a.titulo}</h3>
                    <span className="mt-auto flex items-center gap-1.5 text-[13px] font-semibold text-pine">
                      Ler matéria{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-11 text-center">
            <ActionLink to="/noticias" variant="ghost">
              Ver todos os artigos
            </ActionLink>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter />

      {/* CTA */}
      <section className="bg-pine py-24 text-center text-paper">
        <div className="wrap">
          <Eyebrow tone="soft" center>
            Comece hoje
          </Eyebrow>
          <h2 className="mx-auto mb-6 mt-5 max-w-[720px] text-[clamp(30px,4.2vw,50px)] leading-[1.15] text-paper">
            Seu tratamento começa com uma conversa.
          </h2>
          <p className="mx-auto mb-9 max-w-[480px] text-paper/75">
            Fale com a associação pelo WhatsApp e entenda os próximos passos para iniciar o
            acompanhamento — sem compromisso.
          </p>
          <ActionLink href={WHATSAPP} variant="amber">
            Agendar consulta pelo WhatsApp
          </ActionLink>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="border-y border-border bg-paper-deep py-24">
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>Fique por dentro</Eyebrow>
            <h2 className="mb-3.5 mt-4 text-[clamp(26px,3vw,36px)]">
              Receba conteúdo sobre cannabis medicinal direto no seu e-mail.
            </h2>
            <p className="max-w-[420px] text-ink-soft">
              Um envio ocasional com novidades sobre tratamentos, patologias e mudanças na
              legislação. Sem spam.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              setEmail("");
              setTimeout(() => setDone(false), 2400);
            }}
          >
            <div className="flex border-b-[1.5px] border-ink pb-0.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                aria-label="Seu e-mail"
                className="flex-1 bg-transparent px-1 py-3 text-base text-ink outline-none placeholder:text-ink-soft"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-1.5 font-mono text-[13px] font-medium text-pine"
              >
                {done ? "Cadastrado ✓" : "Cadastrar"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 font-mono text-[11.5px] text-ink-soft">
              Ao se cadastrar, você concorda em receber e-mails da associação.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
