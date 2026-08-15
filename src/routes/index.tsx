// src/routes/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { ActionLink, ArrowRight, Eyebrow, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";
import { artigos } from "../data/artigos";
import { patologias } from "../data/patologias";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canabidiário" },
      {
        name: "description",
        content:
          "Conectamos pacientes a profissionais de saúde habilitados para prescrição e acompanhamento com cannabis medicinal.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  const artigosDestaque = artigos.slice(0, 3);
  const patologiasDestaque = patologias.slice(0, 6);

  return (
    <main className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-border bg-paper py-16 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-medium text-amber-deep">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Associação Prudentina de Cannabis Medicinal</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-medium leading-[1.08] text-pine">
              O alívio existe.<br />
              A ciência <span className="italic text-amber-deep">mostra o caminho.</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-ink-soft">
              Conectamos pacientes com dor orofacial, condições neurológicas e ansiedade a profissionais habilitados para prescrever tratamento à base de cannabis medicinal.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ActionLink href={WHATSAPP} variant="amber">
                Agendar consulta
              </ActionLink>
              <Link
                to="/patologias"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-pine shadow-xs hover:border-pine hover:bg-card-soft transition-all"
              >
                Ver condições acompanhadas
              </Link>
            </div>

            {/* Tags informativas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-border/60">
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-semibold text-amber-deep block uppercase">Dor orofacial</span>
                <span className="text-xs text-ink-soft block">DTM · Neuralgia · Bruxismo</span>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-semibold text-amber-deep block uppercase">Neurologia</span>
                <span className="text-xs text-ink-soft block">Alzheimer · Parkinson · Epilepsia</span>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-semibold text-amber-deep block uppercase">Saúde mental</span>
                <span className="text-xs text-ink-soft block">Ansiedade · Insônia</span>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-semibold text-amber-deep block uppercase">Acompanhamento</span>
                <span className="text-xs text-ink-soft block">Consulta → receita → remédio</span>
              </div>
            </div>
          </div>

          {/* Imagem do Frasco */}
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              <div className="absolute -inset-4 rounded-3xl bg-amber-500/10 blur-2xl -z-10" />
              <img
                src="/frasco.png"
                alt="Frasco de Óleo de Canabidiol"
                className="w-full h-auto object-contain drop-shadow-2xl select-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. COMO FUNCIONA */}
      <section className="border-b border-border bg-paper-deep py-20">
        <div className="wrap space-y-12">
          <div className="max-w-2xl space-y-3">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight text-pine">
              Três etapas, um único acompanhamento contínuo.
            </h2>
            <p className="text-ink-soft text-base leading-relaxed">
              O processo é conduzido de ponta a ponta por profissionais associados, para que você tenha clareza em todas as fases do tratamento.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-8 space-y-4">
                <span className="font-mono text-xs font-semibold text-amber-deep uppercase">01 / Consulta</span>
                <h3 className="font-serif text-xl font-medium text-ink">Converse com um especialista</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Agende um horário com um profissional cadastrado para avaliar seu quadro clínico e histórico com total acolhimento.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-8 space-y-4">
                <span className="font-mono text-xs font-semibold text-amber-deep uppercase">02 / Prescrição</span>
                <h3 className="font-serif text-xl font-medium text-ink">Receba a receita adequada</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Com o diagnóstico em mãos, o profissional prescreve a formulação, proporção (CBD/THC) e dosagem exata para você.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-8 space-y-4">
                <span className="font-mono text-xs font-semibold text-amber-deep uppercase">03 / Medicamento</span>
                <h3 className="font-serif text-xl font-medium text-ink">Inicie o tratamento seguro</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Adquira o produto prescrito com apoio de órgãos sanitários e acompanhe sua evolução nas consultas periódicas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. CONDIÇÕES QUE ACOMPANHAMOS */}
      <section className="py-20 bg-paper">
        <div className="wrap space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <Eyebrow>Patologias</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight text-pine">
                Condições que acompanhamos
              </h2>
              <p className="text-ink-soft text-base leading-relaxed">
                Cada quadro clínico recebe um plano próprio — não existe protocolo único quando o assunto é saúde e qualidade de vida.
              </p>
            </div>
            <Link
              to="/patologias"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-pine hover:text-amber-deep transition-colors"
            >
              <span>Ver todas</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {patologiasDestaque.map((pat, i) => (
              <Reveal key={pat.slug} delay={i * 50}>
                <div className="group flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold uppercase text-amber-deep">
                        {pat.grupo}
                      </span>
                      <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-pine">
                        Indicado
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-medium leading-snug text-ink group-hover:text-pine transition-colors">
                      {pat.nome}
                    </h3>
                    <p className="text-xs text-ink-soft leading-relaxed line-clamp-3">
                      {pat.resumo}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-border/50 flex items-center justify-between">
                    <Link
                      to="/patologias/$slug"
                      params={{ slug: pat.slug }}
                      className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-pine hover:text-amber-deep"
                    >
                      <span>Saiba mais</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-medium text-ink-soft hover:text-pine"
                    >
                      Agendar
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOTÍCIAS EM DESTAQUE */}
      <section className="border-t border-border bg-paper-deep py-20">
        <div className="wrap space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <Eyebrow>Notícias & Ciência</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight text-pine">
                Do consultório para o seu dia
              </h2>
              <p className="text-ink-soft text-base leading-relaxed">
                Artigos assinados para ajudar você a entender diagnósticos, tratamentos e o que realmente diz a ciência sobre cannabis medicinal.
              </p>
            </div>
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-pine hover:text-amber-deep transition-colors"
            >
              <span>Ver todos os artigos</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {artigosDestaque.map((artigo, i) => (
              <Reveal key={artigo.slug} delay={i * 60}>
                <Link
                  to="/noticias/$slug"
                  params={{ slug: artigo.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-md"
                >
                  <div className="h-[200px] w-full overflow-hidden bg-slate-100">
                    <img
                      src={artigo.imagem}
                      alt={artigo.titulo}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1611070342080-6927d6d8db23?auto=format&fit=crop&w=800&q=80";
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="font-mono text-[11px] font-semibold text-amber-deep">
                      {artigo.categoria}
                    </span>
                    <h3 className="font-serif text-[18px] font-medium leading-snug text-ink group-hover:text-pine transition-colors">
                      {artigo.titulo}
                    </h3>
                    <p className="line-clamp-2 text-xs text-ink-soft leading-relaxed">
                      {artigo.resumo}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/40 font-mono text-[11.5px] font-semibold text-pine">
                      <span>Ler matéria</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <section className="border-t border-border bg-paper py-16">
        <div className="wrap max-w-3xl text-center space-y-4">
          <Eyebrow>Fique por dentro</Eyebrow>
          <h2 className="font-serif text-2xl sm:text-4xl text-pine">
            Receba conteúdo sobre cannabis medicinal direto no seu e-mail.
          </h2>
          <p className="text-ink-soft text-sm sm:text-base">
            Um envio ocasional com novidades sobre tratamentos, patologias e atualizações científicas. Sem spam.
          </p>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="border-t border-border bg-pine py-16 md:py-24 text-paper text-center">
        <div className="wrap max-w-3xl space-y-6">
          <span className="inline-block rounded-full bg-paper/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-amber-deep">
            Comece hoje
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-tight">
            Seu tratamento começa com uma conversa.
          </h2>
          <p className="text-paper/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Fale conosco pelo WhatsApp e entenda os próximos passos para iniciar o acompanhamento com segurança e respaldo médico.
          </p>
          <div className="pt-4">
            <ActionLink href={WHATSAPP} variant="amber">
              Agendar consulta pelo WhatsApp
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
