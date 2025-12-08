import Link from "next/link"

const InstagramIcon = ({ className }: { className?: string }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GlobeIcon = ({ className }: { className?: string }) => (
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
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
  { href: "#localizacao", label: "Localização" },
]

const socialLinks = [
  {
    href: "https://www.instagram.com/droliveira.adv.br/",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/carlos-fernando-lopes-de-oliveira/",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.droliveira.adv.br",
    icon: GlobeIcon,
    label: "Site",
  },
]

const logoUrl = "/images/ativo-2012.png"

export function Footer() {
  return (
    <footer className="bg-primary-blue py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <img src={logoUrl || "/placeholder.svg"} alt="Dr. Oliveira Advocacia" className="h-16 w-auto mb-6" />
            <p className="text-gray-300 font-sans leading-relaxed max-w-md mb-6">
              Assessoria jurídica especializada em Direito Societário e Empresarial. Soluções estratégicas para
              empresários e empresas em São Paulo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-gold/10 hover:bg-accent-purple/20 p-3 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-secondary-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-secondary-gold transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Contato</h3>
            <div className="space-y-4 text-gray-300 font-sans">
              <p>
                <span className="text-secondary-gold font-semibold">Dr. Carlos Fernando Lopes de Oliveira</span>
                <br />
                OAB/SP 524.997
              </p>
              <p>
                <a href="tel:+5511930819577" className="hover:text-secondary-gold transition-colors">
                  +55 11 93081-9577
                </a>
              </p>
              <p>
                <a href="mailto:contato@droliveira.adv.br" className="hover:text-secondary-gold transition-colors">
                  contato@droliveira.adv.br
                </a>
              </p>
              <p className="text-sm">
                Rua Loefgren, 1291, Cj. 72
                <br />
                Vila Mariana - São Paulo/SP
                <br />
                CEP 04040-030
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-sans text-sm text-center md:text-left">
              © {new Date().getFullYear()} Dr. Oliveira Advocacia. Todos os direitos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link
                href="/politica-de-privacidade"
                className="text-gray-400 hover:text-secondary-gold font-sans text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <p className="text-gray-400 font-sans text-sm">Dr. Carlos Fernando Lopes de Oliveira - OAB/SP 524.997</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
