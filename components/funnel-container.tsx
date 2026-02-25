'use client'

import { useFunnelStore } from '../store/useFunnelStore'
import { motion, AnimatePresence } from 'framer-motion'
import { HeroSection } from './hero-section'
import { QuestionStep } from './question-step'
import { TransitionStep } from './transition-step'
import { VSLSection } from './vsl-section'
import { DiagnosisStep } from './diagnosis-step'

const questions = [
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
    title: "Qual sua experiência com tecnologia e IA?",
    options: [
      "Nunca usei IA para trabalho",
      "Já experimentei ChatGPT algumas vezes",
      "Uso IA regularmente mas não profissionalmente",
      "Já trabalho com IA mas quero aprender mais"
    ]
  },
  {
    id: 3,
    title: "Quanto tempo pode dedicar por semana para aprender?",
    options: [
      "1-2 horas por semana",
      "3-5 horas por semana",
      "6-10 horas por semana",
      "Mais de 10 horas por semana"
    ]
  },
  {
    id: 4,
    title: "Qual é seu principal objetivo com uma renda extra?",
    options: [
      "Pagar dívidas e organizar as finanças",
      "Ter mais liberdade financeira",
      "Investir em sonhos pessoais",
      "Criar uma reserva de emergência"
    ]
  },
  {
    id: 5,
    title: "Se você pudesse gerar R$ 2.000 a R$ 5.000 extras por mês usando IA, o que isso mudaria na sua vida?",
    options: [
      "Finalmente teria a liberdade financeira que sempre sonhei",
      "Poderia parar de me preocupar com dinheiro no fim do mês",
      "Realizaria sonhos que estão parados por falta de grana",
      "Teria segurança para tomar decisões sem medo financeiro"
    ]
  }
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export function FunnelContainer() {
  const { currentStep, nextStep, addAnswer, dynamicQuestions, computeDynamicContent } = useFunnelStore()

  // ── Step offsets (calculados dinamicamente) ────────────────────────────────
  // Steps 1–5   : perguntas principais
  // Steps 6…5+N : perguntas dinâmicas  (N = dynamicQuestions.length)
  // Step  6+N   : diagnóstico personalizado
  // Step  7+N   : transição (loading)
  // Step  8+N   : VSL
  const DYNAMIC_START = 6
  const DYNAMIC_END = 5 + dynamicQuestions.length          // inclusive
  const DIAGNOSIS_STEP = 6 + dynamicQuestions.length
  const TRANSITION_STEP = 7 + dynamicQuestions.length
  const VSL_STEP = 8 + dynamicQuestions.length

  const handleAnswer = (questionId: number, answer: string, questionTitle: string) => {
    addAnswer({ question: questionTitle, answer, stepId: questionId })

    if (questionId === 5) {
      // Após a Q5: computa perguntas dinâmicas + diagnóstico antes de avançar
      setTimeout(() => {
        computeDynamicContent()
        nextStep()
      }, 500)
    } else {
      setTimeout(() => nextStep(), 500)
    }
  }

  const getStepComponent = () => {
    // ── Hero ──────────────────────────────────────────────────────────────────
    if (currentStep === 0) {
      return <HeroSection />
    }

    // ── Perguntas principais (1–5) ────────────────────────────────────────────
    if (currentStep >= 1 && currentStep <= 5) {
      const question = questions[currentStep - 1]
      return (
        <QuestionStep
          question={question.title}
          options={question.options}
          onAnswer={(answer) => handleAnswer(question.id, answer, question.title)}
          stepNumber={currentStep}
          totalSteps={5}
        />
      )
    }

    // ── Perguntas dinâmicas (6…5+N) ───────────────────────────────────────────
    if (currentStep >= DYNAMIC_START && currentStep <= DYNAMIC_END) {
      const dynIndex = currentStep - DYNAMIC_START          // 0, 1, 2…
      const dynQuestion = dynamicQuestions[dynIndex]
      if (!dynQuestion) return <TransitionStep />           // safety fallback

      return (
        <QuestionStep
          question={dynQuestion.title}
          options={dynQuestion.options}
          onAnswer={(answer) => handleAnswer(currentStep, answer, dynQuestion.title)}
          stepNumber={dynIndex + 1}
          totalSteps={dynamicQuestions.length}
          sectionLabel="Complementar"
        />
      )
    }

    // ── Diagnóstico personalizado ─────────────────────────────────────────────
    if (currentStep === DIAGNOSIS_STEP) {
      return <DiagnosisStep />
    }

    // ── Transição (loading) ───────────────────────────────────────────────────
    if (currentStep === TRANSITION_STEP) {
      return <TransitionStep />
    }

    // ── VSL / Oferta ──────────────────────────────────────────────────────────
    if (currentStep === VSL_STEP) {
      return <VSLSection />
    }

    return <HeroSection />
  }

  return (
    <div className="min-h-dvh">
      <AnimatePresence mode="wait" custom={1}>
        <motion.div
          key={currentStep}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          onDragEnd={undefined}
        >
          {getStepComponent()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}