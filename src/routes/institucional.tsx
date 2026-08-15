import { createFileRoute, Link } from '@tanstack/react-router'
import { ActionLink, ArrowRight, Eyebrow, WHATSAPP } from '../components/site/ui'
import { Reveal } from '../components/site/Reveal'
import { BookOpen, Users, Target, ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/institucional')({
  head: () => ({
    meta: [
      { title: 'Institucional — Canabidiário' },
      {
        name: 'description',
        content:
          'Conheça a história, os objetivos e o compromisso ético e científico do Canabidiário com a medicina canabinoide no Brasil.',
      },
    ],
  }),
  component: InstitucionalPage,
})

function InstitucionalPage() {
  const pilares = [
    {
      icon: BookOpen,
      titulo: 'Educação & Ciência',
      descricao:
        'Produção e curadoria rigorosa de artigos técnicos e científicos sobre a cannabis medicinal para médicos, dentistas e pacientes.',
    },
    {
      icon: Users,
      titulo: 'Rede Integrada',
      descricao:
        'Aproximação ética e humanizada entre pessoas em busca de alívio e um corpo clínico especializado no sistema endocanabinoide.',
    },
    {
      icon: Target,
      titulo: 'Suporte & Segurança',
      descricao:
        'Orientação técnica sobre regulamentação, prescrição e acompanhamento contínuo em conformidade com as normas sanitárias.',
    },
  ]

  return (
    <main className="py-12 md:py-20">
      <div className="wrap space-y-16">
        {/* CABEÇALHO */}
        <div className="max-w-3xl space-y-4">
          <Eyebrow>Institucional</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-serif font-medium text-pine leading-tight">
            Ciência, acolhimento e compromisso com o paciente.
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Conectamos evidências clínicas, profissionais capacitados e pacientes para democratizar o acesso seguro à saúde canabinoide no Brasil.
          </p>
        </div>

        {/* SOBRE A ATUAÇÃO */}
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 space-y-6">
            <span className="rounded bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-amber-deep">
              Nossa Atuação
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-pine">
              Estruturando o acesso ético e científico
            </h2>
            <div className="space-y-4 text-ink-soft text-base sm:text-lg leading-relaxed">
              <p>
                O <strong className="text-ink font-semibold">Canabidiário</strong> nasceu como uma iniciativa para organizar e aproximar o paciente do ecossistema da medicina canabinoide no país. Atuamos como um hub integrado de informação médica de precisão, suporte ao paciente e aproximação com profissionais de saúde devidamente habilitados.
              </p>
              <p>
                Nosso compromisso é fornecer conteúdos fundamentados em evidências científicas, orientar sobre os caminhos regulatórios vigentes e garantir que o tratamento ocorra com total segurança, acompanhamento presencial ou remoto e excelência clínica.
              </p>
            </div>
          </div>
        </Reveal>

        {/* PILARES / OBJETIVOS */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-deep">
              Valores Fundamentais
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-pine">Nossos Objetivos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((pilar, idx) => {
              const Icon = pilar.icon
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-8 space-y-4 hover:border-amber-500/40 transition-colors">
                    <div className="p-3 bg-amber-500/10 text-amber-deep rounded-lg w-fit">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-ink">{pilar.titulo}</h3>
                    <p className="text-ink-soft text-sm leading-relaxed">{pilar.descricao}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="rounded-2xl bg-pine p-8 sm:p-12 text-center text-paper space-y-4">
          <h2 className="text-2xl sm:text-4xl font-serif">Deseja saber mais sobre nossos serviços?</h2>
          <p className="text-paper/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Nossa equipe de atendimento está à disposição para direcionar você ao profissional adequado ou esclarecer dúvidas sobre a associação.
          </p>
          <div className="pt-3">
            <ActionLink href={WHATSAPP} variant="amber">
              Falar com o Atendimento
            </ActionLink>
          </div>
        </div>
      </div>
    </main>
  )
}