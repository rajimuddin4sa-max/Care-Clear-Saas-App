import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBanner } from "@/components/trust-banner"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </main>
      <SiteFooter />
    </div>
  )
}
