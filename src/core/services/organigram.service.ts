import { ApiRoute } from "../lib/constants"
import { getFetch } from "../lib/helpers/fetcher.helper"
import { Organigram } from "../../modules/fisdasweb-backend/types/organigram.type"

export const organigramService = {
  getAll: async () => {
    const response = await getFetch(ApiRoute.ORGANIGRAM)
    console.log("Get organigram API response :", response)
    return response.data as Organigram
  },
}
