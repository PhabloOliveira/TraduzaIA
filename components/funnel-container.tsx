'use client'

import { useFunnelStore } from '../store/useFunnelStore'
import { motion, AnimatePresence } from 'framer-motion'
import { HeroSection } from './hero-section'
import { QuestionStep } from './question-step'
import { TransitionStep } from './transition-step'
import { VSLSection } from './vsl-section'

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
  const { currentStep, nextStep, addAnswer } = useFunnelStore()

  const handleAnswer = (questionId: number, answer: string, questionTitle: string) => {
    // Save answer to store
    addAnswer({ 
      question: questionTitle, 
      answer, 
      stepId: questionId 
    })
    
    // Auto-advance to next step
    setTimeout(() => {
      nextStep()
    }, 500) // Small delay for better UX
  }

  const getStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <HeroSection />
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
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
      case 6:
        return <TransitionStep />
      case 7:
        return <VSLSection />
      default:
        return <HeroSection />
    }
  }

  return (
    <div className="md:min-h-screen">
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