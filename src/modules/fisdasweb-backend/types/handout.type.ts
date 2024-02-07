import { Faculty, Language } from "../../../core/lib/constants"

export type Handout = {
  _id: string
  faculty: Faculty
  language: Language
  isActive: boolean
  url: string
}
