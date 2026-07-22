import { CheckCircle2, Star } from "lucide-react"
import { BillDecoder } from "@/components/bill-decoder"

const bullets = ["Translates CPT & ICD-10 codes", "Flags duplicate & inflated charges", "No credit card to start"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_80%_-10%,rgba(13,148,136,0.10),transparent),radial-gradient(50rem_40rem_at_-10%_10%,rgba(30,58,138,0.10),transparent)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
            Trusted by 12,000+ US caregivers
          </span>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Stop Overpaying Confusing Medical Bills.{" "}
            <span className="text-accent">Translate Jargon &amp; Find Hidden Errors</span> in 10 Seconds.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Designed for US caregivers. Upload any hospital bill or insurance letter. Our AI translates it into
            5th-grade English and highlights overcharges.
          </p>

          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#decoder"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Decode My First Bill Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="lg:pl-4">
          <BillDecoder />
        </div>
      </div>
    </section>
  )
}
