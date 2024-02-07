import { AssistantLevel, Gender } from "../../../core/lib/constants"

export type Assistant = {
  _id: string
  name: string
  code: string
  phoneNumber?: string
  lineId?: string
  gender: Gender
  level: AssistantLevel
  feedbackUrl?: string
  profilePictureUrl?: string
}

export type LevelFilter = "all" | `${AssistantLevel}`
export type GenderFilter = "all" | `${Gender}`

export type AssistantFilter = {
  level: LevelFilter
  gender: GenderFilter
}
