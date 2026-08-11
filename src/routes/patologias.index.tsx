import { createFileRoute, Link } from "@tanstack/react-router";
import { ActionLink, ArrowRight, Eyebrow, PageHero, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";
import { grupos, patologias } from "../data/patologias";

export const Route = createFileRoute("/patologias/")({
  head: () => ({
    meta: [
      { title: "Patologias acompanhadas — Canabidiário" },
      {
        name: "description",
        content:
          "DTM, neuralgia do trigêmeo, bruxismo, ansiedade, insônia, Alzheimer, Parkinson e outras condições acompanhadas pela associação Canabidiário.",
      },
      { property: "og:title", content: "Patologias acompanhadas — Canabidiário" },
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
    <main>
      <PageHero
        eyebrow="Patologias"
        title={
          <>
            Condições que <em className="italic text-amber-deep">acompanhamos</em>
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
          <section key={grupo} className="border-b border-border py-20">
            <div className="wrap">
              <Eyebrow>{grupo}</Eyebrow>
              <div className="mt-8 grid gap-px border border-border-strong bg-border-strong md:grid-cols-2 lg:grid-cols-3">
                {lista.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 60} className="bg-card">
                    <Link
                      to="/patologias/$slug"
                      params={{ slug: p.slug }}
                      className="group flex h-full flex-col gap-3 px-6 py-8 transition-colors hover:bg-card-soft"
                    >
                      <h2 className="font-serif text-[21px] leading-[1.25] text-pine">{p.nome}</h2>
                      <p className="text-[14.5px] text-ink-soft">{p.resumo}</p>
                      <span className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-[11.5px] text-amber-deep">
                        Saiba mais{" "}
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-pine py-24 text-center text-paper">
        <div className="wrap">
          <h2 className="mx-auto mb-6 max-w-[620px] text-[clamp(26px,3.6vw,42px)] leading-[1.15] text-paper">
            Não encontrou sua condição na lista?
          </h2>
          <p className="mx-auto mb-9 max-w-[480px] text-paper/75">
            Fale com a associação: avaliamos cada caso individualmente e indicamos o profissional
            mais adequado ao seu quadro.
          </p>
          <ActionLink href={WHATSAPP} variant="amber">
            Conversar pelo WhatsApp
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
