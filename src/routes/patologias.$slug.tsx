import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ActionLink, ArrowRight, Eyebrow, WHATSAPP } from "../components/site/ui";
import { patologias } from "../data/patologias";

export const Route = createFileRoute("/patologias/$slug")({
  loader: ({ params }) => {
    const patologia = patologias.find((p) => p.slug === params.slug);
    if (!patologia) throw notFound();
    return { patologia };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Patologia não encontrada — Canabidiário" }, { name: "robots", content: "noindex" }],
      };
    }
    const { patologia } = loaderData;
    const title = `${patologia.nome} — Canabidiário`;
    return {
      meta: [
        { title },
        { name: "description", content: patologia.resumo },
        { property: "og:title", content: title },
        { property: "og:description", content: patologia.resumo },
      ],
    };
  },
  component: PatologiaDetalhe,
});

function PatologiaDetalhe() {
  const { patologia } = Route.useLoaderData();
  const relacionadas = patologias.filter((p) => p.slug !== patologia.slug).slice(0, 3);

  return (
    <main>
      <section className="border-b border-border bg-paper-deep py-20">
        <div className="wrap">
          <Link
            to="/patologias"
            className="mb-6 inline-flex items-center gap-2 font-mono text-[12px] text-ink-soft hover:text-pine"
          >
            ← Todas as patologias
          </Link>
          <Eyebrow>{patologia.grupo}</Eyebrow>
          <h1 className="mt-5 max-w-[860px] text-[clamp(30px,4.4vw,52px)] leading-[1.08]">
            {patologia.nome}
          </h1>
          <p className="mt-6 max-w-[600px] text-[17px] text-ink-soft">{patologia.resumo}</p>
          <div className="mt-9">
            <ActionLink href={WHATSAPP} variant="amber">
              Agendar avaliação
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-[clamp(24px,2.8vw,32px)]">Entendendo o quadro</h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-ink-soft">{patologia.texto}</p>

            <h3 className="mt-12 font-serif text-[22px] italic">Como conduzimos o cuidado</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {patologia.abordagem.map((a, i) => (
                <li key={a} className="flex gap-4 border-t border-border pt-4">
                  <span className="font-mono text-[12px] text-amber-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-ink-soft">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border border-border-strong bg-card p-8">
            <Eyebrow>Sinais comuns</Eyebrow>
            <ul className="mt-5 flex flex-col gap-3">
              {patologia.sintomas.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-deep" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-border pt-5 font-mono text-[11.5px] leading-[1.7] text-ink-soft">
              Conteúdo informativo. O diagnóstico e a prescrição dependem de avaliação presencial com
              profissional habilitado.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-paper-deep py-20">
        <div className="wrap">
          <h2 className="mb-10 text-[clamp(22px,2.6vw,30px)]">Outras condições acompanhadas</h2>
          <div className="grid gap-px border border-border-strong bg-border-strong md:grid-cols-3">
            {relacionadas.map((p) => (
              <Link
                key={p.slug}
                to="/patologias/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col gap-3 bg-card px-6 py-8 transition-colors hover:bg-card-soft"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-amber-deep">
                  {p.grupo}
                </span>
                <h3 className="font-serif text-[19px] leading-[1.3]">{p.nome}</h3>
                <span className="mt-2 flex items-center gap-1.5 font-mono text-[11.5px] text-amber-deep">
                  Saiba mais <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
