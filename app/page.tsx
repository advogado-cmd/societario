import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Differentials } from "@/components/differentials"
import { ContactForm } from "@/components/contact-form"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <ContactForm />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
