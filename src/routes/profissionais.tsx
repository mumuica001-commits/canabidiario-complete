import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, Eyebrow, PageHero, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/profissionais")({
  head: () => ({
    meta: [
      { title: "Profissionais associados — Canabidiário" },
      {
        name: "description",
        content:
          "Profissionais habilitados na prescrição de cannabis medicinal. Saiba como se associar ou colaborar com a associação Canabidiário.",
      },
      { property: "og:title", content: "Profissionais associados — Canabidiário" },
      {
        property: "og:description",
        content: "Como se associar, colaborar e integrar a rede de profissionais prescritores.",
      },
    ],
  }),
  component: Profissionais,
});

const areas = [
  {
    area: "Odontologia · Dor orofacial",
    foco: "DTM, neuralgia do trigêmeo, bruxismo, mucosite e doença periodontal",
    texto:
      "Avaliação da articulação temporomandibular e da musculatura facial, com plano terapêutico integrado.",
  },
  {
    area: "Neurologia",
    foco: "Alzheimer, Parkinson e epilepsia",
    texto:
      "Acompanhamento complementar ao tratamento neurológico, com foco em sono, dor e qualidade de vida.",
  },
  {
    area: "Saúde mental",
    foco: "Ansiedade e insônia",
    texto:
      "Condução gradual, respeitando medicações em uso e o acompanhamento psicoterápico do paciente.",
  },
];

const beneficios = [
  ["Rede de encaminhamento", "Pacientes chegam já orientados sobre etapas e expectativas do tratamento."],
  ["Atualização técnica", "Materiais e encontros sobre evidência clínica em canabinoides."],
  ["Suporte administrativo", "Apoio da associação no caminho entre prescrição e acesso ao medicamento."],
  ["Produção de conteúdo", "Espaço para publicar artigos assinados no canal da associação."],
];

const passos = [
  { num: "01", t: "Envie seu contato", d: "Fale com a associação pelo WhatsApp informando sua área de atuação e registro profissional." },
  { num: "02", t: "Conversa de alinhamento", d: "Uma reunião para entender sua prática clínica e apresentar o funcionamento da associação." },
  { num: "03", t: "Integração à rede", d: "Cadastro, orientações sobre fluxo de encaminhamento e início dos atendimentos." },
];

function Profissionais() {
  return (
    <main>
      <PageHero
        eyebrow="Profissionais"
        title={
          <>
            Uma rede clínica que trata cannabis como{" "}
            <em className="italic text-amber-deep">assunto de ciência.</em>
          </>
        }
        lede="Reunimos profissionais habilitados que acompanham pacientes com dor orofacial, condições neurológicas e ansiedade — com critério, registro e retorno programado."
      >
        <ActionLink href={WHATSAPP} variant="amber">
          Quero me associar
        </ActionLink>
        <ActionLink to="/contato" variant="ghost">
          Quero colaborar
        </ActionLink>
      </PageHero>

      <section className="py-24">
        <div className="wrap">
          <Eyebrow>Áreas de atuação</Eyebrow>
          <h2 className="mb-12 mt-4 text-[clamp(26px,3.2vw,38px)]">Quem atende na associação</h2>
          <div className="grid gap-px border border-border-strong bg-border-strong lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.area} delay={i * 70} className="flex flex-col gap-4 bg-card p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-amber-deep">
                  {a.area}
                </span>
                <h3 className="font-serif text-[21px] italic leading-[1.3]">{a.foco}</h3>
                <p className="text-[15px] text-ink-soft">{a.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pine py-24 text-paper">
        <div className="wrap">
          <Eyebrow tone="soft">Quero me associar</Eyebrow>
          <h2 className="mb-12 mt-4 max-w-[640px] text-[clamp(26px,3.2vw,38px)] leading-[1.15] text-paper">
            Três passos para integrar a rede de profissionais.
          </h2>
          <div className="grid border-t border-paper/20 md:grid-cols-3">
            {passos.map((p, i) => (
              <Reveal
                key={p.num}
                delay={i * 80}
                className={`py-10 pr-8 ${i < 2 ? "md:border-r md:border-paper/20" : ""}`}
              >
                <span className="mb-5 block font-mono text-[13px] text-amber-soft">{p.num}</span>
                <h3 className="mb-3 font-serif text-[22px] font-normal italic text-paper">{p.t}</h3>
                <p className="max-w-[280px] text-[14.5px] text-paper/70">{p.d}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ActionLink href={WHATSAPP} variant="amber">
              Falar com a associação
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="wrap">
          <Eyebrow>Benefícios</Eyebrow>
          <h2 className="mb-12 mt-4 text-[clamp(26px,3.2vw,38px)]">O que a associação oferece</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {beneficios.map(([t, d], i) => (
              <Reveal key={t} delay={i * 60} className="border-t border-border-strong pt-5">
                <h3 className="font-serif text-[20px]">{t}</h3>
                <p className="mt-2.5 text-[15px] text-ink-soft">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper-deep py-24">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>Quero colaborar</Eyebrow>
            <h2 className="mb-4 mt-4 text-[clamp(26px,3.2vw,38px)]">
              Pesquisa, conteúdo e voluntariado.
            </h2>
            <p className="max-w-[520px] text-ink-soft">
              Pesquisadores, estudantes e profissionais de comunicação também podem contribuir — com
              revisão de conteúdo, produção de material educativo e apoio em ações da associação.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ActionLink to="/contato" variant="primary">
              Enviar proposta
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
