import { ApiRoute } from "../lib/constants"
import { getFetch } from "../lib/helpers/fetcher.helper"
import {
  JournalCoverMaterial,
  PracticmMaterialFilter,
  PracticumMaterial,
  PreTaskMaterial,
  SimulatorMaterial,
  VideoMaterial,
} from "../types/practicum-material.type"

export const practicumMaterialService = {
  getAll: async () => {
    const response = await getFetch(ApiRoute.PRACTICUM_MATERIAL)
    console.log("Get practicum material API response :", response)
    return response.data.practicumModules as PracticumMaterial[]
  },
  getPreTasks: async () => {
    const response = await getFetch(ApiRoute.PRETASK, "isActive=true")
    console.log("Get pretasks API response :", response)
    return response.data as PreTaskMaterial[]
  },
  getSimulators: async () => {
    const response = await getFetch(ApiRoute.SIMULATOR, "isActive=true")
    console.log("Get simulators API response :", response)
    return response.data as SimulatorMaterial[]
  },
  getJournalCovers: async () => {
    const response = await getFetch(ApiRoute.JOURNAL_COVER, "isActive=true")
    console.log("Get journal covers API response :", response)
    return response.data as JournalCoverMaterial[]
  },
  /**
   * Mengambil data video praktikum dari API
   */
  getVideos: async () => {
    const response = await getFetch(ApiRoute.VIDEO, "isActive=true")
    console.log("Get practicum videos API response :", response)
    return response.data as VideoMaterial[]
  },
  filter: (
    practicumMaterial: PracticumMaterial,
    filter: PracticmMaterialFilter
  ) => {
    if (filter.language == "all") return true
    return practicumMaterial.language == filter.language
  },
}
