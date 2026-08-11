import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ActionLink, ArrowRight, Eyebrow, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";
import { artigos, type Artigo } from "../data/artigos";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }): { artigo: Artigo } => {
    const artigo = artigos.find((a) => a.slug === params.slug);
    if (!artigo) throw notFound();
    return { artigo };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Matéria não encontrada — Canabidiário" }, { name: "robots", content: "noindex" }],
      };
    }
    const { artigo } = loaderData;
    const title = `${artigo.titulo} — Canabidiário`;
    return {
      meta: [
        { title },
        { name: "description", content: artigo.resumo },
        { property: "og:title", content: title },
        { property: "og:description", content: artigo.resumo },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArtigoDetalhe,
});

function ArtigoDetalhe() {
  const { artigo } = Route.useLoaderData() as { artigo: Artigo };
  const relacionados = artigos.filter((a) => a.slug !== artigo.slug).slice(0, 3);

  return (
    <main>
      <section className="border-b border-border bg-paper-deep py-20">
        <div className="wrap max-w-[760px]">
          <Link
            to="/noticias"
            className="mb-6 inline-flex items-center gap-2 font-mono text-[12px] text-ink-soft hover:text-pine"
          >
            ← Todas as matérias
          </Link>
          <Eyebrow>{artigo.categoria}</Eyebrow>
          <h1 className="mt-5 text-[clamp(28px,4vw,46px)] leading-[1.1]">{artigo.titulo}</h1>
          <p className="mt-6 text-[17px] text-ink-soft">{artigo.resumo}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-[12px] text-ink-soft">
            <span>{artigo.autor}</span>
            <span className="text-border-strong">·</span>
            <span>{artigo.data}</span>
            <span className="text-border-strong">·</span>
            <span>{artigo.tag}</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <article className="max-w-[640px]">
            <div className="mb-10 h-[280px] w-full overflow-hidden rounded-none bg-slate-100 sm:h-[380px]">
              <img
                src={artigo.imagem}
                alt={artigo.titulo}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1611070342080-6927d6d8db23?auto=format&fit=crop&w=1000&q=80";
                }}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="article-body text-[16px] leading-[1.8] text-ink-soft [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-[24px] [&_h2]:font-normal [&_h2]:text-pine [&_h2]:first:mt-0 [&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:font-serif [&_h3]:text-[19px] [&_h3]:text-ink [&_p]:mt-5 [&_p]:first:mt-0 [&_p.lead]:text-[18px] [&_p.lead]:text-ink [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-2 [&_strong]:text-ink [&_strong]:font-semibold [&_a]:text-pine [&_a]:underline [&_a]:decoration-amber-deep/40 [&_a]:underline-offset-4"
              dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
            />
          </article>

          <aside className="h-fit border border-border-strong bg-card p-8">
            <Eyebrow>Sobre este conteúdo</Eyebrow>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              Este artigo tem caráter informativo. O diagnóstico e a prescrição de tratamento com
              cannabis medicinal dependem de avaliação presencial com um profissional de saúde
              habilitado.
            </p>
            <p className="mt-5 border-t border-border pt-5 font-mono text-[11.5px] leading-[1.7] text-ink-soft">
              Publicado por {artigo.autor} · {artigo.categoria}
            </p>
            <div className="mt-6">
              <ActionLink href={WHATSAPP} variant="amber" className="w-full justify-center">
                Agendar consulta
              </ActionLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-paper-deep py-20">
        <div className="wrap">
          <h2 className="mb-10 text-[clamp(22px,2.6vw,30px)]">Continue lendo</h2>
          <div className="grid gap-7 md:grid-cols-3">
            {relacionados.map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <Link
                  to="/noticias/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-elegant"
                >
                  <div className="flex h-[150px] items-end bg-gradient-to-br from-pine to-pine-2 p-4">
                    <span className="rounded-[2px] bg-paper/90 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.06em] text-pine">
                      {a.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-6 pb-7 pt-5">
                    <span className="font-mono text-[11px] tracking-[0.04em] text-amber-deep">
                      {a.categoria}
                    </span>
                    <h3 className="font-serif text-[18px] leading-[1.28] text-ink">{a.titulo}</h3>
                    <span className="mt-auto flex items-center gap-1.5 pt-2 text-[13px] font-semibold text-pine">
                      Ler matéria{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
