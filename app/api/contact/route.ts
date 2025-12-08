import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { nome, email, telefone, setor, faturamento, mensagem } = data

    const faturamentoLabels: Record<string, string> = {
      "ate-50k": "Até R$ 50 mil/mês",
      "50k-200k": "R$ 50 mil - R$ 200 mil/mês",
      "200k-1m": "R$ 200 mil - R$ 1 milhão/mês",
      "acima-1m": "Acima de R$ 1 milhão/mês",
    }

    const faturamentoLabel = faturamentoLabels[faturamento] || faturamento || "Não informado"

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a2e; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0e105a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background-color: #f5f5f5; padding: 20px; }
    .section { background-color: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #c9a962; }
    .section h2 { color: #0e105a; font-size: 16px; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px; }
    .field { margin-bottom: 10px; }
    .field strong { color: #0e105a; }
    .footer { background-color: #0e105a; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nova Solicitação - Direito Societário</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Dr. Oliveira Advocacia</p>
    </div>
    <div class="content">
      <div class="section">
        <h2>Dados do Cliente</h2>
        <div class="field"><strong>Nome:</strong> ${nome}</div>
        <div class="field"><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></div>
        <div class="field"><strong>Telefone/WhatsApp:</strong> <a href="https://wa.me/55${telefone.replace(/\D/g, "")}">${telefone}</a></div>
      </div>
      <div class="section">
        <h2>Dados da Empresa</h2>
        <div class="field"><strong>Setor:</strong> ${setor}</div>
        <div class="field"><strong>Faturamento Mensal:</strong> ${faturamentoLabel}</div>
      </div>
      <div class="section">
        <h2>Descrição do Caso</h2>
        <p style="white-space: pre-wrap;">${mensagem}</p>
      </div>
    </div>
    <div class="footer">
      <p>Recebido em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
      <p>Este email foi enviado automaticamente pelo formulário do site.</p>
    </div>
  </div>
</body>
</html>
`

    const { data: emailData, error } = await resend.emails.send({
      from: "Dr. Oliveira Advocacia <onboarding@resend.dev>",
      to: ["advogado@droliveira.adv.br"],
      replyTo: email,
      subject: `[Societário] ${nome} - ${setor} (${faturamentoLabel})`,
      html: htmlContent,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false, message: "Erro ao enviar email" }, { status: 500 })
    }

    console.log("Email sent successfully:", emailData)

    return NextResponse.json({
      success: true,
      message: "Dados recebidos com sucesso",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Erro ao processar formulário" }, { status: 500 })
  }
}
