import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ActionLink, ArrowRight, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";
import { artigos } from "../data/artigos";
import { patologias } from "../data/patologias";
import { 
  ShieldCheck, 
  FileText, 
  UserCheck, 
  Pill, 
  HelpCircle, 
  ChevronDown, 
  ArrowUpRight,
  Stethoscope
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canabidiário | Medicina Canabinoide" },
      {
        name: "description",
        content:
          "Agende consultas com médicos e dentistas habilitados na prescrição de cannabis medicinal para dor orofacial, ansiedade e condições neurológicas.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  const artigosDestaque = artigos.slice(0, 3);
  
  // Seleção de destaque para criar layout assimétrico
  const patologiaPrincipal = patologias.find((p) => p.slug.includes("dtm") || p.slug.includes("orofacial")) || patologias[0];
  const patologiasSecundarias = patologias.filter((p) => p.slug !== patologiaPrincipal?.slug).slice(0, 4);

  // Estado para controle do FAQ
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  const faqs = [
    {
      pergunta: "O tratamento com cannabis medicinal é legalizado no Brasil?",
      resposta:
        "Sim. A Anvisa regulamenta a prescrição e a importação de produtos à base de cannabis (RDC 327/2019 e RDC 660/2022). O tratamento é 100% legal mediante receita médica ou odontológica.",
    },
    {
      pergunta: "Quem pode prescrever cannabis medicinal?",
      resposta:
        "Médicos de qualquer especialidade e cirurgiões-dentistas legalmente habilitados junto aos seus respectivos conselhos de classe (CRM e CRO).",
    },
    {
      pergunta: "Como funciona a primeira consulta?",
      resposta:
        "A consulta é realizada por telemedicina ou presencialmente. O profissional analisa todo o histórico de sintomas, exames anteriores e tratamentos prévios para definir a formulação e dosagem exatas.",
    },
    {
      pergunta: "Como recebo os medicamentos após a consulta?",
      resposta:
        "Com a receita e o laudo em mãos, nossa equipe orienta todo o processo de autorização junto à Anvisa e a aquisição do produto em farmácias conveniadas ou importação direta.",
    },
  ];

  return (
    <main className="overflow-hidden bg-paper">
      
      {/* 1. HERO SECTION HUMANIZADA */}
      <section className="border-b border-border bg-paper py-16 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-pine">
              Associação Prudentina de Cannabis Medicinal
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl font-medium leading-[1.08] text-pine">
              Tratamento médico individualizado para dor crônica e saúde neurológica.
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-ink-soft">
              Conectamos você a médicos e dentistas certificados para avaliação, prescrição de cannabis medicinal e acompanhamento passo a passo.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ActionLink href={WHATSAPP} variant="amber">
                Agendar consulta inicial
              </ActionLink>
              <Link
                to="/patologias"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-pine hover:border-pine hover:bg-card-soft transition-all"
              >
                Ver especialidades atendidas
              </Link>
            </div>

            {/* Selos de Confiança Real */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="flex items-center gap-2.5 text-xs text-ink-soft">
                <ShieldCheck className="h-4 w-4 text-emerald-800 shrink-0" />
                <span>Normas Anvisa RDC 660</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-ink-soft">
                <UserCheck className="h-4 w-4 text-emerald-800 shrink-0" />
                <span>Médicos e Dentistas CRM/CRO</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-ink-soft">
                <FileText className="h-4 w-4 text-emerald-800 shrink-0" />
                <span>Receituário de Controle Especial</span>
              </div>
            </div>
          </div>

          {/* Frasco Flutuante */}
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] animate-float-bottle">
              <div className="absolute -inset-4 rounded-full bg-amber-500/10 blur-2xl -z-10" />
              <img
                src="/frasco.png"
                alt="Óleo de Cannabis Medicinal"
                className="w-full h-auto object-contain drop-shadow-xl select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LINHA DO TEMPO: O PROCESSO CLÍNICO */}
      <section className="border-b border-border bg-paper-deep py-20">
        <div className="wrap space-y-12">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-pine">
              Do primeiro contato ao início do tratamento
            </h2>
            <p className="text-ink-soft text-base leading-relaxed">
              Sem etapas desnecessárias. Cuidamos de todo o processo burocrático e clínico.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-white font-mono text-sm font-bold">
                  1
                </span>
                <Stethoscope className="h-5 w-5 text-ink-soft" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium text-ink">Consulta com especialista</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Avaliação detalhada do seu histórico clínico para entender se o uso de canabinoides é indicado para o seu organismo.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-white font-mono text-sm font-bold">
                  2
                </span>
                <FileText className="h-5 w-5 text-ink-soft" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium text-ink">Prescrição e Autorização</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Definição do tipo de óleo, concentração e proporção entre CBD e THC, com apoio na emissão do cadastro na Anvisa.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-white font-mono text-sm font-bold">
                  3
                </span>
                <Pill className="h-5 w-5 text-ink-soft" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium text-ink">Início & Ajuste de Dose</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Orientações sobre como dosar gotas, horários ideais e retornos regulares para acompanhar a sua resposta terapêutica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUADRO CLÍNICO COM LAYOUT ASSIMÉTRICO */}
      <section className="py-20 bg-paper border-b border-border">
        <div className="wrap space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-pine">
                Condições com acompanhamento médico
              </h2>
              <p className="text-ink-soft text-base leading-relaxed">
                Protocolos embasados em evidências para alívio de sintomas crônicos e melhora na qualidade de vida.
              </p>
            </div>
            <Link
              to="/patologias"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-pine hover:text-amber-deep transition-colors"
            >
              <span>Ver lista completa</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 items-stretch">
            {/* Card Principal em Destaque */}
            {patologiaPrincipal && (
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border-2 border-emerald-800/30 bg-card p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-block rounded-md bg-emerald-800/10 px-3 py-1 font-mono text-[11px] font-bold uppercase text-pine">
                    Principal Especialidade
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ink">
                    {"nome" in patologiaPrincipal ? (patologiaPrincipal as { nome: string }).nome : (patologiaPrincipal as { titulo: string }).titulo}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {"resumo" in patologiaPrincipal ? (patologiaPrincipal as { resumo: string }).resumo : (patologiaPrincipal as { descricao: string }).descricao}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-border flex items-center justify-between">
                  <Link
                    to="/patologias/$slug"
                    params={{ slug: patologiaPrincipal.slug }}
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-pine hover:text-amber-deep"
                  >
                    <span>Entenda o protocolo</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-800 px-4 py-2 font-mono text-xs font-bold text-white hover:bg-emerald-900 transition-colors"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            )}

            {/* Grid Secundário Mais Compacto */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {patologiasSecundarias.map((pat) => {
                const titulo = "nome" in pat ? (pat as { nome: string }).nome : (pat as { titulo: string }).titulo;
                const resumo = "resumo" in pat ? (pat as { resumo: string }).resumo : (pat as { descricao: string }).descricao;

                return (
                  <div key={pat.slug} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-pine/50">
                    <div className="space-y-2">
                      <h4 className="font-serif text-lg font-medium text-ink">{titulo}</h4>
                      <p className="text-xs text-ink-soft leading-relaxed line-clamp-3">{resumo}</p>
                    </div>

                    <Link
                      to="/patologias/$slug"
                      params={{ slug: pat.slug }}
                      className="pt-4 mt-2 font-mono text-[11px] font-bold text-pine hover:text-amber-deep inline-flex items-center gap-1"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERGUNTAS FREQUENTES (FAQ EM ACORDEÃO) */}
      <section className="py-20 bg-paper-deep border-b border-border">
        <div className="wrap max-w-3xl space-y-10">
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-pine">
              Dúvidas frequentes sobre o tratamento
            </h2>
            <p className="text-ink-soft text-sm sm:text-base">
              Tudo o que você precisa saber sobre a prescrição e aquisição legal.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setFaqAberto(faqAberto === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-serif text-lg font-medium text-ink flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.pergunta}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-ink-soft transition-transform duration-200 shrink-0 ${
                      faqAberto === index ? "rotate-180 text-pine" : ""
                    }`}
                  />
                </button>
                {faqAberto === index && (
                  <div className="px-6 pb-5 pt-1 text-sm text-ink-soft leading-relaxed border-t border-border/50">
                    {faq.resposta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARTIGOS CLÍNICOS E NOTÍCIAS */}
      <section className="py-20 bg-paper border-b border-border">
        <div className="wrap space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-pine">
                Artigos e Informações Clínicas
              </h2>
              <p className="text-ink-soft text-base">
                Publicações explicativas sobre saúde e medicina canabinoide.
              </p>
            </div>
            <Link
              to="/noticias"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-pine hover:text-amber-deep"
            >
              <span>Acessar portal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {artigosDestaque.map((artigo) => {
              const imagem = "capa" in artigo ? (artigo as { capa: string }).capa : (artigo as { imagem?: string }).imagem;

              return (
                <Link
                  key={artigo.slug}
                  to="/noticias/$slug"
                  params={{ slug: artigo.slug }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-pine/50 shadow-xs"
                >
                  <div className="h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={imagem || "https://images.unsplash.com/photo-1611070342080-6927d6d8db23?auto=format&fit=crop&w=800&q=80"}
                      alt={artigo.titulo}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 space-y-3">
                    <div className="space-y-2">
                      <span className="font-mono text-[11px] font-bold text-amber-deep uppercase">
                        {artigo.categoria}
                      </span>
                      <h3 className="font-serif text-lg font-medium text-ink group-hover:text-pine">
                        {artigo.titulo}
                      </h3>
                      <p className="text-xs text-ink-soft leading-relaxed line-clamp-2">
                        {artigo.resumo}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-pine flex items-center gap-1 pt-2">
                      Ler artigo <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL DIRETO */}
      <section className="bg-pine py-16 md:py-20 text-paper text-center">
        <div className="wrap max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-paper">
            Pronto para iniciar sua avaliação?
          </h2>
          <p className="text-paper/80 text-base leading-relaxed">
            Nossa equipe esclarece suas dúvidas e agenda sua consulta com o especialista mais adequado ao seu caso.
          </p>
          <div className="pt-2">
            <ActionLink href={WHATSAPP} variant="amber">
              Conversar com nossa equipe pelo WhatsApp
            </ActionLink>
          </div>
        </div>
      </section>

    </main>
  );
}
