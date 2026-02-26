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

  // ── Headline + Perfil (Q1) ──
  let headline = "Seu diagnóstico está pronto — e ele foi feito para você"
  let profileInsight = ""

  if (q1 === "Trabalho CLT e quero uma renda extra") {
    headline = "Você foi feito(a) para mais do que um salário que nunca muda por conta própria"
    profileInsight =
      "Todo dia você acorda, se dedica e entrega o seu melhor — mas o teto do seu salário é decidido por alguém que nem sabe o seu nome. Isso não é falta de competência. É falta de uma fonte de renda que responda ao SEU esforço, e não ao humor de um chefe. A IA é exatamente essa saída paralela — e você pode construir ela sem abrir mão do que já tem."
  } else if (q1 === "Sou autônomo/freelancer") {
    headline = "Você tem tudo para crescer — o que falta é a alavanca que quebra o teto"
    profileInsight =
      "Você já deu o passo que a maioria nunca vai dar. Mas percebeu que existe uma armadilha invisível no seu modelo: cada real extra exige mais uma hora sua. Você está chegando no limite do que é possível vender sozinho(a). A IA é a alavanca que vai multiplicar o que você já faz — sem exigir mais horas, sem exaurir mais energia."
  } else if (q1 === "Tenho um negócio próprio") {
    headline = "Seu negócio pode crescer sem consumir mais da sua vida"
    profileInsight =
      "Você criou o negócio para ter liberdade — e em algum momento percebeu que criou a maior fonte de pressão da sua vida. Sem você, nada funciona. Você é o gargalo. Com IA, você sai do operacional, automatiza o que te consome e finalmente trabalha no negócio — não dentro dele. Isso não é futuro: está acontecendo agora."
  } else if (q1 === "Estou desempregado(a)") {
    headline = "O mercado fechou as portas erradas para você — a certa está aqui"
    profileInsight =
      "O mercado de empregos tradicional está cada vez mais ingrato, lento e seletivo. Mas aqui está o que ninguém te conta: as pessoas que mais estão faturando hoje não foram contratadas — elas criaram seus próprios caminhos. Quase todas usando IA. Você chegou aqui no momento exato para fazer o mesmo, antes que esse janelo se feche."
  }

  // ── Barreira (Q2) ──
  let barrierText = "algo ainda trava sua evolução financeira — mas esse obstáculo tem solução"
  if (q2.includes("por onde começar")) {
    barrierText =
      "a falta de um ponto de partida claro é o que te travou até hoje. Não é falta de vontade. É falta de direção. Isso muda agora"
  } else if (q2.includes("tempo")) {
    barrierText =
      "sua rotina não deixa espaço sobrando — e o método foi desenhado exatamente para funcionar nas brechas do seu dia, sem virar sua vida de ponta cabeça"
  } else if (q2.includes("medo")) {
    barrierText =
      "o medo de se esforçar e não ver retorno ainda pesa. Você já tentou coisas que não funcionaram, e a cicatriz ainda dói. Mas desta vez os resultados de quem já fez isso falam mais alto que qualquer insegurança"
  } else if (q2.includes("caminho")) {
    barrierText =
      "você pesquisou, tentou, ficou em dúvida — e nenhuma opção pareceu feita para você de verdade. Até este momento"
  }

  // ── Gancho emocional (Q3) ──
  let hook =
    "A mudança que você busca está a um passo de distância. O próximo passo é seu — e ele começa agora."
  if (q3.includes("liberdade financeira")) {
    hook =
      "Você já imaginou essa liberdade tantas vezes que sabe exatamente como ela seria. Já visualizou os detalhes. O que falta agora não é mais imaginação — é ação. E o primeiro passo real está aqui."
  } else if (q3.includes("preocupar com dinheiro")) {
    hook =
      "Imagine fechar o mês sem torcer para as contas fecharem no positivo. Sem aquela pressão constante no peito, sem aquela ansiedade toda vez que o app do banco abre. Esse cenário é completamente real — e está ao seu alcance agora."
  } else if (q3.includes("sonhos")) {
    hook =
      "Cada sonho tem um prazo de validade. Quanto mais você espera, mais caro fica não agir — e mais distante ele parece. A solução que faltava para mudar isso está a um passo daqui."
  } else if (q3.includes("segurança")) {
    hook =
      "Você merece tomar decisões sem o peso financeiro pressionando cada escolha. Merece dormir sem essa angústia. Essa segurança não é um luxo — é o que está esperando por você do outro lado desse passo."
  }

  return {
    headline,
    message: `${profileInsight}\n\nFicou claro que ${barrierText}.`,
    highlight: hook,
    cta: "Quero ver minha solução personalizada agora",
  }
}
