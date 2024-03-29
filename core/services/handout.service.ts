import { ApiRoute } from "../lib/constants"
import { getFetch } from "../lib/helpers/fetcher.helper"
import { Handout } from "../types/handout.type"

export const handoutService = {
  getAll: async () => {
    const response = await getFetch(ApiRoute.HANDOUT, "isActive=true")
    console.log("Get handouts API response :", response)
    return response.data as Handout[]
  },
}
