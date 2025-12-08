import Image from "next/image"

const CheckCircleIcon = ({ className }: { className?: string }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const credentials = [
  "Mestre em Ciências Jurídicas pela Universidade Federal da Paraíba (UFPB)",
  "Especialista em Gestão Empresarial pelo CEDEPE",
  "Bacharel em Direito pela Faculdade Integrada do Recife (FIR)",
  "Ex-professor em instituições renomadas: UFPB, FIR e AESO",
  "OAB/SP 524.997 | OAB/PE 24.469",
]

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary-blue/10 rounded-2xl"></div>
            <Image
              src="/images/dsc-5548-20-281-29.jpeg"
              alt="Dr. Carlos Fernando Lopes de Oliveira - Advogado Especialista em Direito Societário"
              width={600}
              height={700}
              className="relative rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -top-4 -left-4 bg-primary-blue text-white rounded-xl p-4 shadow-xl">
              <p className="font-serif text-3xl font-bold text-secondary-gold">+19</p>
              <p className="font-sans text-sm">Anos de Experiência</p>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary-gold text-primary-blue rounded-xl p-6 shadow-xl">
              <p className="font-serif text-2xl font-bold">OAB/SP</p>
              <p className="font-sans text-lg">524.997</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary-gold font-sans text-sm uppercase tracking-wider mb-4 block">
              O Advogado Gestor
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-blue mb-6 text-balance">
              Dr. Carlos Fernando Lopes de Oliveira
            </h2>
            <p className="text-neutral-gray font-sans text-lg mb-6 leading-relaxed">
              O Direito Empresarial não aceita amadorismo. O Dr. Carlos Oliveira oferece uma visão rara no mercado
              jurídico: é <strong>Especialista em Gestão Empresarial pelo CEDEPE</strong> e{" "}
              <strong>Mestre em Ciências Jurídicas pela UFPB</strong>.
            </p>
            <p className="text-neutral-gray font-sans text-lg mb-6 leading-relaxed">
              Essa dupla formação permite que ele entenda não apenas as leis, mas o <em>business plan</em>, o fluxo de
              caixa e a dinâmica de poder da sua empresa. Já ensinou em instituições como UFPB, FIR e AESO, formando
              gerações de juristas.
            </p>

            <blockquote className="border-l-4 border-secondary-gold pl-4 py-2 mb-8 bg-secondary-gold/5 rounded-r-lg">
              <p className="text-primary-blue font-serif text-lg italic">
                "Confiança se constrói com segurança jurídica. Um contrato bem feito é o melhor amigo da amizade entre
                sócios."
              </p>
            </blockquote>

            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-secondary-gold flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-gray font-sans">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
