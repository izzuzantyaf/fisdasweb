import { getFetch } from "src/core/lib/helpers/fetcher.helper"
import { Assistant } from "src/modules/fisdasweb-backend/types/assistant.type"
import { CodeOfConduct } from "src/modules/fisdasweb-backend/types/code-of-conduct.type"
import { Handout } from "src/modules/fisdasweb-backend/types/handout.type"
import { Organigram } from "src/modules/fisdasweb-backend/types/organigram.type"
import {
  PracticumMaterial,
  PreTaskMaterial,
  SimulatorMaterial,
  JournalCoverMaterial,
  VideoMaterial,
} from "src/modules/fisdasweb-backend/types/practicum-material.type"
import { Schedule } from "src/modules/fisdasweb-backend/types/schedule.type"

export const fisdaswebBackendService = {
  async getAssistants() {
    const response = await getFetch("/api/assistant")
    return response.data as Assistant[]
  },

  async searchAssistants(keyword: string) {
    const response = await getFetch("/api/assistant", `keyword=${keyword}`)
    return response.data as Assistant[]
  },

  async getCodeOfConduct() {
    const response = await getFetch("/api/code-of-conduct")
    return response.data as CodeOfConduct
  },

  async getHandouts() {
    const response = await getFetch("/api/handout", "isActive=true")
    return response.data as Handout[]
  },

  async getOrganigram() {
    const response = await getFetch("/api/organigram")
    return response.data as Organigram
  },

  async getPracticumMaterial() {
    const response = await getFetch("/api/practicum-module")
    return response.data as PracticumMaterial[]
  },

  async getPreTasks() {
    const response = await getFetch(
      "/api/practicum-module/pretasks",
      "isActive=true"
    )
    return response.data as PreTaskMaterial[]
  },

  async getSimulators() {
    const response = await getFetch(
      "/api/practicum-module/simulators",
      "isActive=true"
    )
    return response.data as SimulatorMaterial[]
  },

  async getJournalCovers() {
    const response = await getFetch(
      "/api/practicum-module/journal-covers",
      "isActive=true"
    )
    return response.data as JournalCoverMaterial[]
  },

  /**
   * Mengambil data video praktikum dari API
   */
  async getVideos() {
    const response = await getFetch(
      "/api/practicum-module/videos",
      "isActive=true"
    )
    return response.data as VideoMaterial[]
  },

  async getSchedules() {
    const response = await getFetch("/api/schedule", "isActive=true")
    return response.data as Schedule[]
  },
}
