type TwilioConfig = {}
type TelnyxConfig = {}
type PlivoConfig = {}
type JambonzConfig = {}
type VoxImplantConfig = {}

type MediumMap = {
  twilio: TwilioConfig
  telnyx: TelnyxConfig
  plivo: PlivoConfig
  jambonz: JambonzConfig
  voximplant: VoxImplantConfig
}

export type Medium = {
  [K in keyof MediumMap]?: MediumMap[K]
}
