import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Search, Send, UserPlus } from 'lucide-react'
import { ActionLink, Eyebrow, WHATSAPP } from '../components/site/ui'
import { Reveal } from '../components/site/Reveal'

export const Route = createFileRoute('/profissionais')({
  head: () => ({
    meta: [
      { title: 'Corpo Clínico & Prescritores — Canabidiário' },
      {
        name: 'description',
        content:
          'Conheça os médicos, dentistas e veterinários habilitados para acompanhamento e prescrição de cannabis medicinal.',
      },
    ],
  }),
  component: ProfissionaisPage,
})

const PROFISSIONAIS = [
  {
    id: 1,
    nome: 'Jonas Souza',
    titulo: 'Médico',
    registro: 'CRM-PR: 60738',
    especialidade: 'Medicina Canabinoide',
    foto: '/profissionais/Jonas Souza.jpg',
    detalhes: [
      'Farmacologia e Toxicologia dos Canabinoides - Unicamp',
      'Certificação em Endocanabinologia - WeCann Academy',
    ],
  },
  {
    id: 2,
    nome: 'Arthur de Oliveira Lima C.',
    titulo: 'Médico',
    registro: 'CRM-SP: 201.831',
    especialidade: 'Clínica Médica / Saúde Mental',
    foto: '/profissionais/Arthur.jpg',
    detalhes: [
      'Pós-graduação em Psiquiatria',
      'Pós-graduação em Cannabis Medicinal - WeCann Academy',
    ],
  },
  {
    id: 3,
    nome: 'Leticia M. Pivoto',
    titulo: 'Médica',
    registro: 'CRM-SP: 282.983',
    especialidade: 'Medicina Canabinoide',
    foto: '/profissionais/Leticia.jpg',
    detalhes: ['Atendimento clínico e prescrição terapêutica individualizada.'],
  },
  {
    id: 4,
    nome: 'Helder Zanetti Herbella',
    titulo: 'Cirurgião Dentista',
    registro: 'CRO-SP: 36.451',
    especialidade: 'Odontologia / DTM',
    foto: '/profissionais/Helder.jpg',
    detalhes: [
      'Cirurgião dentista, implantodontista e radiologista',
      'Pós-graduações em cirurgia oral menor, cannabis medicinal, auditoria, gestão e docência em cursos superiores',
    ],
  },
  {
    id: 5,
    nome: 'Mariah Melrinho',
    titulo: 'Médica Veterinária',
    registro: 'CRMV-SP: 57706',
    especialidade: 'Veterinária Canabinoide',
    foto: '/profissionais/Mariah.jpg',
    detalhes: [
      'Especialista em clínica médica de pequenos animais',
      'Medicina Canabinoide e Pós-graduanda em Diagnóstico por Imagem',
    ],
  },
]

function ProfissionaisPage() {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('todos')

  const categorias = [
    { id: 'todos', label: 'Todas as Áreas' },
    { id: 'medicos', label: 'Medicina' },
    { id: 'dentistas', label: 'Odontologia' },
    { id: 'veterinarios', label: 'Medicina Veterinária' },
  ]

  const profissionaisFiltrados = PROFISSIONAIS.filter((prof) => {
    const termo = busca.toLowerCase()
    const combinaBusca =
      prof.nome.toLowerCase().includes(termo) ||
      prof.especialidade.toLowerCase().includes(termo) ||
      prof.registro.toLowerCase().includes(termo)

    const combinaCategoria =
      categoria === 'todos' ||
      (categoria === 'medicos' && (prof.titulo.includes('Médic') || prof.titulo.includes('Médica'))) ||
      (categoria === 'dentistas' && prof.titulo.includes('Dentista')) ||
      (categoria === 'veterinarios' && prof.titulo.includes('Veterinári'))

    return combinaBusca && combinaCategoria
  })

  return (
    <main className="py-12 md:py-20">
      <div className="wrap space-y-16">
        {/* CABEÇALHO */}
        <div className="max-w-3xl space-y-4">
          <Eyebrow>Corpo Clínico & Prescritores</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-serif font-medium text-pine leading-tight">
            Especialistas dedicados ao seu acompanhamento.
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Conheça os profissionais de saúde habilitados para orientação, prescrição e acompanhamento individualizado com cannabis medicinal.
          </p>
        </div>

        {/* FILTROS E BUSCA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-border py-6">
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoria(cat.id)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-all ${
                  categoria === cat.id
                    ? 'bg-pine text-paper font-medium'
                    : 'bg-card-soft text-ink-soft border border-border hover:border-pine'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft" />
            <input
              type="text"
              placeholder="Buscar por nome, registro ou especialidade..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-card text-xs text-ink outline-none focus:border-amber-deep"
            />
          </div>
        </div>

        {/* LISTA DE CARDS */}
        {profissionaisFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profissionaisFiltrados.map((prof, i) => (
              <Reveal key={prof.id} delay={i * 60}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-md p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={prof.foto}
                        alt={prof.nome}
                        onError={(e) => {
                          e.currentTarget.onerror = null
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(prof.nome)}&background=1b4332&color=f4ede4`
                        }}
                        className="w-20 h-24 rounded-lg object-cover border border-border shrink-0 bg-slate-100"
                      />
                      <div className="space-y-1">
                        <span className="rounded bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-amber-deep inline-block">
                          {prof.titulo}
                        </span>
                        <h3 className="font-serif text-[18px] font-medium leading-snug text-ink">
                          {prof.nome}
                        </h3>
                        <p className="font-mono text-[11px] text-ink-soft">{prof.registro}</p>
                        <p className="text-xs font-semibold text-pine">{prof.especialidade}</p>
                      </div>
                    </div>

                    <div className="border-t border-border/60 pt-4 space-y-2">
                      {prof.detalhes.map((item, idx) => (
                        <p key={idx} className="text-xs text-ink-soft leading-relaxed flex items-start gap-2">
                          <span className="text-amber-deep font-bold">•</span>
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/40">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-pine hover:bg-pine/90 text-paper text-xs font-semibold py-3 rounded-lg transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Agendar com Profissional
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-xl border border-border bg-card">
            <p className="text-ink-soft text-sm">Nenhum profissional encontrado para os filtros selecionados.</p>
          </div>
        )}

        {/* CTA FINAL PARA PROFISSIONAIS */}
        <div className="rounded-2xl bg-pine p-8 sm:p-12 text-center text-paper space-y-4">
          <div className="inline-flex p-3 bg-paper/10 text-amber-deep rounded-full mb-2">
            <UserPlus className="w-6 h-6 text-paper" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif">Profissional da Saúde: Torne-se Sócio!</h2>
          <p className="text-paper/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Se você prescreve ou deseja iniciar tratamentos com medicina canabinoide, associar-se garante apoio técnico, respaldo científico e suporte contínuo aos seus pacientes.
          </p>
          <div className="pt-3">
            <ActionLink href="/seja-um-associado" variant="amber">
              Quero Me Associar
            </ActionLink>
          </div>
        </div>
      </div>
    </main>
  )
}