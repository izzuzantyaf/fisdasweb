import { ApiRoute } from "../lib/constants"
import { getFetch } from "../lib/helpers/fetcher.helper"

export const articleService = {
  getAll: async () => {
    const response = await getFetch(ApiRoute.ARTICLE)
    console.log("Get articles API response :", response)
    return response.data
  },
}
