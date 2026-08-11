import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { artigos } from "../data/artigos";
import { ActionLink, ArrowRight, Eyebrow, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/noticias")({
  component: NoticiasBlogPage,
});

function NoticiasBlogPage() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  const categorias = [
    "Todas",
    "Insônia & Medicina",
    "Ansiedade & Medicina",
    "Ansiedade & Insônia",
    "Medicina",
    "Novidades",
    "Regulamentação",
    "Biologia",
    "Odontologia",
    "Cultivo",
    "Medicina Veterinária",
  ];

  const artigoDestaque = artigos[0];

  const artigosFiltrados = artigos.filter((artigo) => {
    const combinaBusca =
      artigo.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      artigo.resumo.toLowerCase().includes(busca.toLowerCase());
    const combinaCategoria =
      categoriaAtiva === "Todas" || artigo.categoria === categoriaAtiva;
    return combinaBusca && combinaCategoria;
  });

  return (
    <main className="py-12 md:py-20">
      <div className="wrap space-y-16">
        
        {/* CABEÇALHO */}
        <div className="max-w-3xl space-y-4">
          <Eyebrow>Portal de Notícias & Ciência</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-serif font-medium text-pine leading-tight">
            Informação científica, saúde e regulação.
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Artigos assinados por médicos, dentistas e especialistas para orientar seu tratamento com clareza e fundamentação.
          </p>
        </div>

        {/* MATÉRIA EM DESTAQUE */}
        {artigoDestaque && (
          <Reveal>
            <Link
              to="/noticias/$slug"
              params={{ slug: artigoDestaque.slug }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-border bg-card overflow-hidden p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-amber-500/40"
            >
              <div className="lg:col-span-7 h-[300px] sm:h-[400px] rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={artigoDestaque.imagem}
                  alt={artigoDestaque.titulo}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1611070342080-6927d6d8db23?auto=format&fit=crop&w=1000&q=80";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-amber-deep">
                    {artigoDestaque.categoria}
                  </span>
                  <span className="font-mono text-xs text-ink-soft">• {artigoDestaque.data}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif text-pine group-hover:text-amber-deep transition-colors leading-snug">
                  {artigoDestaque.titulo}
                </h2>
                <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                  {artigoDestaque.resumo}
                </p>
                <div className="pt-2 flex items-center gap-2 font-mono text-xs font-bold text-pine">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* FILTROS E BUSCA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-border py-6">
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoriaAtiva(cat)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-all ${
                  categoriaAtiva === cat
                    ? "bg-pine text-paper font-medium"
                    : "bg-card-soft text-ink-soft border border-border hover:border-pine"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Buscar notícia ou tema..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full md:w-72 rounded-lg border border-border bg-card px-4 py-2.5 text-xs text-ink outline-none focus:border-amber-deep"
          />
        </div>

        {/* GRID DE NOTÍCIAS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artigosFiltrados.map((artigo, i) => (
            <Reveal key={artigo.slug} delay={i * 60}>
              <Link
                to="/noticias/$slug"
                params={{ slug: artigo.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-md"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={artigo.imagem}
                    alt={artigo.titulo}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1611070342080-6927d6d8db23?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 rounded-md bg-paper/95 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-pine shadow-xs">
                    {artigo.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="font-mono text-[11px] font-semibold text-amber-deep">
                    {artigo.categoria}
                  </span>
                  <h3 className="font-serif text-[19px] font-medium leading-snug text-ink group-hover:text-pine transition-colors">
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

        {/* CTA FINAL */}
        <div className="rounded-2xl bg-pine p-8 sm:p-12 text-center text-paper space-y-4">
          <h2 className="text-2xl sm:text-4xl font-serif">Precisa de atendimento com especialistas?</h2>
          <p className="text-paper/80 max-w-xl mx-auto text-sm sm:text-base">
            Conectamos você a médicos e dentistas capacitados para a avaliação da sua condição.
          </p>
          <div className="pt-2">
            <ActionLink href={WHATSAPP} variant="amber">
              Agendar consulta pelo WhatsApp
            </ActionLink>
          </div>
        </div>

      </div>
    </main>
  );
}