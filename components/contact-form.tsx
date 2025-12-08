"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const PhoneIcon = ({ className }: { className?: string }) => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
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
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const MapPinIcon = ({ className }: { className?: string }) => (
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
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
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

const CheckIcon = ({ className }: { className?: string }) => (
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
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const LoaderIcon = ({ className }: { className?: string }) => (
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
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
)

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    setor: "",
    faturamento: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const faturamentoLabels: Record<string, string> = {
      "ate-50k": "Até R$ 50 mil/mês",
      "50k-200k": "R$ 50 mil - R$ 200 mil/mês",
      "200k-1m": "R$ 200 mil - R$ 1 milhão/mês",
      "acima-1m": "Acima de R$ 1 milhão/mês",
    }

    try {
      // Envia para API route com Resend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")

        // Build WhatsApp message per prompt mestre
        const mensagem = `Olá, Dr. Carlos!

Sou ${formData.nome} e busco assessoria SOCIETÁRIA/EMPRESARIAL.
Setor: ${formData.setor}
Faturamento Aprox: ${faturamentoLabels[formData.faturamento] || formData.faturamento}

📧 Email: ${formData.email}
📱 Telefone: ${formData.telefone}

${formData.mensagem}

Gostaria de agendar uma análise do meu caso.`

        const whatsappUrl = `https://api.whatsapp.com/send?phone=5511930819577&text=${encodeURIComponent(mensagem)}`

        // Delay para mostrar sucesso antes de redirecionar
        setTimeout(() => {
          window.open(whatsappUrl, "_blank")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 lg:py-24 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary-gold font-sans text-sm uppercase tracking-wider mb-4 block">
            Solicite uma Análise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-blue mb-6 text-balance">
            Blindar Meus Interesses Societários
          </h2>
          <p className="text-neutral-gray font-sans text-lg max-w-3xl mx-auto">
            Preencha o formulário abaixo para uma análise personalizada do seu caso. Seus dados serão enviados de forma
            segura e você será redirecionado para o WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary-blue rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-gold/20 rounded-lg p-3">
                  <PhoneIcon className="w-6 h-6 text-secondary-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/5511930819577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 font-sans hover:text-gold transition-colors"
                  >
                    +55 11 93081-9577
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-primary-blue rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-gold/20 rounded-lg p-3">
                  <MailIcon className="w-6 h-6 text-secondary-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-1">E-mail</h3>
                  <a
                    href="mailto:advogado@droliveira.adv.br"
                    className="text-gray-300 font-sans hover:text-gold transition-colors"
                  >
                    advogado@droliveira.adv.br
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-primary-blue rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-gold/20 rounded-lg p-3">
                  <MapPinIcon className="w-6 h-6 text-secondary-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-1">Endereço</h3>
                  <p className="text-gray-300 font-sans text-sm">
                    Rua Loefgren, 1291
                    <br />
                    Vila Mariana
                    <br />
                    São Paulo, SP
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-gold/10 border border-secondary-gold/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <ShieldIcon className="w-8 h-8 text-secondary-gold flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-primary-blue mb-2">Seus dados estão seguros</h3>
                  <p className="text-neutral-gray font-sans text-sm">
                    Todas as informações são tratadas com total sigilo profissional, conforme as normas da OAB.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-primary-blue font-sans">
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                    className="border-gray-300 focus:border-accent-purple focus:ring-accent-purple"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-primary-blue font-sans">
                    Telefone / WhatsApp *
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    required
                    className="border-gray-300 focus:border-accent-purple focus:ring-accent-purple"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-blue font-sans">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-gray-300 focus:border-accent-purple focus:ring-accent-purple"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="setor" className="text-primary-blue font-sans">
                    Setor da Empresa *
                  </Label>
                  <Input
                    id="setor"
                    type="text"
                    placeholder="Ex: Tecnologia, Comércio, Serviços..."
                    value={formData.setor}
                    onChange={(e) => setFormData({ ...formData, setor: e.target.value })}
                    required
                    className="border-gray-300 focus:border-accent-purple focus:ring-accent-purple"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="space-y-2">
                  <Label htmlFor="faturamento" className="text-primary-blue font-sans">
                    Faturamento Médio Mensal *
                  </Label>
                  <Select
                    value={formData.faturamento}
                    onValueChange={(value) => setFormData({ ...formData, faturamento: value })}
                    required
                  >
                    <SelectTrigger className="border-gray-300 focus:border-accent-purple focus:ring-accent-purple">
                      <SelectValue placeholder="Selecione o faturamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate-50k">Até R$ 50 mil/mês</SelectItem>
                      <SelectItem value="50k-200k">R$ 50 mil - R$ 200 mil/mês</SelectItem>
                      <SelectItem value="200k-1m">R$ 200 mil - R$ 1 milhão/mês</SelectItem>
                      <SelectItem value="acima-1m">Acima de R$ 1 milhão/mês</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="mensagem" className="text-primary-blue font-sans">
                  Breve relato do caso *
                </Label>
                <Textarea
                  id="mensagem"
                  placeholder="Descreva brevemente a situação da sua empresa ou o conflito societário que está enfrentando..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  rows={5}
                  required
                  className="border-gray-300 focus:border-accent-purple focus:ring-accent-purple resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                  <p className="text-green-700 font-sans text-sm">Dados recebidos com sucesso! Abrindo WhatsApp...</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-sans text-sm">
                    Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo WhatsApp diretamente.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-secondary-gold hover:bg-accent-purple hover:text-white text-primary-blue font-bold rounded-lg disabled:opacity-70 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <LoaderIcon className="w-5 h-5 mr-2 animate-spin" />
                    Processando...
                  </>
                ) : submitStatus === "success" ? (
                  "Abrindo WhatsApp..."
                ) : (
                  <>
                    <ShieldIcon className="w-5 h-5 mr-2" />
                    Solicitar Análise Empresarial
                  </>
                )}
              </Button>

              <p className="text-center text-neutral-gray text-sm font-sans mt-4">
                Ao enviar, seus dados serão salvos com segurança e você será redirecionado para o WhatsApp do
                escritório.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
