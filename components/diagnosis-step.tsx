'use client'

import { motion, type Variants } from 'framer-motion'
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'
import { useFunnelStore } from '../store/useFunnelStore'
import { Button } from './ui/button'

export function DiagnosisStep() {
  const { nextStep, diagnosis } = useFunnelStore()

  if (!diagnosis) return null

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 } as never,
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as never,
    },
  }

  return (
    <section className="min-h-dvh bg-gradient-to-br from-primary/5 via-background to-accent/10 flex items-center py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Ícone de check animado */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.05 }}
                className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center"
              >
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </motion.div>
              {/* Anel pulsante */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full border-2 border-accent"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Análise concluída
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight">
              {diagnosis.headline}
            </h2>
          </motion.div>

          {/* Card de diagnóstico */}
          <motion.div
            variants={itemVariants}
            className="w-full rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <p className="text-base sm:text-lg text-card-foreground leading-relaxed">
              {diagnosis.message}
            </p>
          </motion.div>

          {/* Destaque emocional */}
          <motion.div
            variants={itemVariants}
            className="w-full rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-accent/20 p-5 flex items-start gap-4"
          >
            <Sparkles className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <p className="text-base font-medium text-foreground leading-snug">
              {diagnosis.highlight}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="w-full">
            <Button
              size="lg"
              onClick={nextStep}
              className="w-full text-base sm:text-lg py-6 gap-2 group"
            >
              {diagnosis.cta}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Rodapé de confiança */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-muted-foreground text-center"
          >
            Diagnóstico gerado exclusivamente com base nas suas respostas
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
