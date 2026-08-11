import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, ArrowRight, Eyebrow, PageHero, WHATSAPP } from "../components/site/ui";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Canabidiário" },
      {
        name: "description",
        content:
          "Fale com a associação Canabidiário pelo WhatsApp, Instagram ou formulário e entenda como iniciar o acompanhamento com cannabis medicinal.",
      },
      { property: "og:title", content: "Contato — Canabidiário" },
      {
        property: "og:description",
        content: "Canais de contato da associação e primeiros passos para agendar uma consulta.",
      },
    ],
  }),
  component: Contato,
});

const faq = [
  [
    "Preciso de encaminhamento médico para agendar?",
    "Não. Você pode falar diretamente com a associação; a avaliação inicial define o profissional mais adequado ao seu quadro, com isso, encaminharemos você a um de nossos profissionais habilitados para o acompanhamento.",
  ],
  [
    "A associação vende medicamentos?",
    "Sim, mas apenas para pacientes que já estão em acompanhamento com um profissional habilitado e com prescrição médica válida.",
  ],
  [
    "Quanto tempo leva para começar o tratamento?",
    "Depende do quadro e da via de acesso escolhida. Na consulta você recebe uma estimativa realista de prazos e custos.",
  ],
  [
    "Atendem pacientes de outras cidades?",
    "Sim. Parte do acompanhamento pode ser feita a distância, conforme as regras do conselho profissional de cada especialidade.",
  ],
];

function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", assunto: "Paciente", mensagem: "" });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputCls =
    "w-full border-b border-border-strong bg-transparent px-1 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft focus:border-pine";

  return (
    <main>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Seu tratamento começa com <em className="italic text-amber-deep">uma conversa.</em>
          </>
        }
        lede="Fale com a associação para entender os próximos passos, tirar dúvidas sobre o processo ou propor uma colaboração."
      >
        <ActionLink href={WHATSAPP} variant="amber">
          WhatsApp da associação
        </ActionLink>
        <ActionLink href="https://www.instagram.com/canabidiario" variant="ghost">
          Instagram
        </ActionLink>
      </PageHero>

      <section className="py-24">
        <div className="wrap grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Formulário</Eyebrow>
            <h2 className="mb-8 mt-4 text-[clamp(24px,2.8vw,34px)]">Escreva para a associação</h2>
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setEnviado(true);
                setForm({ nome: "", email: "", assunto: "Paciente", mensagem: "" });
                setTimeout(() => setEnviado(false), 3500);
              }}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-soft">
                    Nome
                  </span>
                  <input required value={form.nome} onChange={set("nome")} className={inputCls} placeholder="Seu nome" />
                </label>
                <label className="block">
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-soft">
                    E-mail
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    className={inputCls}
                    placeholder="seu@email.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-soft">
                  Sou
                </span>
                <select value={form.assunto} onChange={set("assunto")} className={inputCls}>
                  <option>Paciente</option>
                  <option>Familiar ou cuidador</option>
                  <option>Profissional de saúde</option>
                  <option>Imprensa ou parceria</option>
                </select>
              </label>
              <label className="block">
                <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-soft">
                  Mensagem
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={set("mensagem")}
                  className={`${inputCls} resize-none`}
                  placeholder="Conte brevemente o seu caso ou a sua dúvida."
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-fit items-center gap-2 rounded-[3px] bg-pine px-[22px] py-[11px] text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-pine-2"
              >
                {enviado ? "Mensagem registrada ✓" : "Enviar mensagem"}
                <ArrowRight />
              </button>
              <p className="font-mono text-[11.5px] text-ink-soft">
                Para atendimento mais rápido, use o WhatsApp da associação.
              </p>
            </form>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="border border-border-strong bg-card p-8">
              <Eyebrow>Canais diretos</Eyebrow>
              <ul className="mt-6 flex flex-col gap-5">
                <li>
                  <span className="block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-soft">
                    WhatsApp
                  </span>
                  <a href={WHATSAPP} target="_blank" rel="noopener" className="font-serif text-[20px] text-pine">
                    (18) 99202-7116
                  </a>
                </li>
                <li>
                  <span className="block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-soft">
                    Instagram
                  </span>
                  <a
                    href="https://www.instagram.com/canabidiario"
                    target="_blank"
                    rel="noopener"
                    className="font-serif text-[20px] text-pine"
                  >
                    @canabidiario
                  </a>
                </li>
                <li>
                  <span className="block font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-soft">
                    Atendimento
                  </span>
                  <span className="font-serif text-[20px] text-pine">Seg a sex, 9h às 18h</span>
                </li>
              </ul>
            </div>
            <div className="border border-border-strong bg-paper-deep p-8">
              <h3 className="font-serif text-[20px]">Emergências</h3>
              <p className="mt-3 text-[15px] text-ink-soft">
                A associação não realiza atendimento de urgência. Em caso de emergência, procure um
                pronto-socorro ou ligue para o SAMU (192).
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-paper-deep py-24">
        <div className="wrap">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mb-10 mt-4 text-[clamp(24px,2.8vw,34px)]">Antes de escrever</h2>
          <div className="grid gap-x-14 gap-y-8 md:grid-cols-2">
            {faq.map(([q, a], i) => (
              <Reveal key={q} delay={i * 60} className="border-t border-border-strong pt-5">
                <h3 className="font-serif text-[19px] leading-[1.3]">{q}</h3>
                <p className="mt-2.5 text-[15px] text-ink-soft">{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
