/**
 * Engine de Perguntas Dinâmicas e Diagnóstico Personalizado
 *
 * Lógica condicional:
 *  Q1 (situação profissional) → EXATAMENTE 2 perguntas decisivas e persuasivas
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

// ─── Q1 · CLT ─────────────────────────────────────────────────────────────────
// Gatilho: insatisfação salarial + dependência de chefe
const cltQuestions: DynamicQuestion[] = [
  {
    id: "clt-1",
    title:
      "Seja honesto(a): se daqui a 5 anos você continuar no mesmo emprego, com o mesmo salário — isso te assusta ou te conforma?",
    options: [
      "Me assusta muito — não quero essa vida para mim",
      "Me dá um frio na barriga só de imaginar isso",
      "Já me conformei, mas no fundo sei que mereço mais",
      "É exatamente o que me faz buscar uma saída agora",
    ],
  },
  {
    id: "clt-2",
    title:
      "Você já parou para calcular quanto dinheiro você deixou de ganhar por depender de um chefe para crescer?",
    options: [
      "Sim — é frustrante demais ver o quanto perdi",
      "Nunca calculei, mas sei que é muito",
      "Penso nisso toda vez que vejo meu holerite",
      "Esse pensamento me mantém acordado(a) à noite",
    ],
  },
]

// ─── Q1 · Autônomo / Freelancer ───────────────────────────────────────────────
// Gatilho: teto de renda + armadilha do tempo
const freelancerQuestions: DynamicQuestion[] = [
  {
    id: "free-1",
    title:
      "Você percebeu que chegou em um limite — e que para ganhar mais, teria que trabalhar horas que simplesmente não existem?",
    options: [
      "Sim, estou exatamente nesse ponto agora",
      "Já senti isso e fico em pânico toda vez que penso",
      "É meu maior medo: trabalhar mais e ganhar o mesmo",
      "Preciso urgente de uma forma de escalar sem vender meu tempo",
    ],
  },
  {
    id: "free-2",
    title:
      "Se um mês ruim aparecer — como vários já apareceram — você tem reserva suficiente para se manter sem entrar em desespero?",
    options: [
      "Não. Cada mês ruim é uma crise real na minha vida",
      "Tenho pouco, e a ansiedade é constante",
      "Sobrevivo, mas o estresse está me consumindo",
      "Essa imprevisibilidade me impede de planejar qualquer coisa",
    ],
  },
]

// ─── Q1 · Negócio Próprio ─────────────────────────────────────────────────────
// Gatilho: dependência operacional + crescimento estagnado
const businessQuestions: DynamicQuestion[] = [
  {
    id: "biz-1",
    title:
      "Você montou um negócio para ter liberdade — mas na prática, quem manda no seu tempo ainda é o negócio?",
    options: [
      "Sim. Trabalho mais do que nunca e ganho menos do que deveria",
      "O negócio depende tanto de mim que tenho medo de tirar férias",
      "Sou o maior gargalo da minha própria empresa",
      "Me sinto preso(a) dentro do que eu mesmo(a) construí",
    ],
  },
  {
    id: "biz-2",
    title:
      "Seus concorrentes estão crescendo e usando tecnologia enquanto você ainda opera no modo manual. Isso te preocupa?",
    options: [
      "Muito — sinto que estou ficando para trás sem perceber",
      "Já perdi clientes por não conseguir acompanhar o mercado",
      "Sei que preciso mudar, mas não sei por onde começar",
      "Sim, e isso é urgente — cada dia que passa é dinheiro perdido",
    ],
  },
]

// ─── Q1 · Desempregado(a) ─────────────────────────────────────────────────────
// Gatilho: rejeição do mercado + urgência de agir agora
const unemployedQuestions: DynamicQuestion[] = [
  {
    id: "unemp-1",
    title:
      "Você já sentiu que o mercado de trabalho tradicional não quer mais te ouvir — independentemente do quanto você se esforce?",
    options: [
      "Sim. Envio currículos e o silêncio é a única resposta",
      "Me sinto invisível para o mercado, como se não existisse",
      "Cada rejeição drena mais minha confiança e minha esperança",
      "Estou convencido(a) de que a saída não está no emprego CLT",
    ],
  },
  {
    id: "unemp-2",
    title:
      "Se você não agir agora e mais 6 meses passarem sem renda, o que acontece com a sua vida?",
    options: [
      "Seria devastador — já estou no limite financeiro e emocional",
      "Perderia ainda mais confiança e oportunidades reais",
      "As dívidas e a pressão iriam me consumir completamente",
      "Não posso me dar ao luxo de esperar mais — preciso agir hoje",
    ],
  },
]

// ─── Engine: Computar Perguntas Dinâmicas ─────────────────────────────────────
interface AnswerMap {
  questionId: number
  answer: string
}

/**
 * Retorna EXATAMENTE 2 perguntas dinâmicas decisivas com base em Q1.
 * As perguntas são projetadas para gerar identificação imediata,
 * validar a dor do usuário e criar urgência para a solução.
 */
