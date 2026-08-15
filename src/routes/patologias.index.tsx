import { createFileRoute, Link } from "@tanstack/react-router";
import { ActionLink, ArrowRight, Eyebrow, PageHero, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";
import { grupos, patologias } from "../data/patologias";

export const Route = createFileRoute("/patologias/")({
  head: () => ({
    meta: [
      { title: "Condições que acompanhamos — Canabidiário" },
      {
        name: "description",
        content:
          "DTM, neuralgia do trigêmeo, bruxismo, ansiedade, insônia, Alzheimer, Parkinson e outras condições acompanhadas pela associação Canabidiário.",
      },
      { property: "og:title", content: "Condições que acompanhamos — Canabidiário" },
      {
        property: "og:description",
        content: "Condições de dor orofacial, neurológicas e de saúde mental acompanhadas pela associação.",
      },
    ],
  }),
  component: PatologiasIndex,
});

function PatologiasIndex() {
  return (
    <main className="bg-paper">
      <PageHero
        eyebrow="Patologias"
        title={
          <>
            Condições que <span className="italic text-amber-deep">acompanhamos</span>
          </>
        }
        lede="Cada quadro clínico recebe um plano próprio — não existe protocolo único quando o assunto é dor crônica, saúde neurológica ou ansiedade."
      >
        <ActionLink href={WHATSAPP} variant="amber">
          Agendar avaliação
        </ActionLink>
      </PageHero>

      {grupos.map((grupo) => {
        const lista = patologias.filter((p) => p.grupo === grupo);
        return (
          <section key={grupo} className="border-b border-border py-16 md:py-20">
            <div className="wrap space-y-8">
              <Eyebrow>{grupo}</Eyebrow>

              {/* Grid com cards arredondados idênticos ao padrão da Home */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {lista.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 50}>
                    <div className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-xl shadow-xs">
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-amber-500/10 px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-amber-deep">
                            {grupo}
                          </span>
                          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-pine">
                            Tratamento Indicado
                          </span>
                        </div>

                        <h2 className="font-serif text-xl sm:text-2xl font-medium leading-snug text-ink group-hover:text-pine transition-colors">
                          {p.nome}
                        </h2>

                        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-3">
                          {p.resumo}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between">
                        <Link
                          to="/patologias/$slug"
                          params={{ slug: p.slug }}
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-pine hover:text-amber-deep transition-colors"
                        >
                          <span>Saiba mais sobre a condição</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <a
                          href={WHATSAPP}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-paper px-3 py-1 font-mono text-[11px] font-semibold text-ink-soft border border-border hover:border-pine hover:text-pine transition-colors"
                        >
                          Agendar Consulta
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Final */}
      <section className="bg-pine py-20 md:py-24 text-center text-paper">
        <div className="wrap space-y-6">
          <h2 className="mx-auto max-w-[620px] font-serif text-[clamp(26px,3.6vw,42px)] font-medium leading-[1.15] text-paper">
            Não encontrou sua condição na lista?
          </h2>
          <p className="mx-auto max-w-[520px] text-paper/80 text-base leading-relaxed">
            Fale com a associação: avaliamos cada caso individualmente e indicamos o profissional
            mais adequado ao seu quadro.
          </p>
          <div className="pt-2">
            <ActionLink href={WHATSAPP} variant="amber">
              Conversar pelo WhatsApp
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
