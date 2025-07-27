type TwilioConfig = object
type TelnyxConfig = object
type PlivoConfig = object
type JambonzConfig = object
type VoxImplantConfig = object

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
