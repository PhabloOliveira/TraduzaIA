"use client"

import { ArrowDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso saber programar?",
    answer:
      "Não. O guia foi feito para pessoas sem conhecimento técnico. Todas as ferramentas apresentadas possuem interfaces simples e intuitivas.",
  },
  {
    question: "Preciso investir em ferramentas pagas?",
    answer:
      "Não. O guia foca em ferramentas gratuitas ou com planos gratuitos suficientes para começar. Você não precisa gastar nada além do valor do eBook.",
  },
  {
    question: "Quanto tempo preciso dedicar?",
    answer:
      "Isso depende do seu ritmo. A leitura do guia pode ser feita em poucas horas, e a aplicação prática pode começar logo em seguida. Recomendamos dedicar ao menos algumas horas por semana para colocar em prática.",
  },
  {
    question: "Isso garante renda?",
    answer:
      "Não. Nenhum material educacional pode garantir resultados financeiros. O guia oferece conhecimento e um caminho prático, mas os resultados dependem da sua dedicação e esforço.",
  },
  {
    question: "Como recebo o acesso?",
    answer:
      "Imediatamente após a confirmação do pagamento, você recebe o link de acesso no seu e-mail para baixar o PDF.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso dentro do prazo.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-center text-2xl font-bold text-secondary-foreground sm:text-3xl lg:text-4xl text-balance">
          {"Perguntas Frequentes"}
        </h2>

        <div className="mt-12">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-base font-medium text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#garantia"
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
