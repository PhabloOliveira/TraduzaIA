'use client'

import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Zap,
  Gift
} from 'lucide-react'
import Image from 'next/image'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'
// removed unused imports

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
    "20+ prompts prontos que fazem o trabalho pesado por você — só copiar e aplicar",
    "Passo a passo validado por centenas de alunos — sem enrolação, sem jargão técnico",
    "Bônus: as ferramentas exatas que usamos para gerar resultados reais desde o primeiro dia",
    "Risco zero: 7 dias de garantia total — se não gostar, devolvemos cada centavo sem perguntas"
  ]

  const socialProof = [
    { name: "Maria S.", result: "R$ 2.300 no primeiro mês" },
    { name: "João P.", result: "Clientes em 2 semanas" },
    { name: "Ana L.", result: "Freelancer full-time em 60 dias" },
    { name: "Carlos M.", result: "R$ 3.500 no primeiro mês" }
  ]

  const testimonials = [
    {
      name: 'Maria S.',
      image: '/images/maria.png',
      quote: `Eu comprei sem muita expectativa, pra ser sincera. Já tinha tentado outras formas de ganhar renda extra e nada dava certo.
No primeiro mês aplicando o método eu fiz R$ 2.300. Pode parecer pouco pra alguns, mas pra mim foi a primeira vez que realmente funcionou. Me deu confiança pra continuar.`
    },
    {
      name: 'João P.',
      image: '/images/JoaoP.png',
      quote: `Eu estava precisando aumentar minha renda, mas meu maior medo era investir em mais algo que não trouxesse retorno. Mesmo assim, resolvi testar. Organizei meu tempo, apliquei a estratégia ensinada e comecei a prospectar todos os dias.
Em menos de duas semanas fechei meus primeiros clientes. O que mais me surpreendeu foi a rapidez do resultado quando você realmente executa.`
    },
    {
      name: 'Ana L.',
      image: '/images/AnaL.png',
      quote: `Eu trabalhava CLT e fazia alguns freelas bem esporádicos, mas nunca tinha conseguido transformar isso em algo fixo. Quando comecei, meu objetivo era só complementar a renda. Só que seguindo o método e ajustando meu posicionamento, comecei a fechar contratos maiores.
      Em 60 dias eu já estava ganhando o suficiente pra pedir demissão e atuar como freelancer full-time. Foi uma virada que eu não imaginava que aconteceria tão rápido.`
    },
    {
      name: 'Carlos M',
      image: '/images/Carlos.png',
      quote: `Eu sempre tive dificuldade em vender, principalmente online. Achava que não levava jeito pra isso. Decidi encarar como um teste de 30 dias, aplicando tudo sem pular etapas.
      No final do primeiro mês o resultado foi R$ 3.500. Além do dinheiro, o que mudou foi minha confiança — hoje eu sei que consigo gerar renda quando aplico o processo certo.`
    }
  ]

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [selectedTestimonial, setSelectedTestimonial] = useState(0)

  useEffect(() => {
    if (!carouselApi) return
    const update = () => setSelectedTestimonial(carouselApi.selectedScrollSnap())
    update()
    carouselApi.on('select', update)
    carouselApi.on('reInit', update)
    return () => {
      carouselApi.off('select', update)
      carouselApi.off('reInit', update)
    }
  }, [carouselApi])

  // no parent drag control needed when global draggable behavior removed

  return (
    <section
      className="min-h-dvh bg-gradient-to-br from-primary/5 to-accent/5 py-12 select-text"
      onPointerDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            🎯 Feito Exclusivamente Para o Seu Perfil
          </Badge>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance mb-4">
            Você Chegou Onde a Maioria Nunca Tem Coragem de Chegar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Com base nas suas respostas, identificamos o caminho mais direto para mudar sua realidade financeira. Assista ao vídeo abaixo — ele foi preparado para pessoas exatamente no seu momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="w-full"
          >
            <div className="relative w-full">
              {/* Video Placeholder (responsive) */}
              <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/80 aspect-video shadow-md sm:shadow-2xl relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVideoWatched(true)}
                    className="w-14 h-14 sm:w-20 sm:h-20 bg-accent rounded-full flex items-center justify-center text-accent-foreground shadow-lg"
                  >
                    <Play className="w-5 h-5 sm:w-8 sm:h-8" />
                  </motion.button>
                </div>

                {/* Fake video thumbnail text */}
                <div className="absolute bottom-3 left-3 right-3 text-white max-w-full sm:max-w-[60%]">
                  <h3 className="font-semibold text-sm sm:text-lg mb-1 leading-tight">
                    Como Gerar Renda Real com IA — Mesmo Começando do Zero
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm opacity-80">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Assista até o final — os últimos minutos são os mais importantes</span>
                  </div>
                </div>
              </div>

              {/* Social Proof Cards (stacked on mobile) */}
              <div className="mt-4 space-y-3 sm:mt-6">
                {socialProof.map((proof, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.12 }}
                    className="flex items-center gap-3 bg-card p-3 rounded-lg border"
                  >
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{proof.name}</p>
                      <p className="text-xs text-muted-foreground">{proof.result}</p>
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
            <Card className="border-2 border-accent/20 shadow-lg sm:shadow-2xl">
              <CardContent className="p-6 sm:p-8">

                {/* Offer Header */}
                <div className="text-center mb-6">
                  <Badge className="mb-3 bg-accent text-accent-foreground">
                    <Gift className="w-4 h-4 mr-2" />
                    Acesso Liberado — Apenas Hoje
                  </Badge>
                  <h2 className="font-serif text-2xl font-bold mb-2">
                    Guia Tradutor de IA™
                  </h2>
                  <p className="text-muted-foreground">
                    O método mais direto para transformar IA em renda consistente — sem precisar ser tech
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">
                      R$ 197
                    </span>
                    <Badge variant="destructive">-66%</Badge>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-medium text-muted-foreground">por apenas</span>
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-primary">R$ 67</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pagamento único • Acesso imediato • Sem mensalidade
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
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

                {/* Testimonials carousel */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-center">Quem aplicou o método, mudou de vida:</h3>
                    <div className="relative">
                      <Carousel setApi={setCarouselApi} className="max-w-full">
                        {/* show side arrows close to the carousel on mobile and further out on desktop */}
                        <CarouselPrevious className="left-2 sm:-left-4" />
                        <CarouselContent className="flex">
                          {testimonials.map((t, i) => (
                            <CarouselItem key={i} className="max-w-xs flex justify-center">
                              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden">
                                <Image src={t.image} alt={t.name} width={112} height={112} className="object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselNext className="right-2 sm:-right-4" />
                      </Carousel>

                      {/* Selected testimonial text and name shown below carousel */}
                      <div className="mt-4 text-center">
                        <p className="text-sm sm:text-base text-foreground mb-2 leading-relaxed">"{testimonials[selectedTestimonial]?.quote}"</p>
                        <span className="text-xs sm:text-sm text-muted-foreground">— {testimonials[selectedTestimonial]?.name}</span>
                      </div>
                    </div>
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
                          asChild
                          size="lg"
                          className="w-full h-12 sm:h-16 text-base sm:text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 px-4 whitespace-normal"
                        >
                          <a href="https://pay.kiwify.com.br/QCOOz5u" target="_blank" rel="noopener noreferrer">
                            <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-center">QUERO MEU ACESSO AGORA</span>
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                          </a>
                        </Button>
                      </motion.div>

                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>Risco zero: 7 dias de garantia total — sem perguntas, sem burocracia</span>
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
                    Assista ao vídeo — sua oferta exclusiva será liberada em instantes
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