import { Faculty } from "../lib/constants"

export type Schedule = {
  _id: string
  faculty?: Faculty
  isActive: boolean
  url?: string
}
