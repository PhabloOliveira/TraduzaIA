/**
 * Engine de Perguntas Dinâmicas e Diagnóstico Personalizado
 *
 * Lógica condicional:
 *  Q1 (situação profissional) → 2–3 perguntas de validação de dor
 *  Q2 (experiência com IA)   → 0–1 pergunta de barreira/aspiração
 *  Q4 (objetivo financeiro)  → 0–1 pergunta de impacto emocional
 *
 * Ao final: gera um diagnóstico 100% personalizado que prepara para a oferta.
 */

export interface DynamicQuestion {
  id: string
  title: string
  options: string[]
}

export interface DiagnosisConfig {
  headline: string
  message: string
  highlight: string
  cta: string
}

// ─── Q1 · Situação Profissional ───────────────────────────────────────────────
// "Trabalho CLT e quero uma renda extra"
// Foco: insatisfação salarial · dependência de chefe · falta de reconhecimento
const cltQuestions: DynamicQuestion[] = [
  {
    id: "clt-1",
    title:
      "Seu salário atual te permite fazer tudo o que você quer — ou frequentemente falta dinheiro antes do próximo pagamento?",
    options: [
      "Fico no limite quase todo mês",
      "Consigo pagar as contas, mas sobra muito pouco",
      "Estou estável, mas quero expandir minha qualidade de vida",
      "Tenho segurança, mas me sinto financeiramente estagnado(a)",
    ],
  },
  {
    id: "clt-2",
    title:
      "Você já sentiu que, não importa o quanto trabalhe, seu crescimento depende da decisão de outra pessoa?",
    options: [
      "Sim, me sinto totalmente dependente do meu chefe",
      "Às vezes, mas já me conformei com essa realidade",
      "Tenho alguma autonomia, mas os limites são bem claros",
      "Nunca havia pensado assim — mas faz todo sentido",
    ],
  },
  {
    id: "clt-3",
    title:
      "Quando foi a última vez que você se sentiu verdadeiramente reconhecido(a) e recompensado(a) pelo seu esforço?",
    options: [
      "Faz muito tempo — esforço parece não ser suficiente",
      "Recebo elogios, mas sem aumento ou promoção real",
      "O reconhecimento existe, mas não reflete no financeiro",
      "Prefiro construir algo meu a depender de aprovação alheia",
    ],
  },
]

// "Sou autônomo/freelancer"
// Foco: renda instável · dificuldade de escalar · excesso de horas
const freelancerQuestions: DynamicQuestion[] = [
  {
    id: "free-1",
    title:
      "Como você descreveria a previsibilidade da sua renda nos últimos 3 meses?",
    options: [
      "Muito instável — meses ótimos seguidos de meses difíceis",
      "Razoavelmente previsível, mas com estresse constante",
      "Estável, mas com dificuldade real para crescer além disso",
      "Boa, porém exige esforço enorme para manter o mesmo nível",
    ],
  },
  {
    id: "free-2",
    title:
      "Você já percebeu que para ganhar mais, precisaria trabalhar ainda mais horas — e isso te trava?",
    options: [
      "Sim, é exatamente o que me limita hoje",
      "Já me aconteceu e ainda busco uma alternativa",
      "Me preocupa muito, mas ainda não achei solução",
      "Preciso urgentemente de uma forma de escalar sem vender mais horas",
    ],
  },
]

// "Tenho um negócio próprio"
// Foco: crescimento lento · dificuldade de automatizar · dependência operacional
const businessQuestions: DynamicQuestion[] = [
  {
    id: "biz-1",
    title:
      "Como você avalia o ritmo de crescimento do seu negócio atualmente?",
    options: [
      "Crescendo muito devagar, abaixo do que esperava",
      "Estagnado — bati em um teto e não sei como quebrar",
      "Crescendo, mas de forma desordenada e difícil de sustentar",
      "Preciso urgente de novas estratégias para escalar de verdade",
    ],
  },
  {
    id: "biz-2",
    title:
      "O que aconteceria com o seu negócio se você precisasse se afastar por 30 dias?",
    options: [
      "Praticamente pararia — depende totalmente de mim",
      "Sofreria muito, mas sobreviveria com esforço da equipe",
      "Tenho alguns processos, mas ainda preciso melhorar muito",
      "É meu maior problema: não consigo delegar nem automatizar",
    ],
  },
]

