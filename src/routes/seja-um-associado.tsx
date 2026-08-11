import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UserCheck, Stethoscope, HeartHandshake, ShieldCheck, Send } from 'lucide-react'

export const Route = createFileRoute('/seja-um-associado')({
  component: SejaUmAssociadoPage,
})

function SejaUmAssociadoPage() {
  const [tipoAssociado, setTipoAssociado] = useState('paciente')

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <main className="flex-1">
        {/* Banner Institucional */}
        <section className="bg-emerald-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-emerald-950">
          <div className="max-w-5xl mx-auto text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-800 text-emerald-100 text-xs font-medium rounded-md">
              <HeartHandshake className="w-3.5 h-3.5" />
              Faça Parte da Rede
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Faça Seu Cadastro no Canabidiário
            </h1>
            <p className="text-emerald-100 max-w-2xl mx-auto text-sm sm:text-base">
              Garantimos acolhimento, orientação, suporte médico e acesso simplificado ao tratamento com cannabis medicinal.
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white border border-slate-200 shadow-xs">
              <CardContent className="p-6 space-y-3 text-center sm:text-left">
                <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg w-fit mx-auto sm:mx-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Acompanhamento Contínuo</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Apoio passo a passo na obtenção de receitas, laudos médicos e autorizações junto à ANVISA.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 shadow-xs">
              <CardContent className="p-6 space-y-3 text-center sm:text-left">
                <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg w-fit mx-auto sm:mx-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Segurança e Qualidade</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acesso a produtos testados, certificados e adequados à prescrição do seu médico especialista.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 shadow-xs">
              <CardContent className="p-6 space-y-3 text-center sm:text-left">
                <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg w-fit mx-auto sm:mx-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Rede de Especialistas</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conexão direta com médicos, dentistas e veterinários capacitados em terapia canabinoide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="text-center space-y-1">
                  <h2 className="text-xl font-bold text-slate-900">Ficha de Pré-Cadastro</h2>
                  <p className="text-xs text-slate-500">
                    Preencha os dados abaixo e nossa equipe entrará em contato para dar continuidade.
                  </p>
                </div>

                <Tabs value={tipoAssociado} onValueChange={setTipoAssociado} className="w-full">
                  <TabsList className="grid grid-cols-2 bg-slate-100 p-1 rounded-md mb-6">
                    <TabsTrigger 
                      value="paciente" 
                      className="text-xs font-semibold data-[state=active]:bg-emerald-700 data-[state=active]:text-white py-2 rounded-sm transition-all"
                    >
                      Sou Paciente
                    </TabsTrigger>
                    <TabsTrigger 
                      value="profissional" 
                      className="text-xs font-semibold data-[state=active]:bg-emerald-700 data-[state=active]:text-white py-2 rounded-sm transition-all"
                    >
                      Sou Profissional da Saúde
                    </TabsTrigger>
                  </TabsList>

                  {/* FORMULÁRIO PACIENTE */}
                  <TabsContent value="paciente" className="space-y-4">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="nome" className="text-xs font-medium text-slate-700">Nome Completo *</Label>
                          <Input id="nome" placeholder="Digite seu nome" required className="bg-slate-50 border-slate-200 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="cpf" className="text-xs font-medium text-slate-700">CPF *</Label>
                          <Input id="cpf" placeholder="000.000.000-00" required className="bg-slate-50 border-slate-200 text-xs" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-xs font-medium text-slate-700">E-mail *</Label>
                          <Input id="email" type="email" placeholder="seu@email.com" required className="bg-slate-50 border-slate-200 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="telefone" className="text-xs font-medium text-slate-700">WhatsApp / Telefone *</Label>
                          <Input id="telefone" placeholder="(00) 00000-0000" required className="bg-slate-50 border-slate-200 text-xs" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="patologia" className="text-xs font-medium text-slate-700">Principal Condição / Patologia</Label>
                        <Select>
                          <SelectTrigger id="patologia" className="bg-slate-50 border-slate-200 text-xs">
                            <SelectValue placeholder="Selecione caso possua diagnóstico" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dtm">Disfunção Temporomandibular (DTM)</SelectItem>
                            <SelectItem value="bruxismo">Bruxismo</SelectItem>
                            <SelectItem value="neuralgia">Neuralgia do Trigêmeo</SelectItem>
                            <SelectItem value="ansiedade">Ansiedade / Insônia</SelectItem>
                            <SelectItem value="dor-cronica">Dor Crônica</SelectItem>
                            <SelectItem value="outros">Outra Condição</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="receita" className="text-xs font-medium text-slate-700">Já possui prescrição médica?</Label>
                        <Select>
                          <SelectTrigger id="receita" className="bg-slate-50 border-slate-200 text-xs">
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sim">Sim, já tenho prescrição</SelectItem>
                            <SelectItem value="nao">Não, preciso de indicação médica</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="mensagem" className="text-xs font-medium text-slate-700">Observações (Opcional)</Label>
                        <Textarea id="mensagem" placeholder="Conte brevemente sobre seu histórico ou dúvidas..." className="bg-slate-50 border-slate-200 text-xs min-h-[80px]" />
                      </div>

                      <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs py-2.5 rounded-md transition-colors flex items-center justify-center gap-2">
                        <Send className="w-3.5 h-3.5" />
                        Enviar Pré-Cadastro
                      </Button>
                    </form>
                  </TabsContent>

                  {/* FORMULÁRIO PROFISSIONAL */}
                  <TabsContent value="profissional" className="space-y-4">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="nome-prof" className="text-xs font-medium text-slate-700">Nome Completo *</Label>
                          <Input id="nome-prof" placeholder="Dr. / Dra." required className="bg-slate-50 border-slate-200 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="registro-prof" className="text-xs font-medium text-slate-700">Registro Profissional (CRM/CRO/CRMV) *</Label>
                          <Input id="registro-prof" placeholder="Ex: CRM-SP 123456" required className="bg-slate-50 border-slate-200 text-xs" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="email-prof" className="text-xs font-medium text-slate-700">E-mail Profissional *</Label>
                          <Input id="email-prof" type="email" placeholder="doutor@email.com" required className="bg-slate-50 border-slate-200 text-xs" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="telefone-prof" className="text-xs font-medium text-slate-700">WhatsApp Comercial *</Label>
                          <Input id="telefone-prof" placeholder="(00) 00000-0000" required className="bg-slate-50 border-slate-200 text-xs" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="especialidade-prof" className="text-xs font-medium text-slate-700">Especialidade / Área de Atuação *</Label>
                        <Input id="especialidade-prof" placeholder="Ex: Neurologia, Odontologia, Psiquiatria..." required className="bg-slate-50 border-slate-200 text-xs" />
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="mensagem-prof" className="text-xs font-medium text-slate-700">Experiência com Canabinoides</Label>
                        <Textarea id="mensagem-prof" placeholder="Informe se já prescreve ou se busca capacitação/parceria..." className="bg-slate-50 border-slate-200 text-xs min-h-[80px]" />
                      </div>

                      <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs py-2.5 rounded-md transition-colors flex items-center justify-center gap-2">
                        <Send className="w-3.5 h-3.5" />
                        Solicitar Cadastro Médico
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <p className="text-[11px] text-slate-400 text-center">
                  Seus dados estão seguros e serão utilizados exclusivamente para contato da equipe Canabidiário.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dúvidas / Contato Direto */}
        <section className="bg-slate-100 py-10 border-t border-slate-200 text-center">
          <div className="max-w-2xl mx-auto px-4 space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Prefere atendimento imediato?</h3>
            <p className="text-xs text-slate-600">
              Nossa equipe de suporte está disponível no WhatsApp para sanar suas dúvidas antes de preencher a ficha.
            </p>
            <a
              href="https://wa.me/5518992027116"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-medium px-5 py-2.5 rounded-md transition-colors"
            >
              Falar com Atendimento
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}