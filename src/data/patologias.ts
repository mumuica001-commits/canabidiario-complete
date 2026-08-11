export type Patologia = {
  slug: string;
  nome: string;
  grupo: "Dor orofacial" | "Saúde mental" | "Neurologia";
  resumo: string;
  sintomas: string[];
  abordagem: string[];
  texto: string;
};

export const patologias: Patologia[] = [
  {
    slug: "dtm",
    nome: "Disfunção Temporomandibular (DTM)",
    grupo: "Dor orofacial",
    resumo:
      "Dor e limitação na articulação que conecta a mandíbula ao crânio, frequentemente associada a tensão muscular crônica.",
    sintomas: [
      "Dor ao mastigar, bocejar ou falar",
      "Estalos e travamento da mandíbula",
      "Dores de cabeça e na região do ouvido",
      "Tensão muscular na face e no pescoço",
    ],
    abordagem: [
      "Avaliação clínica da articulação e da musculatura",
      "Plano combinando terapias convencionais e cannabis medicinal",
      "Ajuste de dosagem ao longo do acompanhamento",
    ],
    texto:
      "A DTM raramente tem uma causa única: hábitos parafuncionais, estresse e alterações articulares se somam. O acompanhamento com profissionais associados busca reduzir a dor e devolver função à mastigação, usando formulações à base de canabinoides como parte do plano terapêutico, sempre com prescrição e reavaliação periódica.",
  },
  {
    slug: "neuralgia-do-trigemeo",
    nome: "Neuralgia do Trigêmeo",
    grupo: "Dor orofacial",
    resumo:
      "Crises de dor facial intensa, em choque, desencadeadas por estímulos simples como falar, escovar os dentes ou o vento no rosto.",
    sintomas: [
      "Dor súbita e lancinante em um lado da face",
      "Crises curtas e repetidas ao longo do dia",
      "Gatilhos por toque leve, frio ou mastigação",
      "Medo de comer e falar por antecipação da dor",
    ],
    abordagem: [
      "Mapeamento dos gatilhos e do padrão das crises",
      "Prescrição individualizada com acompanhamento próximo",
      "Registro da evolução entre consultas",
    ],
    texto:
      "Considerada uma das dores mais intensas descritas na literatura médica, a neuralgia do trigêmeo compromete tarefas simples do dia. O objetivo do acompanhamento é reduzir frequência e intensidade das crises, com uma abordagem que respeita o histórico clínico e as medicações já em uso.",
  },
  {
    slug: "bruxismo",
    nome: "Bruxismo",
    grupo: "Dor orofacial",
    resumo:
      "Apertar ou ranger os dentes, geralmente durante o sono, com desgaste dentário e dor muscular ao acordar.",
    sintomas: [
      "Desgaste e sensibilidade dos dentes",
      "Dor na mandíbula ao acordar",
      "Sono não reparador",
      "Dores de cabeça matinais",
    ],
    abordagem: [
      "Investigação de ansiedade e qualidade do sono",
      "Cuidado combinado com placa e orientação odontológica",
      "Formulações voltadas ao relaxamento muscular e ao sono",
    ],
    texto:
      "O bruxismo costuma andar junto de ansiedade e distúrbios do sono — por isso o tratamento olha para o conjunto, não apenas para o desgaste dentário. O acompanhamento avalia a rotina de sono, o nível de estresse e a musculatura facial.",
  },
  {
    slug: "mucosite",
    nome: "Mucosite",
    grupo: "Dor orofacial",
    resumo:
      "Inflamação dolorosa da mucosa da boca, comum em pacientes em quimioterapia ou radioterapia.",
    sintomas: [
      "Feridas e ardência na boca",
      "Dificuldade para comer e engolir",
      "Sensibilidade a alimentos quentes e ácidos",
      "Perda de apetite",
    ],
    abordagem: [
      "Cuidado paliativo focado em conforto e nutrição",
      "Integração com a equipe oncológica do paciente",
      "Reavaliação frequente durante o ciclo de tratamento",
    ],
    texto:
      "Durante o tratamento oncológico, a mucosite pode inviabilizar a alimentação e comprometer a continuidade da terapia. A proposta é oferecer alívio sintomático com acompanhamento próximo, em diálogo com a equipe que já cuida do paciente.",
  },
  {
    slug: "doenca-periodontal",
    nome: "Doença Periodontal",
    grupo: "Dor orofacial",
    resumo:
      "Inflamação crônica dos tecidos que sustentam os dentes, com sangramento gengival e risco de perda dentária.",
    sintomas: [
      "Gengiva vermelha, inchada e sangrante",
      "Mau hálito persistente",
      "Retração gengival",
      "Mobilidade dentária",
    ],
    abordagem: [
      "Tratamento periodontal convencional como base",
      "Suporte anti-inflamatório com prescrição",
      "Reforço de higiene e retornos programados",
    ],
    texto:
      "A doença periodontal exige tratamento odontológico específico. O acompanhamento com cannabis medicinal entra como suporte ao controle inflamatório e ao conforto do paciente, nunca substituindo o cuidado periodontal.",
  },
  {
    slug: "ansiedade",
    nome: "Ansiedade",
    grupo: "Saúde mental",
    resumo:
      "Preocupação persistente e sintomas físicos que interferem no trabalho, no sono e nas relações.",
    sintomas: [
      "Preocupação difícil de controlar",
      "Tensão muscular e taquicardia",
      "Dificuldade de concentração",
      "Insônia e irritabilidade",
    ],
    abordagem: [
      "Avaliação do quadro e de tratamentos em curso",
      "Prescrição gradual, com titulação de dose",
      "Acompanhamento junto a psicoterapia quando indicado",
    ],
    texto:
      "O tratamento da ansiedade com canabinoides é conduzido de forma gradual, respeitando medicações já prescritas e o acompanhamento psicológico. O objetivo é reduzir sintomas sem comprometer a rotina e a clareza mental.",
  },
  {
    slug: "insonia",
    nome: "Insônia",
    grupo: "Saúde mental",
    resumo:
      "Dificuldade para iniciar ou manter o sono, com impacto direto na dor crônica e no humor.",
    sintomas: [
      "Demora para adormecer",
      "Despertares frequentes durante a noite",
      "Cansaço e sonolência diurna",
      "Piora da dor e da ansiedade",
    ],
    abordagem: [
      "Higiene do sono e mapeamento de hábitos",
      "Formulações e horários ajustados ao ciclo do paciente",
      "Reavaliação em consultas de retorno",
    ],
    texto:
      "Sono ruim intensifica dor e ansiedade — e o inverso também é verdadeiro. Tratar a insônia costuma ser o primeiro passo para destravar outros sintomas, com formulação e horário de uso definidos caso a caso.",
  },
  {
    slug: "alzheimer",
    nome: "Alzheimer",
    grupo: "Neurologia",
    resumo:
      "Doença neurodegenerativa com perda progressiva de memória e alterações comportamentais.",
    sintomas: [
      "Perda de memória recente",
      "Desorientação no tempo e no espaço",
      "Agitação e alterações de humor",
      "Distúrbios do sono",
    ],
    abordagem: [
      "Foco em qualidade de vida do paciente e da família",
      "Manejo de agitação, apetite e sono",
      "Orientação a cuidadores",
    ],
    texto:
      "No Alzheimer, o acompanhamento se dirige a sintomas que pesam no cotidiano: agitação, insônia e perda de apetite. O cuidado inclui orientação a familiares e cuidadores, com reavaliações regulares.",
  },
  {
    slug: "parkinson",
    nome: "Doença de Parkinson (DP)",
    grupo: "Neurologia",
    resumo:
      "Condição neurológica progressiva com tremor, rigidez e lentidão de movimentos.",
    sintomas: [
      "Tremor em repouso",
      "Rigidez muscular e lentidão",
      "Alterações de equilíbrio e marcha",
      "Dores e distúrbios do sono",
    ],
    abordagem: [
      "Trabalho conjunto com o neurologista do paciente",
      "Manejo de dor, tremor e sono",
      "Ajustes progressivos de dose",
    ],
    texto:
      "O acompanhamento na doença de Parkinson é complementar ao tratamento neurológico já estabelecido, com atenção a dor, rigidez e qualidade do sono — fatores que definem boa parte da autonomia diária.",
  },
  {
    slug: "dor-cronica",
    nome: "Dor Crônica",
    grupo: "Dor orofacial",
    resumo:
      "Dor persistente por mais de três meses, que deixa de ser sintoma e passa a ser a própria doença.",
    sintomas: [
      "Dor contínua ou recorrente por meses",
      "Limitação de atividades cotidianas",
      "Fadiga e alterações de humor",
      "Resposta parcial a analgésicos comuns",
    ],
    abordagem: [
      "História clínica detalhada da dor",
      "Plano multimodal com prescrição individualizada",
      "Metas de função, não apenas de intensidade da dor",
    ],
    texto:
      "Na dor crônica, o objetivo do acompanhamento é devolver função: voltar a dormir, a trabalhar, a conviver. A avaliação considera o histórico completo e o que já foi tentado antes.",
  },
  {
    slug: "epilepsia",
    nome: "Epilepsia",
    grupo: "Neurologia",
    resumo:
      "Crises recorrentes decorrentes de atividade elétrica anormal no cérebro, com impacto na rotina e na autonomia.",
    sintomas: [
      "Crises convulsivas ou de ausência",
      "Perda momentânea de consciência",
      "Movimentos involuntários",
      "Cansaço e confusão após as crises",
    ],
    abordagem: [
      "Condução junto ao neurologista responsável",
      "Registro sistemático de frequência das crises",
      "Titulação lenta e monitorada",
    ],
    texto:
      "A epilepsia é uma das condições com maior corpo de evidência para o uso de canabinoides. O acompanhamento é sempre feito em conjunto com o neurologista, com registro cuidadoso da frequência das crises.",
  },
  {
    slug: "fibromialgia",
    nome: "Fibromialgia",
    grupo: "Dor orofacial",
    resumo:
      "Dor difusa pelo corpo acompanhada de fadiga, sono não reparador e sensibilidade aumentada.",
    sintomas: [
      "Dor generalizada e pontos sensíveis",
      "Fadiga persistente",
      "Sono não reparador",
      "Névoa mental e dificuldade de foco",
    ],
    abordagem: [
      "Abordagem integrada de dor, sono e humor",
      "Progressão lenta de dose para evitar efeitos adversos",
      "Estímulo a movimento e reabilitação",
    ],
    texto:
      "Na fibromialgia, tratar apenas a dor costuma não bastar. O plano considera sono, humor e capacidade funcional, com ajustes progressivos ao longo dos retornos.",
  },
];

export const grupos = ["Dor orofacial", "Saúde mental", "Neurologia"] as const;
