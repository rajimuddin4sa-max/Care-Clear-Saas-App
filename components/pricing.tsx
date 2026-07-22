import { Check, Sparkles } from "lucide-react"

const free = [
  "1 free bill decode",
  "Plain-English summary",
  "Medical jargon translation",
  "Basic overcharge flags",
]

const pro = [
  "Unlimited bill decodes",
  "Automatic overcharge detection",
  "Dispute & appeal letter generator",
  "Insurance denial (EOB) analysis",
  "Priority processing",
  "Email & document history",
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">Pricing</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start free. Upgrade when it pays for itself.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            One caught error usually covers years of CareClear. No contracts, cancel anytime.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Free */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Free</h3>
            <p className="mt-1 text-sm text-muted-foreground">Perfect for your first confusing bill.</p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-foreground">$0</span>
              <span className="text-sm text-muted-foreground">/ forever</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {free.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#decoder"
              className="mt-7 inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Try your first decode
            </a>
          </div>

          {/* Pro */}
          <div className="relative flex flex-col rounded-2xl border-2 border-accent bg-card p-7 shadow-xl shadow-accent/10">
            <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Sparkles className="h-3 w-3" />
              Most popular
            </span>
            <h3 className="text-lg font-semibold text-foreground">CareClear Pro</h3>
            <p className="mt-1 text-sm text-muted-foreground">For families managing ongoing care.</p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-foreground">$9</span>
              <span className="text-sm text-muted-foreground">/ month</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {pro.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#decoder"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-[1.02] hover:bg-accent/90"
            >
              Get unlimited decodes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
