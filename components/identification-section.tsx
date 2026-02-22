import { CircleCheck, ArrowDown } from "lucide-react"

const questions = [
  "Você trabalha muito e sente que o dinheiro nunca é suficiente?",
  "Já pensou em ganhar online, mas não sabe por onde começar?",
  "Acredita que Inteligência Artificial é só para programadores?",
  "Gostaria de aprender algo novo que pode gerar oportunidades digitais?",
]

export function IdentificationSection() {
  return (
    <section id="identificacao" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-center text-2xl font-bold text-foreground sm:text-3xl text-balance">
          {"Você se identifica com alguma dessas situações?"}
        </h2>

        <div className="mt-12 flex flex-col gap-5">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <CircleCheck className="mt-0.5 size-6 shrink-0 text-accent" />
              <p className="text-base leading-relaxed text-card-foreground lg:text-lg">
                {question}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="rounded-xl bg-secondary px-6 py-4 text-base font-medium text-secondary-foreground lg:text-lg">
            {"Se você respondeu \"sim\" para alguma delas, continue lendo."}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#quebra-crenca"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-sm font-medium">{"Continuar"}</span>
            <ArrowDown className="size-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
