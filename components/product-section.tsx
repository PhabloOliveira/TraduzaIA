import Image from "next/image"
import { FileText, Zap, ShieldCheck, ArrowDown } from "lucide-react"

const details = [
  { icon: FileText, label: "Formato PDF" },
  { icon: Zap, label: "Entrega digital imediata" },
  { icon: ShieldCheck, label: "Acesso imediato após pagamento" },
]

export function ProductSection() {
  return (
    <section id="produto" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Mockup */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-primary/5 blur-2xl" />
              <Image
                src="/images/ebook-mockup.jpg"
                alt="Guia Tradutor de IA - eBook em formato PDF"
                width={320}
                height={400}
                className="relative h-auto w-full max-w-xs rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {"O Produto"}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {"Guia Tradutor de IA\u2122"}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              {
                "Um guia prático e direto ao ponto que ensina como usar ferramentas de Inteligência Artificial para prestar serviços digitais simples — sem precisar programar."
              }
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 lg:justify-start justify-center"
                >
                  <detail.icon className="size-5 text-primary" />
                  <span className="text-base font-medium text-foreground">
                    {detail.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#faq"
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
