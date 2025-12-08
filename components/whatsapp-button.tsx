"use client"

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

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511930819577?text=Olá Dr. Carlos, gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircleIcon className="w-7 h-7" />
      <span className="hidden group-hover:inline-block text-sm font-semibold whitespace-nowrap">Fale Conosco</span>
    </a>
  )
}
