import type { FirstSpeakerSettings } from './firstSpeakingSettings.js'
import type { Medium } from './medium.js'

export interface CallConfig {
  systemPrompt: string
  model: string
  voice: string
  temperature: number
  firstSpeakerSettings: FirstSpeakerSettings //{ user: {} }, // For outgoing calls, the user will answer the call (i.e. speak first)
  medium: Medium //{ twilio: {} }, // Use twilio medium
}
