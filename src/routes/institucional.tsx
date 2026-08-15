import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Target, Users } from "lucide-react";
import { ActionLink, ArrowRight, Eyebrow, PageHero, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/institucional")({
  head: () => ({
    meta: [
      { title: "Institucional — Canabidiário" },
      {
        name: "description",
        content:
          "Conheça o Canabidiário: missão, objetivos e forma de atuação da plataforma que aproxima pacientes de profissionais habilitados em cannabis medicinal.",
      },
      { property: "og:title", content: "Institucional — Canabidiário" },
      {
        property: "og:description",
        content: "Missão, objetivos e atuação do Canabidiário na medicina canabinoide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InstitucionalPage,
});

const pilares = [
  {
    icon: BookOpen,
    titulo: "Educação e ciência",
    texto:
      "Produção e curadoria de conteúdos técnicos sobre cannabis medicinal para médicos, dentistas, veterinários e pacientes.",
  },
  {
    icon: Users,
    titulo: "Rede integrada",
    texto:
      "Aproximação entre pessoas em busca de qualidade de vida e um corpo clínico especializado no sistema endocanabinoide.",
  },
  {
    icon: Target,
    titulo: "Suporte técnico",
    texto:
      "Orientação passo a passo sobre regulamentação, acesso ao medicamento e acompanhamento pós-prescrição.",
  },
];

function InstitucionalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Institucional"
        title={
          <>
            Ciência, cuidado e acesso <em className="italic text-amber-deep">no mesmo lugar.</em>
          </>
        }
        lede="Conectamos ciência, medicina e tecnologia para democratizar e desmistificar o acesso à saúde canabinoide no Brasil."
      >
        <ActionLink href={WHATSAPP} variant="primary">
          Falar com o atendimento
          <ArrowRight />
        </ActionLink>
        <ActionLink to="/profissionais" variant="ghost">
          Ver o corpo clínico
        </ActionLink>
      </PageHero>

      <section className="py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Nossa atuação</Eyebrow>
            <h2 className="mt-4 text-[clamp(26px,3vw,38px)] leading-[1.15]">
              Um hub entre paciente, profissional e evidência científica.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-[16px] leading-relaxed text-ink-soft">
            <p>
              O <strong className="font-semibold text-pine">Canabidiário</strong> nasceu como uma
              iniciativa para estruturar e profissionalizar a medicina canabinoide no país. Atuamos
              como um hub integrado de informação médica de precisão, suporte ao paciente e
              aproximação com profissionais de saúde devidamente habilitados.
            </p>
            <p>
              Nosso compromisso é fornecer conteúdo fundamentado em evidências, orientar sobre os
              caminhos regulatórios junto aos órgãos competentes e garantir que o tratamento com
              fitocanabinoides ocorra com segurança, acompanhamento e eficácia.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-paper-deep py-24">
        <div className="wrap">
          <Eyebrow>Nossos objetivos</Eyebrow>
          <h2 className="mb-12 mt-4 text-[clamp(26px,3vw,38px)]">
            Valores que guiam nossa atuação
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pilares.map((p, i) => (
              <Reveal
                key={p.titulo}
                delay={i * 80}
                className="border border-border-strong bg-card p-8"
              >
                <span className="inline-flex bg-amber-soft/50 p-3 text-amber-deep">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-[21px]">{p.titulo}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pine py-24 text-center text-paper">
        <div className="wrap">
          <Eyebrow tone="soft" center>
            Fale com a gente
          </Eyebrow>
          <h2 className="mx-auto mb-5 mt-5 max-w-[680px] text-[clamp(28px,3.6vw,44px)] leading-[1.15] text-paper">
            Deseja saber mais sobre nossos serviços?
          </h2>
          <p className="mx-auto mb-9 max-w-[520px] text-paper/75">
            Nossa equipe direciona você ao profissional adequado e explica cada etapa do
            acompanhamento.
          </p>
          <ActionLink href={WHATSAPP} variant="onPine">
            Falar com o atendimento
            <ArrowRight />
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
