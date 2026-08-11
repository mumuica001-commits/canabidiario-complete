import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Stethoscope, CheckCircle2, UserPlus, Send } from 'lucide-react'

export const Route = createFileRoute('/profissionais')({
  component: ProfissionaisPage,
})

// Dados oficiais do Canabidiário
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
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <main className="flex-1">
        {/* Banner Institucional Sóbrio */}
        <section className="bg-emerald-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-emerald-950">
          <div className="max-w-5xl mx-auto text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-800 text-emerald-100 text-xs font-medium rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Profissionais Cadastrados e Parceiros
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Corpo Clínico & Prescritores
            </h1>
            <p className="text-emerald-100 max-w-2xl mx-auto text-sm sm:text-base">
              Conheça os profissionais de saúde habilitados para orientação, tratamento e acompanhamento com cannabis medicinal.
            </p>
          </div>
        </section>

        {/* Filtros e Busca */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <Card className="bg-white border border-slate-200 shadow-sm rounded-lg">
            <CardContent className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div className="relative sm:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Buscar por nome, especialidade ou registro..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-emerald-600"
                />
              </div>

              <div>
                <Select value={categoria} onValueChange={setCategoria}>
                  <SelectTrigger className="bg-slate-50 border-slate-200 focus:ring-emerald-600">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas as Áreas</SelectItem>
                    <SelectItem value="medicos">Medicina Humanos</SelectItem>
                    <SelectItem value="dentistas">Odontologia</SelectItem>
                    <SelectItem value="veterinarios">Medicina Veterinária</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Lista de Profissionais */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {profissionaisFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profissionaisFiltrados.map((prof) => (
                <Card key={prof.id} className="bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors flex flex-col justify-between overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={prof.foto}
                        alt={prof.nome}
                        onError={(e) => {
                          e.currentTarget.onerror = null
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(prof.nome)}&background=065f46&color=fff`
                        }}
                        className="w-20 h-24 rounded-md object-cover border border-slate-200 shrink-0 bg-slate-100"
                      />
                      <div className="space-y-1">
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 inline-block">
                          {prof.titulo}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">{prof.nome}</h3>
                        <p className="text-xs font-mono text-slate-500">{prof.registro}</p>
                        <p className="text-xs font-medium text-emerald-700">{prof.especialidade}</p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-3 space-y-1.5">
                      {prof.detalhes.map((item, idx) => (
                        <p key={idx} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                  </CardContent>

                  <div className="p-6 pt-0">
                    <a
                      href="https://wa.me/5518992027116"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium py-2.5 rounded-md transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Consultar Profissional
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
              <p className="text-slate-500 text-sm">Nenhum profissional encontrado para os filtros selecionados.</p>
            </div>
          )}
        </section>

        {/* CTA Profissionais da Saúde */}
        <section className="bg-emerald-50 py-12 border-t border-emerald-100">
          <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
            <div className="inline-flex p-3 bg-white text-emerald-800 rounded-full shadow-xs border border-emerald-100">
              <UserPlus className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-950">Profissional da Saúde: Torne-se Sócio!</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Se você prescreve ou deseja iniciar tratamentos com medicina canabinoide, associar-se garante apoio técnico, respaldo científico e suporte aos seus pacientes.
            </p>
            <div>
              <a
                href="/seja-um-associado"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-md transition-colors"
              >
                Quero Me Associar
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}