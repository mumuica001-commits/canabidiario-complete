import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, Eyebrow, PageHero, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/institucional")({
  head: () => ({
    meta: [
      { title: "Institucional — Canabidiário" },
      {
        name: "description",
        content:
          "Conheça a associação Canabidiário: missão, objetivos, princípios e estatuto da associação de cannabis medicinal.",
      },
      { property: "og:title", content: "Institucional — Canabidiário" },
      {
        property: "og:description",
        content: "Missão, objetivos e estatuto da associação Canabidiário.",
      },
    ],
  }),
  component: Institucional,
});

const objetivos = [
  {
    num: "01",
    titulo: "Ampliar o acesso",
    texto:
      "Aproximar pacientes de profissionais habilitados a prescrever cannabis medicinal, reduzindo a distância entre diagnóstico e tratamento.",
  },
  {
    num: "02",
    titulo: "Informar com rigor",
    texto:
      "Produzir e divulgar conteúdo baseado em evidência científica, combatendo desinformação sobre canabinoides.",
  },
  {
    num: "03",
    titulo: "Formar profissionais",
    texto:
      "Promover atualização técnica entre dentistas, médicos e demais profissionais de saúde interessados na área.",
  },
  {
    num: "04",
    titulo: "Acompanhar de perto",
    texto:
      "Sustentar um acompanhamento contínuo, com retornos programados e registro da evolução de cada paciente.",
  },
];

const principios = [
  ["Legalidade", "Toda orientação segue a legislação vigente e a regulação sanitária brasileira."],
  ["Evidência", "Nenhuma promessa de cura. Só o que a literatura clínica sustenta."],
  ["Acolhimento", "Escuta antes de protocolo: cada história clínica tem um contexto."],
  ["Transparência", "Etapas, custos e expectativas explicados desde a primeira conversa."],
];

function Institucional() {
  return (
    <main>
      <PageHero
        eyebrow="Institucional"
        title={
          <>
            Uma associação criada para <em className="italic text-amber-deep">encurtar caminhos</em>{" "}
            entre paciente e tratamento.
          </>
        }
        lede="O Canabidiário nasceu da prática clínica com dor orofacial e da constatação de que muitos pacientes chegavam ao consultório depois de anos sem resposta."
      >
        <ActionLink href={WHATSAPP} variant="amber">
          Falar com a associação
        </ActionLink>
        <ActionLink to="/patologias" variant="ghost">
          Patologias acompanhadas
        </ActionLink>
      </PageHero>

      <section className="py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Eyebrow>Sobre a associação</Eyebrow>
            <h2 className="mt-4 text-[clamp(26px,3.2vw,38px)] leading-[1.15]">
              Ciência, acolhimento e acompanhamento contínuo.
            </h2>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-5 text-[16px] text-ink-soft">
            <p>
              Somos uma associação sem fins lucrativos dedicada a conectar pacientes a profissionais
              habilitados na prescrição de cannabis medicinal. Atuamos principalmente em dor
              orofacial, condições neurológicas e saúde mental.
            </p>
            <p>
              O trabalho começa na consulta e não termina na receita: a associação apoia o paciente
              na compreensão do tratamento, no acesso ao medicamento prescrito e no
              acompanhamento da evolução ao longo do tempo.
            </p>
            <p>
              Não vendemos produtos e não substituímos consulta médica ou odontológica. Nosso papel é
              organizar o caminho — do diagnóstico à farmácia — com informação de qualidade.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-paper-deep py-24">
        <div className="wrap">
          <Eyebrow>Objetivos</Eyebrow>
          <h2 className="mb-12 mt-4 text-[clamp(26px,3.2vw,38px)]">O que nos move</h2>
          <div className="grid gap-px border border-border-strong bg-border-strong md:grid-cols-2">
            {objetivos.map((o, i) => (
              <Reveal key={o.num} delay={i * 70} className="bg-card p-8">
                <span className="font-mono text-[13px] text-amber-deep">{o.num}</span>
                <h3 className="mb-3 mt-4 font-serif text-[22px] italic">{o.titulo}</h3>
                <p className="text-[15px] text-ink-soft">{o.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="wrap">
          <Eyebrow>Princípios</Eyebrow>
          <h2 className="mb-12 mt-4 text-[clamp(26px,3.2vw,38px)]">Como conduzimos o cuidado</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {principios.map(([titulo, texto], i) => (
              <Reveal key={titulo} delay={i * 70} className="border-t border-border-strong pt-5">
                <h3 className="font-serif text-[20px]">{titulo}</h3>
                <p className="mt-2.5 text-[15px] text-ink-soft">{texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper-deep py-24">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>Estatuto</Eyebrow>
            <h2 className="mb-4 mt-4 text-[clamp(26px,3.2vw,38px)]">
              Regras claras, registradas em documento.
            </h2>
            <p className="max-w-[520px] text-ink-soft">
              O estatuto define a finalidade da associação, os direitos e deveres de associados, a
              estrutura de governança e a destinação de recursos. Solicite uma cópia integral pelo
              WhatsApp ou pela página de contato.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ActionLink href={WHATSAPP} variant="primary">
              Solicitar estatuto
            </ActionLink>
            <ActionLink to="/contato" variant="ghost">
              Página de contato
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
