/**
 * Exemplo de como o squad pode usar e personalizar o conteúdo do funil
 * Este arquivo demonstra as capacidades de personalização
 */

import { funnelContent, getPersonalizedContent } from './funnel-content'

// Exemplo 1: Como o Dev de Copy pode alterar textos sem afetar a estrutura
export const updateHeroContent = (newHeadline: string, newSubheadline: string) => {
  return {
    ...funnelContent,
    hero: {
      ...funnelContent.hero,
      headline: newHeadline,
      subheadline: newSubheadline
    }
  }
}

// Exemplo 2: Como adicionar nova pergunta ao funil
export const addNewQuestion = () => {
  const newQuestion = {
    id: 6,
    title: "Qual seu orçamento para investir no seu desenvolvimento?",
    options: [
      "Até R$ 300",
      "R$ 300 - R$ 800", 
      "R$ 800 - R$ 1.500",
      "Mais de R$ 1.500"
    ]
  }

  return {
    ...funnelContent,
    questions: [...funnelContent.questions, newQuestion]
  }
}

// Exemplo 3: Como personalizar com base no perfil do usuário
export const getProfileBasedCTA = (userProfile: any) => {
  const answers = userProfile.answers || []
  
  // Verificar se é CLT
  if (answers.some((a: any) => a.answer.includes("CLT"))) {
    return "Quero Descobrir Como Ganhar Renda Extra Sendo CLT"
  }
  
  // Verificar se é autônomo
  if (answers.some((a: any) => a.answer.includes("autônomo"))) {
    return "Quero Multiplicar Minha Renda Como Autônomo"
  }
  
  // Verificar se tem negócio próprio
  if (answers.some((a: any) => a.answer.includes("negócio próprio"))) {
    return "Quero Turbinar Meu Negócio com IA"
  }
  
  return funnelContent.hero.ctaText // Default
}

// Exemplo 4: Como crear variações A/B do conteúdo
export const getABTestVariant = (variant: 'A' | 'B') => {
  const baseContent = funnelContent

  if (variant === 'B') {
    return {
      ...baseContent,
      hero: {
        ...baseContent.hero,
        headline: "Quer REALMENTE criar uma renda extra, mas não sabe por onde começar com IA?",
        ctaText: "SIM! Quero Aprender Agora"
      }
    }
  }

  return baseContent // Variant A
}

// Exemplo 5: Como o squad pode exportar configurações específicas
export const urgencyContent = {
  hero: {
    ...funnelContent.hero,
    headline: "⏰ ÚLTIMAS HORAS: Descubra como IA está criando uma nova classe de empreendedores digitais",
    ctaText: "Garantir Minha Vaga Agora"
  }
}

export const testimonialContent = {
  hero: {
    ...funnelContent.hero,
    headline: '"Sai do zero e faturei R$ 4.200 no primeiro mês só prestando serviços com IA"',
    subheadline: "Descubra o método exato que Maria usou para criar uma renda extra sólida com Inteligência Artificial, mesmo sem conhecimento técnico.",
    ctaText: "Quero Ver Como Maria Fez"
  }
}

// Configurações para diferentes segmentos
export const segmentConfigs = {
  clt: {
    ...funnelContent,
    hero: {
      ...funnelContent.hero,
      headline: "CLT e quer uma renda extra? Veja como IA pode ser sua melhor opção",
      ctaText: "Quero Renda Extra Sendo CLT"
    }
  },
  
  desempregado: {
    ...funnelContent, 
    hero: {
      ...funnelContent.hero,
      headline: "Desempregado(a)? Transforme IA na sua nova profissão",
      ctaText: "Quero Me Recolocar com IA"
    }
  },
  
  autonomo: {
    ...funnelContent,
    hero: {
      ...funnelContent.hero, 
      headline: "Autônomo? Multiplique sua renda com serviços de IA",
      ctaText: "Quero Expandir Meus Serviços"
    }
  }
}