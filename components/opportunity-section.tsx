import { Search, Wrench, LayoutList, DollarSign, Rocket, ArrowDown } from "lucide-react"

const learnings = [
  {
    icon: Search,
    text: "Como identificar oportunidades online reais!!!",
  },
  {
    icon: Wrench,
    text: "Quais ferramentas gratuitas usar no dia a dia",
  },
  {
    icon: LayoutList,
    text: "Como estruturar serviços digitais simples",
  },
  {
    icon: DollarSign,
    text: "Como definir preços justos para seus serviços",
  },
  {
    icon: Rocket,
    text: "Como começar de forma prática, passo a passo",
  },
]

export function OpportunitySection() {
  return (
    <section id="oportunidade" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            {"E se você pudesse prestar pequenos serviços digitais usando ferramentas gratuitas?"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {"O guia foi criado para ensinar exatamente isso. Veja o que você vai aprender:"}
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          {learnings.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 rounded-xl border border-border bg-card px-6 py-5 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
            >
              <div className="flex size-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <item.icon className="size-5 text-accent" />
              </div>
              <p className="text-base font-medium text-card-foreground lg:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#para-quem"
            className="flex flex-col items-center gap-2 py-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-sm font-medium">{"Continuar"}</span>
            <ArrowDown className="size-5 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
