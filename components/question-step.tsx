'use client'

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Progress } from "./ui/progress"
import { motion } from 'framer-motion'
const MotionCard = motion(Card)
import { CheckCircle } from 'lucide-react'

interface QuestionStepProps {
  question: string
  options: string[]
  onAnswer: (answer: string) => void
  stepNumber: number
  totalSteps: number
}

export function QuestionStep({ 
  question, 
  options, 
  onAnswer, 
  stepNumber, 
  totalSteps 
}: QuestionStepProps) {
  const progress = (stepNumber / totalSteps) * 100

  return (
    <section
      className="min-h-dvh bg-gradient-to-br from-primary/5 to-accent/5 py-20 flex items-center"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Pergunta {stepNumber} de {totalSteps}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress
            value={progress}
            className="h-2"
          />
        </div>

        {/* Question Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-serif text-center text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance mb-12"
          >
            {question}
          </h2>
        </motion.div>

        {/* Options */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {options.map((option, index) => (
            <motion.div
              key={option}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <MotionCard
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="group cursor-pointer transition-all duration-150 border-2 border-transparent hover:border-accent/50 shadow-none"
                onClick={() => onAnswer(option)}
              >
                <CardContent className="px-4 py-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-card-foreground pr-4">
                      {option}
                    </span>
                    <CheckCircle
                      className="size-6 text-accent opacity-0 group-hover:opacity-100 group-focus:opacity-100 focus-within:opacity-100 active:opacity-100 transition-opacity"
                    />
                  </div>
                </CardContent>
              </MotionCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Helper Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Clique na opção que melhor se adequa ao seu perfil
          </p>
        </motion.div>
      </div>
    </section>
  )
}