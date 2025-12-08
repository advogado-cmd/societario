export function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary-gold font-sans text-sm uppercase tracking-wider mb-4 block">Localização</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-blue mb-6 text-balance">
            Nosso Escritório
          </h2>
          <p className="text-neutral-gray font-sans text-lg max-w-3xl mx-auto">
            Localizado na Vila Mariana, em São Paulo, com fácil acesso por transporte público.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8851891897887!2d-46.64013672475388!3d-23.58901806343821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a24c8f17f71%3A0x8c8c8c8c8c8c8c8c!2sRua%20Loefgren%2C%201291%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004040-030!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do escritório Dr. Oliveira Advocacia"
            className="w-full"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-gray font-sans text-lg">
            <strong className="text-primary-blue">Endereço:</strong> Rua Loefgren, 1291, Conjunto 72 - Vila Mariana, São
            Paulo, SP - CEP 04040-030
          </p>
        </div>
      </div>
    </section>
  )
}
