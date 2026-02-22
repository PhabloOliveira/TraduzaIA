'use client'

import Image from "next/image"
import { FunnelCTAButton } from "./funnel-cta-button"
import { funnelContent } from "../config/funnel-content"

export function HeroSection() {
  const { hero } = funnelContent
  
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 lg:text-xl text-pretty">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <FunnelCTAButton>
                {hero.ctaText}
              </FunnelCTAButton>
            </div>
          </div>

          {/* eBook Mockup */}
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
              <Image
                src={hero.ebook.image}
                alt={hero.ebook.alt}
                width={360}
                height={460}
                className="relative h-auto w-full max-w-sm rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
