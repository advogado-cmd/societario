import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
)

const ScaleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
)

const FileSearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <circle cx="11.5" cy="14.5" r="2.5" />
    <path d="M13.25 16.25 15 18" />
  </svg>
)

export function Hero() {
  return (
    <section className="pt-20 bg-primary-blue min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-secondary-gold font-sans text-sm uppercase tracking-wider">
                Direito Societário e Estratégia Empresarial
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-secondary-gold/10 border border-secondary-gold/30 rounded-full px-4 py-2">
                <ScaleIcon className="w-4 h-4 text-secondary-gold" />
                <span className="text-secondary-gold text-sm font-sans">OAB/SP 524.997</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-secondary-gold/10 border border-secondary-gold/30 rounded-full px-4 py-2">
                <span className="text-secondary-gold text-sm font-sans">OAB/PE 24.469</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-secondary-gold/10 border border-secondary-gold/30 rounded-full px-4 py-2">
                <span className="text-secondary-gold text-sm font-sans">+19 anos de experiência</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 text-balance">
              Você confia no seu sócio hoje. Mas o contrato que vocês assinaram{" "}
              <span className="text-secondary-gold">protegerá seu patrimônio amanhã?</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 font-sans leading-relaxed">
              Empresas sólidas quebram por conflitos internos mal resolvidos. A falta de um Acordo de Sócios robusto ou
              uma assinatura impensada pode custar a gestão do seu negócio e o lucro de uma vida inteira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-secondary-gold hover:bg-accent-purple hover:text-white text-primary-blue font-bold rounded-lg px-8 py-6 text-lg transition-all"
              >
                <Link href="#contato">
                  <ShieldIcon className="w-5 h-5 mr-2" />
                  Blindar Meus Interesses Societários
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary-gold text-secondary-gold hover:bg-accent-purple hover:text-white hover:border-accent-purple rounded-lg px-8 py-6 text-lg bg-transparent transition-all"
              >
                <Link href="#servicos">Conheça os Serviços</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-secondary-gold/10 rounded-lg p-3 mb-2 inline-flex items-center justify-center">
                  <FileSearchIcon className="w-6 h-6 text-secondary-gold" />
                </div>
                <p className="text-white text-sm font-sans">Auditoria Contratual</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary-gold/10 rounded-lg p-3 mb-2 inline-flex items-center justify-center">
                  <ScaleIcon className="w-6 h-6 text-secondary-gold" />
                </div>
                <p className="text-white text-sm font-sans">Engenharia Societária</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary-gold/10 rounded-lg p-3 mb-2 inline-flex items-center justify-center">
                  <ShieldIcon className="w-6 h-6 text-secondary-gold" />
                </div>
                <p className="text-white text-sm font-sans">Proteção Patrimonial</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary-gold/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-b from-secondary-gold/20 to-transparent p-1 rounded-2xl">
                <Image
                  src="/images/forumboa.jpeg"
                  alt="Dr. Carlos Fernando Lopes de Oliveira - Advogado Societário"
                  width={500}
                  height={600}
                  className="rounded-2xl object-cover shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary-blue border border-secondary-gold/30 rounded-xl p-4 shadow-xl">
                <p className="text-secondary-gold font-serif text-lg">Dr. Carlos Fernando Lopes de Oliveira</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
