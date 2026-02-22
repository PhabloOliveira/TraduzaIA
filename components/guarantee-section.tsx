import { ShieldCheck, ArrowDown } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section id="garantia" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-2xl border border-accent/30 bg-card p-8 text-center shadow-sm lg:p-12">
          <div className="flex size-16 items-center justify-center rounded-full bg-accent/10">
            <ShieldCheck className="size-8 text-accent" />
          </div>
          <h2 className="mt-6 font-serif text-2xl font-bold text-card-foreground sm:text-3xl">
            {"Garantia de 7 Dias"}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            {
              "Se dentro de 7 dias você sentir que o conteúdo não faz sentido para você, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia."
            }
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#oferta"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-sm font-medium">{"Ver oferta"}</span>
            <ArrowDown className="size-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