// "Estou desempregado(a)"
// Foco: dificuldade de recolocação · nova habilidade · baixo investimento
const unemployedQuestions: DynamicQuestion[] = [
  {
    id: "unemp-1",
    title:
      "Quanto tempo já se passou desde que você começou a buscar uma nova oportunidade profissional?",
    options: [
      "Mais de 6 meses tentando, com pouquíssimos retornos",
      "Entre 3 e 6 meses, com poucas respostas positivas",
      "Recentemente, mas já noto como o mercado está difícil",
      "Perdi a esperança no emprego tradicional e busco alternativas",
    ],
  },
  {
    id: "unemp-2",
    title:
      "O que te impede de criar uma nova fonte de renda por conta própria hoje?",
    options: [
      "Não sei por onde começar com pouco dinheiro disponível",
      "Tenho medo de não ter o conhecimento necessário",
      "Já tentei antes e não deu certo como esperava",
      "Preciso de uma orientação clara e prática para agir logo",
    ],
  },
]

// ─── Q2 · Nível de Experiência com IA ────────────────────────────────────────
// Iniciante → barreira de entrada
const noviceAIQuestion: DynamicQuestion = {
  id: "exp-novice",
  title:
    "O que costuma te travar quando pensa em aprender algo novo relacionado à tecnologia?",
  options: [
    "Medo de não conseguir entender — acho que não é pra mim",
    "Não sei por onde começar — tem conteúdo demais espalhado",
    "Já tentei aprender antes e acabei desistindo no meio",
    "Falta de tempo para estudar de forma consistente",
  ],
}

// Avançado → gap para monetizar
const advancedAIQuestion: DynamicQuestion = {
  id: "exp-advanced",
  title:
    "O que ainda falta para você transformar seu conhecimento em IA em uma fonte real de renda?",
  options: [
    "Um método claro e estruturado de como monetizar isso",
    "Saber quais serviços têm mais demanda e como precificar",
    "Confiança para me posicionar e cobrar pelo meu trabalho",
    "Mentoria e uma comunidade para me guiar na prática",
  ],
}

// ─── Q4 · Objetivo Financeiro ─────────────────────────────────────────────────
// "Pagar dívidas" → impacto emocional das dívidas
const debtQuestion: DynamicQuestion = {
  id: "obj-debt",
  title:
    "As dívidas estão afetando outras áreas da sua vida além das finanças?",
  options: [
    "Sim — impactam meu sono, humor e bem-estar diariamente",
    "Me sinto envergonhado(a) com a situação financeira atual",
    "Gera conflitos constantes com pessoas próximas",
    "Me sinto preso(a) sem saída — sei que preciso agir agora",
  ],
}

// "Investir em sonhos" → qual sonho específico
const dreamQuestion: DynamicQuestion = {
  id: "obj-dream",
  title: "Qual sonho você mais deseja realizar com essa renda extra?",
  options: [
    "Viajar e conhecer lugares que sempre quis visitar",
    "Dar uma vida significativamente melhor para minha família",
    "Realizar algo importante que venho adiando há muito tempo",
    "Ter tempo E dinheiro para viver completamente do meu jeito",
  ],
}

// ─── Engine: Computar Perguntas Dinâmicas ─────────────────────────────────────
interface AnswerMap {
  questionId: number
  answer: string
}

/**
 * Retorna as perguntas dinâmicas a exibir após as 5 perguntas principais,
 * com base nas respostas coletadas (Q1, Q2, Q4).
 */
export function computeDynamicQuestions(answers: AnswerMap[]): DynamicQuestion[] {
  const questions: DynamicQuestion[] = []
  const getAnswer = (id: number) => answers.find((a) => a.questionId === id)?.answer ?? ""

  const q1 = getAnswer(1)
  const q2 = getAnswer(2)
  const q4 = getAnswer(4)

  // ── Q1 → Situação profissional (2–3 perguntas) ──
  if (q1 === "Trabalho CLT e quero uma renda extra") {
    questions.push(...cltQuestions)
  } else if (q1 === "Sou autônomo/freelancer") {
    questions.push(...freelancerQuestions)
  } else if (q1 === "Tenho um negócio próprio") {
    questions.push(...businessQuestions)
  } else if (q1 === "Estou desempregado(a)") {
    questions.push(...unemployedQuestions)
  }

  // ── Q2 → Experiência com IA (0–1 pergunta) ──
  if (q2 === "Nunca usei IA para trabalho") {
    questions.push(noviceAIQuestion)
  } else if (q2 === "Já trabalho com IA mas quero aprender mais") {
    questions.push(advancedAIQuestion)
  }

  // ── Q4 → Objetivo financeiro (0–1 pergunta) ──
  if (q4 === "Pagar dívidas e organizar as finanças") {
    questions.push(debtQuestion)
  } else if (q4 === "Investir em sonhos pessoais") {
    questions.push(dreamQuestion)
  }

  return questions
}

