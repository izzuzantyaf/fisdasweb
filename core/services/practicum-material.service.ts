import { ApiRoute } from "../lib/constants"
import { getFetch } from "../lib/helpers/fetcher.helper"
import {
  PracticmMaterialFilter,
  PracticumMaterial,
} from "../types/practicum-material.type"

export const practicumMaterialService = {
  getAll: async () => {
    const response = await getFetch(ApiRoute.PRACTICUM_MATERIAL)
    console.log("Get practicum material API response :", response)
    return response.data.practicumModules as PracticumMaterial[]
  },
  filter: (
    practicumMaterial: PracticumMaterial,
    filter: PracticmMaterialFilter
  ) => {
    if (filter.language == "all") return true
    return practicumMaterial.language == filter.language
  },
}
