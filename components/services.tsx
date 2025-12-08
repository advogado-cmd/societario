import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const UsersIcon = ({ className }: { className?: string }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const BuildingIcon = ({ className }: { className?: string }) => (
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
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
)

const ArrowLeftRightIcon = ({ className }: { className?: string }) => (
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
    <path d="M8 3 4 7l4 4" />
    <path d="M4 7h16" />
    <path d="m16 21 4-4-4-4" />
    <path d="M20 17H4" />
  </svg>
)

const FileTextIcon = ({ className }: { className?: string }) => (
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
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
)

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

const GavelIcon = ({ className }: { className?: string }) => (
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
    <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
  </svg>
)

const services = [
  {
    icon: UsersIcon,
    title: "Problemas com Sócios",
    description:
      "Mediação e resolução de conflitos societários, exclusão de sócios, dissolução parcial de sociedade e disputas de quotas ou ações.",
    highlight: true,
  },
  {
    icon: BuildingIcon,
    title: "Constituição de Empresas",
    description:
      "Abertura e estruturação de sociedades empresárias, definição do tipo societário adequado, elaboração de contratos sociais e estatutos.",
    highlight: true,
  },
  {
    icon: ArrowLeftRightIcon,
    title: "Compra e Venda de Empresas",
    description:
      "Due diligence, negociação de M&A, estruturação de operações de compra e venda, fusões e incorporações empresariais.",
    highlight: true,
  },
  {
    icon: FileTextIcon,
    title: "Acordo de Sócios",
    description:
      "Elaboração e revisão de acordos de sócios e acionistas, pactos parassociais, cláusulas de saída e proteção patrimonial.",
    highlight: false,
  },
  {
    icon: ShieldIcon,
    title: "Governança Corporativa",
    description:
      "Implementação de práticas de governança, estruturação de conselhos, políticas internas e compliance empresarial.",
    highlight: false,
  },
  {
    icon: GavelIcon,
    title: "Contencioso Societário",
    description:
      "Representação judicial em ações societárias, dissolução de sociedades, apuração de haveres e recuperação de ativos.",
    highlight: false,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-24 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary-gold font-sans text-sm uppercase tracking-wider mb-4 block">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-blue mb-6 text-balance">
            Soluções Jurídicas para o Mundo Empresarial
          </h2>
          <p className="text-neutral-gray font-sans text-lg max-w-3xl mx-auto">
            Atuação especializada em direito societário e empresarial, oferecendo assessoria jurídica completa para
            empresários e empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-0 rounded-xl ${
                service.highlight ? "bg-primary-blue text-white" : "bg-white"
              }`}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                    service.highlight ? "bg-secondary-gold/20" : "bg-primary-blue"
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 ${service.highlight ? "text-secondary-gold" : "text-secondary-gold"}`}
                  />
                </div>
                <CardTitle className={`font-serif text-xl ${service.highlight ? "text-white" : "text-primary-blue"}`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription
                  className={`font-sans leading-relaxed ${service.highlight ? "text-gray-300" : "text-neutral-gray"}`}
                >
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-secondary-gold hover:bg-accent-purple hover:text-white text-primary-blue font-bold rounded-lg px-8 transition-all"
          >
            <Link href="#contato">Fale com o Especialista</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