// ─── Engine: Gerar Diagnóstico Personalizado ──────────────────────────────────
/**
 * Gera um diagnóstico 100% personalizado com base nas respostas de Q1–Q5.
 * O diagnóstico é exibido antes da oferta para maximizar identificação e desejo.
 */
export function generateDiagnosis(answers: AnswerMap[]): DiagnosisConfig {
  const getAnswer = (id: number) => answers.find((a) => a.questionId === id)?.answer ?? ""

  const q1 = getAnswer(1)
  const q2 = getAnswer(2)
  const q3 = getAnswer(3)
  const q4 = getAnswer(4)
  const q5 = getAnswer(5)

  // ── Perfil (Q1) ──
  let profileLabel = "pessoa determinada"
  let profileInsight = ""

  if (q1 === "Trabalho CLT e quero uma renda extra") {
    profileLabel = "trabalhador(a) CLT"
    profileInsight =
      "Você tem a estabilidade do emprego, mas está preso(a) a um teto que outros controlam. A IA pode ser sua saída paralela — sem abrir mão do que já tem."
  } else if (q1 === "Sou autônomo/freelancer") {
    profileLabel = "profissional autônomo(a)"
    profileInsight =
      "Você já tem o espírito empreendedor — o que falta é escalar sem trocar mais tempo por dinheiro. A IA é a alavanca que vai multiplicar o que você já faz."
  } else if (q1 === "Tenho um negócio próprio") {
    profileLabel = "empreendedor(a)"
    profileInsight =
      "Você já construiu algo, mas está no limite da sua capacidade operacional. Com IA, você pode automatizar, crescer e finalmente trabalhar no negócio — e não dentro dele."
  } else if (q1 === "Estou desempregado(a)") {
    profileLabel = "pessoa em transição de carreira"
    profileInsight =
      "Estar em transição não é fraqueza — é a oportunidade perfeita para começar com a habilidade mais valorizada do mercado. Você pode entrar no jogo agora, antes de todo mundo."
  }

  // ── Urgência (Q4) ──
  let urgencyText = "conquistar liberdade financeira real e duradoura"
  if (q4 === "Pagar dívidas e organizar as finanças") {
    urgencyText = "resolver sua situação financeira e retomar o controle da sua vida"
  } else if (q4 === "Ter mais liberdade financeira") {
    urgencyText = "conquistar liberdade financeira real e duradoura"
  } else if (q4 === "Investir em sonhos pessoais") {
    urgencyText = "realizar os sonhos que você tem adiado por falta de recursos"
  } else if (q4 === "Criar uma reserva de emergência") {
    urgencyText = "construir uma reserva sólida e ter segurança financeira de verdade"
  }

  // ── Prontidão (Q3) ──
  let readinessText = "Com o tempo que você tem, o método funciona."
  if (q3 === "1-2 horas por semana") {
    readinessText =
      "E mesmo com apenas 1 a 2 horas por semana, o método que vou te mostrar foi desenhado para caber na sua rotina — sem virar sua vida de cabeça para baixo."
  } else if (q3 === "3-5 horas por semana") {
    readinessText =
      "Com 3 a 5 horas semanais, você tem exatamente o tempo necessário para aplicar esse método e começar a ver os primeiros resultados."
  } else {
    readinessText =
      "Com o tempo disponível que você tem, você pode avançar muito mais rápido do que imagina e gerar resultados ainda neste mês."
  }

  // ── Nota sobre experiência (Q2) ──
  let experienceNote = ""
  if (q2 === "Nunca usei IA para trabalho") {
    experienceNote = " — e não é preciso nenhum conhecimento técnico para começar"
  } else if (q2 === "Já trabalho com IA mas quero aprender mais") {
    experienceNote =
      ", e sua experiência prévia com IA vai acelerar muito seus resultados"
  }

  // ── Gancho emocional (Q5) ──
  let hook = "A mudança que você busca está a um passo de distância. Veja o que preparei para você."
  if (q5.includes("liberdade financeira")) {
    hook = "A liberdade que você sempre quis está mais próxima do que parece. O próximo passo é seu."
  } else if (q5.includes("preocupar com dinheiro")) {
    hook =
      "Imagine fechar o mês sem aquela angústia financeira. Esse cenário é real — e está ao seu alcance."
  } else if (q5.includes("sonhos")) {
    hook = "Seus sonhos não precisam mais esperar. A solução que faltava está a um passo de você."
  } else if (q5.includes("segurança")) {
    hook =
      "A segurança financeira que você merece está mais perto do que imagina."
  }

  return {
    headline: `Diagnóstico concluído, ${profileLabel}!`,
    message: `${profileInsight} Ficou claro que você quer ${urgencyText}${experienceNote}. ${readinessText}`,
    highlight: hook,
    cta: "Ver minha solução personalizada →",
  }
}
