import { OpenAI } from 'openai'
import { NextResponse, NextRequest } from 'next/server'
import homePrompt from './prompt'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const systemPrompt = {
  role: 'system',
  content: homePrompt
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { messages } = body

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // o "gpt-4-turbo", "gpt-4o", "gpt-4-mini"
      messages: [systemPrompt, ...messages]
    })

    const reply = completion.choices[0].message.content || ''

    return NextResponse.json({
      reply
    })
  } catch (error) {
    console.error('❌ Error en el endpoint /api/chat:', error)
    return NextResponse.json({ error: 'Hubo un error generando la respuesta.' }, { status: 500 })
  }
}
