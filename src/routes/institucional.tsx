import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ShieldCheck, Target, Users, BookOpen, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/institucional')({
  component: InstitucionalPage,
})

function InstitucionalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Header />

      <main className="flex-1">
        {/* Banner de Destaque Institucional */}
        <section className="bg-emerald-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-950">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-800 text-emerald-100 text-xs font-medium rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              Quem Somos
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              A Plataforma Canabidiário
            </h1>
            <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Conectamos ciência, medicina e tecnologia para democratizar e desmistificar o acesso à saúde canabinoide no Brasil.
            </p>
          </div>
        </section>

        {/* Sobre a Empresa / Ecossistema */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-lg p-8 sm:p-10 shadow-xs space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
              Nossa Atuação
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              O <strong className="text-slate-900 font-semibold">Canabidiário</strong> nasceu como uma iniciativa para estruturar e profissionalizar o mercado de medicina canabinoide no país. Atuamos como um hub integrado de informação médica de precisão, suporte ao paciente e aproximação com profissionais de saúde devidamente habilitados.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Nosso compromisso é fornecer conteúdos fundamentados em evidências científicas, orientar sobre os caminhos regulatórios junto aos órgãos competentes (como a ANVISA) e garantir que o tratamento com fitocanabinoides ocorra com total segurança, acompanhamento e eficácia.
            </p>
          </div>
        </section>

        {/* Pilares Estratégicos */}
        <section className="py-12 bg-slate-100/70 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Nossos Objetivos</h2>
              <p className="text-slate-600 text-sm">
                Valores que guiam nossa atuação no ecossistema da saúde.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white border border-slate-200 shadow-xs">
                <CardContent className="p-6 space-y-3">
                  <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg w-fit">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Educação e Ciência</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Produção e curadoria de artigos técnicos e científicos sobre a cannabis medicinal para médicos, dentistas e pacientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200 shadow-xs">
                <CardContent className="p-6 space-y-3">
                  <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg w-fit">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Rede Integrada</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Aproximação entre pessoas em busca de qualidade de vida e um corpo clínico especializado no sistema endocanabinoide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200 shadow-xs">
                <CardContent className="p-6 space-y-3">
                  <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg w-fit">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Suporte Técnico</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Orientação passo a passo sobre regulamentação, importação e acompanhamento pós-prescrição.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Banner de Ação */}
        <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Deseja saber mais sobre nossos serviços?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Nossa equipe de atendimento está à disposição para direcionar você ao profissional adequado ou fornecer informações sobre nossa atuação.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5518992027116"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-md transition-colors"
            >
              Falar com o Atendimento
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}