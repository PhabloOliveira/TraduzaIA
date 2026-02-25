import { Check, X, ArrowDown } from "lucide-react"

const forYou = [
  "Quer criar renda extra online",
  "Está disposto a aprender algo novo",
  "Quer desenvolver uma habilidade digital com futuro",
]

const notForYou = [
  "Está buscando dinheiro fácil e sem esforço",
  "Não quer dedicar tempo para aplicar o que aprender",
]

export function TargetSection() {
  return (
    <section id="para-quem" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-center text-2xl font-bold text-secondary-foreground sm:text-3xl text-balance">
          {"Isso é para você?"}
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* For You */}
          <div className="rounded-2xl border border-accent/30 bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
                <Check className="size-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {"Isso é para você se..."}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-base leading-relaxed text-card-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-destructive/10">
                <X className="size-5 text-destructive" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {"Isso não é para você se..."}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="mt-0.5 size-5 shrink-0 text-destructive" />
                  <span className="text-base leading-relaxed text-card-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#produto"
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
