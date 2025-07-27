import path from 'path'
import fs from 'fs/promises'
import fsSync from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import matter from 'gray-matter'
import { CallConfig } from 'app/types/callConfig'
import axios from 'axios'
import twilio from 'twilio'

export async function generateOutgoingCall(req: NextRequest, promptName: string) {
  if (!promptName) {
    return NextResponse.json({ error: 'Missing promptName parameter' }, { status: 400 })
  }
  const mdPath = path.join(process.cwd(), 'app', 'prompts', `${promptName}.md`)
  if (!fsSync.existsSync(mdPath)) {
    return NextResponse.json({ error: `Prompt file not found: ${promptName}` }, { status: 404 })
  }
  const fileContent = await fs.readFile(mdPath, 'utf-8')
  if (!fileContent) {
    return NextResponse.json({ error: `Prompt file is empty: ${promptName}` }, { status: 400 })
  }
  const parsed = matter(fileContent)
  const prompt = parsed.content // Markdown body
  try {
    const body = req.body ? await req.json() : {}

    const { model, voice, temperature, phone } = body

    const {
      TWILIO_ACCOUNT_SID,
      TWILIO_AUTH_TOKEN,
      DESTINATION_PHONE_NUMBER,
      TWILIO_PHONE_NUMBER,
      ULTRAVOX_MODEL,
      ULTRAVOX_VOICE,
      ULTRAVOX_TEMPERATURE
    } = process.env

    const callConfig: CallConfig = {
      systemPrompt: prompt,
      model: model || ULTRAVOX_MODEL,
      voice: voice || ULTRAVOX_VOICE,
      temperature: temperature || ULTRAVOX_TEMPERATURE,
      firstSpeakerSettings: { user: {} }, // For outgoing calls, the user will answer the call (i.e. speak first)
      medium: { twilio: {} }
    }
    const ultravoxResponse = await createUltravoxCall(callConfig)

    if (!ultravoxResponse.joinUrl) {
      throw new Error('No joinUrl received from Ultravox API')
    }

    if (
      !TWILIO_ACCOUNT_SID ||
      !TWILIO_AUTH_TOKEN ||
      !DESTINATION_PHONE_NUMBER ||
      !TWILIO_PHONE_NUMBER
    ) {
      throw new Error('Missing required environment variables for Twilio')
    }

    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

    const call = await client.calls.create({
      twiml: `<Response><Connect><Stream url="${ultravoxResponse.joinUrl}"/></Connect></Response>`,
      to: phone,
      from: TWILIO_PHONE_NUMBER
    })

    console.log('🎉 Twilio outbound phone call initiated successfully!')
    console.log(`📋 Twilio Call SID: ${call.sid}`)
    console.log(`📞 Calling ${phone} from ${TWILIO_PHONE_NUMBER}`)
    return NextResponse.json({
      status: 'success',
      msg: '🎉 Twilio outbound phone call initiated successfully!',
      sid: call.sid,
      from: TWILIO_PHONE_NUMBER,
      to: phone
    })
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error('Ultravox call error:', error.message)
      console.error('💥 Error occurred:')

      if (error.message.includes('Authentication')) {
        console.error('   🔐 Authentication failed - check your Twilio credentials')
      } else if (error.message.includes('phone number')) {
        console.error('   📞 Phone number issue - verify your phone numbers are correct')
      } else if (error.message.includes('Ultravox')) {
        console.error('   🤖 Ultravox API issue - check your API key and try again')
      } else {
        console.error(`   ${error.message}`)
      }

      console.error('\n🔍 Troubleshooting tips:')
      console.error('   • Double-check all configuration values')
      console.error('   • Ensure phone numbers are in E.164 format (+1234567890)')
      console.error('   • Verify your Twilio account has sufficient balance')
      console.error('   • Check that your Ultravox API key is valid')

      return NextResponse.json(
        {
          error: 'Failed to create Ultravox call',
          message: error.message
        },
        { status: 500 }
      )
    } else {
      console.error('Ultravox call error:', error)
      return NextResponse.json(
        {
          error: 'Failed to create Ultravox call',
          message: 'An unknown error occurred'
        },
        { status: 500 }
      )
    }
  }
}

async function createUltravoxCall(callConfig: CallConfig) {
  const ULTRAVOX_API_URL: string | undefined = process.env.ULTRAVOX_API_URL
  const ULTRAVOX_API_KEY: string | undefined = process.env.ULTRAVOX_API_KEY

  if (!ULTRAVOX_API_URL) {
    throw new Error('ULTRAVOX_API_URL environment variable is required')
  }
  if (!ULTRAVOX_API_KEY) {
    throw new Error('ULTRAVOX_API_KEY environment variable is required')
  }

  try {
    const response = await axios.post(ULTRAVOX_API_URL, callConfig, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': ULTRAVOX_API_KEY
      }
    })

    return response.data
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      // Handle known error types
      throw new Error(`Ultravox API error: ${error.message}`)
    } else {
      // Handle unknown errors
      throw new Error(`Failed to create Ultravox call: ${error}`)
    }
  }
}
