import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, Eyebrow, WHATSAPP } from "../components/site/ui";

export const Route = createFileRoute("/institucional")({
  head: () => ({
    meta: [
      { title: "Sobre a Associação — Canabidiário" },
      {
        name: "description",
        content: "Conheça a missão, valores e o papel da Associação Canabidiário no acesso seguro à cannabis medicinal.",
      },
    ],
  }),
  component: InstitucionalPage,
});

export function InstitucionalPage() {
  return (
    <main className="py-16 md:py-24 bg-paper">
      <div className="wrap max-w-3xl space-y-12">
        <div className="space-y-4">
          <Eyebrow>Institucional</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-pine leading-tight">
            Ciência, Acolhimento e Acesso Seguro
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            A Associação Canabidiário nasceu para desmistificar a medicina canabinoide e guiar o paciente durante todas as etapas do tratamento.
          </p>
        </div>

        <div className="space-y-6 text-ink-soft text-base leading-relaxed border-t border-border pt-8">
          <h2 className="font-serif text-2xl text-pine">Nosso Propósito</h2>
          <p>
            Promover a saúde e a qualidade de vida por meio do acesso seguro, ético e amparado legalmente a tratamentos com cannabis medicinal, proporcionando acolhimento a pacientes com dores orofaciais crônicas, distúrbios do sono, ansiedade e condições neurológicas.
          </p>

          <h2 className="font-serif text-2xl text-pine">Compromisso com o Paciente</h2>
          <p>
            Não atuamos como intermediários comerciais de marcas. Nosso foco é assegurar que cada paciente receba uma indicação estritamente baseada no julgamento clínico soberano do seu médico ou dentista assistente, com suporte completo durante a autorização na Anvisa.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 space-y-4">
          <h3 className="font-serif text-xl font-medium text-ink">Precisa de esclarecimentos institucionais?</h3>
          <p className="text-xs text-ink-soft leading-relaxed">
            Nossa equipe está disponível para tirar dúvidas sobre a associação e o processo de agendamento de consultas.
          </p>
          <div className="pt-2">
            <ActionLink href={WHATSAPP} variant="amber">
              Fale com a nossa equipe
            </ActionLink>
          </div>
        </div>
      </div>
    </main>
  );
}

