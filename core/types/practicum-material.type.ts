import { Language } from "../lib/constants"

export type PreTask = {
  url: string
  isActive: boolean
}

export type PracticumMaterial = {
  _id: string
  name: string
  code: string
  language: Language
  faIconName: string
  preTask: PreTask
  video: {
    url: string
    isActive: boolean
  }
  simulator: {
    url: string
    isActive: boolean
  }
  journalCover: {
    url: string
    isActive: boolean
  }
}

export type LanguageFilter = `${Language}` | "all"

export type PracticmMaterialFilter = {
  language?: LanguageFilter
}
