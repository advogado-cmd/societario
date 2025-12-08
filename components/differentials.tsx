const TargetIcon = ({ className }: { className?: string }) => (
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
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
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
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const MessageCircleIcon = ({ className }: { className?: string }) => (
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
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
)

const LockIcon = ({ className }: { className?: string }) => (
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
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const differentials = [
  {
    icon: TargetIcon,
    title: "Atendimento Personalizado",
    description:
      "Cada caso é analisado de forma individual, com estratégias jurídicas desenvolvidas especificamente para sua situação.",
  },
  {
    icon: ClockIcon,
    title: "Agilidade e Eficiência",
    description: "Comprometimento com prazos e resultados, mantendo você informado sobre cada etapa do seu processo.",
  },
  {
    icon: MessageCircleIcon,
    title: "Comunicação Clara",
    description:
      "Explicações objetivas e linguagem acessível, para que você entenda todas as implicações jurídicas do seu caso.",
  },
  {
    icon: LockIcon,
    title: "Sigilo e Confidencialidade",
    description: "Absoluta discrição no tratamento das informações empresariais e societárias confiadas ao escritório.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-24 bg-primary-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary-gold font-sans text-sm uppercase tracking-wider mb-4 block">
            Por que nos escolher
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 text-balance">
            Compromisso com Excelência
          </h2>
          <p className="text-gray-300 font-sans text-lg max-w-3xl mx-auto">
            A Dr. Oliveira Advocacia se diferencia pela dedicação aos interesses dos clientes e pela busca constante por
            soluções jurídicas eficazes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((diff, index) => (
            <div key={index} className="text-center group">
              <div className="bg-secondary-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-purple/20 transition-colors">
                <diff.icon className="w-10 h-10 text-secondary-gold" />
              </div>
              <h3 className="font-serif text-xl text-white mb-4">{diff.title}</h3>
              <p className="text-gray-300 font-sans leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
