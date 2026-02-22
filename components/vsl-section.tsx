'use client'

import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Shield, 
  Zap,
  Gift
} from 'lucide-react'

export function VSLSection() {
  const [showCTA, setShowCTA] = useState(false)
  const [videoWatched, setVideoWatched] = useState(false)

  useEffect(() => {
    // Show CTA after 10 seconds (simulate video watching)
    const timer = setTimeout(() => {
      setShowCTA(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const benefits = [
    "Acesso às 50+ prompts exclusivos de IA",
    "Método passo-a-passo comprovado",
    "Suporte por 30 dias no grupo VIP",
    "Bônus: Templates prontos para usar",
    "Garantia incondicional de 7 dias"
  ]

  const socialProof = [
    { name: "Maria S.", result: "R$ 2.300 no primeiro mês" },
    { name: "João P.", result: "Clientes em 2 semanas" },
    { name: "Ana L.", result: "Freelancer full-time em 60 dias" }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            🎯 Estratégia Personalizada Pronta
          </Badge>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance mb-4">
            Sua Jornada para Gerar Renda com IA Começa Aqui
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baseado nas suas respostas, preparamos um método exclusivo para você começar hoje mesmo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Video Placeholder */}
              <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setVideoWatched(true)}
                    className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-accent-foreground shadow-lg"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </motion.button>
                </div>
                
                {/* Fake video thumbnail */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">
                    Como Transformar IA em Renda Real
                  </h3>
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <Clock className="w-4 h-4" />
                    <span>15:30 min</span>
                  </div>
                </div>
              </div>

              {/* Social Proof Cards */}
              <div className="mt-6 space-y-3">
                {socialProof.map((proof, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="flex items-center gap-3 bg-card p-3 rounded-lg border"
                  >
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {proof.name} - {proof.result}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Offer Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-2 border-accent/20 shadow-2xl">
              <CardContent className="p-8">
                
                {/* Offer Header */}
                <div className="text-center mb-6">
                  <Badge className="mb-3 bg-accent text-accent-foreground">
                    <Gift className="w-4 h-4 mr-2" />
                    Oferta Especial - Só Hoje
                  </Badge>
                  <h2 className="font-serif text-2xl font-bold mb-2">
                    Guia Tradutor de IA™
                  </h2>
                  <p className="text-muted-foreground">
                    Método completo para gerar renda com IA
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">
                      R$ 297
                    </span>
                    <Badge variant="destructive">-77%</Badge>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-medium text-muted-foreground">por apenas</span>
                    <span className="font-serif text-5xl font-bold text-accent">R$ 67</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pagamento único • Acesso imediato
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <AnimatePresence>
                  {showCTA && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(var(--accent), 0.4)",
                            "0 0 0 15px rgba(var(--accent), 0)",
                            "0 0 0 0 rgba(var(--accent), 0)"
                          ]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Button
                          size="lg"
                          className="w-full h-16 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl shadow-lg transition-all duration-200"
                        >
                          <Zap className="w-6 h-6 mr-3" />
                          QUERO MEU ACESSO AGORA
                          <ArrowRight className="w-6 h-6 ml-3" />
                        </Button>
                      </motion.div>
                      
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>Garantia incondicional de 7 dias</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Countdown Timer (Optional) */}
                {!showCTA && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-sm text-muted-foreground"
                  >
                    <Clock className="w-4 h-4 inline mr-2" />
                    Botão aparecerá em alguns segundos...
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}