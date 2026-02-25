export function Footer() {
  return (
    <footer className="bg-foreground py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-background/80">
            {"Guia Tradutor de IA\u2122 \u2014 Todos os direitos reservados."}
          </p>
          <p className="text-xs text-background/70">
            {
              "Este produto não garante resultados financeiros. Os resultados dependem do esforço e dedicação individual."
            }
          </p>
        </div>
      </div>
    </footer>
  )
}
