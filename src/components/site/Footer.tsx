import { Link } from "@tanstack/react-router";
import { WHATSAPP } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper-deep text-ink-soft">
      <div className="wrap py-16">
        <div className="grid gap-10 md:grid-cols-12">
          
          <div className="space-y-4 md:col-span-4">
            {/* LOGO NO RODAPÉ */}
            <Link to="/" className="inline-block transition-opacity hover:opacity-90">
              <img
                src="/logo.png"
                alt="Logo Canabidiário"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-relaxed max-w-sm">
              Associação dedicada ao acolhimento de pacientes, fomento científico e conexão com médicos e odontologistas legalmente habilitados para a prescrição e acompanhamento com cannabis medicinal.
            </p>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-pine">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/patologias" className="hover:text-pine transition-colors">
                  Condições Acompanhadas
                </Link>
              </li>
              <li>
                <Link to="/profissionais" className="hover:text-pine transition-colors">
                  Corpo Clínico & Especialistas
                </Link>
              </li>
              <li>
                <Link to="/institucional" className="hover:text-pine transition-colors">
                  Sobre a Associação
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="hover:text-pine transition-colors">
                  Portal de Artigos e Notícias
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-pine">
              Atendimento
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-pine transition-colors">
                  WhatsApp Oficial
                </a>
              </li>
              <li>
                <span className="block text-ink-soft">Segunda a Sexta</span>
                <span className="block font-mono text-[11px]">08:00 às 18:00</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-pine">
              Segurança Regulatória
            </h4>
            <p className="text-[11px] leading-relaxed">
              Tratamentos prescritos estritamente por profissionais com registro ativo no CRM e CRO, conforme resoluções da Anvisa (RDC nº 660/2022 e RDC nº 327/2019).
            </p>
          </div>

        </div>

        {/* Disclaimer Médico & Legal */}
        <div className="mt-12 pt-8 border-t border-border/80 space-y-4">
          <p className="text-[11px] leading-relaxed text-ink-soft/80 text-justify">
            <strong>Aviso Legal & Sanitário:</strong> As informações contidas neste portal têm caráter exclusivamente educativo e informativo, não devendo ser utilizadas para automedicação ou como substitutas de consultas, diagnósticos ou prescrições individualizadas. A indicação de canabinoides depende de prévia avaliação clínica minuciosa por profissional habilitado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] text-ink-soft/70">
            <span>© {new Date().getFullYear()} Canabidiário. Todos os direitos reservados.</span>
            <div className="flex items-center gap-4">
              <span>Termos de Uso</span>
              <span>•</span>
              <span>Privacidade & LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
