import { NextRequest, NextResponse } from 'next/server'
import { generateOutgoingCall } from '../../../lib/generateOutGoingCall'

export async function GET() {
  try {
    const ultravoxApiUrl = process.env.ULTRAVOX_API_URL
    const apiKey = process.env.ULTRAVOX_X_API_KEY

    if (!ultravoxApiUrl || !apiKey) {
      throw new Error(
        'ULTRAVOX_API_URL or ULTRAVOX_X_API_KEY is not defined in environment variables.'
      )
    }

    const res = await fetch(`${ultravoxApiUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      }
    })

    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch (error) {
    console.error('❌ Error:', error)
    return NextResponse.json({ error: 'Hubo un error generando la respuesta.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    return await generateOutgoingCall(req)
  } catch (error: unknown) {
    const errorMessage =
      typeof error === 'object' && error !== null && 'message' in error
        ? (error as { message?: string }).message ?? 'Internal Server Error'
        : 'Internal Server Error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
