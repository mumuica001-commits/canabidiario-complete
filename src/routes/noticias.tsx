import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, ArrowRight, Eyebrow, PageHero, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";
import { artigos, type Artigo } from "../data/artigos";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias e artigos — Canabidiário" },
      {
        name: "description",
        content:
          "Artigos sobre cannabis medicinal, insônia, ansiedade, dor orofacial e legislação, escritos por profissionais da associação Canabidiário.",
      },
      { property: "og:title", content: "Notícias e artigos — Canabidiário" },
      {
        property: "og:description",
        content: "Conteúdo baseado em evidência sobre cannabis medicinal e tratamento de dor.",
      },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  const destaque = artigos[0] as Artigo;
  const resto = artigos.slice(1);

  return (
    <main>
      <PageHero
        eyebrow="Notícias"
        title={
          <>
            Do consultório para o <em className="italic text-amber-deep">seu dia.</em>
          </>
        }
        lede="Artigos assinados para ajudar você a entender diagnósticos, tratamentos e o que realmente diz a ciência sobre cannabis medicinal."
      />

      <section className="py-20">
        <div className="wrap">
          <a
            href={destaque.url}
            target="_blank"
            rel="noopener"
            className="group grid overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:border-border-strong hover:shadow-elegant lg:grid-cols-[1fr_1fr]"
          >
            <div className="flex min-h-[260px] items-end bg-gradient-to-br from-pine to-pine-2 p-6">
              <span className="rounded-[2px] bg-paper/90 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.06em] text-pine">
                Destaque · {destaque.tag}
              </span>
            </div>
            <div className="flex flex-col gap-4 p-8 lg:p-12">
              <span className="font-mono text-[11px] tracking-[0.04em] text-amber-deep">
                {destaque.categoria}
              </span>
              <h2 className="font-serif text-[clamp(24px,2.8vw,34px)] leading-[1.2] text-ink">
                {destaque.titulo}
              </h2>
              <p className="text-[15px] text-ink-soft">{destaque.resumo}</p>
              <span className="mt-2 flex items-center gap-2 text-[13px] font-semibold text-pine">
                Ler matéria{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <Eyebrow>Todos os artigos</Eyebrow>
          <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {resto.map((a, i) => (
              <Reveal key={a.titulo} delay={i * 60}>
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
                    <p className="text-[14.5px] text-ink-soft">{a.resumo}</p>
                    <span className="mt-auto flex items-center gap-1.5 pt-2 text-[13px] font-semibold text-pine">
                      Ler matéria{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pine py-24 text-center text-paper">
        <div className="wrap">
          <h2 className="mx-auto mb-6 max-w-[620px] text-[clamp(26px,3.6vw,42px)] leading-[1.15] text-paper">
            Ficou com dúvida sobre o seu caso?
          </h2>
          <p className="mx-auto mb-9 max-w-[480px] text-paper/75">
            Artigo nenhum substitui uma avaliação. Fale com a associação e entenda os próximos
            passos.
          </p>
          <ActionLink href={WHATSAPP} variant="amber">
            Agendar consulta
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
