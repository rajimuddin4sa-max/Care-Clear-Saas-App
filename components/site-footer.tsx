import { ShieldPlus } from "lucide-react"

const columns = [
  {
    heading: "Product",
    links: ["How It Works", "Security", "Pricing", "Try Free"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Contact", "Blog"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "HIPAA Notice", "Data Practices"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10">
                <ShieldPlus className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="text-lg font-bold tracking-tight">
                CareClear <span className="text-accent">AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Clarity and confidence for US caregivers navigating confusing medical bills and insurance letters.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold">{col.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            <strong className="font-semibold text-primary-foreground/80">Disclaimer:</strong> CareClear AI provides
            informational analysis, not formal legal or medical advice. Always confirm charges directly with your
            provider or insurer before making financial or medical decisions.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} CareClear AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
