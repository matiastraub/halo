import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()

    const webhookUrl = process.env.CHATBOX_WEBHOOK_URL
    if (!webhookUrl) {
      throw new Error('CHATBOX_WEBHOOK_URL is not defined in environment variables.')
    }
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })

    const data = await res.text()

    return new NextResponse(data, {
      status: res.status,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('❌ Error en el endpoint /api/chatbox:', error)
    return NextResponse.json({ error: 'Hubo un error generando la respuesta.' }, { status: 500 })
  }
}
