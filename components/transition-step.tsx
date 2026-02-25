'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useFunnelStore } from '../store/useFunnelStore'
import { Progress } from "./ui/progress"
import { Sparkles, Brain, Target } from 'lucide-react'

interface Particle {
  left: string
  top: string
  duration: number
  delay: number
}

export function TransitionStep() {
  const { nextStep, setLoading } = useFunnelStore()

  // Fix SSR hydration mismatch: generate random particles only on the client
  const [particles, setParticles] = useState<Particle[]>([])
  useEffect(() => {
    setParticles(
      Array.from({ length: 6 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
  }, [])

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
      nextStep()
    }, 3000)
    return () => clearTimeout(timer)
  }, [nextStep, setLoading])

  const loadingMessages = [
    { icon: Brain, message: "Analisando seu perfil..." },
    { icon: Target, message: "Identificando suas necessidades..." },
    { icon: Sparkles, message: "Preparando estratégia personalizada..." },
  ]

  return (
    <section className="min-h-dvh bg-gradient-to-br from-primary to-accent flex items-center justify-center">
      <div
        className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-4 border-primary-foreground/60 border-t-transparent"
            />
            <Brain
              className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground"
            />
          </div>
        </motion.div>

        {/* Progress Messages */}
        <div className="space-y-6">
          {loadingMessages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  duration: 0.5,
                  delay: index * 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
              }}
              className="flex items-center justify-center gap-3 text-primary-foreground"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-lg font-medium">{item.message}</span>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Progress
            value={85}
            className="h-2 bg-primary-foreground/20"
          />
          <p className="mt-2 text-sm text-primary-foreground/80">
            Personalizando sua experiência...
          </p>
        </motion.div>

        {/* Floating decorative particles — client-only to avoid hydration mismatch */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-foreground/30 rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}