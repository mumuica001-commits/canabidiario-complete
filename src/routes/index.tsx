import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
          "Plataforma que conecta pacientes com dor orofacial, condições neurológicas e ansiedade a profissionais habilitados para prescrever cannabis medicinal.",
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
    text: "Agende um horário com um profissional cadastrado para avaliar seu quadro e histórico clínico.",
  },
  {
    num: "02 / Prescrição",
    title: "Receba a receita adequada",
    text: "Com o diagnóstico em mãos, o profissional prescreve a formulação e a dosagem indicadas para o seu caso.",
  },
  {
    num: "03 / Medicamento",
    title: "Inicie o tratamento",
    text: "Adquira o produto prescrito com apoio e acompanhe sua evolução nas consultas seguintes.",
  },
];

function Index() {
  const [isOpened, setIsOpened] = useState(false);
  const [isDropping, setIsDropping] = useState(false);

  // Alterna o estado (ativa/desativa o tema) acionando o efeito da gota
  const toggleThemeEffect = () => {
    setIsDropping(true);

    if (!isOpened) {
      setTimeout(() => {
        setIsOpened(true);
      }, 1100);
    } else {
      setTimeout(() => {
        setIsOpened(false);
      }, 900);
    }

    setTimeout(() => {
      setIsDropping(false);
    }, 1800);
  };

  return (
    <main
      className={`relative transition-colors duration-1000 ease-in-out ${
        isOpened ? "bg-[#fcf8f2] text-[#3a2818]" : ""
      }`}
    >
      {/* LENTE INVISÍVEL SVG DE REFRAÇÃO DA GOTA */}
      <svg className="hidden">
        <defs>
          <filter id="oil-refraction">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* OVERLAY DA GOTA HIPER-REALISTA */}
      {isDropping && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/10 backdrop-blur-[1px]">
          <div className="h-28 w-28 animate-oil-drop shadow-2xl" />
        </div>
      )}

      {/* HERO COM FRASCO FLUTUANTE */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:pb-24">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Texto da Hero */}
            <div>
              <Reveal>
                <Eyebrow>Canabidiário — Medicina Canabinoide</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="my-6 text-[clamp(38px,5.4vw,66px)] leading-[1.05]">
                  O alívio existe.
                  <br />A ciência{" "}
                  <em
                    className={`italic transition-colors duration-700 ${
                      isOpened ? "text-[#b46219]" : "text-amber-deep"
                    }`}
                  >
                    mostra o caminho.
                  </em>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mb-9 max-w-[480px] text-[18px] text-ink-soft">
                  Conectamos pacientes com dor orofacial, condições neurológicas e ansiedade a
                  profissionais habilitados para prescrever tratamento à base de cannabis medicinal.
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

            {/* Frasco Flutuante e Interativo */}
            <Reveal delay={120} className="relative flex flex-col items-center justify-center pt-8 lg:pt-0">
              <div
                className={`absolute transition-all duration-1000 -z-10 ${
                  isOpened
                    ? "h-[500px] w-[500px] bg-amber-500/20 blur-3xl scale-125"
                    : "h-72 w-72 bg-emerald-500/10 blur-3xl"
                }`}
              />

              <button
                type="button"
                onClick={toggleThemeEffect}
                className="group relative flex cursor-pointer flex-col items-center border-none bg-transparent p-0 outline-none focus:outline-none"
                title={isOpened ? "Clique para desativar o tema" : "Clique no frasco para soltar a gota de óleo"}
              >
                <div className="animate-[spin-once_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                  <img
                    src="/frasco.png"
                    alt="Frasco de Óleo de Canabidiol"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://i.ibb.co/L6v3Zbg/frasco-cbd.png";
                    }}
                    className="h-auto w-[260px] sm:w-[320px] lg:w-[380px] drop-shadow-2xl transition-transform duration-500 animate-[float_4s_ease-in-out_infinite] group-hover:scale-105"
                  />
                </div>

                {/* BOTÃO BADGE QUADRADO */}
                <div
                  className={`mt-5 inline-flex items-center gap-2.5 rounded-none border px-4 py-2 font-mono text-[11.5px] tracking-wide shadow-xs backdrop-blur-md transition-all duration-300 group-hover:scale-105 ${
                    isOpened
                      ? "border-amber-600/30 bg-amber-500/20 text-amber-950 shadow-amber-500/10 group-hover:bg-amber-500/30"
                      : "border-emerald-700/20 bg-emerald-700/10 text-emerald-900 shadow-emerald-700/5 group-hover:bg-emerald-700/20"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping ${
                        isOpened ? "bg-amber-600" : "bg-emerald-600"
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-2 w-2 ${
                        isOpened ? "bg-amber-600" : "bg-emerald-700"
                      }`}
                    />
                  </span>

                  <span className="font-medium">
                    {isOpened ? "Tema Âmbar Ativo (Clique para desativar)" : "Clique para dosar a gota"}
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    {isOpened ? "✨" : "💧"}
                  </span>
                </div>
              </button>
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
            description="O processo é conduzido de ponta a ponta por profissionais associados, para que você tenha clareza em todas as fases do tratamento."
          />
          <div className="grid border-t border-paper/20 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal
                key={s.num}
                delay={i * 90}
                className={`relative py-10 px-6 md:px-8 ${
                  i < 2 ? "md:border-r md:border-paper/20" : ""
                } ${i === 0 ? "pl-0 md:pl-0" : ""}`}
              >
                <span className="mb-5 block font-mono text-[13px] text-amber-soft">{s.num}</span>
                <h3 className="mb-3 font-serif text-[22px] font-normal italic text-paper">{s.title}</h3>
                <p className="max-w-[280px] text-[14.5px] leading-relaxed text-paper/70">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PATOLOGIAS — QUADRINHOS 100% RETOS (SEM CANTOS ARREDONDADOS) */}
      <section className="py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Patologias"
            title="Condições que acompanhamos"
            description="Cada quadro clínico recebe um plano próprio — não existe protocolo único quando o assunto é dor crônica ou saúde neurológica."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {patologias.slice(0, 6).map((p) => (
              <div
                key={p.slug}
                className="group flex flex-col justify-between rounded-none border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-amber-500/10 px-2.5 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.08em] text-amber-deep">
                      {p.grupo}
                    </span>
                    <span className="font-mono text-xs text-ink-soft">Tratamento Indicado</span>
                  </div>

                  <h3 className="mt-4 font-sans text-[18px] font-semibold leading-snug text-ink group-hover:text-pine">
                    {p.nome}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-xs text-ink-soft leading-relaxed">
                    {(p as any).descricao ||
                      "Acompanhamento especializado para manejo da dor, modulação sintomática e suporte contínuo com medicina canabinoide."}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-2.5 border-t border-border/50 pt-4">
                  <Link
                    to="/patologias/$slug"
                    params={{ slug: p.slug }}
                    className="flex items-center justify-between font-mono text-[11.5px] font-semibold text-pine hover:text-amber-deep transition-colors py-1"
                  >
                    <span>Saiba mais sobre a condição</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-pine hover:bg-pine-2 text-paper text-xs font-medium py-2.5 px-4 transition-colors shadow-xs"
                  >
                    <span>Agendar Consulta</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <ActionLink to="/patologias" variant="ghost">
              Ver todas as patologias
            </ActionLink>
          </div>
        </div>
      </section>

      {/* NOTÍCIAS COM CARDS RETOS */}
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
                <Link
                  to="/noticias/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-none border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-md"
                >
                  <div className="relative h-[200px] w-full overflow-hidden bg-slate-100">
                    <img
                      src={a.imagem || "https://images.unsplash.com/photo-1611070342080-6927d6d8db23?auto=format&fit=crop&w=800&q=80"}
                      alt={a.titulo}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1611070342080-6927d6d8db23?auto=format&fit=crop&w=800&q=80";
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 rounded-none bg-paper/95 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.06em] text-pine shadow-xs">
                      {a.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 px-6 pb-7 pt-5">
                    <span className="font-mono text-[11px] font-semibold text-amber-deep">
                      {a.categoria}
                    </span>
                    <h3 className="font-serif text-[19px] leading-[1.28] text-ink group-hover:text-pine transition-colors">
                      {a.titulo}
                    </h3>
                    <span className="mt-auto flex items-center gap-1.5 text-[13px] font-semibold text-pine">
                      Ler matéria{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
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
            Fale conosco pelo WhatsApp e entenda os próximos passos para iniciar o
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
              Um envio ocasional com novidades sobre tratamentos, patologias e atualizações
              científicas. Sem spam.
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
              Ao se cadastrar, você concorda em receber e-mails informativos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
