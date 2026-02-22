import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalOfferSection() {
  return (
    <section id="oferta" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl text-balance">
          {"A decisão é simples: continuar apenas consumindo conteúdo ou começar a desenvolver uma nova habilidade digital?"}
        </h2>

        <p className="mt-6 text-base leading-relaxed text-primary-foreground/70 lg:text-lg">
          {
            "Você está a um passo de aprender como usar IA para abrir novas oportunidades de renda."
          }
        </p>

        {/* Price block */}
        <div className="mx-auto mt-12 max-w-sm rounded-2xl bg-card p-8 shadow-xl lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {"Guia Tradutor de IA\u2122"}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-lg text-muted-foreground line-through">
              {"R$ 150"}
            </span>
          </div>
          <div className="mt-2 flex items-baseline justify-center gap-1">
            <span className="text-sm font-medium text-muted-foreground">
              {"por"}
            </span>
            <span className="font-serif text-5xl font-bold text-foreground">
              {"R$ 67"}
            </span>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            {"Pagamento único \u00b7 Acesso imediato"}
          </p>

          <Button
            size="lg"
            className="mt-8 h-14 w-full rounded-xl bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90"
            asChild
          >
            <a href="#" className="flex items-center justify-center gap-2">
              {"Quero Começar Agora"}
              <ArrowRight className="size-5" />
            </a>
          </Button>

          <p className="mt-4 text-xs text-muted-foreground">
            {"Garantia incondicional de 7 dias"}
          </p>
        </div>
      </div>
    </section>
  )
}
