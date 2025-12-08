import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, Roboto, Roboto_Serif } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Oliveira Advocacia | Advogado Societário em São Paulo | +19 Anos de Experiência",
  description:
    "Advogado especialista em Direito Societário e Empresarial com mais de 19 anos de experiência. Resolução de conflitos entre sócios, constituição de empresas, compra e venda de empresas, acordo de sócios. Dr. Carlos Fernando Lopes de Oliveira - OAB/SP 524.997 | OAB/PE 24.469. Vila Mariana, São Paulo.",
  keywords:
    "advogado societário, direito societário, conflito entre sócios, problemas com sócios, constituição de empresas, compra e venda de empresas, advogado empresarial, São Paulo, Vila Mariana, OAB SP, acordo de sócios, M&A, fusões e aquisições",
  authors: [{ name: "Dr. Carlos Fernando Lopes de Oliveira" }],
  creator: "Dr. Oliveira Advocacia",
  publisher: "Dr. Oliveira Advocacia",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://advogado-societario.go.droliveira.adv.br",
    siteName: "Dr. Oliveira Advocacia",
    title: "Dr. Oliveira Advocacia | Advogado Societário em São Paulo",
    description:
      "Advogado especialista em Direito Societário com mais de 19 anos de experiência. Resolução de conflitos entre sócios, constituição e compra/venda de empresas. Dr. Carlos Fernando Lopes de Oliveira - OAB/SP 524.997 | OAB/PE 24.469.",
    images: [
      {
        url: "/images/ativo-2014.png",
        width: 1080,
        height: 1080,
        alt: "Dr. Oliveira Advocacia - Advogado Societário em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Oliveira Advocacia | Advogado Societário em São Paulo",
    description:
      "Advogado especialista em Direito Societário com mais de 19 anos de experiência. Resolução de conflitos entre sócios, constituição e compra/venda de empresas.",
    images: ["/images/ativo-2014.png"],
  },
  alternates: {
    canonical: "https://advogado-societario.go.droliveira.adv.br",
  },
  icons: {
    icon: [
      {
        url: "/images/ativo-2014.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/ativo-2014.png",
      },
    ],
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0e105a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${roboto.variable} ${robotoSerif.variable}`}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WV3MG7ZN');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV3MG7ZN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
