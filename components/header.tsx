"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
  { href: "#localizacao", label: "Localização" },
]

const logoUrl = "/images/ativo-2016.png"

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-gray/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src={logoUrl || "/placeholder.svg"} alt="Dr. Oliveira Advocacia" className="h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-blue hover:text-accent-purple transition-colors font-sans text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-secondary-gold hover:bg-accent-purple hover:text-white text-primary-blue font-bold rounded-lg px-6 transition-all"
            >
              <Link href="#contato">Agende sua Consulta</Link>
            </Button>
          </nav>

          <button
            className="lg:hidden text-primary-blue p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-neutral-gray/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-blue hover:text-accent-purple transition-colors font-sans text-sm uppercase tracking-wider py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-secondary-gold hover:bg-accent-purple hover:text-white text-primary-blue font-bold rounded-lg w-full mt-2 transition-all"
              >
                <Link href="#contato">Agende sua Consulta</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
