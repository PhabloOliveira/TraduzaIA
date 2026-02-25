/**
 * Configuração de conteúdo do funil para facilitar alterações pelo squad
 * Centraliza todos os textos, imagens e configurações do funil
 */

export interface HeroConfig {
  headline: string
  subheadline: string
  ctaText: string
  ebook: {
    image: string
    alt: string
  }
}

export interface QuestionConfig {
  id: number
  title: string
  options: string[]
}

export interface TransitionConfig {
  title: string
  subtitle: string
  description: string
}

export interface VSLConfig {
  title: string
  description: string
  videoId?: string
  thumbnailUrl?: string
}

export const funnelContent = {
  hero: {
    headline: "Você gostaria de criar uma renda extra online, mas acha que tecnologia é complicada demais?",
    subheadline: "Descubra como usar Inteligência Artificial para prestar serviços digitais simples e abrir uma nova fonte de renda — mesmo começando do zero.",
    ctaText: "Quero Entender Como Funciona",
    ebook: {
      image: "/images/ebook-mockup.jpg",
      alt: "Mockup do Guia Tradutor de IA"
    }
  } as HeroConfig,

  questions: [
    {
      id: 1,
      title: "Qual é sua situação profissional atual?",
      options: [
        "Trabalho CLT e quero uma renda extra",
        "Sou autônomo/freelancer",
        "Tenho um negócio próprio",
        "Estou desempregado(a)"
      ]
    },
    {
      id: 2,
      title: "O que mais te impede de ter uma renda extra hoje, sendo bem honesto(a)?",
      options: [
        "Não sei por onde começar — parece complicado demais pra mim",
        "Falta de tempo — minha rotina já está no limite",
        "Medo de investir esforço e não ver retorno",
        "Nunca encontrei um caminho claro e confiável para isso"
      ]
    },
    {
      id: 3,
      title: "Se você gerasse R$ 2.000 a R$ 5.000 extras por mês com IA, o que mudaria PRIMEIRO na sua vida?",
      options: [
        "Finalmente teria a liberdade financeira que sempre sonhei",
        "Poderia parar de me preocupar com dinheiro no fim do mês",
        "Realizaria sonhos que estão parados por falta de grana",
        "Teria segurança para tomar decisões sem medo financeiro"
      ]
    }
  ] as QuestionConfig[],

  transition: {
    title: "Perfeito! Agora vou te mostrar algo incrível...",
    subtitle: "Com base nas suas respostas, preparei um vídeo especial",
    description: "Nos próximos minutos, você descobrirá como outras pessoas estão usando IA para criar uma renda extra sólida, mesmo sem experiência técnica."
  } as TransitionConfig,

  vsl: {
    title: "Assista e descubra como transformar IA em renda",
    description: "Este vídeo vai mudar sua perspectiva sobre o que é possível com Inteligência Artificial",
    videoId: "", // Inserir ID do vídeo quando disponível
    thumbnailUrl: "/images/vsl-thumbnail.jpg"
  } as VSLConfig,

  // Configurações de timing para transições
  timing: {
    fadeOutDuration: 400,
    fadeInDuration: 600,
    autoAdvanceDelay: 500,
    questionTransitionDelay: 300
  }
}

// Função para personalizar conteúdo baseado nas respostas
export const getPersonalizedContent = (answers: any[]) => {
  // Lógica para personalizar conteúdo baseado nas respostas do usuário
  // Exemplo: diferentes CTAs, headlines ou ofertas baseadas no perfil
  
  const profile = {
    isCLT: answers.some(a => a.answer.includes("CLT")),
    isExperienced: answers.some(a => a.answer.includes("regularmente") || a.answer.includes("trabalho com IA")),
    hasTimeCommitment: answers.some(a => a.answer.includes("6-10") || a.answer.includes("Mais de 10")),
    mainGoal: answers.find(a => a.question.includes("principal objetivo"))?.answer || ""
  }

  return {
    ...funnelContent,
    // Personalizar baseado no perfil identificado
    vsl: {
      ...funnelContent.vsl,
      title: profile.isCLT 
        ? "Como profissionais CLT estão criando renda extra com IA"
        : funnelContent.vsl.title
    }
  }
}