export function computeDynamicQuestions(answers: AnswerMap[]): DynamicQuestion[] {
  const getAnswer = (id: number) => answers.find((a) => a.questionId === id)?.answer ?? ""

  const q1 = getAnswer(1)

  if (q1 === "Trabalho CLT e quero uma renda extra") return cltQuestions
  if (q1 === "Sou autônomo/freelancer")              return freelancerQuestions
  if (q1 === "Tenho um negócio próprio")             return businessQuestions
  if (q1 === "Estou desempregado(a)")                return unemployedQuestions

  // Fallback: retorna as 2 primeiras perguntas CLT
  return cltQuestions
}

// ─── Engine: Gerar Diagnóstico Personalizado ──────────────────────────────────
/**
 * Gera um diagnóstico 100% personalizado com base nas respostas de Q1–Q5.
 * O diagnóstico é exibido antes da oferta para maximizar identificação e desejo.
 */
export function generateDiagnosis(answers: AnswerMap[]): DiagnosisConfig {
  const getAnswer = (id: number) => answers.find((a) => a.questionId === id)?.answer ?? ""

  const q1 = getAnswer(1) // situação profissional
  const q2 = getAnswer(2) // barreira principal
  const q3 = getAnswer(3) // aspiração / impacto emocional

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

  // ── Barreira (Q2) ──
  let barrierText = "algo ainda trava sua evolução financeira"
  if (q2.includes("por onde começar")) {
    barrierText = "a falta de um caminho claro é o que mais trava você hoje — e isso vai mudar agora"
  } else if (q2.includes("tempo")) {
    barrierText = "a rotina intensa te impede de agir, mesmo querendo muito — e o método se encaixa nisso"
  } else if (q2.includes("medo")) {
    barrierText = "o medo de não ter retorno te paralisa — e é exatamente isso que vou eliminar pra você"
  } else if (q2.includes("caminho")) {
    barrierText = "você nunca encontrou um método confiável de verdade — até agora"
  }

  // ── Gancho emocional (Q3) ──
  let hook = "A mudança que você busca está a um passo de distância. Veja o que preparei para você."
  if (q3.includes("liberdade financeira")) {
    hook = "A liberdade que você sempre quis está mais próxima do que parece. O próximo passo é seu."
  } else if (q3.includes("preocupar com dinheiro")) {
    hook = "Imagine fechar o mês sem aquela angústia financeira. Esse cenário é real — e está ao seu alcance."
  } else if (q3.includes("sonhos")) {
    hook = "Seus sonhos não precisam mais esperar. A solução que faltava está a um passo de você."
  } else if (q3.includes("segurança")) {
    hook = "A segurança financeira que você merece está mais perto do que imagina."
  }

  return {
    headline: `Diagnóstico concluído, ${profileLabel}!`,
    message: `${profileInsight} Ficou claro que ${barrierText}.`,
    highlight: hook,
    cta: "Ver minha solução personalizada →",
  }
}
