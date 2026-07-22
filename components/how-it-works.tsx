import { Camera, ScanSearch, ListChecks } from "lucide-react"

const steps = [
  {
    icon: Camera,
    step: "Step 1",
    title: "Upload or snap a photo",
    desc: "Add any US medical bill or insurance EOB — a PDF, a screenshot, or a quick photo from your phone.",
  },
  {
    icon: ScanSearch,
    step: "Step 2",
    title: "AI strips the codes & finds errors",
    desc: "CareClear reads the CPT and ICD-10 codes, cross-checks pricing, and detects duplicates and billing mistakes.",
  },
  {
    icon: ListChecks,
    step: "Step 3",
    title: "Get a plain-English action plan",
    desc: "Receive a clear summary plus a ready-to-use dispute script you can send to the hospital or insurer.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">How it works</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From confusing bill to confident action in three steps
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            No spreadsheets, no phone-tree marathons. Just clarity you can act on.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="absolute right-5 top-5 text-4xl font-bold text-muted/70">{`0${i + 1}`}</span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <s.icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent">{s.step}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
