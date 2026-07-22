import { Lock, ShieldCheck, EyeOff } from "lucide-react"

const badges = [
  {
    icon: Lock,
    title: "256-Bit Bank-Level Encryption",
    desc: "Your documents are encrypted end-to-end, just like your bank.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Aligned Architecture",
    desc: "Built to healthcare privacy standards from the ground up.",
  },
  {
    icon: EyeOff,
    title: "Zero Data Selling Policy",
    desc: "We never sell or share your medical information. Ever.",
  },
]

export function TrustBanner() {
  return (
    <section id="security" className="border-b border-border bg-primary">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
        {badges.map((b) => (
          <div key={b.title} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
              <b.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-primary-foreground">{b.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-primary-foreground/70">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
