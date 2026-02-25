import { Zap, Puzzle, BookOpen, ArrowDown } from "lucide-react"

const points = [
  {
    icon: Zap,
    title: "IA já é acessível",
    description:
      "Hoje existem ferramentas gratuitas e intuitivas que qualquer pessoa pode usar, sem precisar programar uma única linha de código.",
  },
  {
    icon: Puzzle,
    title: "Negócios precisam de ajuda",
    description:
      "Pequenos negócios online precisam de ajuda com organização, criação de conteúdo e automações simples — e você pode oferecer isso.",
  },
  {
    icon: BookOpen,
    title: "O eBook conecta os pontos",
    description:
      "O guia ensina como identificar problemas reais e conectar com as ferramentas certas para resolvê-los de forma prática.",
  },
]

export function BeliefBreakSection() {
  return (
    <section id="quebra-crenca" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-bold text-secondary-foreground sm:text-3xl lg:text-4xl text-balance">
            {"E se você pudesse usar ferramentas de IA sem precisar programar nada?"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {
              "Parece impossível, mas não é. A tecnologia evoluiu e agora está ao alcance de todos."
            }
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-14 items-center justify-center rounded-xl bg-primary">
                <point.icon className="size-7 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-card-foreground">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#oportunidade"
            className="flex flex-col items-center gap-2 py-3 text-muted-foreground transition-colors hover:text-secondary-foreground"
          >
            <span className="text-sm font-medium">{"Continuar"}</span>
            <ArrowDown className="size-5 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
