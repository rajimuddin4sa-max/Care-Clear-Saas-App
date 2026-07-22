import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "My mom's ER bill was $4,800 and made zero sense. CareClear caught a duplicate charge and gave me a script to call billing. They knocked $2,100 off. I nearly cried.",
    name: "Dana R.",
    role: "Caregiver for her mother · Ohio",
    initials: "DR",
    saved: "$2,100 saved",
  },
  {
    quote:
      "The insurance denial letter for my dad was pure gibberish. In seconds I understood exactly why it was rejected and how to appeal. We won the appeal two weeks later.",
    name: "Marcus T.",
    role: "Caregiver for his father · Texas",
    initials: "MT",
    saved: "Appeal won",
  },
  {
    quote:
      "I was juggling my kids and my parents' medical paperwork. This turned an hour of panic into a five-minute task. Worth every penny of the $9.",
    name: "Sofia L.",
    role: "Sandwich-generation caregiver · Florida",
    initials: "SL",
    saved: "Hours saved",
  },
]

export function Testimonials() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">Real caregivers</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Less stress. Real money back.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-7 w-7 text-accent/30" />
              <div className="mt-3 flex items-center gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                  {t.saved}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
