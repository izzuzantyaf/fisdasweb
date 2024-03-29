import { Language } from "../lib/constants"

type PreTask = {
  url: string
  isActive: boolean
}

type Video = {
  url: string
  embedUrl: string
  isActive: boolean
}

type Simulator = {
  url: string
  isActive: boolean
}

type JournalCover = {
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
  video: Video
  simulator: Simulator
  journalCover: JournalCover
}

export type PreTaskMaterial = Pick<
  PracticumMaterial,
  "_id" | "name" | "code" | "faIconName" | "language" | "preTask"
>

export type SimulatorMaterial = Pick<
  PracticumMaterial,
  "_id" | "name" | "code" | "faIconName" | "language" | "simulator"
>

export type JournalCoverMaterial = Pick<
  PracticumMaterial,
  "_id" | "name" | "code" | "faIconName" | "language" | "journalCover"
>

export type VideoMaterial = Pick<
  PracticumMaterial,
  "_id" | "name" | "code" | "faIconName" | "language" | "video"
>

export type LanguageFilter = `${Language}` | "all"

export type PracticmMaterialFilter = {
  language?: LanguageFilter
}
